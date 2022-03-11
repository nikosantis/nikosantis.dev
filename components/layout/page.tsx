import { ReactNode } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

type Props = {
  title?: string
  description?: string
  image?: string
  ogUrl?: string
  ogType?: 'article' | 'website'
  structuredData?: string
  children: ReactNode
  date?: string
}

export default function Page({ children, ...customMetas }: Props) {
  const router = useRouter()
  const metas = {
    title: 'Nikolas Santis | Desarrollador de Software',
    description:
      'Soy Nikolas Santis, Desarrollador de Software, Full Stack JavaScript & TypeScript Senior. Backend & Frontend. React, Nextjs, Nodejs. Trabajando remotamente desde Chile.',
    ogType: 'website',
    ogUrl: 'https://nikosantis.dev/',
    image: 'https://nikosantis.dev/images/nikosantis-dev.png',
    ...customMetas
  }
  return (
    <div className='relative min-h-full w-full'>
      <Head>
        <title>{metas.title}</title>
        <meta name='robots' content='follow, index' />
        <meta name='description' content={metas.description} />
        <meta property='og:title' content={metas.title} />
        <meta
          property='og:site_name'
          content='Nikolas Santis | Desarrollador de Software'
        />
        <meta name='author' content='Nikolas Santis' />
        <meta
          property='og:url'
          content={`https://nikosantis.dev${router.asPath}`}
        />
        <link rel='canonical' href={`https://nikosantis.dev${router.asPath}`} />
        <meta property='og:type' content={metas.ogType} />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:description' content={metas.description} />
        <meta name='image' property='og:image' content={metas.image} />
        <meta name='twitter:title' content={metas.title} />
        <meta name='twitter:description' content={metas.description} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nikosantise' />
        <meta name='twitter:creator' content='@nikosantise' />
        <meta name='twitter:image' content={metas.image} />
        {metas.date && (
          <meta property='article:published_time' content={metas.date} />
        )}
      </Head>
      <Script
        strategy='afterInteractive'
        id='GTM'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
        }}
      />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
