const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism]
  }
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)