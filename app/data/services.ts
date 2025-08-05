import { standardPricing } from "./pricing"

const fastStart = standardPricing.find((price) => price.shortName === 'fast-start')
const business = standardPricing.find((price) => price.shortName === 'business')
const ai = standardPricing.find((price) => price.shortName === 'business-plus-ai')
const carpet = standardPricing.find((price) => price.shortName === 'red-carpet')

export const systems = [carpet, fastStart, business, ai].map((price) => {
  return {
    title: price?.name,
    slug: price?.shortName,
    icon: "mdi:cogs",
    description: price?.description,
    features: price?.features
  }
})

export const services = [
  {
    title: "Get tons of reviews",
    slug: "curate-customer-reviews",
    description: "Online reviews carry as much weight as personal recommendations. We automate feedback collection, turn satisfied customers into 5-star reviews, and strategically showcase them where they matter most.",
    icon: "bx:folder-plus",
    body: "Reviews are the foundation of your online reputation, with 97% of people reading up on your business before making contact. Many customers, won't even think to leave a review, or when faced with the opportunity to leave a review, will just duck out because they don't know what to say! The result is that even when you've got mostly happy customers, people only generally leave reviews when they're mad. Not only can we automate gathering a customer review, we can enable “Suggested Reviews” to help them write! When enabled, our review request tool will ask what they liked the most about your business then instantly write a review for them to paste into Google, giving you more valuable SEO optimized reviews. We instantly flag bad reviews for removal and ping the business for immediate response.",
    cta: {
      name: "reviews",
      heading: "Start collecting 5 star reviews",
      description: "All of our Growth Systems include incredible review management features",
      buttonText: "Collect the reviews you already deserve",
      to: "/pricing?service=reviews",
    }
  },
  {
    title: "Improve your local Google rank",
    slug: "local-search-optimization",
    description: "85% of consumers use local search to find businesses like yours. We optimize your online presence so you appear when it counts—because 97% of customers search online before making a decision.",
    icon: "bx:bxs-file-find",
    body: "We use a revolutionary & award winning AI-driven Google Business Profile (GBP) optimization system that gets your business in front of 90% of local customers who are 74% likely to purchase within 24 hours. Get more customers without spending a single dollar on ads. GBP SEO is faster, easier, and more cost effective than any website SEO. Plus, weekly automated reports prove the value of the work the system is doing.",
    cta: {
      name: "local-seo",
      heading: "Optimize your local presence",
      description: "Available in our Business Growth + AI System or available ala-carte",
      buttonText: "Improve your local rank now",
      to: "/pricing?service=local-seo",
    },
  },
  {
    title: "Get all the leads",
    slug: carpet?.shortName,
    description: carpet?.description,
    icon: "mdi:people",
    body: "Let's capitalize on those interested prospects and turn them into hot leads.",
  },
  {
    title: "Keep an awesome reputation",
    slug: "reputation-management",
    description: "Protect your brand from negative feedback by monitoring and responding to reviews and amplify your best customer stories. We provide systems that make rescuing a negative customer relationship easy.",
    icon: "bx:bxs-star",
    body: "Prospects now have absolute transparency into your companies reputation, good or bad. It's unbelievably important to ensure you're nailing this. We offer automated systems, easy-to-use tools and even AI management, which come together and allow you to maintain control of your online reputation. With a centralized reputation management dashboard, you'll be able monitor and manage your reputation on over 50 platforms, remind customers to leave reviews, create review QR codes, use AI to respond to reviews, auto flag spam reviews, get detailed competitor analyses, and more!",
    cta: {
      name: "reputation",
      heading: "Your online reputation can't be ignored",
      description: "It's one of the most valuable assets your company has. Reputation management features available in our Business Growth System",
      buttonText: "Maintain the best reputation in your market",
      to: "/pricing?service=reputation",
    },
  },
  {
    title: "Keep up with your customers",
    slug: "follow-up",
    description: "When a lead expresses interest in your business, THAT is the right time to make an impression and make the sale. Our automated follow-up systems can take care of this for you.",
    icon: "bx:target-lock",
    body: "We can take the human error and inconsistency out of follow-ups and keep your company at the top of every leads' mind.",
    cta: {
      name: "follow-up",
      heading: "Don't lose out on leads because they got distracted",
      description: "Follow-up campaigns are the other half of the lead-generation picture and are available starting in our Fast Start Growth System.",
      buttonText: "Strike while the iron is hot!",
      to: "/pricing?service=follow-up",
    }
  },
  {
    title: "Never miss another call",
    slug: "text-back",
    description: "Did you know that research has shown that SMB businesses lose around 40%-65% of leads simply because their call was missed? We can make sure that you never miss a call again.",
    icon: "bx:target-lock",
    body: "Simply by quickly reaching back out to every missed call, you can double your conversion rates. You can't be available 24/7, but our systems can.",
    // cta: {
    //   name: "text-back",
    //   heading: "",
    //   description: "",
    //   buttonText: "Stop missing calls",
    //   to: "/pricing?service=text-back",
    // }
  },
  {
    title: "Maximize existing customers",
    slug: "remarketing",
    description: "Are you maximizing the value of your existing customer base? On average it costs 5 times more to acquire a new customer than it does to sell new services to an existing customer.",
    icon: "bx:target-lock",
    body: "One of the most profitable (also one of the most seldom used) pools of potential prospects will always be existing customers. Let's face it, there aren't many avenues for most small businesses to manage and keep up with existing customer relationships. Traditional marketing agencies tend to ignore this entire topic, assuming the business has it under control. We recognize that most businessed need help here and we offer systems to help you keep up great relationships and help you make the most of your existing customers. We will automate campaigns to make careful and well designed promotions and announcements to your existing customer base and ensure your customers are repeat customers.",
  },
  {
    title: "Websites that get you customers",
    slug: "website-design",
    description: "Your website needs to convert, not just look good. We build sites that attract local customers and drive action—combining aesthetics with proven conversion tactics.",
    icon: "bx:bxs-palette",
    body: "It's hard to believe, but over 80% of websites exhibit critical failures in speed, mobile UX, navigation, or trust-building, directly causing poor conversions. Over 50% of web traffic is mobile, but many sites remain desktop-optimized. Google's mobile-first indexing penalizes non-responsive sites, directly hurting visibility and conversions."
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "We build targeted campaigns that attract the right customers and optimize their journey—because leads only matter if they convert.",
    icon: "bx:bxs-shopping-bag",
    body: "We focus on the absolute foundations of your marketing stack before we ever even look at paying for an advertisement. Most traditional agencies are 100% focused on bringing new leads to your site, but they leave out the part where the leads need to convert. Our systems are designed to make the most of every lead."
  },
  {
    title: "Social Media",
    slug: "social",
    description: "We offer systems to make planning and carrying out your social media posts a breeze.",
    icon: "bxl:facebook-square",
    body: "If that's still too much, we offer automated AI content generation that can run social media campaigns for you. If you'd like a human touch but don't want to run it yourself, let us design a fully human-managed setup for you."
  },
  {
    title: "Performance",
    slug: "performance",
    description: "Every 100ms of page load time costs you 1% in conversions. We use the latest tools and techniques to optimize your site for speed and performance.",
    icon: "bx:bxs-tachometer",
    body: "47% of users expect pages to load in ≤2 seconds, yet delays of just 1 second cause a 7% reduction in conversions. Sites taking 5+ seconds convert 3x worse than those loading in 1 second. Your site's performance is of utmost importance, yet most web hosts and web designers don't take the topic seriously. We do. We are experts at site performance, and we won't rest until your site is as performant as technically possible."
  },
  {
    title: "Show up everywhere",
    slug: "citation-management",
    description: "It's incredibly complicated to keep your business information available and up to date across the internet. There are literally thousands of places where your business might be listed. Let us automate it.",
    icon: "mdi:internet-search",
    body: "We set up systems that completely automate this for you, and you don't have to lift a finger or keep up with another dashboard. Your business information is tracked and corrected by AI across the internet.",
  },
]

export const comingSoon = [
  // {
  //   title: "Social Media",
  //   slug: "social-media",
  //   description: "Social media only works if it drives real engagement. We build strategies that connect with your audience—no fluff, just measurable growth.",
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
