import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getPosts, GetPostsType } from 'lib/posts'
import PageEn from 'components/layout/page-en'
import Main from 'components/layout/main'
import Container from 'components/layout/container'

type Props = {
  myPosts?: GetPostsType
}

export default function Home({ myPosts }: Props) {
  return (
    <PageEn>
      <Main>
        <Container>
          <div className='flex flex-col min-h-intro'>
            <div className='py-[45px]'>
              <h1 className='mb-7 text-4xl'>
                Hi there{' '}
                <span role='img' aria-label='hola'>
                  👋
                </span>
                , my name is Nikolas Santis
                <br /> and this is my blog
              </h1>
              <p className='text-lg font-light'>
                I&apos;m a Software Developer working remotely from Chile. I
                like to create content and I&apos;m sharing about the
                technologies that I currently use, experiences and daily life
                while developing, through my blog and creating community.
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
                          <span className='ml-2 text-sm'>
                            [not in english yet]
                          </span>
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
    </PageEn>
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
