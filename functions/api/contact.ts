/**
 * POST /api/contact — Cloudflare Pages Function (Phase 4, Variant B: GHL + n8n).
 *
 * Same-origin with the Astro site, so no permissive CORS — instead the Origin
 * header is validated fail-closed (CSRF gate). Turnstile is fail-secure: a
 * missing secret returns 500, never a silent skip. Validation reuses the shared
 * zod schema so client and server never drift.
 */
import { contactSchema } from '../../src/lib/contact-schema';
import {
  type Env,
  type Lead,
  createLead,
  ghlConfigured,
  fallbackConfigured,
  notifyFallback,
  verifyTurnstile,
  withOptimisticResponse,
} from '../_lib/ghl';

interface Ctx {
  request: Request;
  env: Env;
  waitUntil: (p: Promise<unknown>) => void;
}

const ALLOWED_ORIGINS = [
  'https://tenorcreative.com',
  'https://www.tenorcreative.com',
  'https://tenor-creative-site.pages.dev', // canonical Pages alias (staging + fallback)
];

function originAllowed(origin: string | null): boolean {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Cloudflare Pages preview/branch deployments (hash.tenor-creative-site.pages.dev).
  if (/^https:\/\/[\w-]+\.tenor-creative-site\.pages\.dev$/.test(origin)) return true;
  // Local dev (wrangler pages dev / astro preview).
  if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  return false;
}

const jsonError = (message: string, status = 400): Response =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

// In-memory rate limit: 5 req / 60s per IP. Resets on cold start (acceptable for
// a marketing site). Hard size cap so a long-lived isolate can't grow unbounded.
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
  // 1. Origin gate (fail-closed): reject missing OR unexpected Origin.
  if (!originAllowed(request.headers.get('Origin'))) {
    return jsonError('Forbidden.', 403);
  }

  // 2. Rate limit.
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (rateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Too many requests. Please try again shortly.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
    });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError('Invalid request.', 400);
  }

  // 3. Honeypot — bots fill the hidden "website" field; humans never see it.
  // Pretend success so the bot gets no signal.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 4. Turnstile — FAIL-SECURE. Missing secret = misconfiguration, not a bypass.
  if (!env.TURNSTILE_SECRET_KEY) {
    console.error('[Contact] TURNSTILE_SECRET_KEY not configured');
    return jsonError('Server misconfiguration. Our team has been notified.', 500);
  }
  const token = body['cf-turnstile-response'];
  if (typeof token !== 'string' || !token) {
    return jsonError('Anti-bot check failed. Please try again.', 400);
  }
  const turnstileOk = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip === 'unknown' ? undefined : ip);
  if (!turnstileOk) {
    return jsonError('Anti-bot check failed. Please try again.', 400);
  }

  // 5. Validate with the shared schema (authoritative).
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return jsonError(first?.message ?? 'Please check the form and try again.', 400);
  }
  const { name, email, company, message } = parsed.data;

  // 6. Split single name field into GHL first/last.
  const trimmed = name.trim();
  const space = trimmed.indexOf(' ');
  const firstName = space === -1 ? trimmed : trimmed.slice(0, space);
  const lastName = space === -1 ? '' : trimmed.slice(space + 1).trim();

  const lead: Lead = { firstName, lastName, email, company: company ?? '', message };

  // 7. Delivery gate (fail-secure): refuse if NOTHING is configured to receive
  // the lead, rather than silently accepting a submission that goes nowhere.
  if (!ghlConfigured(env) && !fallbackConfigured(env)) {
    console.error('[Contact] no delivery configured (no GHL, no n8n)');
    return jsonError('Server misconfiguration. Our team has been notified.', 500);
  }

  // 8a. GHL configured → optimistic response with n8n fallback on failure.
  if (ghlConfigured(env)) {
    return withOptimisticResponse(env, waitUntil, () => createLead(env, lead), lead);
  }

  // 8b. Only n8n configured → relay straight to the fallback, respond success.
  waitUntil(notifyFallback(env, lead, 'GHL not configured — direct n8n delivery', 'server-error'));
  return new Response(JSON.stringify({ success: true, pending: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
