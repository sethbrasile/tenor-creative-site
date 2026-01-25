# External Integrations

**Analysis Date:** 2026-01-25

## APIs & External Services

**CRM:**
- GoHighLevel (GHL) - Planned for lead management and contact storage
  - SDK/Client: REST API via `ofetch`
  - Auth: GHL API Key/PAT (Planned)

**Payments:**
- Stripe - Used via direct payment links for subscriptions
  - Implementation: Payment links in `nuxt.config.ts` (`plan1PaymentLink`, etc.)

**Lead Capture & Widgets:**
- LeadConnector (GoHighLevel) - Chat widget integration
  - Implementation: External script in `app/app.vue`

## Data Storage

**Databases:**
- GoHighLevel CRM (Planned) acts as the primary data store for contact information

**File Storage:**
- Local filesystem/public assets for images and static files

**Caching:**
- None detected beyond Nuxt/Vercel default behaviors

## Authentication & Identity

**Auth Provider:**
- None detected (Public-facing site without user accounts)

## Monitoring & Observability

**Error Tracking:**
- Sentry (Mentioned as TODO in `server/api/contact.post.ts`)

**Performance:**
- Vercel Speed Insights (`@vercel/speed-insights`)

**Analytics:**
- Umami - Custom analytics instance at `analytics.tenorcreative.com`
  - Implementation: External script in `app/app.vue`

## CI/CD & Deployment

**Hosting:**
- Vercel

**CI Pipeline:**
- Vercel (Automatic deployments from Git)

## Environment Configuration

**Required env vars:**
- `VERCEL_ENV`: Used to determine environment state (production vs development)

**Secrets location:**
- Managed via Vercel dashboard environment variables

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- Contact form submissions (Planned for GHL API)

---

*Integration audit: 2026-01-25*
