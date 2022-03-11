import { ReactNode } from 'react'
import Image from 'next/image'

import Page from 'components/layout/page'
import Main from 'components/layout/main'
import Container from 'components/layout/container'
import avatarImg from 'public/images/nikolas-santis.png'

type Props = {
  children: ReactNode
}

export default function About({ children }: Props) {
  return (
    <Page
      title='Soy Nikolas Santis | Desarrollador de Software'
      ogUrl='sobre-mi'
    >
      <Main>
        <Container>
          <header className='w-full flex items-center justify-center py-6 mb-5 flex-col lg:flex-row'>
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden relative lg:w-[100px] lg:h-[100px]'>
              <Image
                src={avatarImg}
                alt='Nikolas Santis'
                layout='fill'
                objectFit='contain'
                placeholder='blur'
              />
            </div>
            <div className='text-center lg:text-left ml-6'>
              <h1 className='m-0 text-2xl lg:text-3xl'>
                Mi nombre es Nikolas Santis
                <br />
                <span className='text-xl lg:text-2xl'>
                  y soy desarrollador de Software
                </span>
              </h1>
            </div>
          </header>
          <section className='mdx-content'>{children}</section>
        </Container>
      </Main>
    </Page>
  )
}
