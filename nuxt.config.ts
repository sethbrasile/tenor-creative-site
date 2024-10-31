// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'Tenor Creative'
const description = `Web design, digital marketing, hosting and more`
const env = process.env.VERCEL_ENV || 'development'

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
  runtimeConfig: {
    HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY || '',
    public: {
      title,
      description,
      isProduction: env === 'production',
      hero: {
        alt: 'People sitting in a cafe with laptops happily coding',
        title: 'Web design, digital marketing, hosting and more',
        description: `From simple web sites and blogs, all the way to custom app development, we've got you covered.`,
      },
    }
  }
});
