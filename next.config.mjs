import { withContentCollections } from '@content-collections/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['geist'],
  bundlePagesRouterDependencies: true,
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  async redirects() {
    return [
      {
        source: '/sobre-mi',
        destination: '/about',
        permanent: true
      },
      {
        source: '/curriculum',
        destination: '/',
        permanent: true
      },
      {
        source: '/en/:path*',
        destination: '/',
        permanent: false
      }
    ]
  }
}

export default withContentCollections(nextConfig)
