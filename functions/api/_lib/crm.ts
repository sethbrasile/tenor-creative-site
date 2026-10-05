/**
 * PPMC CRM ingest. Signs and POSTs a lead to /api/leads/ingest.
 *
 * Wire contract (the CRM verifies this exactly):
 *   - body = JSON.stringify(payload) — the signed string IS the sent string.
 *   - ts = unix seconds at send time.
 *   - signature = lowercase hex HMAC-SHA256 over `${ts}.${body}`, keyed by
 *     CRM_CLIENT_SECRET (already-derived per-client secret, raw UTF-8 bytes).
 *   - Headers: x-account-key, x-timestamp, x-signature.
 *
 * Throws on missing config, non-2xx, or network failure. contact.ts catches
 * and falls back to Resend.
 */

export interface CrmEnv {
  CRM_INGEST_URL?: string;
  CRM_ACCOUNT_KEY?: string;
  CRM_CLIENT_SECRET?: string;
}

export interface CrmLeadPayload {
  contact: { name: string; email?: string; phone?: string; source?: string };
  title: string;
  message?: string;
}

async function signCrmBody(secret: string, ts: number, body: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(`${ts}.${body}`));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function sendToCrm(env: CrmEnv, payload: CrmLeadPayload): Promise<void> {
  if (!env.CRM_INGEST_URL || !env.CRM_ACCOUNT_KEY || !env.CRM_CLIENT_SECRET) {
    throw new Error(
      'CRM ingest not configured — missing CRM_INGEST_URL, CRM_ACCOUNT_KEY, or CRM_CLIENT_SECRET',
    );
  }

  const body = JSON.stringify(payload);
  const ts = Math.floor(Date.now() / 1000);
  const signature = await signCrmBody(env.CRM_CLIENT_SECRET, ts, body);

  const res = await fetch(env.CRM_INGEST_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-account-key': env.CRM_ACCOUNT_KEY,
      'x-timestamp': String(ts),
      'x-signature': signature,
    },
    body,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`CRM ingest failed: ${res.status} ${text}`);
  }
}
