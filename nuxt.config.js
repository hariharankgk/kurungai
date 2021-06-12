
export default {
  mode: 'universal',
  /*
  router: { base: '/vue/krg' },
  
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/jpg', href: '/vue/krg/Nambi2.jpg' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css' }
    ],
    script: [
      { src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
      { src: 'https://code.jquery.com/jquery-3.1.1.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f0e68c' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-8452049817931871'
    }],
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'demo/api/authenticate', method: 'post', propertyName: 'data.token' },
          user: { url: 'user.php', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },

  
  axios: {
    // proxy: true,
    baseURL: 'http://localhost:9090/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
