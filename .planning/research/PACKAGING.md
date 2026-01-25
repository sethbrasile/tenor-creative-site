# Service Packaging Research: Tenor Creative "Essentials"

**Domain:** Small Business Web & Marketing Services
**Researched:** Sun Jan 25 2026
**Confidence:** MEDIUM (Standard Industry Patterns)

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist in any "Professional Website" package. Missing these makes the service feel amateur.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **5-Page Structure** | Standard mental model: Home, About, Services, Contact, Blog/Gallery. | LOW | "One-pager" often feels insufficient for established biz. |
| **Mobile Responsiveness** | Non-negotiable for 2024+. Google indexes mobile-first. | LOW | CSS Grid/Flexbox standard. |
| **HTTPS/SSL Security** | Browser warnings scare customers away. | LOW | Free via Let's Encrypt/Cloudflare. |
| **Contact Form** | Email links are annoying/spammy. Users expect a form. | LOW | Needs spam protection (Recaptcha). |
| **Google Business Profile** | The "Phone Book" entry. Essential for showing up on maps. | LOW | Verification can be tricky (postcard). |
| **Basic On-Page SEO** | Title tags, Meta descriptions matching service keywords. | MEDIUM | often skipped by cheap builders, high value. |

### Differentiators (Competitive Advantage)

Features that set Tenor Creative apart from generic "Wix/Squarespace" DIY or cheap overseas agencies.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **"Missed Call Text Back"** | Stops leads going to competitors when owner is busy. High ROI. | MEDIUM | Requires GHL/Twilio integration. |
| **Unified Inbox** | Owners hate checking email + FB + IG + SMS separately. | MEDIUM | GHL App feature. |
| **Review Automation** | "One click to request review" builds reputation fast. | MEDIUM | SMS requests get higher conversion. |
| **Video Walkthrough** | "How to use your site" training. Personal touch. | LOW | Loom video embedded in dashboard. |
| **Local Schema Markup** | JSON-LD for "LocalBusiness" helps Google understand context. | MEDIUM | Technical differentiator most skip. |

### Anti-Features (Commonly Requested, Often Problematic)

Features to explicitly NOT build or sell in "Essentials".

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| **Custom E-commerce** | "I want to sell a few things." | Explodes scope (shipping, tax, inventory). | Link to Shopify/Stripe Checkout links. |
| **Membership/Logins** | "Client portal." | Complexity nightmare for security/management. | GHL Client Portal (built-in) or Google Drive. |
| **"Pixel Perfect" Custom Design** | "Move this line 1px." | Kills profitability. Endless revisions. | **Template-based** with custom branding/colors. |
| **Unlimited Pages** | "I might need 50 pages." | Content gathering becomes the bottleneck. | Fixed 5-page scope + training to add more. |

## Service Bundling Strategy

### The "All-in-One" Essentials Bundle
Instead of selling "Web Design" (Commodity), sell "Digital Storefront System".

**Core Bundle:**
1.  **Brochure Website** (Credibility)
2.  **Google Map Pack** (Visibility)
3.  **CRM/Communication** (Conversion)

### Feature Dependencies

```
[Brochure Website]
    └──enhances──> [Google Business Profile] (Website button on maps)
    └──requires──> [Hosting/Domain]

[CRM Setup]
    └──requires──> [Brochure Website] (Embed forms/chat widget)
    └──enhances──> [Lead Conversion]

[Local SEO]
    └──requires──> [Google Business Profile]
    └──requires──> [Brochure Website] (On-page optimization)
```

## MVP Packaging Recommendation

### Tier 1: "The Starter" (Brochure Web Only)
*For businesses that just need a URL for their business card.*
*   Home, About, Services, Contact.
*   Mobile Optimized.
*   Hosting & SSL.
*   *Excluded:* Advanced SEO, CRM features.

### Tier 2: "The Growth Engine" (Recommended / Best Value)
*For businesses that want new customers from Google.*
*   **Everything in Tier 1** PLUS:
*   **Local SEO Setup:** GMB Claiming, Keyword Optimization, Citations.
*   **CRM Lite:** Missed Call Text Back, Web Chat Widget.
*   **Review Automation:** SMS request setup.

### Tier 3: "The Dominator" (Monthly Retainer)
*For businesses aggressive about growth.*
*   **Everything in Tier 2** PLUS:
*   Monthly SEO Articles/Content.
*   Active Rank Tracking & Reporting.
*   Database Reactivation Campaigns (Email/SMS blasts).

## Pricing Psychology Notes
*   **Anchor Price:** Show the "Custom Development" price ($5,000+) crossed out or as a comparison column.
*   **Setup vs. Monthly:**
    *   *High Setup / Low Monthly:* Good for cash flow, harder to sell.
    *   *Low Setup / High Monthly:* Easier entry, higher LTV, requires contract.
    *   *Recommendation:* **Moderate Setup ($X,XXX) + Maintenance ($XX/mo)** covering hosting/software.
*   **"Pays for Itself":** Frame price in terms of client jobs (e.g., "One new roof pays for the whole year").

## Implementation Checklist (GHL Integration)

*   [ ] **Sub-Account Setup:** One sub-account per client.
*   [ ] **Twilio Registration:** A2P 10DLC registration is MANDATORY and slow. Start immediately.
*   [ ] **Snapshot Creation:** Create a master "Essentials" snapshot in GHL with:
    *   Pre-built forms.
    *   "Missed Call" workflow.
    *   "Review Request" workflow.
    *   Chat widget settings.

## Sources
*   Standard Agency Patterns (GoHighLevel Ecosystem, 2024-2025).
*   Google Search Essentials (Mobile-first indexing).
*   Moz Local SEO Ranking Factors (GMB importance).
