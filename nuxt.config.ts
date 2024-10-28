// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: "Tenor Creative",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-48x48.png", sizes: "48x48" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "keywords", content: "Tenor, Creative, SEO, Website, Landing, Page, App, Development, Custom, Content, Strategy, Security, Marketing, Wordpress, Static, HTML, CSS, Design" },
        { name: "description", content: "We're here to help you create the best possible experiences for your customers. Stay focused on your business and let us do the web stuff." },
        { name: "apple-mobile-web-app-title", content: "TenorCreative" },
      ]
    }
  },
  runtimeConfig: {
    HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY || '',
  }
});
