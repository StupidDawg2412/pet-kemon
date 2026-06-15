// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: false },

  // Static generation: `npm run generate` -> .output/public (deploy to any host).
  nitro: { preset: "static" },

  app: {
    // For GitHub Project Pages (user.github.io/pet-kemon) set
    // NUXT_APP_BASE_URL=/pet-kemon/ when generating. Netlify/Vercel: leave as "/".
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      htmlAttrs: { lang: "en" },
      title: "pet-kemon · link hub",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "pet-kemon — news, memes & fluff. Catch 'em all." },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Fredoka:wght@500;600;700&display=swap",
        },
      ],
    },
  },
});
