/**
 * GHL CRM client + n8n fallback for the contact Pages Function.
 *
 * Adapted from the `ghl-contact-worker` skill for a Cloudflare *Pages Function*
 * (not a standalone Worker) on a zero-JS Astro site. Differences from the skill
 * template:
 *  - Contacts are keyed by EMAIL (this form has no phone field), so no A2P/SMS
 *    consent flow — an inbound project inquiry is consent to reply.
 *  - The free-text message is stored as a GHL contact NOTE, which works without
 *    knowing the account-specific custom-field key.
 *  - All GHL IDs come from env (deploy-time), nothing hardcoded.
 *
 * Pattern: optimistic response. The visitor always sees success within 8s; if
 * GHL is slow or fails, the lead is relayed to n8n (HMAC-signed) in the
 * background so no lead is lost.
 */

export interface Env {
  // Secrets (wrangler pages secret put):
  GHL_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  N8N_WEBHOOK_SECRET?: string;
  // Non-secret config (set as Pages vars/secrets at deploy):
  GHL_LOCATION_ID?: string;
  GHL_PIPELINE_ID?: string;
  GHL_STAGE_NEW_LEAD?: string;
  N8N_FALLBACK_URL?: string;
}

export type ErrorType = 'ghl-failure' | 'server-error';

export interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const GHL_BASE = 'https://services.leadconnectorhq.com';

const ghlHeaders = (apiKey: string) => ({
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
  Version: '2021-07-28',
});

/** GHL is usable only when both the token and location are present. */
export function ghlConfigured(env: Env): boolean {
  return Boolean(env.GHL_API_KEY && env.GHL_LOCATION_ID);
}

/** n8n fallback is usable only when the webhook URL is present. */
export function fallbackConfigured(env: Env): boolean {
  return Boolean(env.N8N_FALLBACK_URL);
}

// --- GHL API calls ---

async function upsertContact(env: Env, lead: Lead): Promise<string> {
  const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: 'POST',
    headers: ghlHeaders(env.GHL_API_KEY as string),
    body: JSON.stringify({
      locationId: env.GHL_LOCATION_ID,
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      companyName: lead.company || undefined,
      source: 'Website contact form',
    }),
  });
  if (!res.ok) throw new Error(`GHL upsertContact failed: ${res.status}`);
  const data = (await res.json()) as { contact?: { id?: string } };
  const id = data.contact?.id;
  if (!id) throw new Error('GHL upsertContact returned no contact id');
  return id;
}

async function addNote(env: Env, contactId: string, message: string): Promise<void> {
  const res = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
    method: 'POST',
    headers: ghlHeaders(env.GHL_API_KEY as string),
    body: JSON.stringify({ body: message }),
  });
  // A failed note is non-fatal — the contact + opportunity still exist and the
  // optimistic/fallback path captures the full message regardless.
  if (!res.ok) console.warn(`[GHL] addNote non-fatal failure: ${res.status}`);
}

async function createOpportunity(env: Env, contactId: string, lead: Lead): Promise<void> {
  // Opportunity is best-effort: only attempt when a pipeline + stage are set.
  if (!env.GHL_PIPELINE_ID || !env.GHL_STAGE_NEW_LEAD) return;
  const res = await fetch(`${GHL_BASE}/opportunities/`, {
    method: 'POST',
    headers: ghlHeaders(env.GHL_API_KEY as string),
    body: JSON.stringify({
      locationId: env.GHL_LOCATION_ID,
      pipelineId: env.GHL_PIPELINE_ID,
      pipelineStageId: env.GHL_STAGE_NEW_LEAD,
      name: `${lead.firstName} ${lead.lastName} — Website inquiry`,
      status: 'open',
      contactId,
    }),
  });
  if (!res.ok) throw new Error(`GHL createOpportunity failed: ${res.status}`);
}

export async function createLead(env: Env, lead: Lead): Promise<void> {
  const contactId = await upsertContact(env, lead);
  await addNote(env, contactId, lead.message);
  await createOpportunity(env, contactId, lead);
}

// --- Optimistic response ---

type WaitUntil = (p: Promise<unknown>) => void;

const json = (body: object, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

/**
 * Race the GHL work against an 8s client timeout. The visitor always gets a
 * success response; GHL failures (fast or background) relay to n8n.
 */
export async function withOptimisticResponse(
  env: Env,
  waitUntil: WaitUntil,
  ghlWork: () => Promise<void>,
  fallbackPayload: Record<string, unknown>,
): Promise<Response> {
  const CLIENT_TIMEOUT_MS = 8_000;
  const BACKGROUND_SAFETY_MS = 25_000;
  let responded = false;

  const respond = (body: object) => {
    responded = true;
    return json(body);
  };

  const ghlPromise = ghlWork()
    .then(() => (responded ? null : respond({ success: true })))
    .catch((err: unknown) => {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      console.error('[GHL] fast failure:', msg);
      waitUntil(notifyFallback(env, fallbackPayload, msg));
      return responded ? null : respond({ success: true, pending: true });
    });

  const timeoutPromise = new Promise<Response>((resolve) =>
    setTimeout(() => {
      if (responded) return;
      console.warn('[GHL] client timeout — responding optimistically');
      waitUntil(
        Promise.race([
          ghlPromise.catch((err: unknown) =>
            notifyFallback(
              env,
              fallbackPayload,
              err instanceof Error ? err.message : 'Background failure',
            ),
          ),
          new Promise<void>((_, reject) =>
            setTimeout(() => reject(new Error('Background safety timeout')), BACKGROUND_SAFETY_MS),
          ),
        ]).catch(() => notifyFallback(env, fallbackPayload, 'Background safety timeout exceeded')),
      );
      resolve(json({ success: true, pending: true }));
    }, CLIENT_TIMEOUT_MS),
  );

  const result = await Promise.race([ghlPromise, timeoutPromise]);
  return result || json({ success: true, pending: true });
}

// --- n8n fallback (HMAC-signed) ---

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function computeHmac(secret: string, body: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function sanitize(payload: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(payload)) out[k] = typeof v === 'string' ? escapeHtml(v) : v;
  return out;
}

export async function notifyFallback(
  env: Env,
  payload: Record<string, unknown>,
  error: string,
  errorType: ErrorType = 'ghl-failure',
  timestamp = new Date().toISOString(),
): Promise<void> {
  if (!env.N8N_FALLBACK_URL) {
    console.error('[Fallback] N8N_FALLBACK_URL not set — lead only in logs:', JSON.stringify(payload));
    return;
  }
  const body = JSON.stringify({ ...sanitize(payload), error: escapeHtml(error), errorType, timestamp });
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (env.N8N_WEBHOOK_SECRET) {
    headers['X-Webhook-Signature'] = await computeHmac(env.N8N_WEBHOOK_SECRET, body);
  }
  try {
    const res = await fetch(env.N8N_FALLBACK_URL, { method: 'POST', headers, body });
    if (!res.ok) console.error(`[Fallback] n8n responded ${res.status}`);
  } catch (err) {
    console.error('[Fallback] n8n request failed:', err);
  }
}

// --- Turnstile ---

export async function verifyTurnstile(secret: string, token: string, ip?: string): Promise<boolean> {
  try {
    const form = new URLSearchParams({ secret, response: token });
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
