// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  compatibilityDate: "2024-10-17",

  runtimeConfig: {
    public: {
      web3formsAccessKey: process.env.WEB3FORMS_ACCESS_KEY || ''
    }
  }
});
