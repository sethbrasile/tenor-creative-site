# Client Brief — tenorcreative.com (Tenor Creative LLC)

> Working brief for the brochure-site-transform. **Source of truth for all
> factual copy = `designer-src/attached_assets/Pasted--Build-Brief-*.txt` §6.**
> This file condenses it + records the transform decisions. Do not invent facts
> beyond the build brief §6.

## 1. Client info
- **Company:** Tenor Creative LLC (founded Sep 2024)
- **Principal:** Seth Brasile
- **Base:** Durant, OK — works **remote** (not a local storefront / not a
  multi-city service-area business)
- **Email:** seth@tenorcreative.com
- **Phone:** _PENDING — Seth to provide (decision: include in NAP + schema)_
- **Domain:** tenorcreative.com
- **Google Business Profile:** n/a (not a local business)

## 2. Positioning (repositioning, not a recreation)
Tenor = the **technical build arm**: custom software/SaaS, automation & AI
tooling, infra/DevOps & technical consulting. **Drop all marketing / "Double
Your Business" positioning** — that is now sister-agency PPMC's job; refer it out.

Core line: *"the senior technical team agencies build on."*

- **Primary audience:** agencies needing a **white-label technical
  subcontractor / build partner** (Tenor already does this for PPMC — the proof).
- **Secondary:** founders / SMBs / ops leaders with off-the-shelf-can't-do-it
  problems.

## 3. Services (three pillars, in order)
1. **Custom apps & SaaS** — full-stack on a modern edge stack. (Proof:
   margin-check, potluck-planner, BetterLife.)
2. **Automation & AI tooling** — workflow automation, AI agents/integrations,
   internal tooling, RAG. (Proof: idea-machine, policy-as-code governance,
   BetterLife ML.)
3. **Infra/DevOps & technical consulting** — systems, CI/CD, cloud, security
   hardening, immutable infra, fractional-CTO advisory. (Proof: immutable
   reverse-proxy edge, mTLS RMM POC, DKB enterprise automation.)
- Capability (mention, don't headline): CRM setup/config + systems integration.
- Engagement models (frame, no price list): project builds, white-label
  partnership/retainer, technical advisory. **No public pricing page.**

## 4. Ecosystem cross-links (dofollow — SEO authority cluster)
- **PPMC** (pricklypearmarketing.co) — marketing/SEO/web. "Need marketing/SEO/a
  website? → PPMC."
- **sethbrasile.com** — founder portfolio / "who's behind Tenor."
- Also: github.com/sethbrasile, bytemycache.com, linkedin.com/in/sethbrasile-43a315a0

## 5. Transform decisions (locked)
| Item | Decision |
|------|----------|
| Form routing | **Variant B — GHL CRM** + n8n fallback |
| GHL PIT / location ID / pipeline | **DEFERRED** — provide near end of transform |
| Notification recipient | seth@tenorcreative.com |
| Analytics | **Cloudflare Web Analytics** (operator override of brief's Plausible pref — zero-config, privacy-friendly, no cookie banner) |
| Local service pages (Phase 5.5) | **NO** — remote B2B, not multi-city local |
| Multi-language | No |
| Schema type | **Organization** (+ founder `Person`, `knowsAbout`, `areaServed`) — NOT LocalBusiness/GeoCoordinates (remote, no storefront). Deviates from skill 3.10 default; matches build brief §8. |
| Designer visual fidelity | **Match `designer-src/artifacts/tenor-creative` faithfully** — Phase 6.5 recreation review runs |

## 6. Brand
- **Logo:** pulled from live tenorcreative.com (only asset mined from old site) →
  `public/img/logo.svg` (circular mark, navy `#202a3c` on white) +
  `public/img/logo-with-text.svg` (graphic + wordmark lockup, 500×150). Logo
  palette: navy `#0a2b4d` / `#112f51` / slate `#63748b` / white.
- **Theme (from designer `src/index.css`):** bg near-white `210 20% 98%`,
  foreground/primary navy `220 30% 10%`, **accent orange `25 95% 55%`**, radius
  `0.25rem` (sharp). Preserve theme tokens on scaffold.
- **Fonts:** Outfit (sans) + Space Mono (mono) — **self-host `.woff2`** (drop
  Google Fonts `<link>`).
- **Favicon:** `favicon.svg` exists (designer + live). **OG image:**
  `designer-src/.../public/opengraph.jpg` exists (reuse/refresh).
- Dark-mode CSS + `next-themes` present in designer src but no working toggle →
  **dead code, remove** in Phase 3.4.

## 7. Assets status
| Asset | Status |
|-------|--------|
| Logo (mark + lockup) | ✅ in `public/img/` |
| Favicon | ✅ exists |
| OG image | ✅ exists (refine in Phase 7/8) |
| Hero / section images | none yet — generate or source during scaffold |
| Privacy policy content | PENDING (Seth pastes; placeholder shell in Phase 3) |
| Terms content | PENDING (Seth pastes; placeholder shell in Phase 3) |
| Founder photo | optional — may link sethbrasile.com instead |

## 8. Copy-review flags (Phase 5)
- **$500K Tim Tebow Foundation donation figure** — build brief §6 says *confirm
  before publishing publicly.* Hold/confirm with Seth before it ships.
- All metrics (12+ yrs, 2,500–3,200 endpoints, team of 6, PCI-DSS SME, etc.) are
  sourced from build brief §6 — OK to use as written.
- **Do not invent** clients, testimonials, case studies, or metrics beyond §6.
- Voice rules (brief §4): confident, concrete, technical, zero fluff. Banned:
  "passionate about," "rockstar," "synergy," "leverage," "spearhead,"
  "results-driven," "team player," "various/multiple" without a number, etc.
- Old site sells marketing ("Double Your Business," leads/reviews/sales, "AI
  sales team," "free guide") — **none of it carries over.**
