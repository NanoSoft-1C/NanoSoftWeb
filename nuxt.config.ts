// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: [
    "~/assets/styles/main.scss",
  ]
})
