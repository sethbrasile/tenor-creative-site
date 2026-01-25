# Phase 02: Core Experience - Research

**Researched:** 2026-01-25
**Domain:** Marketing Agency Web Implementation (StoryBrand + Nuxt 4)
**Confidence:** HIGH

## Summary

This phase focuses on implementing the primary marketing narrative using the **StoryBrand framework** within a high-polish, minimalist Nuxt 4 environment. The research confirms that a successful "Core Experience" for a service-based agency requires a clear transition from user pain points to a guided solution, supported by trust-building elements and a seamless upsell bridge to parent services.

**Primary recommendation:** Use a modular component approach to map StoryBrand sections to the Home and About pages, ensuring high information density is balanced with generous white space and subtle motion.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Nuxt | 4.x | Framework | Current project standard, excellent for SEO and performance. |
| Tailwind CSS | 3.4+ | Styling | Utilities for rapid, consistent minimalist UI. |
| Vue Use | 10.x | Utilities | Essential for scroll detection, intersection observers, and motion. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @nuxt/image | 1.x | Image Optimization | For high-polish visuals and fast loading. |
| ofetch | Built-in | API Client | Lightweight wrapper for GHL API submissions. |
| @nuxtjs/seo | 3.1.0 | SEO | Ensuring service pages rank for local keywords. |

## Architecture Patterns

### Recommended Project Structure
```
app/
├── components/
│   ├── storybrand/        # Section-specific components
│   │   ├── Problem.vue
│   │   ├── Plan.vue
│   │   ├── Success.vue
│   │   └── Guide.vue
│   ├── brand/
│   │   └── NeedMore.vue   # The Prickly Pear upsell bridge
│   └── shared/
│       └── ServiceBase.vue # Shared structural template for service pages
└── pages/
    ├── services/
    │   ├── web-design.vue
    │   ├── local-seo.vue
    │   └── crm-automation.vue
    ├── about.vue
    └── index.vue
```

### Pattern 1: StoryBrand Flow
**What:** Mapping the 7-part StoryBrand framework to UI sections.
**When to use:** Homepage and Service pages.
**Structure:**
1. **Hero:** Clear value prop + CTA.
2. **The Problem:** Agitate the customer's pain.
3. **The Guide:** Empathy ("We've been there") + Authority (Stats/Logos).
4. **The Plan:** 3 clear steps to work with Tenor.
5. **The Success:** Visual representation of the "After" state.

### Pattern 2: Service-Specific Accents
**What:** Using CSS variables or Tailwind classes to theme service pages.
**Why:** Subtly signals transition between different service domains while maintaining brand cohesion.
**Example:**
- Web Design: `text-purple-600`, `bg-purple-50`
- Local SEO: `text-blue-600`, `bg-blue-50`
- CRM/GHL: `text-emerald-600`, `bg-emerald-50`

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form Validation | Custom Regex | Zod | Type-safe, integrated with Nuxt 4. |
| Animations | Custom CSS Keyframes | Nuxt Transitions | Native support, handles enter/leave states automatically. |
| Image Sizing | Manual <img> tags | <NuxtImg> | Automatic WebP/Avif conversion and responsive sizes. |

## Common Pitfalls

### Pitfall 1: StoryBrand "Self-Focus"
**What goes wrong:** Making the "About" page about the company's history instead of how the company helps the customer.
**How to avoid:** Use the "Guide" positioning—position the customer as the hero and the company as the mentor with the plan.

### Pitfall 2: GHL Iframe Layout Shift
**What goes wrong:** Iframe takes time to load, causing layout jumps.
**How to avoid:** Set explicit height/width or use a skeleton loader in a wrapper component.

### Pitfall 3: Over-Animation
**What goes wrong:** Too many slide/fade effects distract from the minimalist "pro-max" feel.
**How to avoid:** Stick to the "subtle fade and slide" rule—no scroll-triggered parallax or bouncy effects.

## Code Examples

### Subtle Page Transition (Nuxt 4)
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})

// app.vue
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
```

### GHL API Lead Submission
```typescript
// server/api/contact.post.ts (Pattern)
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, contactSchema);
  return await ghlFetch('/contacts/', {
    method: 'POST',
    body: {
      ...body,
      tags: ['Website Lead', body.service]
    }
  });
});
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Multi-page Forms | Single-action API forms | 2024+ | Higher conversion, better UI control. |
| Generic Service Lists | Story-driven Service Pages | 2025 | Better engagement, lower bounce rates. |
| HubSpot Embeds | GHL + Custom API Wrappers | 2025 (Project) | Unified CRM/Marketing data. |

## Open Questions

1. **GHL Calendar Styling:** GHL calendars are notoriously difficult to style inside iframes. 
   - Recommendation: Use the iframe for now but ensure it's wrapped in a clean container that matches the site's whitespace patterns.
2. **Team Photography:** The About page requires "The Guide" positioning with a team intro. 
   - Recommendation: Use placeholders if high-res headshots are unavailable, but prioritize getting "pro-max" quality photos to match the site style.

## Sources

### Primary (HIGH confidence)
- [Nuxt 4 Documentation](https://nuxt.com/docs) - Transitions, Components, API.
- [StoryBrand Framework](https://storybrand.com) - 7-part messaging structure.

### Secondary (MEDIUM confidence)
- [Awwwards Minimalist Design](https://www.awwwards.com/websites/minimal/) - UI/UX inspiration for "pro-max" feel.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Aligned with current project.
- Architecture: HIGH - Modular Vue/Nuxt best practices.
- Pitfalls: MEDIUM - Based on common agency site mistakes.

**Research date:** 2026-01-25
**Valid until:** 2026-02-25
