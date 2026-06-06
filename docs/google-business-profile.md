# Google Business Profile — Tenor Creative LLC

Copy-paste source for the GBP listing. Categories are picked from Google's fixed
list; services + descriptions are custom (free text). Descriptions are all ≤300
characters (GBP's per-service limit). Voice pulled from the live site
(`src/components/sections/Services.astro`, `src/data/site.ts`).

---

## Profile setup

- **Business type:** Service-Area Business (SAB). Durant, OK + remote — **hide the
  street address**, list service areas instead.
- **Name:** Tenor Creative LLC
- **Phone:** 580-745-0069
- **Email:** seth@tenorcreative.com
- **Website:** https://tenorcreative.com
- **Keep marketing/SEO categories OFF** — those belong to PPMC's profile. Category
  overlap muddies the two-company split.

---

## Business description (≤750 chars — paste as-is)

Front-loads the keywords; first sentence carries the positioning in case Google
truncates the preview.

> Tenor Creative is the senior technical build arm that agencies and founders rely on when off-the-shelf tools hit their ceiling. We design, build, and maintain custom software and SaaS on a modern edge stack — Next.js, Cloudflare, PostgreSQL — plus business-process automation, AI agents, and RAG pipelines. On the infrastructure side: CI/CD, cloud architecture, security hardening, and immutable, zero-trust systems built for reliability and scale. Tenor also works white-label for marketing and design agencies, delivering complex builds under your brand without competing for the client relationship. Founded 2024 in Durant, OK; works remote. Principal engineer: Seth Brasile. Start with a technical discovery conversation.

---

## Categories (pick from Google's fixed list)

**Primary:**
- Software company

**Additional (up to 9 — these are the recommended ~6):**
- Computer consultant
- Computer support and services
- Website designer
- Computer security service
- Business management consultant
- Business to business service

> Optional 7th: *Software testing service* — only if offered standalone.

---

## Service → category map

Each custom service belongs to exactly one category. In GBP you add services under
a category, so enter them in these groups:

| Category | Services |
|----------|----------|
| **Software company** (primary) | Custom software development · SaaS development · API development & integration · Database design & architecture · Payment integration (Stripe) · Authentication systems |
| **Website designer** | Full-stack web application development |
| **Computer consultant** | Business process automation · Workflow automation · AI agent development · RAG pipeline development · Internal tooling development · CRM setup & data integration |
| **Computer support and services** | DevOps consulting · CI/CD pipeline setup · Cloud architecture (edge / Cloudflare) |
| **Computer security service** | Security hardening · Immutable infrastructure & zero-trust ingress |
| **Business management consultant** | Fractional CTO advisory · Technical consulting & discovery |
| **Business to business service** | White-label technical subcontracting |

> 21 services, every category populated. Descriptions for each are below
> (grouped by the site's capability buckets — the category each maps to is in
> the table above).

---

## Services (custom entries — type these in)

Service **names** are kept plain/searchable (how buyers actually search), not
branded. Each has a ≤300-char description below it. For the category each maps to,
see the **Service → category map** table above.

### Custom Apps & SaaS

**Custom software development**
> Software built to your exact operations when off-the-shelf tools hit their ceiling. Full-stack development on a modern edge stack, designed and built by a senior engineer — not handed off to juniors. Maintained, not dumped.

**SaaS development**
> End-to-end SaaS product development — from data model and auth to payments and background jobs. Production examples include profit-margin analytics and event-coordination platforms shipped solo on Next.js, Cloudflare, and Postgres.

**Full-stack web application development**
> Full-stack web apps on a modern edge stack: Next.js, React, and Nuxt on the front; PostgreSQL, Neon, and Drizzle behind. Built for businesses that need software molded to their exact shape, not forced into a template.

**API development & integration**
> Custom APIs and third-party integrations that connect your tools and data cleanly. Typed endpoints, webhook handling, and reliable data exchange between systems that were never built to talk to each other.

**Database design & architecture**
> Relational schema design and data architecture in PostgreSQL, Neon, and Drizzle. Includes privacy-boundary design — separating shared and private data at the storage layer so classification is enforced, not hoped for.

**Payment integration (Stripe)**
> Stripe payment integration for subscriptions, one-time charges, and usage billing. Secure checkout, webhook-driven fulfillment, and reconciliation built into production SaaS — not bolted on afterward.

**Authentication systems (passkeys, OAuth, SSO)**
> Modern authentication: passkeys/WebAuthn, OAuth, SSO, and magic links. Secure session handling and account flows built into production apps — login that's both safe and frictionless.

### Automation & AI Tooling

**Business process automation**
> Automate the manual work eating your team's bandwidth. Custom automation for repetitive operational tasks, data entry, and handoffs between systems — so people stop doing what software should be doing.

**Workflow automation**
> Declarative, reliable workflows for multi-step business processes. Background jobs, scheduled tasks, and event-driven pipelines that run without babysitting and recover cleanly when a step fails.

**AI agent development**
> Custom AI agents and integrations wired into your real tools and data. Practical automation that does useful work inside your stack — production systems, not demos.

**RAG pipeline development**
> Retrieval-augmented generation pipelines in Python and Postgres. Includes data-classification boundaries — private content kept off shared infrastructure — so AI answers from your knowledge without leaking it.

**Internal tooling development**
> Internal tools and dashboards built for how your team actually works. Replace spreadsheets and manual processes with software tailored to your operations.

**CRM setup & data integration**
> CRM configuration and the data plumbing that keeps it accurate. Lead capture, pipeline wiring, and integrations that move data between your CRM and the rest of your stack without manual re-entry.

### Infrastructure, DevOps & Consulting

**DevOps consulting**
> DevOps practices for teams that have outgrown manual deploys. CI/CD, infrastructure-as-code, and reliable release processes that ship faster with fewer surprises.

**CI/CD pipeline setup**
> Automated build, test, and deploy pipelines. Push-to-deploy workflows with checks that catch problems before production — so releases stop being events to dread.

**Cloud architecture (edge / Cloudflare)**
> Cloud and edge architecture on Cloudflare Workers and modern serverless. Designed for reliability, scale, and cost — solving capacity and performance problems before they become emergencies.

**Security hardening**
> Security hardening for applications and infrastructure: secure headers, secrets handling, hashed credentials, rate limiting, and fail-secure design. Production auth that actually holds up.

**Immutable infrastructure & zero-trust ingress**
> Immutable infrastructure and zero-trust ingress. Production example: a Fedora CoreOS reverse proxy terminating SSL on the LAN side for IDS/IPS inspection, hardened with fail2ban.

### Advisory (Business management consultant)

**Fractional CTO advisory**
> Fractional-CTO advisory for founders and agencies without a senior technical lead. Architecture decisions, technology choices, and a steady hand on reliability, scale, and compliance.

**Technical consulting & discovery**
> Technical discovery and consulting to scope hard problems before code is written. Honest assessment of what to build, what to buy, and what not to build at all.

**White-label technical subcontracting**
> White-label technical delivery for marketing and design agencies. Complex builds shipped under your brand, on time, without competing for your client relationship. Tenor stays invisible; you stay the agency of record.
