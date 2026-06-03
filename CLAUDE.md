# tenorcreative.com

Marketing/brochure site for **Tenor Creative LLC** — the custom-software,
automation, and systems arm of Seth Brasile's two-company ecosystem.

> **Status: PRE-TRANSFORM.** Right now this repo holds only the designer's
> React source under `designer-src/`. The production site is built by running
> the **`brochure-site-transform`** skill, which converts that source into a
> static Astro site on Cloudflare Pages. **After the transform, the sections
> marked `<!-- FILL ON TRANSFORM -->` below get replaced with the real stack,
> commands, and structure.** Until then, treat everything outside
> `designer-src/` as not-yet-existing.

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

## Stack & commands  <!-- FILL ON TRANSFORM -->

_Populate after Phase 3 scaffold: Astro version, key integrations, `npm run
dev` / `build` / `preview`, Playwright test command, Cloudflare Pages project
name (≠ repo name — CF dot→dash, so likely `tenorcreative-com`)._

## Project structure  <!-- FILL ON TRANSFORM -->

_Populate after scaffold: `src/pages`, `src/components`, `src/layouts`,
`public/`, `functions/api/contact.ts`, where brand tokens live, etc. Note that
`designer-src/` remains as the tracked visual reference._

## Forms & env  <!-- FILL ON TRANSFORM -->

_Populate after Phase 4: GHL contact worker wiring, Turnstile, n8n fallback,
required env vars / Pages secrets, and the deferred GHL PIT once supplied._

## Deploy  <!-- FILL ON TRANSFORM -->

_Populate after Phase 8: Cloudflare Pages project, custom domain setup, DNS
notes, analytics, handoff._

---

## Tech debt

_(none yet — log skipped scale-ups here)_

## Open questions

_(Phase 6.5 recreation review logs accidental-vs-intentional drift questions here)_

## Dismissed

_(log one-liners + date when a suggestion is declined, so it's not re-asked)_
