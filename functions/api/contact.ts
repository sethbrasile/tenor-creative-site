/**
 * POST /api/contact — Cloudflare Pages Function.
 *
 * PPMC CRM primary, direct Resend fallback. Same-origin, so no permissive
 * CORS: Origin is validated fail-closed. Turnstile is fail-secure. Validation
 * reuses the shared zod schema so the vanilla form and the server never drift.
 */
import { contactSchema } from '../../src/lib/contact-schema';
import { sendToCrm, type CrmLeadPayload } from './_lib/crm';
import { sendFallbackEmail } from './_lib/resend-fallback';

interface Env {
  TURNSTILE_SECRET_KEY?: string;
  CRM_CLIENT_SECRET?: string;
  RESEND_API_KEY?: string;
  CRM_INGEST_URL?: string;
  CRM_ACCOUNT_KEY?: string;
  RESEND_FROM?: string;
  LEAD_FALLBACK_TO?: string;
  TEST_FORCE_CRM_FAILURE?: string;
}

interface Lead {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface Ctx {
  request: Request;
  env: Env;
  waitUntil: (p: Promise<unknown>) => void;
}

const ALLOWED_ORIGINS = [
  'https://tenorcreative.com',
  'https://www.tenorcreative.com',
  'https://tenor-creative-site.pages.dev',
];

const CLIENT_TIMEOUT_MS = 8_000;
const BACKGROUND_SAFETY_MS = 25_000;
const MAX_BODY_BYTES = 16_384;

function originAllowed(origin: string | null): boolean {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (/^https:\/\/[\w-]+\.tenor-creative-site\.pages\.dev$/.test(origin)) return true;
  if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  return false;
}

const jsonError = (message: string, status = 400, extraHeaders?: Record<string, string>): Response =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });

const jsonOk = (body: object): Response =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

const rateLimit = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (rateLimit.size > 10_000) rateLimit.clear();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function scrubCrmError(msg: string): string {
  const statusMatch = msg.match(/^CRM ingest failed: (\d{3})/);
  if (statusMatch) return `CRM ingest failed: ${statusMatch[1]}`;
  return msg.slice(0, 120);
}

function scrubResendError(msg: string): string {
  const statusMatch = msg.match(/^Resend fallback failed: (\d{3})/);
  if (statusMatch) return `Resend fallback failed: ${statusMatch[1]}`;
  return msg.slice(0, 120);
}

function crmPayload(lead: Lead): CrmLeadPayload {
  const company = lead.company.trim();
  const title = (company ? `${lead.name} — ${company}` : lead.name).slice(0, 200);
  const message = company ? `${lead.message}\n\nCompany: ${company}` : lead.message;
  return {
    contact: {
      name: lead.name,
      email: lead.email,
      source: 'tenorcreative.com contact form',
    },
    title,
    message,
  };
}

async function deliverToCrm(env: Env, payload: CrmLeadPayload): Promise<void> {
  if (env.TEST_FORCE_CRM_FAILURE === '1') {
    throw new Error('TEST_FORCE_CRM_FAILURE=1 — exercising fallback path');
  }
  await sendToCrm(env, payload);
}

async function deliverFallback(
  env: Env,
  lead: Lead,
  errorMsg: string,
  errorType: string,
): Promise<void> {
  const record: Record<string, unknown> = {
    name: lead.name,
    email: lead.email,
    company: lead.company,
    message: lead.message,
  };
  try {
    await sendFallbackEmail(env, record, errorMsg, errorType);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[Fallback] failed:', scrubResendError(msg));
    console.error(
      'LEAD_RECOVERY ' +
        JSON.stringify({
          name: lead.name,
          email: lead.email,
          company: lead.company,
          message: lead.message,
          timestamp: new Date().toISOString(),
          crmError: scrubCrmError(errorMsg),
          fallbackError: scrubResendError(msg),
        }),
    );
  }
}

async function verifyTurnstile(secret: string, token: string, ip?: string): Promise<boolean> {
  try {
    const form = new URLSearchParams({ secret, response: token });
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function withOptimisticResponse(
  env: Env,
  waitUntil: Ctx['waitUntil'],
  lead: Lead,
  crmWork: () => Promise<void>,
): Promise<Response> {
  let responded = false;
  const respond = (body: object): Response => {
    responded = true;
    return jsonOk(body);
  };

  let fallbackFired = false;
  const fireFallbackOnce = (errorMsg: string, errorType: string): Promise<void> => {
    if (fallbackFired) return Promise.resolve();
    fallbackFired = true;
    return deliverFallback(env, lead, errorMsg, errorType);
  };

  const crmPromise = crmWork()
    .then(() => (responded ? null : respond({ success: true })))
    .catch((err: unknown) => {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[CRM] Failure:', scrubCrmError(msg));
      waitUntil(fireFallbackOnce(msg, 'crm-failure'));
      return responded ? null : respond({ success: true, pending: true });
    });

  const timeoutPromise = new Promise<Response>((resolve) =>
    setTimeout(() => {
      if (responded) return;
      console.warn('[CRM] Client timeout — responding optimistically');
      const optimistic = respond({ success: true, pending: true });
      waitUntil(
        Promise.race([
          crmPromise,
          new Promise<void>((_, reject) =>
            setTimeout(() => reject(new Error('Background safety timeout')), BACKGROUND_SAFETY_MS),
          ),
        ]).catch((err: unknown) => {
          const msg = err instanceof Error ? err.message : String(err);
          console.error('[CRM] Safety timeout:', scrubCrmError(msg));
          return fireFallbackOnce(msg, 'timeout');
        }),
      );
      resolve(optimistic);
    }, CLIENT_TIMEOUT_MS),
  );

  const result = await Promise.race([crmPromise, timeoutPromise]);
  return result ?? jsonOk({ success: true, pending: true });
}

export const onRequestGet = (): Response =>
  new Response(JSON.stringify({ error: 'Method not allowed.' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', Allow: 'POST, OPTIONS' },
  });

export const onRequestOptions = ({ request }: Ctx): Response => {
  const origin = request.headers.get('Origin');
  if (!originAllowed(origin)) return new Response(null, { status: 403 });
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin as string,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

export const onRequestPost = async ({ request, env, waitUntil }: Ctx): Promise<Response> => {
  if (!originAllowed(request.headers.get('Origin'))) {
    return jsonError('Forbidden.', 403);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (rateLimited(ip)) {
    return jsonError('Too many requests. Please try again shortly.', 429, { 'Retry-After': '60' });
  }

  if (!env.TURNSTILE_SECRET_KEY) {
    console.error('[Contact] TURNSTILE_SECRET_KEY not configured');
    return jsonError('Server misconfiguration. Our team has been notified.', 500);
  }

  const hasCrm = Boolean(env.CRM_CLIENT_SECRET && env.CRM_ACCOUNT_KEY && env.CRM_INGEST_URL);
  const hasResend = Boolean(env.RESEND_API_KEY && env.RESEND_FROM && env.LEAD_FALLBACK_TO);
  if (!hasCrm && !hasResend) {
    console.error('[Contact] no delivery configured (no CRM, no Resend)');
    return jsonError('Server misconfiguration. Our team has been notified.', 500);
  }

  const contentLengthHeader = request.headers.get('Content-Length');
  const contentLength = contentLengthHeader === null ? NaN : Number(contentLengthHeader);
  if (!Number.isFinite(contentLength) || contentLength > MAX_BODY_BYTES) {
    return jsonError('Request body too large.', 413);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError('Invalid request.', 400);
  }

  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return jsonOk({ success: true });
  }

  const token = body['cf-turnstile-response'];
  if (typeof token !== 'string' || !token) {
    return jsonError('Anti-bot check failed. Please try again.', 400);
  }
  const turnstileOk = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip === 'unknown' ? undefined : ip);
  if (!turnstileOk) {
    return jsonError('Anti-bot check failed. Please try again.', 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return jsonError(first?.message ?? 'Please check the form and try again.', 400);
  }

  const lead: Lead = {
    name: parsed.data.name.trim(),
    email: parsed.data.email,
    company: parsed.data.company ?? '',
    message: parsed.data.message,
  };

  if (!hasCrm) {
    waitUntil(
      deliverFallback(
        env,
        lead,
        'CRM not configured (CRM_INGEST_URL/CRM_ACCOUNT_KEY/CRM_CLIENT_SECRET missing)',
        'server-error',
      ),
    );
    return jsonOk({ success: true, pending: true });
  }

  return withOptimisticResponse(env, waitUntil, lead, () => deliverToCrm(env, crmPayload(lead)));
};
