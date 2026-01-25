# Codebase Structure

**Analysis Date:** 2026-01-25

## Directory Layout

```
[project-root]/
├── app/                # Frontend application source
│   ├── assets/         # Static assets (CSS, etc.)
│   ├── components/     # Reusable Vue components
│   ├── data/           # Static data files
│   ├── layouts/        # Nuxt layouts
│   └── pages/          # File-based routing pages
├── public/             # Static files served at root
├── server/             # Server-side API and logic
│   └── api/            # API endpoints
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## Directory Purposes

**app/components/:**
- Purpose: Atomic and composite UI elements.
- Contains: `.vue` files for buttons, forms, sections, etc.
- Key files: `app/components/Button.vue`, `app/components/Contactform.vue`, `app/components/PricingTable.vue`.

**app/pages/:**
- Purpose: Application pages corresponding to URLs.
- Contains: `.vue` files representing routes.
- Key files: `app/pages/index.vue`, `app/pages/pricing.vue`, `app/pages/contact.vue`.

**app/data/:**
- Purpose: Hardcoded content and configuration for the site.
- Contains: TypeScript data files.
- Key files: `app/data/pricing.ts`, `app/data/solutions.ts`.

**server/api/:**
- Purpose: Backend functionality.
- Contains: Nitro event handlers.
- Key files: `server/api/contact.ts`.

## Key File Locations

**Entry Points:**
- `app/app.vue`: Root Vue component.
- `app/pages/index.vue`: Home page.

**Configuration:**
- `nuxt.config.ts`: Core framework configuration.
- `tailwind.config.ts`: Styling configuration.
- `tsconfig.json`: TypeScript configuration.

**Core Logic:**
- `server/api/contact.post.ts`: CRM integration logic (Zod validation).

**Testing:**
- Not detected (no dedicated tests directory found).

## Naming Conventions

**Files:**
- Components: PascalCase (e.g., `PricingCard.vue`, `IconButton.vue`).
- Pages: lowercase or kebab-case (e.g., `about.vue`, `privacy.vue`).
- Data: camelCase (e.g., `pricing.ts`).

**Directories:**
- lowercase (e.g., `components`, `layouts`, `pages`).

## Where to Add New Code

**New Feature:**
- Primary code: Create a new page in `app/pages/` or a new component in `app/components/`.
- Logic: If server-side logic is needed, add a file in `server/api/`.

**New Component/Module:**
- Implementation: `app/components/[ComponentName].vue`.

**Utilities:**
- Shared helpers: Currently missing a dedicated `utils/` or `composables/` directory, but would likely live in `app/utils/` or `app/composables/`.

## Special Directories

**public/:**
- Purpose: Contains static assets like favicons, site manifest, and PDF downloads.
- Generated: No.
- Committed: Yes.

**.planning/:**
- Purpose: Contains codebase analysis and development plans.
- Generated: Yes (by Antigravity).
- Committed: Yes.

---

*Structure analysis: 2026-01-25*
