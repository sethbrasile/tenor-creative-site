# tenorcreative.com — Ops Handoff / Runbook

Last updated: 2026-06-05 (Phase 8 deploy). Owner: Seth Brasile (seth@tenorcreative.com).

This is the operations reference for the live Tenor Creative site. It assumes whoever
reads it can use a terminal + the Cloudflare dashboard.

## What it is

Static **Astro** site (zero framework JS) on **Cloudflare Pages**, git-connected to
`github.com/sethbrasile/tenor-creative-site` (branch `main`). Every push to `main`
auto-builds + deploys. One interactive piece — the contact form — is a Cloudflare
**Pages Function** that writes to GoHighLevel with an n8n email fallback.

## How to make changes

| Change | Where |
|--------|-------|
| Copy, NAP, nav, work items, FAQ | `src/data/site.ts` (single source of truth) |
| Brand colors / tokens | `src/styles/global.css` (`@theme`) |
| A section's markup | `src/components/sections/*.astro` |
| Page structure | `src/pages/*.astro` (`index`, `ai-voice-demo`, `privacy`, `terms`) |
| Legacy URL redirects | `public/_redirects` |
| Security headers / CSP | `public/_headers` |

Workflow: edit → `npm run dev` to preview → `npm run build` + `npm test` (Playwright+axe)
→ commit + `git push`. The push triggers the Cloudflare build; the new version is live in
~1–2 min. No manual deploy step.

## Hosting / Cloudflare

- **Account:** `setherd14@gmail.com` (`fd15b6bd9ab1cec50b0832c91d7cf53a`). The domain + zone
  live in THIS account, not the `seth@tenorcreative.com` one.
- **Pages project:** `tenor-creative-site`. Alias `tenor-creative-site.pages.dev`.
- **Custom domain:** apex `tenorcreative.com` (proxied CNAME → the Pages project, CF-managed cert).
- **www:** proxied A → `192.0.2.1` (dummy) + a "WWW to Root" Redirect Rule → 301s to apex.
- **DNS:** Cloudflare. Full pre-cutover backup at `docs/dns-backup-2026-06-05.txt`. Email
  (Google MX + Mailgun + Proton), GHL subdomains, n8n/analytics (Hetzner), Klaviyo — all
  unchanged by the site cutover.
- **Old site:** the previous "Double Your Business" marketing site on Vercel is now orphaned
  (no DNS points to it). Safe to delete that Vercel project anytime.

## Contact form → CRM

- Form posts to `/api/contact` (Pages Function). Hardened: Origin fail-closed, Turnstile
  (fail-secure), honeypot, rate-limit, shared-zod validation.
- **Primary:** creates a GHL contact + opportunity in **Sales Pipeline 1 → Lead** stage.
- **Fallback (zero lead loss):** if GHL fails, the lead is relayed (HMAC-signed) to an n8n
  workflow ("Tenor Creative - GHL Fallback") that emails it to seth@tenorcreative.com
  (cc seth@pricklypearmarketingco.com) via Resend. The visitor always sees success.
- Verified end-to-end 2026-06-05 — see `uat-reports/2026-06-05.md`. Redacted workflow:
  `docs/n8n-tenor-resend-fallback.json`.
- **Secrets** (Cloudflare Pages → Settings → Variables and Secrets): `TURNSTILE_SECRET_KEY`,
  `GHL_API_KEY`, `GHL_LOCATION_ID`, `GHL_PIPELINE_ID`, `GHL_STAGE_NEW_LEAD`,
  `N8N_WEBHOOK_SECRET`, `N8N_FALLBACK_URL`. The Turnstile **site** key is public + baked into
  source (`ContactForm.astro`).

### "I stopped getting leads" — first move
Run the form UAT: `static-site-form-uat` skill (or re-read `uat-reports/2026-06-05.md`).
Most common causes: GHL API key (PIT) expired, n8n workflow turned inactive, or a GHL
pipeline/stage ID changed. Don't debug the Worker code first — run the UAT, read the report.

## Analytics

Privacy-friendly **Cloudflare Web Analytics** (no cookie banner needed). **Setup pending:**
create the site in the CF dashboard → Web Analytics, then set `PUBLIC_CF_BEACON_TOKEN` (bake
into source like the Turnstile site key — it's a build-time `PUBLIC_*` var) and push. The
beacon in `BaseLayout.astro` is guarded, so it stays off until the token is set.

## Quality baseline (2026-06-05, live apex, mobile Lighthouse)

Performance 95 · Accessibility 100 · Best Practices 100 · SEO 100.
Lab CWV: LCP 2.4s · CLS 0 · TBT 0ms. (Field CWV appears in CrUX after ~28 days of traffic.)

## Legal

`/privacy` and `/terms` are real pages, linked in the footer. Oklahoma governing law.

## Costs

Cloudflare Workers **Paid** ($5/mo) covers Pages + Functions. Domain registration + the
external services (GHL, n8n/Resend, Klaviyo, Mailgun) bill separately on their own accounts.
