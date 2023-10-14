/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/patient-directory',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
