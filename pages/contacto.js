import Page from 'components/layout/page'
import Main from 'components/main'
import Container from 'components/container'

export default function Contact () {
  return (
    <Page
      title='¿Quieres contactarme? | Nikolas Santis, Desarrollador JavaScript'
    >
      <Main>
        <Container>
          <div className='wrapper'>
            <div className='contacto'>
              <h1>
                ¿Quieres contactarme?
              </h1>
            </div>
          </div>
        </Container>
      </Main>
      <style jsx>
        {`
          .contacto {
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
