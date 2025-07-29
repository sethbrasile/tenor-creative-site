export interface Price {
  shortName: string;
  description: string;
  available: boolean;
  name: string;
  note?: string;
  price: string | {
    monthly: string;
    yearly?: string;
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
    shortName: "fast-start",
    description: "Perfect for new businesses or those looking to get started quickly - focused on getting you up and running with the essentials. Any business will benefit from this system.",
    available: true,
    name: "Fast Start System",
    note: "+ one-time $99 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
      note: "1 team member included",
    },
    popular: false,
    features: [
      "High Converting Website",
      "Hosting",
      "Review management",
      "Missed call text-back",
      "Web Chat + AI Chatbot",
      "Web Chat lead generation",
      "Phone number",
      "AI Voice (inbound)",
      "Lead generation campaign",
      "Reactivation campaign",
      "SMS list building",
      "Google Business Profile (GBP)",
      "GBP Call Tracking",
      "500 SMS/Calls",
      "5,000 Emails",
    ],
    button: {
      text: "I'm ready to grow my business",
      link: "/contact",
    },
  },
  {
    shortName: "business",
    description: "Perfect for most small service or retail businesses - focused on helping you do a better job at capturing and maximizing existing opportunities by building your list.",
    available: true,
    name: "Business System",
    note: "+ one-time $299 setup fee",
    price: {
      monthly: "$197",
      yearly: "$1970",
      note: "2 team members included",
    },
    popular: true,
    features: [
      "All features in Fast Start",
      "GBP Call tracking",
      "GBP Messaging",
      "Reputation management",
      "Review generation (get tons of reviews)",
      "AI citation management (automatically keeps your business information synced across the web)",
      "Unified inbox (SMS/Email/Chat/Social)",
      "2-way SMS/Email/Chat/Social",
      "Payments/estimates/invoicing",
      "Text to pay",
      "Tap to pay",
      "Quickpay links",
      "Booking / calendar",
      "Birthday campaigns",
      "1000 SMS/Calls",
      "10,000 Emails",
    ],
    button: {
      text: "I'm ready to take my business to the next level",
      link: "/contact",
    },
  },
  {
    shortName: "all-in",
    description: "Perfect for serious businesses that want to go all-in on growth - focused on automating your marketing and sales processes to maximize your growth potential. This is the most powerful system we offer and is a complete marketing solution.",
    available: true,
    name: "All-in Growth System",
    note: "+ one-time $599 setup fee",
    price: {
      monthly: "$297",
      yearly: "$2,970",
      note: "$297/mo-$997/mo based on usage. 3 team members included in base price",
    },
    popular: false,
    features: [
      "All features in Business Plus",
      "Automated lead nurturing",
      "AI Google Business Profile (GBP) optimization",
      "Automated local SEO reports",
      "AI reputation management",
      "AI voice (outbound)",
      "Follow up campaigns",
      "Anniversary campaigns",
      "Referral campaigns",
      "Additional reactivation campaigns",
      "Social planner",
      "Email marketing",
      "1,500 SMS/Calls",
      "15,000 Emails",
    ],
    button: {
      text: "I'm ready to go ALL IN on my business",
      link: "/contact",
    },
  },
];

export const oneOffPricing: Price[] = [
  {
    shortName: "website",
    available: true,
    name: "High Converting Website",
    note: "+ one-time $299 setup fee",
    price: {
      monthly: "$47",
      yearly: "$470",
    },
    popular: true,
    features: [
      "Optimized to convert",
      "Hosting included",
      "Beautiful and tailored for your business",
      "Follows all marketing best practices",
      "Growth system ready (See FAQ below)",
      "No compromises (See FAQ below)",
    ],
    button: {
      text: "Get a great website",
      link: "/contact",
    },
  },
  {
    shortName: "custom-website",
    available: true,
    name: "Custom Static Website",
    note: "+ one-time $599 setup fee",
    price: {
      monthly: "$297",
      yearly: "$2,970",
    },
    popular: false,
    features: [
      "Custom designed static site",
      "Google Business Profile",
      "Best in the industry",
      "Built using the latest technologies",
      "Lightning fast",
      "Best hosting on the planet",
      "Perfect technical SEO",
      "Perfect core web vitals",
      "Fully responsive",
      "Fully accessible",
      // "Basic Analytics (Umami)",
    ],
    button: {
      text: "Get a fully custom site",
      link: "/contact",
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
      "Fully managed blog",
      "Full CMS capabilities",
      "Can add to any plan",
    ],
    button: {
      text: "Get a custom blog",
      link: "/contact",
    },
  },
  {
    shortName: "ai-marketing-assistant",
    available: true,
    name: "AI Marketing Agency",
    note: "+ one-time $499 setup fee",
    popular: false,
    price: {
      monthly: "$297",
      yearly: "$2,970",
      note: "$297/mo-$997/mo based on usage and needs",
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
      link: "/contact"
    }
  },
  {
    // AI Receptionist
    shortName: "ai-receptionist",
    available: true,
    name: "AI Receptionist",
    note: "+ one-time $499 setup fee",
    price: {
      monthly: "$97",
      yearly: "$970",
    },
    popular: false,
    features: [
      "AI receptionist for your business",
      "24/7 availability",
      "Handles customer inquiries",
      "Trained on your business",
      "Improved customer satisfaction",
      "Reduced response times",
      "Increased efficiency",
      "Cost-effective solution",
    ],
    button: {
      text: "Get an AI receptionist",
      link: "/contact",
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
      link: "/contact",
    },
  },
  {
    // reach systems
    shortName: "reach",
    available: true,
    name: "Reach Systems",
    note: "Make sure to get the stuff up ^ there right first!",
    price: "Contact us",
    popular: false,
    features: [
      "Ad campaigns",
      "Social media management",
      "Content creation",
      "Email marketing",
      "AI outreach lead generation",
      "Analytics and reporting",
      "Brand strategy",
      "Market research",
      "SEO optimization",
      "Funnels",
      "Lead magnets",
      "And more...",
    ],
    button: {
      text: "I'm ready to reach my audience",
      link: "/contact",
    },
  },
]

export const prices: Price[] = [
  ...standardPricing,
  ...oneOffPricing,
];
