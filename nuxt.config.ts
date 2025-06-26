import vuetify from "vite-plugin-vuetify";
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  plugins: [
    '~/plugins/vuetify'
  ],
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
  },
  nitro: {
    preset: 'vercel',
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/content'],
  sitemap: <Record<string, any>>{
    hostname: 'https://www.nextchapter.space',
    routes: async () => {
      return ['/', '/newsletter', '/blog'];
    },
  },
  robots: <Record<string, any>>{
    UserAgent: '*',
    Disallow: '/admin',
    Sitemap: 'https://www.nextchapter.space/sitemap.xml',
  },
});