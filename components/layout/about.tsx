import { ReactNode } from 'react'
import Image from 'next/image'

import Page from 'components/layout/page'
import Main from 'components/layout/main'
import Container from 'components/layout/container'

type Props = {
  children: ReactNode
}

export default function About({ children }: Props) {
  return (
    <Page
      title='Soy Nikolas Santis | Desarrollador JavaScript y TypeScript'
      ogUrl='sobre-mi'
    >
      <Main>
        <Container>
          <header>
            <div className='photo'>
              <Image
                src='/images/nikolas-santis.png'
                alt='Nikolas Santis'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className='title'>
              <h1>
                Mi nombre es Nikolas Santis
                <br />
                <span>y soy desarrollador JavaScript y TypeScript</span>
              </h1>
            </div>
          </header>
          <section className='content'>{children}</section>
        </Container>
      </Main>
      <style jsx>
        {`
          header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px 0;
            margin-bottom: 20px;
            flex-direction: column;
            @media (min-width: 768px) {
              flex-direction: row;
            }
          }
          .photo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            @media (min-width: 992px) {
              width: 150px;
              height: 150px;
            }
          }
          .image {
            border-radius: 50%;
          }
          .title {
            text-align: center;
            @media (min-width: 768px) {
              text-align: left;
              margin-left: 25px;
            }
            h1 {
              margin: 0;
              font-size: 1.5rem;
              @media (min-width: 992px) {
                font-size: 2rem;
              }
              span {
                font-size: 1.25rem;
                @media (min-width: 992px) {
                  font-size: 1.5rem;
                }
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
