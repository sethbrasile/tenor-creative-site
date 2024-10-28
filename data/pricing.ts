export const standardPricing = [
  {
    name: "Turnkey Site",
    price: {
      monthly: "$197",
      original: "$600",
    },
    popular: true,
    features: [
      "Everything in the New Site service (below)",
      "+1 design revision per year",
      "Dynamic reviews embed",
      "Technical + Local SEO",
      "Google Business Profile Management",
      "Support via email",
    ],
    button: {
      text: "Get Started (Most Popular)",
      link: "/contact?plan=turnkey",
    },
  },
  {
    name: "Pro Services",
    price: {
      monthly: "$697",
      original: "$1200",
    },
    popular: false,
    features: [
      "Everything in the Turnkey Site plan",
      "+1 design revision per month",
      "Optional Blog",
      "Google Analytics Management",
      "Google Search Console Management",
      "Support via text/call/email",
    ],
    button: {
      text: "Get Started",
      link: "/contact?plan=pro",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    features: [
      "Everything in Pro Services",
      "Unlimited revisions",
      "Complete SEO",
      "Monthly content strategy",
      "12 human-authored blog posts per year",
      "Google Ads Management",
      "Choose your own support experience",
    ],
    button: {
      text: "Contact us",
      link: "/contact?plan=enterprise",
    },
  },
];

export const oneOffPricing = [
  {
    name: "New Site",
    price: "$4,795",
    note: "One time + optional $29/mo hosting",
    popular: false,
    features: [
      "Up to 8 pages",
      "Static site (optimal performance)",
      "Logo design",
      "Custom site design",
      "Up to 3 revisions",
      "Static reviews embed",
    ],
    button: {
      text: "Get Started",
      link: "/contact?plan=new-site",
    },
  },
  {
    // Price goes up if bandwidth exceeds 200GB/mo on avg monthly
    name: "Hosting",
    note: "+ one-time $300 setup fee",
    price: {
      monthly: "$29",
    },
    popular: false,
    features: [
      "Fully managed hosting",
      "Best possible performance",
      "Wordpress OR static HTML",
      "Automatic updates",
      "Automatic daily backups",
      "Includes Staging Site",
      "Support via email",
    ],
    button: {
      text: "Get Started",
      link: "/contact?plan=hosting",
    },
  },
  {
    // Price goes up if bandwidth exceeds 200GB/mo on avg monthly
    name: "Content Creator",
    note: "Let us quote a strategy for you",
    price: "Custom",
    popular: false,
    features: [
      "Everything in the Hosting plan",
      "Patreon and other monetization integrations",
      "Fourthwall and other commerce integrations",
      "Automatic site and plugin updates",
      "Support via email",
    ],
    button: {
      text: "Get Started",
      link: "/contact?plan=creator",
    },
  },
]
