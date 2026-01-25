# Coding Conventions

**Analysis Date:** 2026-01-25

## Naming Patterns

**Files:**
- Components: `PascalCase` (e.g., `app/components/Hero.vue`, `app/components/Button.vue`)
- Pages: `kebab-case` (e.g., `app/pages/sample-sites.vue`, `app/pages/frequently-asked-questions.vue`)
- Data/Logic: `kebab-case` (e.g., `app/data/pricing.ts`, `server/api/contact.ts`)

**Functions:**
- `camelCase` for general functions and event handlers (e.g., `defineEventHandler`, `getStandardPlanByTier`)

**Variables:**
- `camelCase` for constants and local variables (e.g., `standardPricing`, `isProduction`)

**Types:**
- `PascalCase` for Interfaces and Types (e.g., `Price`, `Solution`, `Props`)

## Code Style

**Formatting:**
- **Indentation:** 2 spaces
- **Quotes:** Double quotes in templates and script blocks mostly, though inconsistent.
- **Semicolons:** Inconsistent; used in some TypeScript definitions but often omitted in logic.
- **Tailwind CSS:** Used for all styling, typically inline in templates.

**Linting:**
- No formal linting configuration (ESLint/Prettier) detected in the project root or `package.json`.

## Import Organization

**Order:**
1. External libraries (e.g., `@hubspot/api-client`)
2. Local data/utilities (e.g., `~/data/pricing`)
3. Nuxt auto-imports (not explicitly imported but used globally)

**Path Aliases:**
- `~` or `@` refers to the project root or `app/` directory (Nuxt default).

## Error Handling

**Patterns:**
- `try-catch` blocks used in server-side API handlers (`server/api/contact.ts`).
- Manual error throwing with `throw new Error()` for missing environment variables or fatal logic errors.
- HTTP status code checking for specific service errors (e.g., checking for `409 Conflict` from HubSpot).

## Logging

**Framework:** `console`

**Patterns:**
- Minimal logging observed. Errors are mostly thrown or caught and handled.

## Comments

**When to Comment:**
- `TODO` comments used for planned features (e.g., "Add validation and error handling via sentry").
- Inline comments for disabling scripts or explaining configuration logic.

**JSDoc/TSDoc:**
- Not explicitly used; type information is provided via TypeScript interfaces.

## Function Design

**Size:** Generally small, focused functions in logic files; components contain standard Vue setup logic.

**Parameters:** Standard TypeScript parameters; props in components defined via `defineProps<Props>()`.

**Return Values:** Explicit return objects in API handlers; typed returns in utility functions.

## Module Design

**Exports:**
- Named exports for data and utility functions (e.g., `export const standardPricing`).
- Default exports for Nuxt server handlers (`export default defineEventHandler(...)`).

**Barrel Files:**
- Not extensively used; components and pages are managed by Nuxt's directory-based system.

---

*Convention analysis: 2026-01-25*
