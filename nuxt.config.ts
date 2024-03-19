// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "http://localhost:8070",

    },
  },
  app: {
    head: {
/*       script: [
        { src: './animated.js' }
      ], */
      link: [
        { rel: 'stylesheet', href: '/allasset/root.css' }
      ]
    }
  }
})
