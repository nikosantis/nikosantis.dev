import Page from 'components/layout/page'
import Main from 'components/main'
import Container from 'components/container'

export const LayoutPost = ({ title, description, image, date }) => ({ children }) => {
  return (
    <Page
      title={`${title} | Nikolas Santis, Desarrollador JavaScript`}
      description={description}
      image={image}
    >
      <Main>
        <Container>
          <article className='post'>
            <header>
              <h1>
                {title}
              </h1>
              <time dateTime={new Date(date).toISOString()}>
                {date}
              </time>
            </header>
            <section className='content'>
              {children}
            </section>
          </article>
        </Container>
      </Main>
    </Page>
  )
}
