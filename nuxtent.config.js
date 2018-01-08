// nuxtent.config.js
module.exports = {
  content: {
    permalink: '/blog/:year/:month/:day/:slug',
    page: '/blog/_content',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: false
  }
}
