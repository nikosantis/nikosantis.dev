import { withContentlayer } from 'next-contentlayer'

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [rehypePrism],
//     providerImportSource: '@mdx-js/react'
//   }
// })

const nextConfig = {
  /** @type {import('next').NextConfig} */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  swcMinify: true
}

export default withContentlayer(nextConfig)
