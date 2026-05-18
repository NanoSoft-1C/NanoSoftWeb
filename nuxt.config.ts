// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: [
    "~/assets/styles/main.scss",
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  runtimeConfig: {
    bitrixKey: process.env.BITRIX_KEY,
  },
  pages: true,
  nitro: {  
    prerender: {  
      routes: ['/'],  
      ignore: ['/services/1с-buh', '/services/1c-fresh']  
    }  
  }  
})
