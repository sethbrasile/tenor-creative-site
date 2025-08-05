// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'Tenor Creative'
const subtitle = 'Systems that Generate Customers on Autopilot'
const description = 'We get service businesses more customers WITHOUT spending on advertising.'
const env = process.env.VERCEL_ENV || 'development'
const isProduction = env === 'production'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-18",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/seo", "@nuxt/icon"],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title,
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-48x48.png", sizes: "48x48" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "keywords", content: "Tenor Creative, SEO, Website, Landing Page, App, Development, Developer, Custom, Content, Strategy, Digital Marketing, Systems, Wordpress, Static, HTML, CSS, Design" },
        { name: "description", content: description },
        { name: "apple-mobile-web-app-title", content: title.split(" ")[0] },
      ]
    }
  },
  site: {
    url: isProduction ? "https://tenorcreative.com" : "http://localhost:3000",
    name: title,
    description,
  },
  // ogImage: {
  //   compatibility: {
  //     prerender: {
  //       chromium: false
  //     }
  //   },
  // },
  runtimeConfig: {
    HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY || '',
    public: {
      title,
      description,
      isProduction,
      hero: {
        title,
        subtitle,
        alt: 'A home service pro, dreaming of a care-free relationship with his customers, empowered by technology',
        description,
      },
      leadMagnet: {
        // url: '/lever',
        // downloadUrl: '/tenor-creative-pull-the-right-lever.pdf',
        // previewImage: '/img/lever-cover.png',
        // name: 'Pull the Right Lever'
        // description: "In this guide, you'll learn the key elements that drive growth, why most businesses get them wrong, and how to implement them in your own business.",
        // formId: '',
        url: '/new-sales-team',
        name: 'Why AI Automation is the new sales team for smart service businesses',
        description: `In today's hyper-competitive market, service businesses are increasingly expected to do more with less. Limited budgets, lean teams, and aggressive growth targets are all too common. Enter AI and automation—once exclusive to enterprise-level operations, now indispensable tools that smart service businesses are using to drive sales, streamline operations, and outperform larger competitors. This blog explores how artificial intelligence and automation are redefining the traditional sales team, empowering small businesses to scale efficiently and profitably.`,
        formId: 'sLuHUrIuc4bSq3WMsdkl',
      },
    }
  },

  $development: {
    runtimeConfig: {
      public: {
        plan1PaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
        plan1AnnualPaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
        plan2PaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
        plan2AnnualPaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
        plan3PaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
        plan3AnnualPaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
      },
    },
  },

  $production: {
    runtimeConfig: {
      public: {
        plan1PaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
        plan1AnnualPaymentLink: 'https://buy.stripe.com/8x26oH4649i85RC3Py33W05',
        plan2PaymentLink: 'https://buy.stripe.com/3cI28r1XWgKA1Bm2Lu33W03',
        plan2AnnualPaymentLink: 'https://buy.stripe.com/6oU6oH7ig1PGfscfyg33W06',
        plan3PaymentLink: 'https://buy.stripe.com/28E14nfOMgKAfsc99S33W04',
        plan3AnnualPaymentLink: 'https://buy.stripe.com/3cIcN5cCA51Seo885O33W07',
      },
    },
  },
});
