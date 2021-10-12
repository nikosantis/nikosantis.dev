import { ReactNode } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import Page from 'components/layout/page'
import Main from 'components/layout/main'
import Container from 'components/layout/container'
import ButtonLink from 'components/button-link'

type Props = {
  slug: string
  date: string
  dateForISO: string
  title: string
  description: string
  image: string
  url: string
  children: ReactNode
}

export default function LayoutPost({
  date,
  dateForISO,
  title,
  description,
  image,
  url,
  children
}: Props) {
  return (
    <Page
      title={`${title} | Mi Blog`}
      description={description}
      image={`https://nikosantis.dev/images/posts/${image}`}
      ogUrl={`blog/${url}`}
      ogType='article'
    >
      <Main>
        <Container>
          <article className='post'>
            <header>
              <h1>{title}</h1>
              <time dateTime={new Date(dateForISO).toISOString()}>{date}</time>
            </header>
            <section className='content'>{children}</section>
            <footer>
              <div className='back'>
                <ButtonLink href='/blog' aria-label='Volver atrás'>
                  <span className='icon'>
                    <FiArrowLeft />
                  </span>{' '}
                  Volver
                </ButtonLink>
              </div>
            </footer>
          </article>
        </Container>
      </Main>
      <style jsx>
        {`
          header {
            padding: 35px 0;
          }
          h1 {
            margin-bottom: 15px;
            margin-top: 0;
            font-size: 2rem;
          }
          footer {
            padding: 25px 0;
          }
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
          }
        `}
      </style>
    </Page>
  )
}
