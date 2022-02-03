/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    styledComponents: true,
  },
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
  images: {
    formats: [
      // 'image/avif',
      'image/webp',
    ],
    domains: ['localhost', 'res.cloudinary.com'],
  },
})
