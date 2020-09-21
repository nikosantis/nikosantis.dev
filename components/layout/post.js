import Page from 'components/layout/page'
import Main from 'components/main'
import Container from 'components/container'
import ButtonLink from 'components/button-link'
import { FiArrowLeft } from 'react-icons/fi'

export const LayoutPost = ({ title, description, image, date, url }) => ({ children }) => {
  return (
    <Page
      title={`${title} | Nikolas Santis, Desarrollador JavaScript`}
      description={description}
      image={image}
      ogUrl={`https://nikosantis.dev/blog/${url}`}
      ogType='article'
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
            <footer>
              <div className='back'>
                <ButtonLink href='/blog'>
                  <span className='icon'><FiArrowLeft /></span> Volver
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
