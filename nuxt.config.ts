// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'Tenor Creative'
const description = `We help service businesses of any size leverage proven systems to get rapid and consistent growth. Implementation is painless and you can keep using your existing business systems. Growth systems aren't just for the big guys anymore.`
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
        alt: 'A home service pro, dreaming of a care-free relationship with his customers, empowered by technology',
        description,
      },
    }
  },

  $development: {
    runtimeConfig: {
      public: {
        plan1PaymentLink: 'https://buy.stripe.com/test_6oU9AV1xBgnt5DY7Bj7ss00',
        plan2PaymentLink: 'https://buy.stripe.com/test_dRmcN75NRefleau4p77ss01',
        plan3PaymentLink: 'https://buy.stripe.com/test_6oU9AVb8b6MTaYi5tb7ss02',
      },
    },
  },

  $production: {
    runtimeConfig: {
      public: {
        plan1PaymentLink: 'https://buy.stripe.com/aFa28r464eCs1Bmeuc33W00',
        plan2PaymentLink: 'https://buy.stripe.com/3cI9ATeKI2TK3Ju4TC33W01',
        plan3PaymentLink: 'https://buy.stripe.com/eVq7sL5a8fGw7ZK0Dm33W02',
      },
    },
  }
});
