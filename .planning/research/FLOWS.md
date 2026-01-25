# Site Architecture & Flows

**Domain:** Lead Generation Agency
**Researched:** Jan 25 2026
**Confidence:** HIGH (Based on standard agency conversion patterns and analysis of current offerings)

## Recommended Sitemap

A streamlined structure focused on user problems rather than internal methodology (shifting away from "4 Rs").

```
Home (The Storefront)
├── Solutions (Dropdown)
│   ├── Local SEO (Get Found)
│   ├── Lead Capture (Get Leads)
│   ├── Sales Automation (Grow Sales)
│   ├── Reputation Management (Get Reviews)
│   └── Business Automation (Hamster Wheel)
├── AI Voice Demo (Key Differentiator)
├── Pricing
├── About (Trust)
└── Contact (Conversion)
```

### Sitemap Rationale

- **Solutions vs. Services:** Use "Solutions" to emphasize outcome ("Get Found") over the mechanism ("SEO").
- **Flatter Hierarchy:** Users should be 1 click away from their specific problem.
- **AI Voice Demo:** Elevated to top-level nav because it's a high-interest hook that proves capability immediately.
- **Pricing:** Transparency builds trust in the agency space where "Call for Quote" is annoying.

## CTA Flows

### 1. The "Cold Traffic" Funnel
*Goal: Build trust before asking for marriage.*

```
[Ad/Social] → [Landing Page / Solution Page]
                   ↓
           [Education/Agitation]
           (Problem identification)
                   ↓
             [Social Proof]
           (Reviews, "We've done this for X")
                   ↓
         [Secondary CTA: "See Demo"]
                   ↓
         [Primary CTA: "Book Strategy Call"]
```

### 2. The "Lead Magnet" Funnel (High Volume)
*Goal: Capture email for nurturing.*

```
[Home/Blog] → [CTA: "Get Free Local SEO Audit"]
                   ↓
             [Audit Form] (Name, Website, Email)
                   ↓
           [Results Page] (Teaser of issues)
                   ↓
       [Email Sequence] (Value + "We can fix this")
                   ↓
         [Booking Page]
```

### 3. The "Direct Booking" Flow (Warm Leads)
*Goal: Frictionless scheduling.*

```
[Referral/Return User] → [Home/Nav]
                   ↓
         [CTA: "Book Call"]
                   ↓
         [Calendar Embed] (GHL Calendar)
                   ↓
         [Pre-Call Survey] (Qualification)
                   ↓
         [Confirmation + SMS Reminder]
```

## CTA Placement Strategy

### Primary CTA: "Book Strategy Call"
*The high-value conversion goal.*

- **Location:**
  - Sticky Navbar (Right aligned)
  - Hero Section (Primary Button)
  - Bottom of every page (Footer Callout)
- **Visuals:** High contrast, solid color.
- **Microcopy:** "No pressure, just strategy."

### Secondary CTA: "Hear AI Demo" / "View Pricing"
*For users not ready to talk.*

- **Location:**
  - Hero Section (Secondary Button/Link)
  - Mid-page interruptions
- **Visuals:** Outline button or text link.

## Page-Specific Flows

### Home Page Structure
1.  **Hero:** Value Prop + "Book Call" | "See Demo"
2.  **Social Proof:** Logos/Trust badges (Immediately validates the hero).
3.  **Problem Agitation:** "Tired of missing leads?"
4.  **Solution Matrix:** 3-4 key pillars (Get Found, Get Leads, Automation).
5.  **Differentiator:** "Why AI?" / "Why Tenor?"
6.  **Results/Testimonials:** "What clients say."
7.  **Final CTA:** "Ready to scale?"

### Solution Page Structure (e.g., Get Leads)
1.  **Headline:** Outcome-focused ("Stop Flushing 97% of Traffic").
2.  **The Struggle:** "You pay for ads, they click, they leave."
3.  **The Fix:** "Instant engagement with AI."
4.  **Features:** Chat widget, Lead magnets, Fast follow-up.
5.  **Pricing Teaser:** "Starts at $X."
6.  **CTA:** "Start Getting Leads."

## Sources
- Analysis of `app/data/solutions.ts` (Current Offerings)
- Analysis of `app/pages/index.vue` (Current Structure)
- Agency best practices (HubSpot, DigitalMarketer standards)
