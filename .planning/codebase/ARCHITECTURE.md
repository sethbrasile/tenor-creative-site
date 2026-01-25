# Architecture

**Analysis Date:** 2026-01-25

## Pattern Overview

**Overall:** Nuxt 4 Full-Stack Application

**Key Characteristics:**
- **Hybrid Rendering:** Supports both SSR and Static Site Generation (SSG).
- **File-based Routing:** Routing is automatically generated based on the `app/pages/` directory.
- **Serverless API:** API endpoints are hosted in `server/api/` and can be deployed as serverless functions.

## Layers

**UI Layer:**
- Purpose: Frontend presentation and user interaction.
- Location: `app/`
- Contains: Vue components, pages, layouts, and assets.
- Depends on: Vue 3, Nuxt 4, Tailwind CSS.
- Used by: End users.

**Data Layer:**
- Purpose: Providing static content and pricing information.
- Location: `app/data/`
- Contains: TypeScript files exporting static data (e.g., `pricing.ts`, `solutions.ts`).
- Depends on: None.
- Used by: UI components (e.g., `PricingTable.vue`).

**API Layer:**
- Purpose: Handling server-side logic and external integrations.
- Location: `server/api/`
- Contains: Nitro event handlers for API requests.
- Depends on: HubSpot API client, Nuxt runtime config.
- Used by: UI components via `fetch` or `useFetch`.

## Data Flow

**Contact Form Submission:**

1. User fills out `app/components/Contactform.vue`.
2. Component sends a POST request to `/api/contact`.
3. `server/api/contact.ts` receives the request and interacts with HubSpot CRM.
4. Response is returned to the component to show success/error state.

**State Management:**
- **Local State:** Managed via Vue's `ref`, `reactive`, and `computed` within components.
- **Global Config:** Managed via Nuxt's `useRuntimeConfig()` for environment variables and public settings.

## Key Abstractions

**Nuxt Modules:**
- Purpose: Extends Nuxt functionality with pre-built modules.
- Examples: `@nuxt/image`, `@nuxtjs/seo`, `@nuxt/icon`.

**Server Event Handlers:**
- Purpose: Standardized way to handle server-side requests.
- Examples: `server/api/contact.ts` using `defineEventHandler`.

## Entry Points

**Main App Entry:**
- Location: `app/app.vue`
- Triggers: Initial page load.
- Responsibilities: Configures SEO metadata, scripts (analytics, widgets), and provides the main layout wrapper.

**Server Entry:**
- Location: `server/api/contact.ts`
- Triggers: POST requests to `/api/contact`.
- Responsibilities: Validates and forwards contact information to HubSpot.

## Error Handling

**Strategy:** Component-level handling for UI, Try-Catch in API routes.

**Patterns:**
- UI: `errorState` ref in components to show user-friendly messages.
- API: Try-catch blocks in server handlers with fallback logic (e.g., updating existing HubSpot contact on 409 Conflict).

## Cross-Cutting Concerns

**Logging:** Vercel Speed Insights for performance monitoring.
**Validation:** Basic HTML5 validation in forms; TODO mentioned for server-side validation.
**Authentication:** Not explicitly implemented for users; HubSpot API uses internal API key.

---

*Architecture analysis: 2026-01-25*
