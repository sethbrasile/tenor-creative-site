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
    shortName: "fast-start",
    description: "Perfect for new businesses or those looking to get started quickly - focused on getting you up and running with the essentials. Every business would benefit from this system.",
    available: true,
    name: "Fast Start Growth System",
    note: "+ one-time $299 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
      note: "1 team member | 500 SMS | 5,000 email",
    },
    popular: false,
    features: [
      "FREE High Converting Website",
      "FREE Hosting",
      "Review management",
      "Missed call text-back",
      "Web Chat + AI Chatbot",
      "Web Chat lead generation",
      "Phone number",
      "AI Voice (inbound)",
      "Citation management",
      "SMS list building",
      "Google Business Profile (GBP)",
      "GBP Call Tracking",
      // "500 SMS/Calls",
      // "5,000 Emails",
    ],
    button: {
      text: "I'm ready to grow my business",
      link: "/booking",
    },
  },
  {
    tier: 2,
    shortName: "business",
    description: "Perfect for most small service or retail businesses - focused on helping you do a better job at capturing and maximizing existing opportunities by building your list.",
    available: true,
    name: "Business Growth System",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$197",
      yearly: "$1970",
      note: "2 team members | 1,000 SMS | 10,000 email",
    },
    popular: true,
    features: [
      "All features in Fast Start",
      "Automated lead nurturing",
      "Follow up campaigns",
      "Reputation management",
      // "Review generation (get tons of reviews)",
      "Review generation",
      // "AI citation management (automatically keeps your business information synced across the web)",
      // "Unified inbox (SMS/Email/Chat/Social)",
      "GBP Messaging",
      "2-way SMS/Email/Social/GBP/Web",
      "Unified messaging inbox",
      "Payments/estimates/invoicing",
      "Text to pay",
      "Tap to pay",
      "Quickpay links",
      "Booking / calendar",
      "Birthday campaigns",
      // "1000 SMS/Calls",
      // "10,000 Emails",
    ],
    button: {
      text: "I'm ready to take my business to the next level",
      link: "/booking",
    },
  },
  {
    tier: 3,
    shortName: "all-in",
    description: "Perfect for serious businesses that want to go all-in on growth - focused on automating your marketing and sales processes to maximize your growth potential. This is the most powerful system we offer and is a complete marketing solution.",
    available: true,
    name: "ALL-IN Growth System",
    note: "+ one-time $799 setup fee",
    price: {
      monthly: "$397",
      yearly: "$3,970",
      note: "3 team members | 1,500 SMS | 15,000 email | $397 - $997 based on monthly usage",
    },
    popular: false,
    features: [
      "All features in Business Plus",
      // "AI Google Business Profile (GBP) optimization",
      "AI GBP optimization",
      "AI GBP management",
      "AI citation management",
      "AI reputation management",
      "AI suggested reviews helper",
      "AI voice (outbound)",
      "Automated GBP reporting",
      "Anniversary campaigns",
      "Remarketing campaign",
      "Referral campaigns",
      "Reactivation campaigns",
      "Social media planner",
      "Email marketing",
      // "1,500 SMS/Calls",
      // "15,000 Emails",
    ],
    button: {
      text: "I'm ready to go ALL IN on my business",
      link: "/booking",
    },
  },
];

export const oneOffPricing: Price[] = [
  {
    shortName: "website",
    available: true,
    name: "High Converting Website",
    note: "requires standard hosting",
    description: "Beautiful and tailored for your business, our mobile responsive and accessible websites are growth-system ready, and optimized to convert leads to customers.",
    price: {
      static: "$1,997",
    },
    popular: false,
    features: [
      "Optimized to convert",
      "Beautiful and tailored for your business",
      "Follows all marketing best practices",
      "Mobile responsive",
      "Fully accessible",
      "Growth system ready (See FAQ)",
      "No compromises (See FAQ)",
    ],
    button: {
      text: "Get a great website",
      link: "/booking",
    },
  },
  {
    shortName: "standard-hosting",
    available: true,
    name: "Standard Website Hosting",
    note: "+ one-time $99 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
    },
    popular: false,
    features: [
      "Business class hosting",
      "World class infrastructure",
      "Includes basic site revisions",
      "99.99% uptime",
      "SSL Included",
    ],
    button: {
      text: "Get started",
      link: "/booking",
    },
  },
  {
    shortName: "custom-website",
    available: true,
    name: "Custom Static Website",
    note: "requires performance hosting",
    description: "",
    price: "$5,997",
    popular: false,
    features: [
      "Custom designed static site",
      "Optimized to convert",
      "Built using the latest technologies",
      "Lightning fast",
      "Perfect technical SEO",
      "Perfect core web vitals",
      "Mobile responsive",
      "Fully accessible",
      "Growth system ready",
      // "Basic Analytics (Umami)",
    ],
    button: {
      text: "Get a fully custom site",
      link: "/booking",
    },
  },
  {
    shortName: "performance-hosting",
    available: true,
    name: "High Performance Hosting",
    note: "+ one time $299 setup fee",
    price: {
      note: "compatible with static sites",
      monthly: "$197",
      yearly: "$1970",
    },
    popular: false,
    features: [
      "Includes Business growth plan above",
      "Optimized hosting using latest technology",
      "Best performance hosting on the planet",
      "Bring your own site, or we build it",
      "Basic site revisions",
      "Yearly design review",
      "Built on a CDN",
      "Lightning fast",
      "99.99% uptime",
      "SSL Included",
    ],
    button: {
      text: "Get the best hosting in the world",
      link: "/booking",
    },
  },
  {
    shortName: "blog",
    available: true,
    name: "Blog addon",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
    },
    popular: false,
    features: [
      "Full CMS capabilities",
      "Can add to any of our sites",
      "Compatible with both Static and Standard"
    ],
    button: {
      text: "Reach my audience with content",
      link: "/booking",
    },
  },
  {
    shortName: "wordpress",
    available: true,
    name: "Wordpress hosting",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$297",
      yearly: "$2,970",
    },
    popular: false,
    features: [
      "The full Wordpress experience",
      "Free migration by WP experts",
      "Automated updates",
      "Automated backups",
      "Extremely high performance",
      "Integrated CDN",
      "Integrated email",
      "Performance monitoring",
      "No traffic limits or metering",
      "Free Object Cache Pro",
      "Automatic image optimization"
    ],
    button: {
      text: "Get the best WP hosting on the planet",
      link: "/booking",
    },
  },
  {
    shortName: "ai-marketing-assistant",
    available: true,
    name: "AI Marketing Agency",
    note: "+ one-time $499 setup fee",
    popular: false,
    price: {
      monthly: "$397",
      yearly: "$3,970",
      note: "$397/mo-$997/mo based on usage and needs",
    },
    features: [
      "AI Google Business Profile",
      "AI reputation management",
      "AI citation management",
      "AI chatbot on site",
      "AI content creation",
      "AI funnel building",
      "AI GBP posts and pictures",
      "AI GBP results reporting",
    ],
    button: {
      text: "Hire AI to ease your workload",
      link: "/booking"
    }
  },
  {
    // AI Receptionist
    shortName: "ai-receptionist",
    available: true,
    name: "AI Receptionist",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$197",
      yearly: "$1,970",
    },
    popular: false,
    features: [
      "AI receptionist for your business",
      "24/7 availability",
      "Answers calls and messages",
      "Handles appointment scheduling",
      "Handles customer inquiries",
      "Trained on your business",
    ],
    button: {
      text: "Get an AI receptionist",
      link: "/booking",
    },
  },
  {
    shortName: "ai-support",
    available: true,
    name: "AI Support Tech + Ticketing System",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$297",
      yearly: "$2970",
    },
    popular: false,
    features: [
      "AI Chatbot for customer inquiries",
      "Offer 24/7 support to your customers",
      "Trained on your business",
      "Integrated Ticketing system",
      "Automated ticket management",
      "Customizable workflows",
      "Analytics and reporting",
      "Scalable solution",
      "Improved customer satisfaction",
      "Reduced response times",
      "Increased efficiency",
      "Cost-effective support solution",
    ],
    button: {
      text: "Get AI support",
      link: "/booking",
    },
  },
  {
    // reach systems
    shortName: "reach",
    available: true,
    name: "Reach Systems",
    note: "Make sure to get the growth system stuff right first!",
    price: {
      static: "Contact us",
    },
    popular: false,
    features: [
      "Ad campaigns",
      "Managed social media",
      "Human-authored content creation",
      "Managed email marketing",
      "AI outreach lead generation",
      "Analytics and reporting",
      "Brand strategy",
      "Market research",
      "SEO optimization",
      "Managed funnels",
      "Managed lead magnets",
      "And more...",
    ],
    button: {
      text: "The foundation of my business is ready, I'm ready to reach my audience",
      link: "/reach",
    },
  },
]

export const prices: Price[] = [
  ...standardPricing,
  ...oneOffPricing,
];

export function getStandardPlanByTier(tier: number) {
  return standardPricing.find((item) => item.tier === tier);
}

export const tier1Features = getStandardPlanByTier(1)?.features || [];
export const tier2Features = getStandardPlanByTier(2)?.features || [];
export const tier3Features = getStandardPlanByTier(3)?.features || [];

export const features = [ ...tier1Features, ...tier2Features, ...tier3Features ];

export function getFeatureIsIncluded(tier: number, feature: string) {
  switch(tier) {
    case 1:
      return tier1Features.includes(feature)
    case 2:
      return tier2Features.includes(feature) || tier1Features.includes(feature)
    case 3:
      return tier3Features.includes(feature) || tier2Features.includes(feature) || tier1Features.includes(feature)
    default:
      return false
  }
}
