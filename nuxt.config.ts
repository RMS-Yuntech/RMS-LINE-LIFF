// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-10-22",
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  ssr: false,
  devtools: { enabled: true },
  // vite: {
  //   server: { hmr: { protocol: "wss" } },
  // },

  css: ["~/styles/main.css"],

  colorMode: {
    preference: "light",
  },
  fonts: {
    provider: "google",
  },
});
