import { standardPricing } from "./pricing"

const fastStart = standardPricing.find((price) => price.shortName === 'fast-start')
const business = standardPricing.find((price) => price.shortName === 'business')
const ai = standardPricing.find((price) => price.shortName === 'business-plus-ai')

export const systems = [fastStart, business, ai].map((price) => {
  return {
    title: price?.name,
    slug: '',
    icon: "mdi:cogs",
    description: price?.description,
    features: price?.features
  }
})

export interface CTA {
  name: string;
  heading: string;
  description: string;
  buttonText: string;
  to: string;
}

export interface Image {
  url: string;
  caption: string;
  alt: string;
}

export interface Card {
  title: string;
  image: Image;
}

export interface Solution {
  title: string;
  slug: string;
  subtitle: string;
  pageTitle: string;
  description: string[];
  icon: string;
  accent?: 'purple' | 'blue' | 'emerald';
  image: Image;
  cta: CTA;
  cards: Card[];
}

/**
 * Core "Essentials" Solutions
 */
export const solutions: Solution[] = [
  {
    title: "Web Design",
    slug: "web-design",
    accent: "purple",
    subtitle: "High-performance digital storefronts built to convert.",
    pageTitle: "Websites that work as hard as you do.",
    icon: "heroicons:window",
    description: [
      "Your website is your first impression. We build fast, mobile-optimized sites that look professional and turn visitors into leads.",
    ],
    image: {
      url: "/img/hero.png",
      caption: "Professional brochure and essentials websites.",
      alt: "Modern web design showcase"
    },
    cards: [],
    cta: {
      name: "web-design",
      heading: "Build your digital foundation",
      description: "Get a professional website that converts.",
      buttonText: "View Web Packages",
      to: "/services/web-design",
    },
  },
  {
    title: "Local SEO",
    slug: "local-seo",
    accent: "blue",
    subtitle: "Dominate local search and get found by your customers.",
    pageTitle: "Be the first choice in your neighborhood.",
    icon: "heroicons:map-pin",
    description: [
      "We optimize your Google Business Profile and local citations to ensure you show up when customers are searching for your services.",
    ],
    image: {
      url: "/img/hero.png",
      caption: "Local search dominance.",
      alt: "Map with pins showing business locations"
    },
    cards: [],
    cta: {
      name: "local-seo",
      heading: "Get found everywhere",
      description: "Optimize your local presence today.",
      buttonText: "View SEO Packages",
      to: "/services/local-seo",
    },
  },
  {
    title: "CRM & Automation",
    slug: "crm-automation",
    accent: "emerald",
    subtitle: "Never miss a lead with intelligent GoHighLevel systems.",
    pageTitle: "Your sales process on autopilot.",
    icon: "heroicons:sparkles",
    description: [
      "From unified inboxes to missed call text-back, we automate the busywork so you can focus on your jobs.",
    ],
    image: {
      url: "/img/hero.png",
      caption: "Automated business workflows.",
      alt: "CRM automation dashboard"
    },
    cards: [],
    cta: {
      name: "crm-automation",
      heading: "Automate your growth",
      description: "Capture, nurture, and close leads automatically.",
      buttonText: "View Automation Packages",
      to: "/services/crm-automation",
    },
  },
]

export const comingSoon = [
  {
    title: "Content Strategy",
    slug: "content-strategy",
    description: "Great content cuts through the noise. We craft messaging that resonates with your audience, drives traffic, and turns visitors into customers.",
    icon: "bx:book-content",
    body: "Coming soon! We're developing a cutting-edge system that balances AI efficiency with human quality.",
    formId: "Gehnke4gfLrkxqNbNVKA",
    formName: "Content Strategy Waiting List Opt In",
  },
  {
    title: "AI Lead Generation",
    slug: "ai-lead-generation",
    description: "We use AI to reach out, locate and warm up high quality leads, delivering consistent conversions without the manual effort.",
    icon: "iconamoon:profile-duotone",
    body: "Coming soon! An AI agent that scours the globe for your perfect customer and warms them up for you.",
    formId: "iBYm9FiifibNxxCGPQZT",
    formName: "AI Lead Generation Waiting List Opt In"
  },
]
