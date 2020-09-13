import Page from 'components/layout/page'
import Main from 'components/main'
import Container from 'components/container'
import { posts } from 'lib/posts'
import Link from 'next/link'

export default function Home () {
  return (
    <Page>
      <Main>
        <Container>
          <div className='wrapper'>
            <div className='intro'>
              <h1>
                Hola 👋, mi nombre es Nikolas Santis
                <br /> y este es mi blog
              </h1>
              <p>
                Soy desarrollador JavaScript de software, web y mobile.
                Comparto mi experiencia con artículos sobre JavaScript, React, Nextjs, Jamstack, Node, Serverless y más.
              </p>
            </div>
            <div className='posts'>
              {
                posts.map(post => (
                  <Link href={post.slug} key={post.slug}>
                    <a className='post-link'>
                      <div className='post'>
                        <h2>
                          {post.title}
                        </h2>
                        <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
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
              &:hover .post {
                background: var(--ns-light);
                border-radius: 6px;
              }
            }
            .post {
              padding: 10px;
              transition: background 0.2s ease;
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
