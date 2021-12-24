import { ReactNode } from 'react'
import Head from 'next/head'

import HeaderEn from 'components/layout/header-en'
import FooterEn from 'components/layout/footer-en'

type Props = {
  title?: string
  description?: string
  image?: string
  ogUrl?: string
  ogType?: 'article' | 'website'
  structuredData?: string
  children: ReactNode
}

export default function PageEn({
  image,
  ogUrl,
  children,
  ...customMetas
}: Props) {
  const metas = {
    title: 'Nikolas Santis | Software Developer',
    description:
      "I'm Nikolas Santis, a Software Developer, Full Stack JavaScript & TypeScript Senior. Backend & Frontend. React, Nextjs, Nodejs. Working remotely from Chile.",
    ogType: 'website',
    ogUrl: 'https://nikosantis.dev/',
    ...customMetas
  }
  return (
    <div className='relative min-h-full w-full'>
      <Head>
        <title>{metas.title}</title>
        <meta name='description' content={metas.description} />
        <meta property='og:title' content={metas.title} />
        <meta
          property='og:site_name'
          content='Nikolas Santis | Software Developer'
        />
        <meta name='author' content='Nikolas Santis' />
        <meta
          property='og:url'
          content={ogUrl ? `https://nikosantis.dev/${ogUrl}` : metas.ogUrl}
        />
        <meta property='og:type' content={metas.ogType} />
        <meta property='og:locale' content='en' />
        <meta property='og:description' content={metas.description} />
        <meta
          name='image'
          property='og:image'
          content={image || 'https://nikosantis.dev/images/nikosantis-dev.png'}
        />
        <meta name='twitter:title' content={metas.title} />
        <meta name='twitter:description' content={metas.description} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nikosantise' />
        <meta name='twitter:creator' content='@nikosantise' />
        <meta
          name='twitter:image'
          content={image || 'https://nikosantis.dev/images/nikosantis-dev.png'}
        />
      </Head>
      <HeaderEn />
      {children}
      <FooterEn />
    </div>
  )
}
