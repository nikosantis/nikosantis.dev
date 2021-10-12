import { ReactNode } from 'react'
import Head from 'next/head'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

type Props = {
  title?: string
  description?: string
  image?: string
  ogUrl?: string
  ogType?: 'article' | 'website'
  structuredData?: string
  children: ReactNode
}

export default function Page({
  title,
  description,
  image,
  ogUrl,
  ogType,
  children
}: Props) {
  return (
    <div className='relative min-h-full w-full'>
      <Head>
        <title>
          {title || 'Nikolas Santis | Desarrollador JavaScript y TypeScript'}
        </title>
        <meta
          name='description'
          content={
            description ||
            'Soy Nikolas Santis, Desarrollador JavaScript y TypeScript de Software, Web y Mobile.  Este es mi Blog. Santiago, Chile 2020.'
          }
        />
        <meta
          property='og:title'
          content={
            title || 'Nikolas Santis | Desarrollador JavaScript y TypeScript'
          }
        />
        <meta
          property='og:site_name'
          content='Nikolas Santis | Desarrollador JavaScript y TypeScript'
        />
        <meta name='author' content='Nikolas Santis' />
        <meta
          property='og:url'
          content={
            ogUrl
              ? `https://nikosantis.dev/${ogUrl}`
              : 'https://nikosantis.dev/'
          }
        />
        <meta property='og:type' content={ogType || 'website'} />
        <meta property='og:locale' content='es_ES' />
        <meta
          property='og:description'
          content={
            description ||
            'Soy Nikolas Santis, Desarrollador JavaScript y TypeScript de Software, Web y Mobile. Este es mi Blog Santiago, Chile 2020.'
          }
        />
        <meta
          name='image'
          property='og:image'
          content={image || 'https://nikosantis.dev/images/nikosantis-dev.png'}
        />
        <meta
          name='twitter:title'
          content={
            title || 'Nikolas Santis | Desarrollador JavaScript y TypeScript'
          }
        />
        <meta
          name='twitter:description'
          content={
            description ||
            'Soy Nikolas Santis, Desarrollador JavaScript y TypeScript de Software, Web y Mobile. Este es mi Blog Santiago, Chile 2020.'
          }
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nikosantise' />
        <meta name='twitter:creator' content='@nikosantise' />
        <meta
          name='twitter:image'
          content={image || 'https://nikosantis.dev/images/nikosantis-dev.png'}
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
