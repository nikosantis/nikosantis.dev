import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'data-posts/*.mdx',
  contentType: 'mdx',
  fields: {
    slug: { type: 'string', required: true },
    date: { type: 'string', required: true },
    dateForISO: { type: 'string', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true }
  }
}))

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: 'about/*.mdx',
  contentType: 'mdx',
  fields: {
    slug: { type: 'string', required: true },
    title: { type: 'string', required: true }
  }
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'lib',
  documentTypes: [Post, About],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism]
  }
})

export default contentLayerConfig
