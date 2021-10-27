const withPWA = require('next-pwa')
module.exports = withPWA({
  swcMinify: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
})
