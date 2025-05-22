// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],

  css: ['~/assets/css/tailwind.css', '~/assets/css/primevue.css'],
  app: {
    head: {
      title: 'Cedric Mungobo - Développeur Full Stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de Cedric Mungobo - Développeur Full Stack spécialisé en Vue.js, Laravel, Flutter. Création d\'applications web et mobiles innovantes.' },
        { name: 'author', content: 'Cedric Mungobo' },
        { property: 'og:title', content: 'Cedric Mungobo - Développeur Full Stack' },
        { property: 'og:description', content: 'Portfolio de Cedric Mungobo - Développeur Full Stack spécialisé en Vue.js, Laravel, Flutter.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Cedric Mungobo - Développeur Full Stack' },
        { name: 'twitter:description', content: 'Portfolio de Cedric Mungobo - Développeur Full Stack spécialisé en Vue.js, Laravel, Flutter.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})