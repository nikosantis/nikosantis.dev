import Link from 'next/link'
import { useRouter } from 'next/router'
import Page from 'components/layout/page'
import Main from 'components/main'
import Container from 'components/container'
import ButtonLink from 'components/button-link'

export default function Custom404 () {
  return (
    <Page
      title='404 | Error'
    >
      <Main>
        <Container>
          <div className='wrapper'>
            <div className='intro'>
              <h1>404</h1>
              <p>
                Ouch 😱, esta página no existe.
              </p>
              <p>
                Mejor que vuelvas al inicio
              </p>
              <br />
              <ButtonLink href='/'>
                Volver
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Main>

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
        `}
      </style>
    </Page>
  )
}
