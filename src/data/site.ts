/**
 * Single source of truth for site-wide constants and structured content.
 * Facts here come from the build brief §6 (designer-src/attached_assets).
 * Reused across the one-pager sections now and routed pages later.
 */

export const site = {
  name: 'Tenor Creative LLC',
  shortName: 'Tenor Creative',
  url: 'https://tenorcreative.com',
  email: 'seth@tenorcreative.com',
  phone: '580-745-0069' as string,
  principal: 'Seth Brasile',
  location: 'Durant, OK',
  locality: 'Durant',
  region: 'OK',
  founded: '2024-09',
  tagline: 'The senior technical team agencies build on.',
  description:
    'Tenor Creative is the senior technical build arm that agencies and founders trust for custom software, automation, and resilient systems. Principal: Seth Brasile.',
} as const;

/** Ecosystem + founder links (dofollow authority cluster — brief §4/§7). */
export const links = {
  ppmc: 'https://pricklypearmarketing.co',
  portfolio: 'https://sethbrasile.com',
  github: 'https://github.com/sethbrasile',
  blog: 'https://bytemycache.com',
  linkedin: 'https://www.linkedin.com/in/sethbrasile-43a315a0',
} as const;

/**
 * Site nav, shared across every page (lives in Navbar, outside page layouts).
 * Anchors are root-relative (`/#id`) so they work from routed pages too, not
 * just the home one-pager. `cta` items render as the accent pill.
 */
export type NavItem = { label: string; href: string; cta?: boolean };
export const navItems: readonly NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'White-Label', href: '/#agency' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'AI Demo', href: '/ai-voice-demo', cta: true },
];

/** Selected work — framed as Tenor capability (brief §6). */
export const work = [
  {
    title: 'Margin Check',
    href: 'https://margin-check.com',
    blurb:
      'Solo-built SaaS ingesting Etsy CSV exports, surfacing real per-listing profit margins after all fees.',
    stack: ['Next.js 16', 'Cloudflare Workers', 'Neon + Drizzle', 'Stripe'],
  },
  {
    title: 'Potluck Planner',
    href: 'https://potluck-planner.com',
    blurb:
      'Event-coordination SaaS featuring passkeys/WebAuthn, OAuth, magic links, payments, email/SMS, and background job handlers.',
    stack: ['Next.js 15', 'Better Auth', 'Inngest', 'Twilio'],
  },
  {
    title: 'Team RAG Pipeline',
    href: null,
    blurb:
      'Dual-database privacy boundary by design — shared topics in Postgres, private topics in local SQLite that never touches shared infra. Data classification enforced at the storage layer.',
    stack: ['Python', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Immutable Reverse-Proxy Edge',
    href: null,
    blurb:
      'Fedora CoreOS immutable reverse proxy terminating SSL on the LAN side for IDS/IPS inspection. Deployed in production.',
    stack: ['Fedora CoreOS', 'NGINX', 'fail2ban'],
  },
] as const;

/** FAQ — also emitted as FAQPage JSON-LD for AI citability (brief §8). */
export const faq = [
  {
    q: 'What does Tenor Creative do?',
    a: 'Tenor Creative is a senior technical build arm specializing in custom software, automation, and systems architecture.',
  },
  {
    q: 'Does Tenor work white-label for agencies?',
    a: 'Yes. Tenor Creative operates as a white-label technical subcontractor for agencies, delivering complex builds under their brand without competing for the client relationship.',
  },
  {
    q: 'How is Tenor different from PPMC?',
    a: 'Tenor handles technical builds, automation, and systems. PPMC handles marketing, SEO, and web design.',
  },
  {
    q: 'How do I start a project?',
    a: 'Send a message through the contact form or email seth@tenorcreative.com to schedule a technical discovery conversation.',
  },
] as const;

/** Capabilities Tenor knows about — feeds Organization `knowsAbout`. */
export const knowsAbout = [
  'Custom Software Development',
  'SaaS Development',
  'Business Process Automation',
  'AI Agents',
  'Retrieval-Augmented Generation',
  'Cloud Infrastructure',
  'DevOps',
  'Security Hardening',
  'Technical Consulting',
] as const;
