module.exports = {
  head: {
    title: 'ロリポップ！マネージドクラウド|オープンβ提供中！',
    titleTemplate: '%s - ロリポップ！マネージドクラウド | 無料β版提供中',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxtent project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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

// module.exports = {
//   env: {
//     oohori_domain: process.env.OOHORI_DOMAIN,
//     supply_domain: process.env.SUPPLY_DOMAIN,
//     gmopg_shopid: config.gmopg.ShopID,
//     gmopg_endpoint: config.gmopg.axios.baseURL
//   },
//   head: {
//     title: 'ロリポップ！マネージドクラウド|オープンβ提供中！',
//     titleTemplate: '%s - ロリポップ！マネージドクラウド | 無料β版提供中',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: 'マネージドクラウドは国内最大級のレンタルサーバー「ロリポップ！」の新しいプランです。クラウドホスティングのようなサーバー環境を使いやすいウェブUIから誰でも簡単にセットアップ！また、状況に応じて柔軟にリソースを増減できます。無料オープンβ提供中。' },
//       { property: 'fb:app_id', content: '391699974244908' },
//       { property: 'og:title', content: 'ロリポップ！マネージドクラウド|オープンβ提供中！' },
//       { property: 'og:type', content: 'article' },
//       { property: 'og:url', content: 'https://mc.lolipop.jp' },
//       { property: 'og:image', content: 'https://mc.lolipop.jp/ogimage.gif' },
//       { property: 'og:description', content: 'マネージドクラウドは国内最大級のレンタルサーバー「ロリポップ！」の新しいプランです。クラウドホスティングのようなサーバー環境を使いやすいウェブUIから誰でも簡単にセットアップ！また、状況に応じて柔軟にリソースを増減できます。無料オープンβ提供中。' },
//       { property: 'og:site_name', content: 'ロリポップ！レンタルサーバー' },
//       { property: 'og:locale', content: 'ja_JP' },
//       { property: 'twitter:card', content: 'summary' },
//       { property: 'twitter:site', content: '@lolipopjp' },
//       { property: 'twitter:title', content: 'ロリポップ！マネージドクラウド|オープンβ提供中！' },
//       { property: 'twitter:description', content: 'マネージドクラウドは国内最大級のレンタルサーバー「ロリポップ！」の新しいプランです。クラウドホスティングのようなサーバー環境を使いやすいウェブUIから誰でも簡単にセットアップ！また、状況に応じて柔軟にリソースを増減できます。無料オープンβ提供中。' },
//       { property: 'twitter:url', content: 'https://mc.lolipop.jp' },
//       { property: 'twitter:image', content: 'https://mc.lolipop.jp/ogimage.gif' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
//       { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' }
//     ]
//   },
//   css: [
//     '~/assets/css/main.css',
//     '~/assets/css/toast.css',
//     'swiper/dist/css/swiper.css'
//   ],
//   loading: { color: '#147ECC' },
//   router: {
//     middleware: [
//       'auth',
//       'gmoheader'
//     ]
//   },
//   build: {
//     plugins: [
//       // moment.js のロケールデータを除外する
//       new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
//     ],
//     vendor: [
//       'axios',
//       'camel-case',
//       'moment-timezone',
//       'moment',
//       'platform',
//       'swiper',
//       'vue-chartjs'
//     ],
//     postcss: [
//       require('postcss-easy-import')({ path: ['./'] }),
//       require('postcss-flexbugs-fixes')(),
//       require('postcss-custom-properties')(),
//       require('postcss-custom-media')(),
//       require('postcss-calc')(),
//       require('postcss-each')(),
//       require('postcss-simple-vars')()
//     ],
//     extend(config, { client }) {
//       if (client) {
//         config.module.rules.push({
//           enforce: 'pre',
//           test: /\.(js|vue)$/,
//           loader: 'eslint-loader',
//           exclude: /(node_modules)/
//         })
//       }
//     }
//   },
//   plugins: [
//     { src: '~/plugins/api' },
//     { src: '~/plugins/preview' },
//     { src: '~/plugins/swiper' }
//   ],
//   modules: [
//     '~/modules/typescript',
//     '@nuxtjs/toast',
//     ['@nuxtjs/google-tag-manager', { id: 'GTM-5GTT9VF', layer: 'dataLayer' }]
//   ],
//   toast: {
//     position: 'bottom-left',
//     duration: 5000
//   }
// }
