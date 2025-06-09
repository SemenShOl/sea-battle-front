export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/test-utils/module",
    "@vee-validate/nuxt",
    "nuxt-toast",
  ],
  css: ["~/assets/css/index.css", "~/assets/css/tailwind.css"],
  devServer: {
    port: 5173,
  },
});
