module.exports = {
  siteUrl: 'https://nikosantis.dev',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
