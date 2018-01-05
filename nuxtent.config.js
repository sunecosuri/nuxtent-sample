module.exports = {
  content: {
    permalink: '/blog/:slug',
    page: '/blog/_content',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: false
  }
}
