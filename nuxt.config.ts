// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   future: { compatibilityVersion: 4 },
//   devtools: { enabled: true },
//   modules: ["@nuxt/ui"],
//   compatibilityDate: "2024-11-01",
// });

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-10-22",
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/tailwindcss"],
  ssr: false,
  devtools: { enabled: true },

  // vite: {
  //   server: { hmr: { protocol: 'wss' } },
  // },

  // - Nuxt UI
  ui: {
    theme: {
      // colors: [
      //   "primary",
      //   "secondary",
      //   "tertiary",
      //   "info",
      //   "success",
      //   "warning",
      //   "error",
      // ],
    },
  },
  colorMode: {
    preference: "light",
  },
  fonts: {
    provider: "google",
  },

  // typescript: {
  //   typeCheck: true,
  // },
});