export interface Price {
  shortName: string;
  available: boolean;
  name: string;
  note?: string;
  price: string | {
    monthly: string;
    original?: string;
    compare?: string;
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
    shortName: "basic",
    available: true,
    name: "Turnkey site",
    note: "+ one-time $300 setup fee",
    price: {
      monthly: "$229",
    },
    popular: true,
    features: [
      "Custom site (static)",
      "Hosting included",
      "Basic Google Business Profile",
      "Unlimited small edits",
      "1 design revision per year",
      "Contact form",
      "Technical + Local SEO",
      "Basic Analytics (Umami)",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "blog",
    available: true,
    name: "Turnkey blog",
    note: "+ one-time $300 setup fee",
    price: {
      monthly: "$449",
      // original: "$1200",
    },
    popular: false,
    features: [
      "Turnkey site",
      "SEO-optimized blog",
      "Content dramatically helps SEO",
      "Static HTML (even though it's a blog!)",
      "Built-in CMS",
      "Optional comments system",
      "Optional Google Analytics",
      // "Support via ticketing system",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "advanced",
    available: false,
    name: "Advanced SEO and content",
    note: "NO commitment",
    price: "TBD",
    // price: {
    //   // monthly: "$2997",
    // },
    popular: false,
    features: [
      "Turnkey blog",
      "Advanced Google Business Profile",
      "Monthly SEO audits",
      "Monthly SEO reports",
      "Search Console Management",
      "Data-driven content strategy",
      "1 Human-authored blog post monthly",
      "Advanced Analytics (your choice)",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  }
];

export const oneOffPricing: Price[] = [
  {
    shortName: "advance-gmb",
    available: true,
    name: "Advanced Google Business Profile",
    price: {
      monthly: "$129",
      compare: "$400/mo",
    },
    popular: false,
    features: [
      "Fully managed GMB",
      "Managed by experts",
      "Get more calls and visits",
      "Curate real reviews from your customers",
      "Citation management",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    // Price goes up if bandwidth exceeds 200GB/mo on avg monthly
    shortName: "hosting",
    available: true,
    name: "Hosting",
    note: "+ one-time $300 setup fee",
    price: {
      monthly: "$49",
    },
    popular: false,
    features: [
      "Fully managed hosting",
      "Best possible performance",
      "Wordpress OR static HTML",
      "Bot Protection",
      "Automatic updates (WP)",
      "Automatic daily backups (WP)",
      "Includes Staging Site (WP)",
      // "Support via email",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "custom",
    available: true,
    name: "Custom site",
    price: "$4,795",
    note: "Non-recurring",
    popular: false,
    features: [
      "Own your source code",
      "Up to 8 pages",
      "Custom static site",
      "OR custom WP theme",
      "Logo design or HD upgrade",
      "Up to 3 revisions",
      "Static reviews embed",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "content",
    available: true,
    name: "Content writing",
    price: "$.09/word",
    note: "Non-recurring",
    popular: false,
    features: [
      "SEO-optimized content",
      "Human-authored",
      "Up to 2 revisions",
      "Up to 1,000 words",
      "Turnaround: 1 week",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    shortName: "leadgen",
    available: false,
    name: "Warm lead gen",
    price: "TBD",
    // price: "$1497/mo",
    note: "NO commitment",
    popular: false,
    features: [
      "High converting leads every month",
      "No commitment",
      "State of the art automated AI system",
      "Guaranteed to impress",
      "Already warm when you get them",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
  {
    shortName: "full",
    available: false,
    name: "Full digital marketing suite",
    // price: "$5497/mo",
    price: "TBD",
    note: "NO commitment",
    popular: false,
    features: [
      "Includes Everything you see on this page",
      "No commitment",
      "Campaigns tailored to your business",
      "Funnel optimization and tracking",
      "CRM integration",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
]

export const prices: Price[] = [
  ...standardPricing,
  ...oneOffPricing,
];
