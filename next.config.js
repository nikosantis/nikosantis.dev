const rehypePrism = require('@mapbox/rehype-prism')
const withOptimizedImages = require('next-optimized-images')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism]
  }
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx']
}

module.exports = withMDX(withOptimizedImages(nextConfig))
