const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
    providerImportSource: '@mdx-js/react'
  }
})

const nextConfig = {
  /** @type {import('next').NextConfig} */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  swcMinify: true
}

module.exports = withMDX(nextConfig)
