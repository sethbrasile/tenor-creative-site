# Phase 01: Foundation & Strategy - Research

**Researched:** Jan 25, 2026
**Domain:** Infrastructure, GHL Integration, Legal & Tech Debt
**Confidence:** HIGH

## Summary

Phase 01 focuses on stabilizing the codebase, establishing the GoHighLevel (GHL) integration, and setting up global brand elements. The research confirms that GHL does not have an official Node.js SDK, necessitating a standard REST API approach using Nuxt's built-in `ofetch`. Technical debt identified includes legacy HubSpot dependencies, duplicate legal pages, and missing server-side validation.

**Primary recommendation:** Use `ofetch` for GHL API v2 interactions and implement `zod` for robust server-side validation to resolve "TECH-01" remediation requirements.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Nuxt | 4.x | Framework | Current project foundation. |
| ofetch | (Built-in) | API Client | Standard Nuxt/Nitro tool for HTTP requests. |
| Zod | ^3.23.0 | Validation | Industry standard for type-safe schema validation. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @nuxt/icon | ^1.15 | UI Icons | Used for the "Prickly Pear" badge and global UI. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| ofetch | axios | Axios adds bundle size; ofetch is already integrated and optimized for Nitro. |
| GHL Community SDK | Manual Fetch | Community SDKs for GHL are often outdated or incomplete (v1 vs v2). Manual fetch is more reliable. |

**Installation:**
```bash
pnpm install zod
pnpm remove @hubspot/api-client
```

## Architecture Patterns

### Recommended Project Structure
```
app/
├── components/
│   ├── brand/
│   │   └── BrandBridge.vue  # New component for Prickly Pear bridge
├── pages/
│   ├── privacy.vue          # Consolidated from privacy-policy.vue
│   ├── terms.vue            # Consolidated from terms-of-use.vue
server/
├── api/
│   └── contact.post.ts      # Updated to use GHL + Zod validation
├── utils/
│   └── ghl.ts               # Shared GHL API client logic
```

### Pattern 1: GHL API Client (Server-side)
**What:** A lightweight utility wrapper for GHL API v2 using `ofetch`.
**When to use:** All server-side CRM interactions (Contact creation, Tagging).
**Example:**
```typescript
// server/utils/ghl.ts
export const ghlFetch = $fetch.create({
  baseURL: 'https://services.cloud.msgndr.com/generic', // Example GHL base
  headers: {
    Authorization: `Bearer ${useRuntimeConfig().GHL_API_KEY}`,
    Version: '2021-04-15'
  }
})
```

### Anti-Patterns to Avoid
- **Hardcoded API Keys:** Always use `runtimeConfig` and `.env`.
- **Client-side API Calls:** Never call GHL directly from the browser to avoid leaking API keys.
- **Duplicate Legal Routes:** Multiple paths for the same legal content hurt SEO and maintainability.

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form Validation | Custom RegEx/Logic | Zod | Handles complex schemas and TypeScript inference. |
| API Error Handling | Custom Try/Catch | ofetch .catch() | Consistent error parsing from GHL. |

## Common Pitfalls

### Pitfall 1: GHL API v1 vs v2
**What goes wrong:** Using v1 API keys (limited) with v2 endpoints or vice versa.
**How to avoid:** Ensure all new development uses GHL API v2 (OAuth2 or Personal Access Tokens).
**Warning signs:** 401 Unauthorized or missing "v2" in documentation URLs.

### Pitfall 2: Jurisdiction Confusion
**What goes wrong:** Legal pages currently list both Oklahoma and Delaware.
**How to avoid:** Standardize on one (Delaware is more common for LLCs, but Oklahoma is local). Verification with user is needed, but `terms.vue` (Delaware) seems more complete.

### Pitfall 3: Manual Script Injection
**What goes wrong:** Hardcoding third-party scripts in `app.vue` with `if (isProduction)` blocks.
**How to avoid:** Use Nuxt's `head` configuration in `nuxt.config.ts` or a dedicated component for third-party scripts to keep `app.vue` clean.

## Code Examples

### GHL Contact Creation (Nuxt 4 / Nitro)
```typescript
// server/api/contact.post.ts
import { z } from 'zod'

const contactSchema = z.object({
  firstname: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().max(1000)
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, contactSchema.safeParse)
  if (!body.success) throw createError({ statusCode: 400, statusMessage: 'Bad Request' })

  // Logic to post to GHL v2
  return { success: true }
})
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| HubSpot SDK | GHL REST API | 2026 Strategy | Swapping CRM for agency-focused GoHighLevel. |
| Custom Validation | Zod Schemas | Nuxt 3+ | Full type-safety across client/server. |

## Open Questions

1. **Jurisdiction:** Should Legal pages use Oklahoma or Delaware? (Found both in current files).
2. **GHL Auth:** Will we use a Personal Access Token (PAT) or a full OAuth2 flow? (PAT is simpler for a single-site integration).

## Sources

### Primary (HIGH confidence)
- `highlevel.stoplight.io` - GHL API v2 Documentation
- `nuxt.com/docs` - Nuxt 4 standard patterns

### Secondary (MEDIUM confidence)
- `package.json` - Current dependency audit
- `app/pages/` - Existing legal content review

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Zod/ofetch are standard.
- Architecture: HIGH - Standard Nuxt 4 / Nitro patterns.
- Pitfalls: MEDIUM - GHL API versions can be confusing.

**Research date:** Jan 25, 2026
**Valid until:** Feb 25, 2026
