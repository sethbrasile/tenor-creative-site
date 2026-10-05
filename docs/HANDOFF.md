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
- **DNS:** Cloudflare. Full pre-cutover backup at `docs/dns-backup-2026-06-05.txt`.
  Mailgun (`lc`, `lca`, `notifya`), GHL subdomains, n8n/analytics (Hetzner), and Klaviyo
  are unchanged. Apex mail is not Google anymore — see Email below.
- **Old site:** the previous "Double Your Business" marketing site on Vercel is now orphaned
  (no DNS points to it). Safe to delete that Vercel project anytime.

## Contact form → PPMC CRM

- Form posts to `/api/contact` (Pages Function). Hardened: Origin fail-closed, Turnstile
  (fail-secure), honeypot, rate-limit, shared-zod validation.
- **Primary (2026-10-05):** signed ingest to the PPMC CRM
  (`https://crm.pricklypearmarketing.co/api/leads/ingest`). GoHighLevel is no longer
  the destination. Account manifest: `ppmc-crm/apps/web/clients/tenor-creative.yaml`.
- **Fallback:** if the CRM write fails, Resend emails the lead to
  `seth@pricklypearmarketingco.com` from `noreply@notify.pricklypearmarketingco.com`.
  The visitor still sees success.
- **Inbound mail (2026-10-05):** Google Workspace is gone. Apex MX is Cloudflare Email
  Routing. `seth@tenorcreative.com` and the catch-all forward to
  `seth@pricklypearmarketingco.com`. Mailgun MX on `lc` / `lca` / `notifya` was left alone.
- **Plain vars** live in `wrangler.toml` `[vars]` (a git build wipes dashboard plain vars):
  `CRM_INGEST_URL`, `CRM_ACCOUNT_KEY`, `RESEND_FROM`, `LEAD_FALLBACK_TO`.
- **Secrets** (`wrangler pages secret put --project-name tenor-creative-site`):
  `TURNSTILE_SECRET_KEY` (already set), `CRM_CLIENT_SECRET` (only via
  `pnpm -F @ppmc-crm/web db:provision-secret --slug tenor-creative`), `RESEND_API_KEY`.
  The Turnstile site key is public and baked into `ContactForm.astro`.

### "I stopped getting leads" — first move
Check that `wrangler.toml` `[vars]` still has the four CRM values (a build wipes dashboard
copies). Then confirm `CRM_CLIENT_SECRET` matches the current derived secret — a wrong
value 401s every lead while the form still shows success and falls through to Resend.

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
