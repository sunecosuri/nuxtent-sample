module.exports = {
  head: {
    title: 'Nuxtent Boiler Template',
    titleTemplate: '%s - Nuxtent Boiler Template',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxtent project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxtent']
  ],
  loading: { color: '#3B8070' }
}
