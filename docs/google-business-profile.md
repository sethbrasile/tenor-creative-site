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
- **Phone:** none. Leave the listing without a number until the cancelled Tenor
  line is recovered. Do not use (580) 634-9375 — that number is on the PPMC
  Twilio account and may belong to a client.
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
> Custom software built around how your business actually works — not forced into a tool that almost fits. When spreadsheets and off-the-shelf apps hit their limits, we design and build software tailored to your operations on a modern, proven stack (Next.js, Cloudflare).

**SaaS development**
> Turn your idea into a working, revenue-ready software product. End-to-end SaaS development — user accounts, billing, dashboards, and the systems behind them — built on a modern edge stack (Next.js, Cloudflare, Postgres) for founders bringing a product to market.

**Full-stack web application development**
> Web-based applications your team and customers log in to and use every day. Custom portals, dashboards, and online tools built on a fast, modern stack (Next.js, React) — secure and ready to scale as your business grows.

**API development & integration**
> Connect the apps and systems your business already runs on. Custom integrations and APIs that sync data automatically between your tools, eliminate double entry, and make your software work as one connected system.

**Database design & architecture**
> Organize and structure your business data so it's accurate, secure, and ready to grow. Database design on proven systems (PostgreSQL, Neon) that replaces scattered spreadsheets and disconnected tools with one reliable source you can build on.

**Payment integration (Stripe)**
> Accept payments, subscriptions, and recurring billing inside your software or website. Secure checkout, automated invoicing, and renewal handling built in — so collecting revenue runs reliably without manual follow-up.

**Authentication systems (passkeys, OAuth, SSO)**
> Secure, modern login for your app or platform. Passwordless sign-in, single sign-on (SSO), and social login that protect customer accounts and cut password headaches — without slowing users down.

### Automation & AI Tooling

**Business process automation**
> Stop paying your team to do repetitive manual work. Automate data entry, approvals, reporting, and routine tasks so your people focus on higher-value work and your operations run faster with fewer errors.

**Workflow automation**
> Connect your apps and automate multi-step processes end to end. Orders, onboarding, notifications, and handoffs that run automatically and reliably — without anyone remembering to push the next button.

**AI agent development**
> Put AI to work on real tasks inside your business. Custom AI assistants and agents that handle support, research, and routine decisions — wired into the tools you already use, not generic chatbots.

**RAG pipeline development**
> Let AI answer questions from your own documents and data. Custom AI knowledge systems that search your company's information and give accurate, sourced answers — so staff and customers find what they need instantly.

**Internal tooling development**
> Replace messy spreadsheets and manual processes with tools built for your team. Custom internal apps and dashboards that match your workflow, centralize your information, and make daily operations faster.

**CRM setup & data integration**
> Get your CRM working the way your business actually sells. Setup, customization, and integrations that capture leads automatically, keep records accurate, and connect your CRM to the rest of your tools.

### Infrastructure, DevOps & Consulting

**DevOps consulting**
> Ship software faster and break things less. DevOps practices and automation that streamline how your team builds, tests, and releases — fewer outages, quicker fixes, and more dependable software.

**CI/CD pipeline setup**
> Automate testing and deployment so updates ship safely and on demand. Build pipelines that catch problems before customers do and let your team release improvements without manual, error-prone steps.

**Cloud architecture (edge / Cloudflare)**
> Run your software on cloud infrastructure that's fast, reliable, and cost-efficient. Cloud and hosting architecture designed to handle growth and traffic spikes without overspending or downtime.

**Security hardening**
> Protect your software, data, and customer accounts from attack. Security reviews and hardening that close common vulnerabilities, secure logins and data, and help you meet compliance requirements.

**Immutable infrastructure & zero-trust ingress**
> Lock down how traffic reaches your systems. Hardened, tamper-resistant infrastructure and zero-trust access controls that shrink your attack surface and keep your production environment secure and stable.

### Advisory (Business management consultant)

**Fractional CTO advisory**
> Senior technical leadership without a full-time executive hire. On-demand CTO guidance on technology decisions, vendor choices, team direction, and roadmap — so you build the right thing and avoid expensive mistakes.

**Technical consulting & discovery**
> Get clear, honest answers before you spend on development. Technical consulting that scopes your problem, weighs build-vs-buy, and gives you a realistic plan, timeline, and budget — no guesswork.

**White-label technical subcontracting**
> Senior development capacity for agencies, delivered under your brand. Take on complex software, automation, and infrastructure projects without hiring — we build behind the scenes and never touch your client relationship.
