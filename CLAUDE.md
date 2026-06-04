# tenorcreative.com

Marketing/brochure site for **Tenor Creative LLC** — the custom-software,
automation, and systems arm of Seth Brasile's two-company ecosystem.

> **Status: IN TRANSFORM — Phase 3 complete (scaffold builds clean).** The
> production Astro site now lives at the repo root; `designer-src/` remains the
> tracked visual reference. Remaining: Phase 4 (GHL contact form/function),
> Phase 5 (copy review), Phase 6 (tests), 6.5 (recreation review), Phase 7
> (audits), Phase 8 (deploy). Step-level progress in `.transform-state.json`.

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
  `--primary 220 30% 10%` (near-black navy), **`--accent 25 95% 55%` (orange)** —
  the signature accent. `--radius 0.25rem` (sharp/minimal).
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
  (astro check / typecheck).
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
    Navbar.astro               real logo (logo-with-text.svg), anchor nav,
                               vanilla-JS mobile menu (aria-expanded)
    Footer.astro               NAP (phone when provided), privacy/terms, socials, PPMC
    ContactForm.astro          vanilla form + inlined <script> (zero-JS, Turnstile)
    sections/                  Hero, Services, AgencyPartner, SelectedWork,
                               About, Contact  ← reusable for future routed pages
  pages/                       index.astro (one-pager) · privacy.astro · terms.astro
  data/site.ts                 single source of truth: NAP, links, nav, work, faq, knowsAbout
  lib/contact-schema.ts        shared zod schema (client island + Phase 4 function)
  styles/global.css            Tailwind v4 @theme (light-only; dark/sidebar/chart pruned)
public/                        _headers (CSP), robots.txt, favicon.svg, opengraph.jpg,
                               img/logo.svg + img/logo-with-text.svg
postcss.config.mjs · astro.config.mjs · tsconfig.json (@/* → src/*)
```

- **Brand tokens** live in `src/styles/global.css` (`@theme`). Content/NAP/links in
  `src/data/site.ts` — edit there, not in components.
- **Multi-page is coming** (operator): sections are standalone components so routed
  pages (`/services`, `/work`, `/partners`, `/contact`) compose them without rework;
  flip `navItems` href from `#anchor` → path at that point.
- `designer-src/` stays as the tracked visual reference for Phase 6.5.

## Forms & env  <!-- FILL ON TRANSFORM -->

_Populate after Phase 4: GHL contact worker wiring, Turnstile, n8n fallback,
required env vars / Pages secrets, and the deferred GHL PIT once supplied._

## Deploy  <!-- FILL ON TRANSFORM -->

_Populate after Phase 8: Cloudflare Pages project, custom domain setup, DNS
notes, analytics, handoff._

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
- _(Phase 6.5 recreation review appends accidental-vs-intentional drift here.)_

## Dismissed

_(log one-liners + date when a suggestion is declined, so it's not re-asked)_
