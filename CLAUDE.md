# tenorcreative.com

Marketing/brochure site for **Tenor Creative LLC** — the custom-software,
automation, and systems arm of Seth Brasile's two-company ecosystem.

> **Status: IN TRANSFORM — Phases 3–7 complete; only Phase 8 (deploy) remains.**
> The production Astro site lives at the repo root; `designer-src/` remains the
> tracked visual reference. Done: scaffold/harden (3), GHL contact Function (4),
> legal copy (5), tests (6, 26 Playwright+axe), recreation review (6.5), audits
> (7, Lighthouse all ≥95). **Remaining: Phase 8 deploy** — blocked only on the
> deferred GHL **PIT/location/pipeline IDs** (code is env-driven; deploy-time
> `secret put` + manual form submit, no code change). Step-level progress in
> `.transform-state.json`.

---

## ⚠️ Mid-`brochure-site-transform` — resume protocol (read FIRST; remove at Phase 9)

This transform is governed by the **`brochure-site-transform` skill**. The skill is
the PLAN; `.transform-state.json` + this file are only the CURSOR (where we are) — they
are NOT a substitute for the skill's steps. **Known failure mode:** late in a long
session the skill body ages out of context and work continues off these artifacts, which
silently drop skill steps (this bit us once — Phase 8.5's `static-site-form-uat` UAT was
skipped in favor of a manual hand-off). Prevent recurrence:

1. **Each session continuing the transform:** re-invoke `/brochure-site-transform` (loads
   the full skill).
2. **Before executing ANY phase:** open that phase in
   `~/.claude/skills/brochure-site-transform/SKILL.md` and convert its steps into a
   Task/todo checklist — **including sub-skill dispatches**. Never run a phase from memory
   or from this file alone.
3. **Sub-skill dispatches the cursor tends to drop** (re-check at each phase):
   Phase 3 → `frontend-design` (consult) · Phase 4 → `ghl-contact-worker` ·
   Phase 6.5 → `designer-recreation-review` · **Phase 8.5 → `static-site-form-uat`**
   (GHL/n8n stacks) · Phase 9 → `deep-review`.
4. **`.transform-state.json` `nextAction` MUST cite skill step numbers + any sub-skill**,
   so a fast resume still surfaces them.
5. Systemic fixes land in the skill's **Phase 9**, not just this repo — propose skill edits
   there so every future transform inherits them.

---

## The transform (what we're doing here)

Driving skill: **`brochure-site-transform`** (multi-session pipeline). Target
stack it produces:

- **Astro** (static, zero-JS-by-default) + **React islands** (interactive bits
  only) + **Tailwind** + **Cloudflare Pages** + **Pages Functions**.

The designer handed us a Vite + React SPA. We strip what doesn't belong, scaffold
Astro with production essentials baked in (SEO, a11y, security headers, legal
shells), wire the contact form, review copy, test, audit, and deploy.

Phase/step progress lives in `.transform-state.json` (created in Phase 2,
**gitignored** — working artifact, never commit it).

### Locked decisions (carry into the transform)

| Decision | Value | Source |
|----------|-------|--------|
| Form routing | **Variant B — GHL CRM** (primary) + n8n fallback | Operator instruction |
| GHL PIT / location ID / pipeline | **Deferred** — ask near end, once transform is done | Operator instruction |
| `designer-src/` in git | **Tracked. Never gitignore it.** No binary >50MB → **no Git LFS needed** | Skill Phase 1/2.2 + repo audit |
| Recreate designer visuals? | **Yes — match `designer-src` faithfully.** The designer had full art-direction freedom; their output is the approved design. Phase 6.5 recreation review SHOULD run. | Build brief §9, §11 |
| Analytics | Client brief prefers **Plausible** (consistent w/ byteMyCache). Skill default is Cloudflare Web Analytics. Confirm at Phase 1.12. | Build brief §7 |
| Domain | **tenorcreative.com** | Build brief §6/§9 |

> Note on Variant B vs. the brief: build brief §10 says "CRM wiring out of scope
> for now, a form that emails Seth is fine." The operator has since chosen
> **Variant B (GHL)**. Operator instruction wins — build for GHL, defer the
> credentials (PIT) until the transform is otherwise complete.

---

## `designer-src/` layout — real frontend vs. backend-to-ignore

The designer (via Replit) shipped an **over-ambitious pnpm monorepo** with a
full backend that we do **not** want. **Ignore the backend entirely and follow
the skill's plans instead** (Phase 3A strips it).

**The actual brochure site — this is what we transform:**
- `designer-src/artifacts/tenor-creative/` — Vite + React SPA. Single page
  (`src/pages/Home.tsx`, ~429 lines), `App.tsx` routes `/` and `/work` both to
  Home via **wouter**. shadcn/ui (Radix) component library in
  `src/components/ui/`, theme in `src/index.css`, assets in `public/`
  (`favicon.svg`, `opengraph.jpg`, `robots.txt`).

**The source of truth for content/positioning:**
- `designer-src/attached_assets/Pasted--Build-Brief-...txt` — the full **build
  brief**. Read it before writing any copy. All factual claims must come from
  its §6 ("The Data"). Voice rules in §4 (banned-words list).

**Backend & scaffolding to IGNORE / strip (the "overly ambitious" part):**
- `designer-src/artifacts/api-server/` — Express 5 API. Not wanted.
- `designer-src/lib/` — `api-client-react`, `api-spec`, `api-zod`, `db`
  (Drizzle/Postgres). Not wanted.
- `designer-src/scripts/`, root `pnpm-workspace.yaml`, `tsconfig.base.json`,
  `package.json` (workspace), `replit.md`, `.replit*` — monorepo/platform
  plumbing. Not wanted.
- `designer-src/artifacts/mockup-sandbox/` — designer scratchpad. Ignore.
- `designer-src/.local/`, `designer-src/.agents/` — Replit agent skill caches.
  Ignore.

Keep all of it committed (it's the tracked reference), but build nothing on it.

---

## Client facts (condensed — full detail in the build brief)

- **Company:** Tenor Creative LLC (founded Sep 2024). Principal: **Seth Brasile**.
- **Base:** Durant, OK (works remote). **Email:** seth@tenorcreative.com
- **Positioning:** This is a **repositioning, not a recreation of the old site.**
  Tenor = the **technical build arm** (custom apps/SaaS, automation & AI tooling,
  infra/DevOps & technical consulting). **Drop all marketing/"Double Your
  Business" positioning** — that's now the sister agency PPMC's job; refer it out.
- **Primary audience:** agencies needing a **white-label technical
  subcontractor** (Tenor already plays this role for PPMC — that's the proof).
  Secondary: direct founders/SMBs with off-the-shelf-can't-do-it problems.
- **Ecosystem cross-links (also SEO):** Tenor ↔ **PPMC**
  (pricklypearmarketing.co, marketing/SEO/web) ↔ **sethbrasile.com** (founder
  portfolio). Dofollow interlinks.
- **Do-not:** invent no clients/testimonials/metrics; everything factual from
  brief §6. Don't rebuild PPMC or byteMyCache — link to them.

## Brand tokens (from `designer-src/.../src/index.css`)

- Colors (HSL): `--background 210 20% 98%` (near-white), `--foreground` /
  `--primary 220 30% 10%` (near-black navy), **`--accent` (orange) — the signature
  accent**. NOTE: designer's `25 95% 55%` (#f97a1f) failed WCAG AA contrast, so the
  live token is deepened to **`24 90% 36%`** (#ae4b09, burnt-orange) for AA on light
  surfaces + as a button bg. **`--accent-bright 25 95% 55%`** (the original) is kept
  for accent text on DARK surfaces only (e.g. the contact section). `--radius 0.25rem`.
- Fonts: **Outfit** (sans) + **Space Mono** (mono). Currently loaded via Google
  Fonts `<link>` — **self-host as `.woff2` during the transform** (skill gotcha:
  external font origin on the critical path).
- A `.dark` block + `next-themes` dep exist, but there's no evidence of a working
  toggle in the design — treat dark mode as **dead code to remove** in Phase 3.4
  unless a toggle actually ships.

---

## Source-specific gotchas (watch for these in Phase 3)

- **framer-motion is used in `Home.tsx`** (3+ refs). Per skill Phase 3.14 +
  gotcha: `initial={{ opacity: 0 }}` / `whileInView` hides content from crawlers
  and breaks under CSP. **Do NOT carry framer-motion into content sections** —
  convert to static `.astro` with CSS `@keyframes` if entrance animation is
  wanted. Forms / mobile menu are the only legitimate islands.
- **SPA routing (wouter)** — `/` and `/work` both render Home. Decide real Astro
  page structure (brief §7 suggests `/services`, `/work`, `/partners` or
  `/agencies`, `/contact`). Clean URLs, one `<h1>` each.
- **Heavy shadcn/ui dir** (~50 components) — only a handful are actually used.
  Prune to imports-only (Phase 3.3).
- **Tailwind v4** (`@import "tailwindcss"`, `@theme inline`) — preserve the theme
  tokens / CSS vars / brand colors when scaffolding.
- **Replit Vite plugins** (`@replit/vite-plugin-*`) and `.replit-artifact/` —
  platform-specific, drop them (Phase 3.2).

---

## Out-of-scope reminders (brief §11)

No old marketing positioning, no Pricing page, no "AI sales team" / "free guide"
lead magnet. No invented social proof. Privacy-friendly analytics only.

---
<!-- ============================================================= -->
<!-- FILL ON TRANSFORM — replace the sections below once the       -->
<!-- brochure-site-transform skill has scaffolded the Astro site.  -->
<!-- ============================================================= -->

## Stack & commands

- **Astro 6** (static, **zero-JS**) + **Tailwind v4** + TypeScript. No framework
  island — the contact form + mobile menu are small vanilla `<script>`s (inlined).
- Integrations: `@astrojs/sitemap`, `astro-icon` (lucide + simple-icons, inlined
  as SVG — zero JS for icons). No `@astrojs/react` (removed; site ships no React).
- **Tailwind v4 via PostCSS** (`postcss.config.mjs` → `@tailwindcss/postcss`),
  NOT `@tailwindcss/vite` — the Vite plugin breaks on Astro 6's rolldown-vite
  resolver (`Missing field tsconfigPaths`). Don't switch back.
- Fonts self-hosted via **Fontsource** (`@fontsource-variable/outfit`,
  `@fontsource/space-mono`) — imported in `BaseLayout.astro`, same-origin, swap.
- Commands: `npm run dev` · `npm run build` · `npm run preview` · `npm run check`
  (astro check / typecheck) · `npm test` (Playwright E2E + axe a11y, in `tests/e2e/`;
  builds + previews on port 4823, desktop + mobile projects).
- Expected **Cloudflare Pages project name: `tenor-creative-site`** (matches repo;
  no dots to dash-convert) — confirm at deploy (Phase 8).

## Project structure

```
src/
  layouts/BaseLayout.astro     head/meta/OG/canonical, JSON-LD (@graph:
                               Organization+Person+3 Services+FAQPage), skip-nav,
                               font imports, CF Web Analytics beacon (guarded),
                               wraps Navbar + <slot/> + Footer
  components/
    Navbar.astro               real logo (logo-with-text.svg), root-relative nav
                               (/#anchor, works cross-page), "AI Demo" accent pill
                               (navItems cta:true), vanilla-JS mobile menu (aria-expanded)
    Footer.astro               NAP (phone when provided), privacy/terms, socials, PPMC
    ContactForm.astro          vanilla form + inlined <script> (zero-JS, Turnstile)
    sections/                  Hero, Services, AgencyPartner, SelectedWork,
                               About, Contact  ← reusable for future routed pages
  pages/                       index.astro (one-pager) · ai-voice-demo.astro ·
                               privacy.astro · terms.astro
  data/site.ts                 single source of truth: NAP, links, nav, work, faq, knowsAbout
  lib/contact-schema.ts        shared zod schema (client form + contact Function)
  styles/global.css            Tailwind v4 @theme (light-only; dark/sidebar/chart pruned)
functions/                     Cloudflare Pages Functions (Phase 4)
  api/contact.ts               POST /api/contact — Origin/Turnstile/delivery fail-secure,
                               honeypot, rate-limit, shared-zod validation
  _lib/ghl.ts                  GHL client + optimistic response + n8n HMAC fallback
public/                        _headers (CSP), robots.txt, favicon.svg, opengraph.jpg,
                               img/logo.svg + img/logo-with-text.svg
postcss.config.mjs · astro.config.mjs · wrangler.toml (Pages) · tsconfig.json (@/* → src/*)
```

- **Brand tokens** live in `src/styles/global.css` (`@theme`). Content/NAP/links in
  `src/data/site.ts` — edit there, not in components.
- **Multi-page has started.** `/ai-voice-demo` is the first routed page (designer's
  AI answering-service demo). `navItems` anchors are now root-relative (`/#services`)
  so the shared nav works from any route. **Shared Navbar + Footer live in BaseLayout,
  outside page content — they stay identical page-to-page.** Per operator: do NOT copy
  the designer's per-page nav swap (the demo's "Back to site" header) — every page uses
  the same site nav. Future routed pages (`/services`, `/work`, etc.) follow this model;
  sections are standalone components so they compose without rework.
- `designer-src/` stays as the tracked visual reference for Phase 6.5.

## Forms & env

Contact form (Phase 4, **Variant B — GHL + n8n fallback**). The designer-src had
mailto-only; we wired a real form. Architecture is the `ghl-contact-worker` skill
**adapted to a Cloudflare Pages Function** (not a standalone Worker) on the zero-JS
Astro site:

- **`functions/api/contact.ts`** — `onRequestPost` route. Hardening (brochure Phase 4
  overrides the sub-skill's "skip if unset"): **Origin fail-closed** (missing OR
  unexpected Origin → 403), **fail-secure Turnstile** (missing `TURNSTILE_SECRET_KEY`
  → 500, never skipped), **fail-secure delivery** (no GHL *and* no n8n → 500), honeypot
  (`website` field → silent 200), in-memory rate-limit 5/60s/IP with 10k size cap,
  `onRequestGet` → 405. Validation reuses the shared **`src/lib/contact-schema.ts`**
  zod schema (client + server never drift).
- **`functions/_lib/ghl.ts`** — GHL client + optimistic response + n8n HMAC fallback.
  Contact is **email-keyed** (form has no phone → no A2P/SMS consent flow). Free-text
  message stored as a GHL **note** (works without the account's custom-field key) +
  best-effort opportunity when `GHL_PIPELINE_ID`/`GHL_STAGE_NEW_LEAD` are set. Optimistic:
  visitor always gets success ≤8s; GHL failure relays the lead to n8n (HMAC-SHA256 via
  Web Crypto, `X-Webhook-Signature`) in `waitUntil`. **Zero leads lost.**
- **Form is vanilla** (`ContactForm.astro` inline `<script>`) — posts JSON to
  `/api/contact`, reads `{error}` for messages. Turnstile token field is
  `cf-turnstile-response`. Site key is build-time `PUBLIC_TURNSTILE_SITE_KEY` (default =
  CF always-pass TEST key) baked into source at deploy (8.1c).
- **`wrangler.toml`** — Pages config (`pages_build_output_dir = "dist"`), non-secret
  `[vars]` (n8n URL). Astro build is unaffected.

**Verified locally** (`wrangler pages dev`, no real creds): no-Origin→403,
missing-Turnstile→500, bad/missing token→400, delivery-gate→500, zod errors→400,
honeypot→200, GHL-401→**200 optimistic** with bg fallback firing, evil Origin→403.
Satisfies audit items **7.13 / 7.14** now; **7.17** (GHL opt-in) is N/A (no SMS).

**Env (set at deploy — Phase 8.1b, `wrangler pages secret put --project-name tenor-creative-site`):**

| Key | Kind | Required | Notes |
|-----|------|----------|-------|
| `TURNSTILE_SECRET_KEY` | secret | **yes** | Function is fail-secure without it |
| `GHL_API_KEY` | secret | for GHL | the deferred **PIT** |
| `GHL_LOCATION_ID` | secret/var | for GHL | enables delivery |
| `GHL_PIPELINE_ID` | secret/var | optional | enables opportunity |
| `GHL_STAGE_NEW_LEAD` | secret/var | optional | new-lead stage |
| `N8N_WEBHOOK_SECRET` | secret | optional | HMAC key, matches n8n verify node |
| `N8N_FALLBACK_URL` | var | optional | omit → no fallback |

**Still blocked on operator:** GHL **PIT / location / pipeline+stage IDs** — the code is
fully env-driven, so this is a deploy-time `secret put` + the manual browser submit (8.1d),
no code change. n8n fallback workflow (HMAC verify → Resend) still to import (skill 4.6) if
fallback is wanted.

## Deploy

**Live at https://tenorcreative.com** (cut over from the old Vercel "Double Your
Business" marketing site 2026-06-05). Hosting facts:

- **CF account:** `setherd14` (`fd15b6bd9ab1cec50b0832c91d7cf53a`) — the domain + zone
  live here, NOT the `seth@tenorcreative.com` account. Zone `c876310c50f4173ff7a13397751c613b`.
- **Pages project:** `tenor-creative-site`, git-connected (branch `main`); every push to
  `main` auto-builds. Canonical alias `tenor-creative-site.pages.dev`.
- **Custom domain:** apex `tenorcreative.com` added as a Pages Custom Domain. Apex DNS is a
  **proxied CNAME → `tenor-creative-site.pages.dev`** (CF flattens at apex). Google-CA edge cert.
- **www → apex:** proxied CNAME `www → tenorcreative.com` + a **CF zone Redirect Rule** (301,
  `http.host eq "www.tenorcreative.com"` → `concat("https://tenorcreative.com", uri.path)`,
  preserve query). Per global rule: www is NOT a second Custom Domain. ⚠️ The MCP CF token
  lacks Rulesets scope — the Redirect Rule is created in the dashboard (Rules → Redirect Rules).
- **Legacy 301s:** `public/_redirects` — Bucket A (`/about,/services,/contact` → home anchors;
  `/privacy-policy,/terms-of-use` → `/privacy/,/terms/`); Bucket B (~21 retired marketing URLs,
  incl. `/solutions/*`, `/the-4-rs/*`, `/pricing`, `/booking*`) → `pricklypearmarketing.co`
  (positioning moved to the sister agency). Old Vercel deploy is now orphaned (no DNS) — safe
  to delete that Vercel project anytime.
- **DNS backup before cutover:** `docs/dns-backup-2026-06-05.txt` (full zone). Only the apex A
  (76.76.21.21 Vercel) + www CNAME (vercel-dns) were removed; the other 49 records (Google MX,
  Mailgun, Proton, GHL/ludicrous.cloud, n8n + analytics on Hetzner, Klaviyo, SPF/DKIM/DMARC)
  were untouched.
- **Form UAT:** PASS 2026-06-05 (`uat-reports/2026-06-05.md`) — GHL happy path + n8n fallback
  both verified end-to-end. Redacted n8n workflow in `docs/n8n-tenor-resend-fallback.json`.

**Still pending (operator):** (1) create the www→apex Redirect Rule in the CF dashboard
(www is 522 until then); (2) CF Web Analytics — create the site + provide `PUBLIC_CF_BEACON_TOKEN`
(bake into source like the Turnstile site key, the `BaseLayout` beacon is guarded). Then Phase 9.

---

## Tech debt

- **5 moderate npm-audit findings**, all dev-only: `yaml` DoS transitively under
  `@astrojs/check` (typecheck tool, not in the production bundle). Fix is a breaking
  downgrade of `@astrojs/check` — not worth it. Re-evaluate when upstream patches.
  (2026-06-04)

## Open questions

- **Intentional deviation (Phase 6.5):** navbar uses the real graphic wordmark
  (`logo-with-text.svg`, pulled from live tenorcreative.com per operator) instead
  of the designer-src `TENOR_` text wordmark. Not drift — expected.
- **Intentional deviation:** added a real GHL contact form in the `#contact`
  section; designer-src had mailto-only. Per brief §10 + Variant-B decision.
- **Intentional deviation:** added a mobile hamburger menu; designer-src hid the
  nav entirely on mobile (no menu). Strictly better; expected.
- **Intentional deviation:** `/ai-voice-demo` uses the shared site Navbar + Footer.
  designer-src's `AiVoiceDemo.tsx` swapped in a stripped per-page header with a
  "Back to site" button — per operator we deliberately rejected that shortcut; nav
  stays identical across pages. Page recreated static/zero-JS (designer used
  framer-motion + a `dialed` useState; both dropped — the dial CTA is a plain `tel:`).
- **Intentional deviation (Phase 6 a11y):** brand accent deepened from the
  designer's `25 95% 55%` (#f97a1f) to `24 90% 36%` (#ae4b09) — the original failed
  WCAG AA contrast as text-on-light and as a button bg. Original kept as
  `--accent-bright` for dark-surface accent text. Operator-approved trade-off
  (slightly deeper orange site-wide) to reach Lighthouse a11y 100.
- _(Phase 6.5 recreation review appends accidental-vs-intentional drift here.)_

## Dismissed

_(log one-liners + date when a suggestion is declined, so it's not re-asked)_
