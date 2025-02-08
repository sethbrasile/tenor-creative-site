// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'Tenor Creative'
const description = `Web design, digital marketing, hosting and more`
const env = process.env.VERCEL_ENV || 'development'
const isProduction = env === 'production'

export default defineNuxtConfig({
  compatibilityDate: "2024-10-17",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/seo",
  ],
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
        { name: "keywords", content: "Tenor, Creative, SEO, Website, Landing, Page, App, Development, Custom, Content, Strategy, Security, Marketing, Wordpress, Static, HTML, CSS, Design" },
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
        alt: 'People sitting in a cafe with laptops happily coding',
        description: `Beautiful and performant web sites, advanced SEO and content strategies, and high-converting leads. Let us take your business to the next level.`,
      },
    }
  },
});
