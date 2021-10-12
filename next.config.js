const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism]
  }
})

const nextConfig = {
  /** @type {import('next').NextConfig} */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)
