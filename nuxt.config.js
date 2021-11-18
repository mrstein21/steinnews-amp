export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'steinews-amp',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: "https://cdn.ampproject.org/v0/amp-mustache-0.2.js",
        async:true,
        "custom-template":"amp-mustache"
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-easy-lightbox.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: true,
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/amp', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/amp'
  ],
  amp: {
    origin: process.env.ORIGIN_URL || 'http://localhost:3000',
    mode: 'hybrid',
    css: '~/assets/default.amp.css',
    //could use `only` or `false` as well
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
