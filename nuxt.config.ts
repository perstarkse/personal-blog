// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@vesp/nuxt-fontawesome", "@nuxtjs/tailwindcss"],
  ssr: true,
  components: {
    global: true,
    dirs: ["~/components"],
  },
  css: ["~/public/tufte.css"],
  fontawesome: {
    icons: {
      solid: ["cog"],
      brands: ["github", "twitter", "linkedin"],
    },
  },
  content: {
    navigation: {
      fields: ["title", "date"],
    },
  },
});
