// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {src: './animated.js'}
      ],
      link: [
        {rel: 'stylesheet', href: './allasset/root.css'}
      ]
    }
  }
})
