# Codebase Concerns

**Analysis Date:** 2026-01-25

## Tech Debt

**Server-side Validation & Error Handling:**
- Issue: `server/api/contact.ts` lacks proper validation for incoming request bodies and generic error handling.
- Files: `server/api/contact.ts`
- Impact: Potential for malformed data to be sent to HubSpot; poor developer experience when debugging failures.
- Fix approach: Implement a validation schema (e.g., Zod) and a robust error-handling wrapper.

**Missing Monitoring:**
- Issue: TODO comments indicate a plan to add Sentry for error tracking which hasn't been implemented.
- Files: `server/api/contact.ts`
- Impact: Production errors may go unnoticed.
- Fix approach: Integrate Sentry or a similar error-tracking service.

**Missing Test Suite:**
- Issue: No unit, integration, or E2E tests are present in the codebase.
- Files: Entire project
- Impact: High risk of regressions when modifying core logic or components.
- Fix approach: Set up Vitest for unit/integration tests and Playwright for E2E tests.

**Nuxt 4 Usage:**
- Issue: The project uses `nuxt: ^4.0.1` which is a major version that may still have experimental features or breaking changes relative to the more stable Nuxt 3.
- Files: `package.json`, `nuxt.config.ts`
- Impact: Potential instability or difficulty finding documentation/support for specific issues.
- Fix approach: Monitor Nuxt releases and consider pinning to a stable version if issues arise.

**Mixed Code Quality Patterns:**
- Issue: Some Vue components use `lang="ts"` while others are plain JavaScript. There is also significant commented-out code in the main pages.
- Files: `app/components/Contactform.vue`, `app/pages/index.vue`, `nuxt.config.ts`
- Impact: Inconsistent developer experience and harder maintenance.
- Fix approach: Standardize on TypeScript for all components and remove dead code.

## Known Bugs

**Contact Form Honeypot Bypass:**
- Symptoms: The `botcheck` hidden field exists in `Contactform.vue` but its value is never checked on the server.
- Files: `app/components/Contactform.vue`, `server/api/contact.ts`
- Trigger: Automated bots submitting the form directly to `/api/contact`.
- Workaround: None.

## Security Considerations

**Rate Limiting:**
- Risk: The `/api/contact` endpoint is public and lacks rate limiting.
- Files: `server/api/contact.ts`
- Current mitigation: None.
- Recommendations: Implement rate limiting at the infrastructure level (Vercel) or application level.

**Hardcoded Payment Links:**
- Risk: Stripe payment links are hardcoded in the Nuxt config. While not sensitive secrets, they are environment-specific.
- Files: `nuxt.config.ts`
- Current mitigation: Basic split between `$development` and `$production`.
- Recommendations: Move payment links to environment variables.

## Performance Bottlenecks

**Large Static Data Files:**
- Problem: `app/data/pricing.ts` and `app/data/solutions.ts` are large static files imported directly into components.
- Files: `app/data/pricing.ts`, `app/data/solutions.ts`
- Cause: All data is bundled and loaded in the client-side bundle.
- Improvement path: If data grows significantly, consider fetching from a headless CMS or using Nuxt's server-only data fetching if appropriate.

## Fragile Areas

**HubSpot Integration:**
- Files: `server/api/contact.ts`
- Why fragile: Uses `@ts-expect-error` for HubSpot SDK calls, suggesting type mismatches. Message history is managed by string concatenation (`${contact.properties.message}\n\n${message}`), which may fail if the initial field is null or exceeds character limits.
- Safe modification: Update HubSpot SDK and use proper type definitions. Add safety checks for null values before concatenation.

**Pricing Tier Logic:**
- Files: `app/components/PricingTable.vue`
- Why fragile: Hardcoded logic for tiers 1, 2, and 3.
- Safe modification: Refactor component to dynamically render tiers based on the provided data array.

## Scaling Limits

**Static Data Management:**
- Current capacity: Small number of plans and solutions.
- Limit: Becomes unmanageable as the number of offerings or content complexity increases.
- Scaling path: Move content to a CMS (e.g., Contentful, Strapi, or Nuxt Content).

## Missing Critical Features

**Automated Linting/Formatting:**
- Problem: No ESLint or Prettier configuration in `package.json`.
- Blocks: Consistent code style enforcement.

---

*Concerns audit: 2026-01-25*
