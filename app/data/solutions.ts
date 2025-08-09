import { standardPricing } from "./pricing"

const fastStart = standardPricing.find((price) => price.shortName === 'fast-start')
const business = standardPricing.find((price) => price.shortName === 'business')
const ai = standardPricing.find((price) => price.shortName === 'business-plus-ai')
const carpet = standardPricing.find((price) => price.shortName === 'red-carpet')

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
  image: Image;
  cta: CTA;
  cards: Card[];
}

export const solutions: Solution[] = [
  {
    title: "Get Found",
    slug: "get-found",
    subtitle: "Make it easy for new customers to discover your business online on search, maps, and social media.",
    pageTitle: "Get found everywhere that matters",
    description: [
      "85% of consumers use local search to find businesses like yours. We optimize your online presence so you appear when it counts; because 97% of customers search online before making a decision. We use a revolutionary & award winning AI-driven Google Business Profile (GBP) optimization system that gets your business in front of 90% of local customers who are 74% likely to purchase within 24 hours. Get more customers without spending a single dollar on ads.",
      "GBP SEO is faster, easier, and more cost effective than any website SEO. Plus, weekly automated reports prove the value of the work the system is doing."
    ],
    icon: "bx:bxs-file-find",
    image: {
      url: "get-found.png",
      caption: "Dominate search, stay visible, and make the perfect first impression with smart automation and AI.",
      alt: "Local search display with map pins, from a search engine, on a laptop screen"
    },
    cards: [
      {
        title: "Build a website that converts",
        image: {
          url: "build-site.webp",
          caption: "Launch a high-converting website, fully optimized for local search and lead capture. Fast, beautiful, and mobile-ready. Built to turn visitors into loyal customers.",
          alt: "A laptop screen and a phone screen displaying a stylized web site.",
        },
      },
      {
        title: "Manage your reputation with AI",
        image: {
          url: "reputation.webp",
          caption: "Automate review requests and respond in real time with our AI Team: Review Agent. Build trust and stand out online with more 5-star reviews and faster, smarter replies, all hands-free.",
          alt: "A happy little robot managing reviews for a business.",
        }
      },
      {
        title: "Get listed everywhere that matters",
        image: {
          url: "listed.webp",
          caption: "Stay visible on Google, Facebook, Apple Maps, Yelp, and 50+ directories. Our AI-driven system keeps your info up to date and helps you climb the local search ranks. No manual work needed.",
          alt: "A happy little robot managing business information across the internet.",
        }
      }
    ],
    cta: {
      name: "get-found",
      heading: "Optimize your local presence",
      description: "Upgrade your local search management, available starting in our Fast Start Growth system.",
      buttonText: "Improve your local rank now",
      to: "/pricing?service=local-seo",
    },
  },
  // {
  //   title: "Show up everywhere",
  //   slug: "citation-management",
  //   description: "It's incredibly complicated to keep your business information available and up to date across the internet. There are literally thousands of places where your business might be listed. Let us automate it.",
  //   icon: "mdi:internet-search",
  //   body: "We set up systems that completely automate this for you, and you don't have to lift a finger or keep up with another dashboard. Your business information is tracked and corrected by AI across the internet.",
  // },
  {
    title: "Get leads",
    slug: "get-leads",
    subtitle: "We convert eyes into ACTION with smart tools that engage customers and collect contact information and start conversations.",
    pageTitle: "Convert clicks into qualified leads, automatically",
    icon: "mdi:people",
    description: [
      "Let's capitalize on those interested prospects and turn them into hot leads.",
    ],
    image: {
      url: "get-leads.png",
      caption: "",
      alt: "",
    },
    cards: [
      {
        title: "Engage visitors instantly",
        image: {
          url: "engage.webp",
          caption: "Reach out the moment someone lands on your site with smart chatbots and AI Team: Chat Agent. Every visitor gets a personal touch. No waiting, no lost leads.",
          alt: "A chat message window being filled with content from AI and apple and google logos"
        }
      },
      {
        title: "Create landing pages that work",
        image: {
          url: "landing.webp",
          caption: "Our high-converting, ready-made landing pages and forms are designed to capture contact info and turn visitors into real, paying customers.",
          alt: "A website landing page covered with dollar signs"
        }
      },
      {
        title: "Never miss a lead",
        image: {
          url: "ai.webp",
          caption: "Every call, chat, form, and message is instantly tracked, routed, and followed up by our AI-powered systems so nothing falls through the cracks.",
          alt: "AI answering a phone and answering messages"
        }
      }
    ],
    // Doesn't matter because this page has its own actual page
    cta: {
      name: "",
      heading: "",
      buttonText: "",
      description: "",
      to: "",
    }
  },
  {
    title: "Get tons of reviews",
    slug: "get-tons-of-reviews",
    pageTitle: "Get tons of reviews",
    subtitle: "We turn satisfied customers into 5 star reviews by automating feedback collection.",
    icon: "mdi:rate-review",
    image: {
      url: "get-reviews.webp",
      caption: "Reviews are the foundation of your online reputation, with 97% of people reading up on your business before making contact.",
      alt: "A happy little robot checking out reviews for a business",
    },
    description: [
      "Many customers, won't even think to leave a review, or when faced with the opportunity to leave a review, will just duck out because they don't know what to say! The result is that even when you've got mostly happy customers, people only generally leave reviews when they're mad.",
      "Not only can we automate gathering a customer review, we can enable “Suggested Reviews” to help them write! When enabled, our review request tool will ask what they liked the most about your business then instantly write a review for them to paste into Google, giving you more valuable SEO optimized reviews.",
      "We instantly flag bad reviews for removal and ping you for immediate response, or let the AI write a response for you with optional approval."
    ],
    cards: [],
    cta: {
      name: "reviews",
      heading: "Start collecting 5 star reviews",
      description: "All of our Growth Systems include incredible review collecting and management features",
      buttonText: "Cash in on the great experiences you're already providing",
      to: "/pricing?service=reviews",
    }
  },
  {
    title: "Grow sales",
    slug: "grow-sales",
    pageTitle: "Turn leads into loyal customers automatically",
    subtitle: "Convert more browsers into buyers with compelling offers, lead nurturing, and reducing friction from payment collection.",
    icon: "carbon:currency-dollar",
    description: [
      "Centralize every contact, tag and follow up with ease, and watch prospects move through your sales funnel powered by automated systems and AI reminders.",
      "Respond instantly via chat, text, email, or social, from a single dashboard. AI-powered suggestions help you say the right thing and keep every deal moving. No more endless emails or phone tag. Automated online booking means your calendar fills up, even while you sleep.",
      "Send invoices, accept payments, and track transactions all in one place. Happy clients, faster cash flow, and less admin work.",
      "Send timely reminders, offers, and updates, personalized and delivered by AI so you never lose a lead to a slow response.",
      "Selling doesn't have to be hard work. Our automated “Grow Sales” solution gives you automation, booking, payments, and a CRM that keeps you organized so you can move every lead smoothly from “hello” to “happy customer,” with less effort and more results."
    ],
    image: {
      url: "grow-sales.png",
      caption: "AI-powered tools that guide your leads from “just interested” to “ready to buy,” all on autopilot.",
      alt: "Happy people climbing up a bar graph, ecstatically paying for services all the way up",
    },
    cards: [
      {
        title: "Streamline your sales",
        image: {
          url: "streamline.webp",
          caption: "Organize, track, and nurture every lead with our smart CRM. No missed opportunities, no manual follow-up.",
          alt: "A streamlined sales pipeline"
        },
      },
      {
        title: "Book with ease",
        image: {
          url: "book.webp",
          caption: "Let customers schedule calls, demos, or appointments at their convenience, auto-confirmed, reminded, and followed up by AI.",
          alt: "A calendar",
        },
      },
      {
        title: "Close faster",
        image: {
          url: "close.webp",
          caption: "Collect payments, send invoices, and trigger instant “thank you” messages, all automated and integrated.",
          alt: "A little clock and a little email message",
        },
      },
    ],
    cta: {},
  },
  {
    title: "Drive repeat business",
    pageTitle: "Keep customers coming back - completely on autopilot",
    slug: "remarketing",
    subtitle: "Keep customers coming back with loyalty programs, smart reminders, and ongoing engagement.",
    icon: "mdi:repeat",
    description: [
      "Are you maximizing the value of your existing customer base? On average it costs 5 times more to acquire a new customer than it does to sell new services to an existing customer. One of the most profitable (also one of the most seldom used) pools of potential prospects will always be existing customers.",
      "Let's face it, there aren't many avenues for most small businesses to manage and keep up with existing customer relationships. Traditional marketing agencies tend to ignore this entire topic, assuming the business has it under control. We recognize that most businessed need help here and we offer systems to help you keep up great relationships and help you make the most of your existing customers.",
      "We will automate campaigns to make careful and well designed promotions and announcements to your existing customer base and ensure your customers are repeat customers.",
    ],
    image: {
      url: "sleeping-owner.png",
      caption: "Stay top-of-mind and build loyalty with personalized, automated follow-ups powered by automated systems.",
      alt: "A robot at a desk helping customers while the owner sleeps in his chair.",
    },
    cards: [
      {
        title: "Automate personalized campaigns",
        image: {
          url: "paper-plane.webp",
          caption: "Set up smart triggers to send the right offer, reminder, or thank-you at exactly the right time, no manual work required.",
          alt: "A paper plane",
        },
      },
      {
        title: "Reignite dormant customers",
        image: {
          url: "ignite-customer.webp",
          caption: "Bring back past clients with automated win-back campaigns, check-ins, and exclusive promotions, all managed by your AI Team.",
          alt: "A person with some fire next to them",
        },
      },
      {
        title: "Deliver ongoing value",
        image: {
          url: "deliver-value.webp",
          caption: "Send helpful tips, birthday greetings, and exclusive invites that make every customer feel valued so they return again and again",
          alt: "",
        },
      },
    ],
    cta: {},
  },
  // {
  //   title: "Keep an awesome reputation",
  //   slug: "reputation-management",
  //   subtitle: "Protect your brand from negative feedback by monitoring and responding to reviews and amplify your best customer stories.",
  //   icon: "bx:bxs-star",
  //   body: "Prospects now have absolute transparency into your companies reputation, good or bad. It's unbelievably important to ensure you're nailing this. We offer automated systems, easy-to-use tools and even AI management, which come together and allow you to maintain control of your online reputation. With a centralized reputation management dashboard, you'll be able monitor and manage your reputation on over 50 platforms, remind customers to leave reviews, create review QR codes, use AI to respond to reviews, auto flag spam reviews, get detailed competitor analyses, and more!",
  //   cta: {
  //     name: "reputation",
  //     heading: "Your online reputation can't be ignored",
  //     description: "It's one of the most valuable assets your company has. Reputation management features available in our Business Growth System",
  //     buttonText: "Maintain the best reputation in your market",
  //     to: "/pricing?service=reputation",
  //   },
  // },
  // {
  //   title: "Improve customer service",
  //   slug: "improve-customer-service",
  //   subtitle: "Deliver faster more helpful support that turns customers into raving fans.",
  //   icon: "mdi:customer-service",
  // },
  // // {
  // //   title: "Keep up with your customers",
  // //   slug: "follow-up",
  // //   description: "When a lead expresses interest in your business, THAT is the right time to make an impression and make the sale. Our automated follow-up systems can take care of this for you.",
  // //   icon: "bx:target-lock",
  // //   body: "We can take the human error and inconsistency out of follow-ups and keep your company at the top of every leads' mind.",
  // //   cta: {
  // //     name: "follow-up",
  // //     heading: "Don't lose out on leads because they got distracted",
  // //     description: "Follow-up campaigns are the other half of the lead-generation picture and are available starting in our Fast Start Growth System.",
  // //     buttonText: "Strike while the iron is hot!",
  // //     to: "/pricing?service=follow-up",
  // //   }
  // // },
  // {
  //   title: "Lower costs",
  //   slug: "lower-costs",
  //   subtitle: "Automate the busywork and save money by running your business more efficiently.",
  //   icon: "carbon:currency-dollar"
  // },
  {
    title: "Get off the hamster wheel",
    slug: "get-off-the-hamster-wheel",
    subtitle: "Stop grinding and start scaling with systems that run even when you're off the clock.",
    pageTitle: "Step off the hamster wheel and let automated systems run the routine",
    icon: "carbon:running",
    image: {
      url: "robot-assistant.png",
      caption: "Automate, delegate, and finally reclaim your time with systems that keep your business moving, without burning you out.",
      alt: "",
    },
    description: [
      "Scale your business confidently. Our automated systems and AI Team manage voice, chat, email, and reviews, so you're always “on” for customers, even when you're off the clock.",
      "Set up automated flows that follow up, engage, and sell consistently, so you can focus on big-picture goals (and actually take a break).",
      "Stop being the only engine in your business. With our automated systems and the AI Team, automation, smart delegation, and proven systems let you step back from the daily grind and start focusing on what truly matters: growth, strategy, and your well-being.",
    ],
    cards: [
      {
        title: "Let AI handle the repetitive stuff",
        image: {
          url: "robot.webp",
          caption: "The AI Team takes care of common customer interactions like messaging, reviews, and scheduling without burning you out.",
          alt: "A little robot helper",
        }
      },
      {
        title: "Automate follow-ups and marketing",
        image: {
          url: "follow-up.png",
          caption: "From reminders to email nurture to birthday greetings, your systems keep building relationships while you take a break.",
          alt: "An email with a little spinning cog next to it",
        }
      },
      {
        title: "Work on the business, not in it",
        image: {
          url: "going-up.webp",
          caption: "With everything humming in the background, you finally have time to step into your CEO role (instead of chief firefighter).",
          alt: "A person watching a bar chart growing over time",
        }
      }
    ],
    cta: {
      name: "hamster-wheel",
      heading: "Get off the hamster wheel!",
      description: "Free yourself from the grind with systems that run even when you don't.",
      buttonText: "HELP ME RECLAIM MY LIFE!",
      to: "/pricing",
    },
  },
  // {
  //   title: "Never miss another call",
  //   slug: "text-back",
  //   subtitle: "Always-on AI answering service and missed call text-back help to to never miss an opportunity.",
  //   icon: "mdi:phone-ring",
  //   body: "Did you know that research has shown that SMB businesses lose around 40%-65% of leads simply because their call was missed? We can make sure that you never miss a call again. Simply by quickly reaching back out to every missed call, you can double your conversion rates. You can't be available 24/7, but our systems can.",
  //   // cta: {
  //   //   name: "text-back",
  //   //   heading: "",
  //   //   description: "",
  //   //   buttonText: "Stop missing calls",
  //   //   to: "/pricing?service=text-back",
  //   // }
  // },

  // {
  //   title: "AI team",
  //   slug: "ai-team",
  //   subtitle: "AI-powered assistants that handle calls, booking, and customer support 24/7.",
  //   icon: "carbon:ai",
  // },

  // // {
  // //   title: "Websites that get you customers",
  // //   slug: "website-design",
  // //   description: "Your website needs to convert, not just look good. We build sites that attract local customers and drive action, combining aesthetics with proven conversion tactics.",
  // //   icon: "bx:bxs-palette",
  // //   body: "It's hard to believe, but over 80% of websites exhibit critical failures in speed, mobile UX, navigation, or trust-building, directly causing poor conversions. Over 50% of web traffic is mobile, but many sites remain desktop-optimized. Google's mobile-first indexing penalizes non-responsive sites, directly hurting visibility and conversions."
  // // },
  // // {
  // //   title: "Digital Marketing",
  // //   slug: "digital-marketing",
  // //   description: "We build targeted campaigns that attract the right customers and optimize their journey, because leads only matter if they convert.",
  // //   icon: "bx:bxs-shopping-bag",
  // //   body: "We focus on the absolute foundations of your marketing stack before we ever even look at paying for an advertisement. Most traditional agencies are 100% focused on bringing new leads to your site, but they leave out the part where the leads need to convert. Our systems are designed to make the most of every lead."
  // // },
  // {
  //   title: "Social Media",
  //   slug: "social",
  //   subtitle: "Remove the headache and time with systems that make social media posts and interactions a breeze.",
  //   icon: "bxl:facebook-square",
  //   body: "If that's still too much, we offer automated AI content generation that can run social media campaigns for you. If you'd like a human touch but don't want to run it yourself, let us design a fully human-managed setup for you."
  // },
  // // {
  // //   title: "Performance",
  // //   slug: "performance",
  // //   description: "Every 100ms of page load time costs you 1% in conversions. We use the latest tools and techniques to optimize your site for speed and performance.",
  // //   icon: "bx:bxs-tachometer",
  // //   body: "47% of users expect pages to load in ≤2 seconds, yet delays of just 1 second cause a 7% reduction in conversions. Sites taking 5+ seconds convert 3x worse than those loading in 1 second. Your site's performance is of utmost importance, yet most web hosts and web designers don't take the topic seriously. We do. We are experts at site performance, and we won't rest until your site is as performant as technically possible."
  // // },

]

export const comingSoon = [
  // {
  //   title: "Social Media",
  //   slug: "social-media",
  //   description: "Social media only works if it drives real engagement. We build strategies that connect with your audience. No fluff, just measurable growth.",
  //   icon: "bxl:facebook-square",
  //   body: `<p>Coming soon...</p>`
  // },
   {
    title: "Content Strategy",
    slug: "content-strategy",
    description: "Great content cuts through the noise. We craft messaging that resonates with your audience, drives traffic, and turns visitors into customers.",
    icon: "bx:book-content",
    body: "Coming soon! We could just feed some prompts into ChatGPT and post everything that pops out, but anyone could do that! Why would you need us to do that? We're developing a cutting edge system that will be the perfect hybrid between high-efficiency AI content generation, well researched topics and trending keyworks specific to your industry, and human-in-the-loop proofreading and editing to ensure that the content is accurate and highly valuable, instead of the 'AI-Slop' that people pump out when they're not paying attention. If this is something you're looking for and you'd like us to speed up our R&D, please join our waiting list for this feature below, and we will let you know once it's ready!",
    formId: "Gehnke4gfLrkxqNbNVKA",
    formName: "Content Strategy Waiting List Opt In",
  },
  {
    title: "AI Lead Generation",
    slug: "ai-lead-generation",
    description: "We use AI to reach out, locate and warm up high quality leads, delivering consistent conversions without the manual effort. Better leads, less work.",
    icon: "iconamoon:profile-duotone",
    body: "Coming soon! We're building the most valuable use for AI yet! We are building an AI agent that scours the globe for your perfect customer, then researches that prospect and makes the perfect communication at just the right time to deliver a HOT lead. We'll deliver these leads as they appear and the conversion rate will be unbelievable. If this is something you're interested in, please join the wait list for this service below, we'd love to let you know when it's complete. If you can't wait for our R&D to be finished, let's chat. We'd love to dedicate R&D resources to this and finish it.",
    formId: "iBYm9FiifibNxxCGPQZT",
    formName: "AI Lead Generation Waiting List Opt In"
  },
]
