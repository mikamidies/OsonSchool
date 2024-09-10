export default {
  head: {
    title: 'Oson School',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['ant-design-vue/dist/antd.css', '@/assets/css/main.css'],

  plugins: ['@/plugins/antd-ui', '@/plugins/aos.client.js'],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/i18n', 'nuxt-gsap-module'],

  axios: {
    baseURL: process.env.BASE_URL || 'https://apioson.pythonanywhere.com/api',
  },

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },

  i18n: {
    locales: ['en', 'ru', 'uz'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },
}
