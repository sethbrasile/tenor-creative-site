# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Tenor Creative
**Generated:** 2026-01-25
**Category:** Marketing Agency / Professional Services

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#1E1B4B` | `--color-primary` |
| Secondary | `#4F46E5` | `--color-secondary` |
| CTA/Accent | `#06B6D4` | `--color-cta` |
| Background | `#FFFFFF` | `--color-background` |
| Text | `#0F172A` | `--color-text` |

**Color Notes:** Deep indigo + vibrant cyan on clean white. Evokes trust and professional growth.

### Typography

- **Heading Font:** Plus Jakarta Sans
- **Body Font:** Inter
- **Mood:** modern, professional, clean, corporate, friendly, approachable
- **Google Fonts:** [Plus Jakarta Sans + Inter](https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:wght@400;500;600;700;800|Inter:wght@300;400;500;600)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(15, 23, 42, 0.08)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(15, 23, 42, 0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(15, 23, 42, 0.12)` | Hero elements |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #06B6D4;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  background: #0891B2;
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #1E1B4B;
  border: 2px solid #1E1B4B;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #F1F5F9;
  border-radius: 24px;
  padding: 32px;
  box-shadow: var(--shadow-md);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
  border-color: #E2E8F0;
}
```

---

## Style Guidelines

**Style:** Soft UI Evolution
**Keywords:** Trust, Growth, Modern Professional, Subtly Dynamic, High Contrast Accessibility.

### Page Pattern

**Pattern Name:** Hero + Testimonials + CTA
- **Conversion Strategy:** Social proof before CTA. Use 3-5 testimonials with professional headshots.
- **CTA Placement:** Sticky Navbar CTA + Post-testimonials Hero section.
- **Section Order:** 1. Hero, 2. Problem/Opportunity, 3. Solution Pillars, 4. Success Stories (Social Proof), 5. Final CTA.

---

## Anti-Patterns (Do NOT Use)

- ❌ **Low contrast text** — Text must remain Slate-900 on White.
- ❌ **Generic Stock Photos** — Use real local business imagery or high-quality custom icons.
- ❌ **Sharp Corners** — Maintain a minimum 12px radius for a modern "Soft UI" feel.
- ❌ **Emojis as icons** — Use Lucide or Heroicons.

---

## Pre-Delivery Checklist

- [ ] Background is pure White (#FFFFFF)
- [ ] Primary text is Slate-900 (#0F172A) for 4.5:1+ contrast
- [ ] No emojis used as UI icons
- [ ] `cursor-pointer` on all interactive elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Responsive layouts: 375px, 768px, 1024px, 1440px
