import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import Page from 'components/layout/page'
import Container from 'components/container'
import BodyPost from 'components/body-post'

export default function BlogPost ({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Page
      title={post.title}
      description={post.excerpt}
    >
      <main>
        <Container>
          <article>
            <header>
              <h1>{post.title}</h1>
              <time dateTime={new Date(post.date).toISOString()}>
                {post.date}
              </time>
            </header>
            <BodyPost content={post.content} />
          </article>
        </Container>
      </main>

      <style jsx>
        {`
          main {
            width: 100vw;
            min-height: calc(100vh - (var(--ns-header) + var(--ns-footer)));
          }
        `}
      </style>
    </Page>
  )
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'content',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
