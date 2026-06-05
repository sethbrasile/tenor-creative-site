---
status: final
date: 2026-06-05
type: deep-review
mode: pre-delivery
scope: full codebase (post-deploy final audit)
verdict: SHIP IT
blocking: 0
counts: { high: 3, medium: 12, low: 20, info: 3 }
lenses: [security, architecture, testing, performance, seo, accessibility]
---

# Deep Review — tenorcreative.com
## 2026-06-05 | Mode: pre-delivery | Scope: full codebase (post-deploy audit)

> **How to use:** the site is LIVE and passing (Lighthouse 95/100/100/100, CWV lab pass,
> security clean of blockers). Nothing here blocks ship. Start with the Action Plan —
> grouping A (a11y) and B (LCP hardening) are the highest-value, quick wins.

### Meta
- Lenses: Security, Architecture+Testing, Performance+SEO, Accessibility (4 parallel reviewers)
- Files examined: ~26 source (~2,800 LOC) + tests + configs
- **Verdict: SHIP IT** — 0 blocking findings. Site is deployed + passing audits.
- Severity tally: 3 High / 12 Medium / 20 Low / 3 Info — all non-blocking (improvements + hardening)
- Spot-checked: a11y error-contrast, LCP fade-up+preload, CSP gaps, JSON-LD @id, axe page list — all confirmed, no false positives.

---

### High Findings (non-blocking — strongly recommended)

**H1 — Error-text fails WCAG AA contrast.** `src/styles/global.css:42` — `--destructive: hsl(0 84% 60%)`
(#ef4444) renders the form's field + global error messages (`text-destructive` in `ContactForm.astro:38,53,84,92`)
on the white form card ≈ **3.8:1**, below AA 4.5:1. Lighthouse a11y=100 missed it because error states are
hidden at audit time. **Fix:** deepen `--destructive` to ~`hsl(0 72% 42%)` (#b52a2a, ~5:1 on white); confirm
white-on-destructive button still passes.

**H2 — LCP element starts invisible.** `src/components/sections/Hero.astro:11` wraps the `<h1>` (the LCP element)
in `animate-fade-up`, which is `opacity:0 → 1` with `both` fill (`global.css:71-76`). The largest paint is hidden
until the animation fires. **Fix:** don't fade the h1 — animate only sub-hero elements, or start the keyframe at
`opacity:0.01` so it registers as painted at frame 0. (`prefers-reduced-motion` guard already correct.)

**H3 — No preload for the LCP font.** `src/layouts/BaseLayout.astro` head has no `<link rel="preload">` for the
Outfit Variable woff2; the browser does HTML→CSS→@font-face→woff2 (2 round-trips) before the h1 paints in its real
font. Combined with H2, this is why lab LCP sits at 2.4s (fragile — one regression tips it past 2.5s). **Fix:**
preload the Outfit latin woff2 as the first `<link>` in head (confirm hashed `/_astro/` path post-build), `crossorigin`.

---

### Medium Findings

**Accessibility — form announcements (screen-reader gaps Lighthouse can't catch):**
- M1 `ContactForm.astro:38,53,84` — field error `<p>`s lack `role="alert"`; errors aren't announced on submit (only re-read on field re-focus). Fix: add `role="alert"` (or move focus to first invalid field).
- M2 `ContactForm.astro:104-115` — success `#contact-success` is `role="status"` but content is static and revealed via `hidden` toggle → polite region doesn't announce. Fix: move focus to it (tabindex=-1) or inject the text after reveal.
- M3 `ContactForm.astro:90` — Turnstile container has no host-page label; relies on Cloudflare's iframe title. Fix: `sr-only` label + `aria-labelledby`.

**Security — CSP defense-in-depth (one-line edits in `public/_headers:7`):**
- M4 CSP missing `form-action 'self'` — a injected `<form>` could post off-origin (default-src doesn't cover it).
- M5 CSP missing `base-uri 'self'` — an injected `<base>` could repoint relative URLs incl. `/api/contact`.
- M6 `functions/api/contact.ts:37` — preview-deploy Origin regex `[\w-]+\.tenor-creative-site\.pages\.dev` accepts any branch preview as a valid origin. Single-contributor repo → tolerable; document or tighten to a hash pattern.

**SEO polish (`BaseLayout.astro` head + `public/`):**
- M7 OG/Twitter missing `og:image:width/height/alt` + `twitter:image:alt` (`BaseLayout.astro:128-134`).
- M8 `public/opengraph.jpg` is 1280×720 (16:9) not 1200×630 (1.91:1) → sides cropped on FB/LinkedIn/iMessage.
- M9 JSON-LD: `Person` node has no `@id`, `Service` nodes have no `@id`; Org `sameAs` duplicates the Person's GitHub/LinkedIn. Fix: add `@id`s, move personal profiles to Person only.

**Testing gaps:**
- M10 `tests/e2e/a11y.spec.ts:6` — axe `PAGES` omits `/privacy` + `/terms` (both use `prose` typography). Add them.
- M11 No tests for `_redirects` (Phase-8.2, completely untested — a malformed rule silently breaks real traffic) or the Function's error branches (403/400/429/500/honeypot). Add redirect + error-path specs.

---

### Low Findings (grouped — quick cleanups + hardening)

**Cleanup / dead code:**
- L1 `tsconfig.json:6-7` — `jsx: react-jsx` + `jsxImportSource: react` leftover from designer scaffold (zero React). Remove — misleading + would silently accept a stray `.tsx`.
- L2 `BaseLayout.astro:5` — `@fontsource/space-mono/400-italic.css` imported but no italic used anywhere; ships extra `@font-face` CSS. Remove.
- L3 `public/_headers:9-10` — `/fonts/*` cache rule is a no-op (Fontsource bundles into `/_astro/`, already covered). Remove.
- L4 `public/_headers:6` — `X-XSS-Protection: 1; mode=block` is deprecated/ignored (MDN "do not use"). Remove; CSP covers it. (flagged by both Security + Architecture)

**Security (low):**
- L5 `functions/_lib/ghl.ts:203-227` — `sanitize()` HTML-escapes the lead before sending it as **JSON** to n8n → `&amp;` artifacts; escaping belongs in n8n's HTML email template, not the JSON payload.
- L6 UAT report + CLAUDE.md commit non-credential GHL IDs (pipeline/stage/contact) + n8n workflow/webhook UUID. Not secrets (HMAC+PIT gate real access) but internal CRM structure. **If the repo is public, redact; if private, accept.** (operator call)
- L7 `functions/_lib/ghl.ts:157-169` — theoretical unhandled rejection in the background-timeout `waitUntil` chain; add a final `.catch(()=>{})` sentinel.
- L8 `functions/api/contact.ts:94` — local dev shares an `'unknown'` rate-limit bucket (CF always sets CF-Connecting-IP in prod); can cause confusing local 429s. Comment or skip when `unknown`.
- L9 `_headers:7` — `style-src 'unsafe-inline'` broader than needed (Tailwind ships to `/_astro/`); audit for inline `style=` and drop if none. (low urgency)

**Perf / SEO (low):**
- L10 `Navbar.astro:20` — logo `<img>` is `loading="eager"` but no `fetchpriority="high"`.
- L11 `BaseLayout.astro` — privacy/terms are in the sitemap with no `noindex`; pass `noindex` from those pages (+ optional sitemap filter).
- L12 `BaseLayout.astro:123` — no `og:locale` (add `en_US`).
- L13 `ContactForm.astro:118` — Turnstile script loads on `/` even though below fold (`async defer`, low impact); could scope to viewport.

**Accessibility (low):**
- L14 `About.astro:77-84` — tech-stack icons use `<title>` without `role="img"`; inconsistent SR exposure. Add `role="img"`.
- L15 `Navbar.astro` nav `<a>`s have no explicit `focus-visible` ring (rely on UA default; mismatch in high-contrast). Add the ring used on the hamburger.
- L16 `Navbar.astro:95` — Escape closes the mobile menu but doesn't return focus to the toggle. Add `btn.focus()` in `close()`.
- L17 external `target="_blank"` links: no "opens in new tab" SR cue (multiple files) AND L18 `rel="noopener"` missing `noreferrer` (referrer privacy). Apply both consistently.
- L19 `ContactForm.astro:94` — in-flight "Sending…" state not announced to SR (disabled button + textContent change isn't a live event). Add an sr-only `aria-live` status.
- L20 (info-ish) in-memory rate limit is per-isolate/per-PoP — documented + accepted for a marketing form.

---

### Tension Resolutions
None. No reviewer disagreements — findings are independent improvements. (Minor: SEO wants more meta vs Perf wants lean head — both satisfied; the additions are tiny static tags.)

---

### Structural Patterns
One mild pattern, not systemic:

**Pattern: "axe-clean ≠ AA-clean" on interactive states.** Symptoms: H1 (error contrast), M1/M2 (error/success not announced), M3 (Turnstile label), L19 (in-flight). Root cause: automated axe/Lighthouse audits run on the *initial* rendered state; the form's *error/success/loading* states (revealed by JS) are never audited, so their a11y regressions pass silently. **Recommendation:** the fix for M10/M11 (test the error states) doubles as the structural fix — add Playwright+axe assertions on the form *after* triggering validation errors and success, not just on page load. That closes the whole category, not just H1.

---

### Proposed Action Plan

**Grouping A — Accessibility: form states (HIGH value, ~1hr).**
- Findings: H1 (error contrast), M1 (field role=alert), M2 (success announce), M3 (Turnstile label), L14, L15, L16, L19.
- Approach: instance fixes in `ContactForm.astro` + `global.css` (`--destructive` deepen) + `Navbar.astro`.
- Why first: H1 is a real WCAG AA violation; the rest are genuine SR gaps the "a11y 100" hid.

**Grouping B — LCP hardening (HIGH value, ~30min).**
- Findings: H2 (don't fade the h1), H3 (preload font), L10 (logo fetchpriority).
- Approach: `Hero.astro` + `BaseLayout.astro` head. Protects the fragile 2.4s LCP.

**Grouping C — CSP + security hardening (~15min).**
- Findings: M4 (form-action), M5 (base-uri), L4 (drop X-XSS-Protection), L5 (sanitize JSON), L7, L8, L9.
- Approach: one-line `_headers` CSP edits + `ghl.ts` tweaks. Re-run the UAT curl checks after.

**Grouping D — SEO polish (~30min).**
- Findings: M7 (OG meta), M8 (OG image 1200×630), M9 (JSON-LD @ids), L11 (noindex legal), L12 (og:locale).
- Approach: `BaseLayout.astro` head + re-export `opengraph.jpg`.

**Grouping E — Test coverage (structural — closes the a11y-states gap) (~1hr).**
- Findings: M10 (axe privacy/terms), M11 (redirect + Function error-path tests), structural pattern.
- Approach: extend `a11y.spec.ts` PAGES; new `redirects.spec.ts`; form error-state axe assertions.

**Grouping F — Cleanup (~15min).**
- Findings: L1 (tsconfig jsx), L2 (space-mono italic), L3 (/fonts/* rule), L6 (decide on committed IDs), L13, L17/L18 (rel noreferrer + new-tab cue).
- Approach: mechanical deletions + decisions.

Each grouping is independent; A and B are the highest value.
