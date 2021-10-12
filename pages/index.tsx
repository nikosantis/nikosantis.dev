import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getPosts, GetPostsType } from 'lib/posts'
import Page from 'components/layout/page'
import Main from 'components/layout/main'
import Container from 'components/layout/container'

type Props = {
  myPosts?: GetPostsType
}

export default function Home({ myPosts }: Props) {
  return (
    <Page>
      <Main>
        <Container>
          <div className='flex flex-col min-h-intro'>
            <div className='py-[45px]'>
              <h1 className='mb-7 text-4xl'>
                Hola{' '}
                <span role='img' aria-label='hola'>
                  👋
                </span>
                , mi nombre es Nikolas Santis
                <br /> y este es mi blog
              </h1>
              <p className='text-lg font-light'>
                Soy desarrollador JavaScript y TypeScript de software, web y
                mobile. Comparto mi experiencia con artículos sobre JavaScript,
                TypeScript, React, Nextjs, Jamstack, Node, Serverless y más.
              </p>
            </div>

            <div className='flex-1 h-full py-6 px-0 transition'>
              {myPosts &&
                myPosts.map(post => (
                  <Link
                    href={post.slug}
                    key={post.slug}
                    aria-label={`Ir al post ${post.title}`}
                  >
                    <a title={post.title} className='group block mb-2'>
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

export const getStaticProps: GetStaticProps = async () => {
  const myPosts = await getPosts()
  return {
    props: {
      myPosts
    }
  }
}
