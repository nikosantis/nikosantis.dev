import { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  description?: string
  ogUrl?: string
  ogType?: 'article' | 'website'
  structuredData?: string
  children: ReactNode
}

export default function ResumePage({ children, ...customMetas }: Props) {
  const metas = {
    title: 'Nikolas Santis | Desarrollador de Software',
    description:
      'Soy Nikolas Santis, Desarrollador de Software, Full Stack JavaScript & TypeScript Senior. Backend & Frontend. React, Nextjs, Nodejs. Trabajando remotamente desde Chile.',
    ogType: 'website',
    ...customMetas
  }
  return (
    <div className='relative min-h-full h-full w-full'>
      <Head>
        <title>{metas.title}</title>
        <meta name='description' content={metas.description} />
        <meta property='og:title' content={metas.title} />
        <meta
          property='og:site_name'
          content='Nikolas Santis | Desarrollador de Software'
        />
        <meta name='author' content='Nikolas Santis' />
        <meta property='og:url' content='https://nikosantis.dev/cv' />
        <meta property='og:type' content={metas.ogType} />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:description' content={metas.description} />
        <meta
          name='image'
          property='og:image'
          content='https://nikosantis.dev/images/nikosantis-dev.png'
        />
        <meta name='twitter:title' content={metas.title} />
        <meta name='twitter:description' content={metas.description} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nikosantise' />
        <meta name='twitter:creator' content='@nikosantise' />
        <meta
          name='twitter:image'
          content='https://nikosantis.dev/images/nikosantis-dev.png'
        />
      </Head>
      {children}
    </div>
  )
}
