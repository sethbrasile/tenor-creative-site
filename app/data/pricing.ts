export interface Price {
  tier?: number;
  shortName: string;
  description?: string;
  available: boolean;
  name: string;
  note?: string;
  price: string | {
    monthly?: string;
    yearly?: string;
    original?: string;
    compare?: string;
    note?: string;
    static?: string;
  };
  popular: boolean;
  features: string[];
  button: {
    text: string;
    link: string;
  };
}

export const standardPricing: Price[] = [
  {
    tier: 1,
    shortName: "starter",
    name: "The Starter",
    description: "For businesses that just need a professional digital presence to build credibility and handle basic inquiries.",
    available: true,
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
    },
    popular: false,
    features: [
      "5-Page Brochure Website",
      "Mobile Optimized Design",
      "HTTPS / SSL Security",
      "Custom Contact Form",
      "Google Business Profile Setup",
      "Basic On-Page SEO",
      "Business Class Hosting",
      "99.9% Uptime Guarantee"
    ],
    button: {
      text: "Start with Essentials",
      link: "/booking",
    },
  },
  {
    tier: 2,
    shortName: "growth",
    name: "The Growth Engine",
    description: "Our most popular system. Designed for businesses that want to be found on Google and convert visitors into customers on autopilot.",
    available: true,
    note: "+ one-time $997 setup fee",
    price: {
      monthly: "$297",
      yearly: "$2,970",
    },
    popular: true,
    features: [
      "Everything in The Starter",
      "Local SEO Setup (GMB/Citations)",
      "Missed Call Text-Back",
      "Web Chat Widget Integration",
      "Review Request Automation",
      "Unified Communication Inbox",
      "Local Schema Markup",
      "Video Walkthrough Training"
    ],
    button: {
      text: "Power Your Growth",
      link: "/booking",
    },
  },
  {
    tier: 3,
    shortName: "dominator",
    name: "The Dominator",
    description: "The complete marketing solution for businesses aggressive about growth and market leadership through automation.",
    available: true,
    note: "+ one-time $1,497 setup fee",
    price: {
      monthly: "$497",
      yearly: "$4,970",
    },
    popular: false,
    features: [
      "Everything in The Growth Engine",
      "Monthly SEO Articles/Content",
      "Active Rank Tracking & Reporting",
      "Database Reactivation Campaigns",
      "Advanced Sales Automations",
      "AI Marketing Assistant",
      "Social Media Planner",
      "Priority Support"
    ],
    button: {
      text: "Dominate Your Market",
      link: "/booking",
    },
  },
];

export const oneOffPricing: Price[] = [
  {
    shortName: "custom-site",
    available: true,
    name: "Enterprise Custom Web",
    note: "requires performance hosting",
    description: "Full-service custom development for unique needs, high-volume traffic, and advanced functionality.",
    price: "From $5,997",
    popular: false,
    features: [
      "Bespoke Design & UX",
      "Custom API Integrations",
      "Advanced Technical SEO",
      "Headless CMS Options",
      "Performance Optimization",
      "Launch Strategy"
    ],
    button: {
      text: "Request Custom Quote",
      link: "/booking",
    },
  },
];

export const aiServices: Price[] = [];

export const prices: Price[] = [
  ...standardPricing,
  ...oneOffPricing,
  ...aiServices,
];

export function getStandardPlanByTier(tier: number) {
  return standardPricing.find((item) => item.tier === tier);
}

export const tier1Features = getStandardPlanByTier(1)?.features || [];
export const tier2Features = getStandardPlanByTier(2)?.features || [];
export const tier3Features = getStandardPlanByTier(3)?.features || [];

export const features = [ ...tier1Features, ...tier2Features, ...tier3Features ];

export function getFeatureIsIncluded(tier: number, feature: string) {
  const plan = getStandardPlanByTier(tier);
  if (!plan) return false;
  
  if (plan.features.includes(feature)) return true;
  
  // Handle inheritance
  if (tier === 2 && tier1Features.includes(feature)) return true;
  if (tier === 3 && (tier1Features.includes(feature) || tier2Features.includes(feature))) return true;
  
  return false;
}
