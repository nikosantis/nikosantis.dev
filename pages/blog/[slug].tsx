import { GetStaticProps, GetStaticPaths } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

import LayoutPost from 'components/layout/post'
import { components } from 'components/mdx-components'

type Props = {
  post: Post
}

export default function PostPage({ post }: Props) {
  const Component = useMDXComponent(post.body.code)
  return (
    <LayoutPost
      date={post.date}
      dateForISO={post.dateForISO}
      title={post.title}
      description={post.description}
      image={post.image}
      slug={post.slug}
    >
      <Component components={{ ...components }} />
    </LayoutPost>
  )
}

const posts = allPosts as Post[]

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find(post => post.slug === params.slug)
  return { props: { post } }
}
