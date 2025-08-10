// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',],
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt',],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  build: {
    transpile: ['vuetify', 'gsap'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }, app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
