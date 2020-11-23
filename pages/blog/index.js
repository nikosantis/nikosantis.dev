import Page from 'components/layout/page'
import Main from 'components/main'
import Container from 'components/container'
import { posts } from 'lib/posts'
import Link from 'next/link'

export default function Blog ({ myPosts }) {
  return (
    <Page
      title='Mi Blog | Nikolas Santis, Desarrollador JavaScript'
      ogUrl='https://nikosantis.dev/blog'
      description='Mi Blog. Aquí encontrarás artículos sobre JavaScript, React, Nextjs, Jamstack, Node, Serverless y más cosas.'
    >
      <Main>
        <Container>
          <div className='wrapper'>
            <div className='intro'>
              <h1>
                Este es mi Blog
              </h1>
              <p>
                Aquí encontrarás artículos sobre JavaScript, React, Nextjs, Jamstack, Node, Serverless y más cosas.
              </p>
            </div>
            <div className='posts'>
              {
                myPosts.map(post => (
                  <Link href={post.slug} key={post.slug}>
                    <a className='post-link'>
                      <div className='post'>
                        <h2>
                          {post.title}
                        </h2>
                        <time dateTime={new Date(post.dateForISO).toISOString()}>{post.date}</time>
                      </div>
                    </a>
                  </Link>
                ))
              }
            </div>
          </div>
        </Container>
        <style jsx>
          {`
            .intro {
              padding: 45px 0;
            }
            .wrapper {
              display: flex;
              flex-direction: column;
              min-height: calc(100vh - (var(--ns-header) + var(--ns-footer)));
            }
            h1 {
              margin-bottom: 25px;
            }
            p {
              font-size: 1.2rem;
            }
            .posts {
              padding: 25px 0;
              height: 100%;
              flex: 1;
            }
            .post-link {
              text-decoration: none;
              color: var(--ns-fg);
              &:hover .post {
                background: var(--ns-light);
                border-radius: 6px;
              }
            }
            .post {
              padding: 10px;
              transition: background 0.2s ease;
              margin-bottom: 8px;
              h2 {
                font-size: 1.5rem;
              }
            }
          `}
        </style>
      </Main>
    </Page>
  )
}

export function getStaticProps () {
  return {
    props: {
      myPosts: [...posts]
    }
  }
}
