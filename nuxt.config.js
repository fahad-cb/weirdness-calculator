module.exports = {
  plugins: [
    '@plugins/helpers.js',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios : {
    baseURL: 'https://api.giphy.com/v1/gifs/'
  },
  /*
   ** Build configuration
  */
  build: {
    /*
     ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
}