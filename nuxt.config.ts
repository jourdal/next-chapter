console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('BASE_URL:', process.env.BASE_URL);
console.log('CDN_URL:', process.env.CDN_URL);

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: (process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/') + 'favicon.ico' },
      ]
    },
    baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/',
    cdnURL: process.env.NODE_ENV === 'production' ? process.env.CDN_URL : '/'
  }
})