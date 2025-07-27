export interface Price {
  shortName: string;
  available: boolean;
  name: string;
  note?: string;
  price: string | {
    monthly: string;
    original?: string;
    compare?: string;
    note?: string;
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
    shortName: "business",
    available: true,
    name: "Business Plan",
    note: "+ one-time $299 setup fee",
    price: {
      monthly: "$97",
      note: "3 team members included",
    },
    popular: true,
    features: [
      "High Converting Website",
      "Hosting",
      "Web Chat + AI Chatbot",
      "AI Answering Service",
      "Lead list generation",
      "Review generation",
      "Reputation management",
      "Missed call text-back",
      "Phone and SMS",
      "Unified inbox (SMS/Email/Chat/Social)",
      "Birthday Funnels",
      "Birthday Resell Campaigns",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  // {
  //   shortName: "business+site",
  //   available: true,
  //   name: "Business + Custom Site",
  //   note: "+ one-time $599 setup fee",
  //   price: {
  //     monthly: "$197",
  //     // original: "$1200",
  //   },
  //   popular: false,
  //   features: [
  //     "Everything in the Business Plan",
  //     "+ Fully Custom static website (below)",
  //     "Google Analytics"
  //   ],
  //   button: {
  //     text: "Get Started",
  //     link: "/contact",
  //   },
  // },
  {
    shortName: "business+",
    available: true,
    name: "Business Plus",
    note: "+ one-time $599 setup fee",
    price: {
      monthly: "$197",
    },
    popular: false,
    features: [
      "Everything in the Business Plan",
      "Call Tracking",
      "Payments and Invoicing",
      "Text-to-Pay",
      "Tap to Pay",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "all-in",
    available: true,
    name: "All-in Growth System",
    note: "+ one-time $1999 setup fee",
    price: {
      monthly: "$297",
      note: "3 team members included",
    },
    popular: false,
    features: [
      "Everything in Business Plan + Custom Site",
      "Everything in \"The AI Assist\" (below)",
      "Automated lead nurturing",
      "Call tracking",
      "Payments and Invoicing",
      "Booking / Calendar",
    ],
    button: {
      text: "Go All-in on Growth",
      link: "/contact",
    },
  },
];

export const oneOffPricing: Price[] = [
  {
    shortName: "website",
    available: true,
    name: "Just a great Website",
    note: "+ one-time $300 setup fee",
    price: {
      monthly: "$47",
    },
    popular: true,
    features: [
      "Optimized to convert",
      "Customized template-based site",
      "Integration ready (See FAQ below)",
      "No compromises (See FAQ below)",
      "Follows all best practices",
      "Hosting included",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "custom-website",
    available: true,
    name: "Fully Custom Website",
    note: "+ one-time $300 setup fee",
    price: {
      monthly: "$97",
    },
    popular: false,
    features: [
      "Custom static site",
      "Built using the latest technologies",
      "Best hosting on the planet",
      "Basic Google Business Profile",
      "Technical + Local SEO",
      "Basic Analytics (Umami)",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "ai-assist",
    available: true,
    name: "The AI Assist",
    popular: false,
    price: {
      monthly: "$97",
    },
    features: [
      "AI Google Business Profile",
      "AI Reputation Management",
      "AI Citation Management",
      "AI Chatbot on site",
      "AI Answering Service",
    ],
    button: {
      text: "Get Started",
      link: "/contact"
    }
  },
  {
    // reach services
    shortName: "reach",
    available: true,
    name: "Reach Services",
    note: "Make sure to get the stuff up ^ there right first!",
    price: {
      monthly: "custom",
    },
    popular: false,
    features: [
      "Ad Campaigns",
      "Social Media Management",
      "Content Creation",
      "Email Marketing",
      "Lead Generation",
      "Analytics and Reporting",
      "Brand Strategy",
      "Market Research",
      "SEO Optimization",
      "Funnels",
      "Lead Magnets",
      "And more...",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  }
]

export const prices: Price[] = [
  ...standardPricing,
  ...oneOffPricing,
];
