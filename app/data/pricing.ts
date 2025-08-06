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
    tier: 99,
    shortName: "red-carpet",
    description: "You're driving traffic to your website, but 95-97% of visitors leave without taking action. That's money walking out the door. This is your all-in-one system to greet, engage, and convert website visitors on autopilot.",
    available: true,
    name: "Red Carpet Lead Generation System",
    note: "+ 199 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970"
    },
    popular: false,
    features: [
    ],
    button: {
      text: "",
      link: "/pricing",
    }
  },
  {
    tier: 1,
    shortName: "fast-start",
    description: "Perfect for new businesses or those looking to get started quickly with some powerful systems focused on getting you up and running with the essentials for managing customer relationships and turning leads into customers. Start here! It's no sweat to upgrade later.",
    available: true,
    name: "Fast Start Growth System",
    note: "+ one-time $299 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
      note: "$97 - $197 based on usage",
    },
    popular: false,
    features: [
      "FREE High Converting Website",
      "FREE Hosting",
      "Google Business Profile (GBP)",
      "Citation management",
      "Automated review requests",
      "Missed call text-back",
      "Web chat widget",
      "Lead generating system",
      "SMS list building",
      "Follow up campaigns",
      "Phone number + phone features",
      "GBP call tracking",
      "Automations and workflows",
      "Integrated mobile app",
      "1 team member",
      "500 SMS",
      "5,000 Emails",
    ],
    button: {
      text: "I'm ready to grow my business",
      link: "/booking",
    },
  },
  {
    tier: 2,
    shortName: "business",
    description: "Perfect for serious service and retail businesses that want to go ALL-IN on growth! This system will give you all the systems and tools you need to capture and maximize every opportunity.",
    available: true,
    name: "Business Growth System",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$297",
      yearly: "$2,970",
      note: "$297 - $997 based on usage",
    },
    popular: true,
    features: [
      "All features in Fast Start Growth",
      "Automated lead nurturing",
      "Reputation management",
      // "Review generation (get tons of reviews)",
      // "AI citation management (automatically keeps your business information synced across the web)",
      // "Unified inbox (SMS/Email/Chat/Social)",
      "AI chatbot",
      "AI answering service",
      // "AI voice (outbound coming soon!)",
      "GBP messaging",
      "Email marketing system",
      "2-way SMS/Email/Social/GBP/Web",
      "Unified messaging inbox",
      "Unknown number intelligence",
      "Payments",
      "Estimates",
      "Invoicing",
      "Text to pay",
      "Tap to pay",
      "Quickpay links",
      "Unified Social media posting",
      "Social media planner",
      "Booking / calendar system",
      "Birthday campaigns",
      "Anniversary campaigns",
      "Remarketing campaign",
      "Referral campaigns",
      "Reactivation campaigns",
      "Newsletter campaigns",
      "3 team members",
      "1,500 SMS",
      "15,000 email",
    ],
    button: {
      text: "I'm ready to take my business to the next level",
      link: "/booking",
    },
  },
  {
    tier: 3,
    shortName: "business-plus-ai",
    description: "Focused on automating your marketing and sales processes to maximize your growth potential. This is the most powerful system we offer and is a complete marketing solution and includes a wealth of advanced AI marketing features.",
    available: true,
    name: "Business Growth + AI System",
    note: "+ one-time $799 setup fee",
    price: {
      monthly: "$497",
      yearly: "$4,970",
      note: "$497 - $1197 based on usage",
    },
    popular: false,
    features: [
      "All features in Business Growth",
      // "AI Google Business Profile (GBP) optimization",
      "AI GBP automation",
      "AI citation automation",
      "AI reputation automation",
      "AI marketing assistant",
      "AI content writing",
      "AI funnel builder",
      "AI automation assistant",
      "AI route planner",
      "Call recording and AI transcription",
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
      "Optimized hosting using latest technology",
      "Best performance hosting on the planet",
      "Bring your own site static site, or we build it",
      "Basic site revisions",
      "Yearly design review",
      "Infrastructure built on a CDN",
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
      "SEO Analytics and reporting",
      "Brand strategy",
      "Market research",
      "Keyword research",
      "Trending topic content",
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

export const aiServices: Price[] = [
  {
    shortName: "citation-mgmt",
    available: true,
    popular: false,
    name: "Automated Citation Management",
    note: "+ one time $199 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
    },
    features: [
      "Keep you business info accurate everywhere",
      "Auto sync with GBP",
      "Duplicate detection",
      "62 directory integrations",
      "Supports new directories as they appear",
    ],
    button: {
      text: '',
      link: '/',
    }
  },
  {
    shortName: "ai-gbp",
    available: true,
    popular: false,
    name: "AI GBP Automation",
    note: "+ one time $199 setup fee",
    price: {
      monthly: "$297",
      yearly: "$2,970",
    },
    features: [
      "AI trains on your business over time",
      "AI reputation management",
      "AI optimize Business Description",
      "AI optimize services list",
      "AI optimize service descriptions",
      "AI optimize uploaded images",
      "AI GBP content creation",
      "AI automate image uploads",
      "AI automate video uploads",
      "AI automate posts/updates",
      "AI automate review replies",
      "AI automate questions/answers",
      "AI auto flag bad reviews",
      "AI review authoring flow (help for customer)",
      "Weekly GBP performance reporting",
      "Weekly heatmaps",
      "GBP change alerts",
      "Human-in-the loop approval options",
      "Easy ongoing image upload options",
    ],
    button: {
      text: '',
      link: '/',
    }
  },
  {
    shortName: "ai-marketing-agency",
    available: true,
    name: "AI Marketing Agency",
    note: "+ one-time $499 setup fee",
    popular: false,
    price: {
      monthly: "$547",
      yearly: "$5,470",
      note: "$547/mo-$997/mo based on usage and needs",
    },
    features: [
      "AI GBP Automation",
      "AI voice (outbound)",
      "AI chatbot",
      "AI content creation",
      "AI funnel building",
    ],
    button: {
      text: "Hire AI to market your business",
      link: "/booking"
    }
  },
  {
    // AI Receptionist
    shortName: "ai-receptionist",
    available: false,
    name: "AI Receptionist",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$197",
      yearly: "$1,970",
      note: "$197/mo-$997/mo based on usage and needs"
    },
    popular: false,
    features: [
      "AI receptionist for your business",
      "Phone number and phone features",
      "AI voice (inbound)",
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
      note: "not compatible with regular web/ai chat",
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
]

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
