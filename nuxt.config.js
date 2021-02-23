export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tech Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900", rel: "stylesheet" }
    ]
  },

  loading: { color: '#55c57a', height: '4px', duration: 5000 },
  loadingIndicator: { 
    name: 'circle',
    color: '#55c57a'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-component.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://tech-blog-f3fbc-default-rtdb.firebaseio.com',
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://tech-blog-f3fbc-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyCKDIX1Xi7cDKiE4RbTZr0U0Ki7N9epERM',
    Host: process.env.HOST || 'localhost',
    Port: process.env.PORT || 3000
  },

  router: {
    linkActiveClass: 'active'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
