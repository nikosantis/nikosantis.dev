import { GetStaticProps } from 'next'
import Link from 'next/link'

import { GetPostsType } from 'lib/posts'
import Page from 'components/layout/page'
import Main from 'components/layout/main'
import Container from 'components/layout/container'
import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

type Props = {
  myPosts?: GetPostsType
}

export default function Blog({ myPosts }: Props) {
  return (
    <Page
      title='Mi Blog | Nikolas Santis, Desarrollador JavaScript'
      ogUrl='https://nikosantis.dev/blog'
      description='Mi Blog. Aquí encontrarás artículos sobre JavaScript, React, Nextjs, Jamstack, Node, Serverless y más cosas.'
    >
      <Main>
        <Container>
          <div className='flex flex-col min-h-intro'>
            <div className='py-[45px]'>
              <h1 className='mb-7 text-3xl'>Este es mi Blog</h1>
              <p className='text-lg font-light'>
                Aquí encontrarás artículos sobre JavaScript, React, Nextjs,
                Jamstack, Node, Serverless y más cosas.
              </p>
            </div>
            <div className='flex-1 h-full py-6 px-0 transition'>
              {myPosts.map(post => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  aria-label={`Ir al post ${post.title}`}
                >
                  <a className='group block mb-2' title={post.title}>
                    <div className='p-[10px] transition bg-transparent rounded-md group-hover:bg-gray-100 dark:group-hover:bg-gray-500'>
                      <h2 className='transition text-ns-fg-light dark:text-white text-2xl'>
                        {post.title}
                      </h2>
                      <time
                        dateTime={new Date(post.dateForISO).toISOString()}
                        className='transition text-ns-fg-light dark:text-white'
                      >
                        {post.date}
                      </time>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Main>
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = (allPosts as Post[])
    .map(x => ({
      slug: x.slug,
      date: x.date,
      dateForISO: x.dateForISO,
      title: x.title,
      description: x.description,
      image: x.image,
      url: x.slug
    }))
    .sort((a, b) => {
      const date1 = new Date(a.dateForISO).valueOf()
      const date2 = new Date(b.dateForISO).valueOf()
      return date2 - date1
    })
  return {
    props: {
      myPosts: posts
    }
  }
}
