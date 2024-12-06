// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-10-22',
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/test-utils/module'],
  ssr: false,
  devtools: { enabled: true },
  // vite: {
  //   server: { hmr: { protocol: "wss" } },
  // },
  nitro: {
    preset: 'node-server'
  },

  css: ['~/styles/main.css'],

  colorMode: {
    preference: 'light'
  },
  fonts: {
    provider: 'google'
  },

  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Cache-Control',
          content: 'no-cache, no-store, must-revalidate'
        },
        {
          'http-equiv': 'Pragma',
          content: 'no-cache'
        },
        {
          'http-equiv': 'Expires',
          content: '0'
        }
      ]
    }
  }
});
