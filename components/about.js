import Page from 'components/layout/page'
import Main from 'components/main'
import Container from 'components/container'

export default function About ({ children }) {
  return (
    <Page
      title='Mi nombre es Nikolas Santis | Desarrollador JavaScript'
    >
      <Main>
        <Container>
          <header>
            <figure className='photo'>
              <img src='/images/nikolas-santis.png' alt='Nikolas Santis' />
            </figure>
            <div className='title'>
              <h1>
                Mi nombre es Nikolas Santis
                <br />
                <span>
                  y soy desarrollador JavaScript
                </span>
              </h1>
            </div>
          </header>
          <section className='content'>
            {children}
          </section>
        </Container>
      </Main>
      <style jsx>
        {`
          header {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px 0;
            margin-bottom: 20px;
          }
          .photo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            @media (min-width: 992px) {
              width: 150px;
              height: 150px;
            }
          }
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            @media (min-width: 992px) {
              width: 150px;
              height: 150px;
            }
          }
          .title {
            margin-left: 25px;
            h1 {
              margin: 0;
              font-size: 2rem;
              span {
                font-size: 1.25rem;
                @media (min-width: 992px) {
                  font-size: 1.5rem;
                }
              }
              @media (min-width: 992px) {
                font-size: 2.25rem;
              }
            }
          }
          .content {
            padding: 12px 0;
          }
        `}
      </style>
    </Page>
  )
}
