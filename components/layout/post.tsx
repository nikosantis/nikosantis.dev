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
  children: ReactNode
}

export default function LayoutPost({
  date,
  dateForISO,
  title,
  description,
  image,
  children
}: Props) {
  return (
    <Page
      title={`${title} | Nikolas Santis Software Developer`}
      description={description}
      image={`https://nikosantis.dev/images/posts/${image}`}
      ogType='article'
      date={new Date(dateForISO).toISOString()}
    >
      <Main>
        <Container>
          <article className='post mdx-content'>
            <header className='py-[35px]'>
              <h1 className='mb-4 mt-0 text-3xl'>{title}</h1>
              <time dateTime={new Date(dateForISO).toISOString()}>{date}</time>
            </header>
            <section>{children}</section>
            <footer className='py-[25px]'>
              <div className='back'>
                <ButtonLink href='/blog' aria-label='Volver atrás'>
                  <span className='flex items-center justify-center mr-2'>
                    <FiArrowLeft />
                  </span>{' '}
                  Volver
                </ButtonLink>
              </div>
            </footer>
          </article>
        </Container>
      </Main>
    </Page>
  )
}
