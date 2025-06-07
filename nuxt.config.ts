export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/test-utils/module"],
  css: ["~/assets/css/index.css", "~/assets/css/tailwind.css"],
});
