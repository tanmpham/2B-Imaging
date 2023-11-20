/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['127.0.0.1'],
  },
}

const prod = process.env.NODE_ENV === 'production'

module.exports = prod ? withPWA(nextConfig) : nextConfig
