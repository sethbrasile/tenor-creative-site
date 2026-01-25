# Technology Stack

**Analysis Date:** 2026-01-25

## Languages

**Primary:**
- TypeScript 5.8.3 - Core logic and type safety across the application

**Secondary:**
- Vue.js 3.5.17 - UI component framework

## Runtime

**Environment:**
- Node.js (Vercel deployment target)

**Package Manager:**
- pnpm 8.4.0
- Lockfile: `pnpm-lock.yaml` present

## Frameworks

**Core:**
- Nuxt ^4.0.1 - Meta-framework for Vue.js
- Tailwind CSS ^3.4.17 - Utility-first CSS framework

**Testing:**
- Not detected (No project-specific test files found)

**Build/Dev:**
- Nuxt/Vite - Development server and build tool

## Key Dependencies

**Critical:**
- `zod` ^4.3.6 - Schema validation
- `@nuxtjs/seo` ^3.1.0 - SEO optimization for Nuxt

**Infrastructure:**
- `@vercel/speed-insights` ^1.2.0 - Performance monitoring
- `@nuxt/image` ^1.10.0 - Optimized image handling
- `@nuxt/icon` 1.15.0 - Icon management
- `@nuxtjs/google-fonts` 3.2.0 - Font optimization

## Configuration

**Environment:**
- Runtime configuration managed in `nuxt.config.ts` via `runtimeConfig`
- Key configs: `plan1PaymentLink`, `isProduction`, etc.

**Build:**
- `nuxt.config.ts`: Main framework configuration
- `tailwind.config.ts`: Tailwind CSS customization
- `tsconfig.json`: TypeScript configuration
- `package.json`: Dependency and script management

## Platform Requirements

**Development:**
- Node.js and pnpm

**Production:**
- Vercel (Production target mentioned in `nuxt.config.ts` and `app/app.vue`)

---

*Stack analysis: 2026-01-25*
