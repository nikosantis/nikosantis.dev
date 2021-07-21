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
    <div className='page'>
      <Head>
        <title>{title || 'Nikolas Santis | Desarrollador JavaScript y TypeScript'}</title>
        <meta
          name='description'
          content={
            description ||
            'Soy Nikolas Santis, Desarrollador JavaScript y TypeScript de Software, Web y Mobile.  Este es mi Blog. Santiago, Chile 2020.'
          }
        />
        <meta
          property='og:title'
          content={title || 'Nikolas Santis | Desarrollador JavaScript y TypeScript'}
        />
        <meta
          property='og:site_name'
          content='Nikolas Santis | Desarrollador JavaScript y TypeScript'
        />
        <meta name='author' content='Nikolas Santis' />
        <meta
          property='og:url'
          content={ogUrl ? `https://nikosantis.dev/${ogUrl}` : 'https://nikosantis.dev/'}
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
          content={title || 'Nikolas Santis | Desarrollador JavaScript y TypeScript'}
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
      <style jsx>
        {`
          .page {
            position: relative;
            width: 100%;
            min-height: 100%;
          }
        `}
      </style>
      <style global jsx>
        {`
          html {
            -webkit-text-size-adjust: 100%;
            height: 100%;
            box-sizing: border-box;
            touch-action: manipulation;
            font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            font-family: var(--font-sans);
            min-width: 320px;
            min-height: 100%;
            transition: color 0.1s ease-in-out, background 0.1s ease-in-out;
            margin: 0;
            font-size: 1rem;
            direction: ltr;
            font-feature-settings: 'kern';
            text-rendering: optimizeLegibility;
            scroll-behavior: smooth;
          }
          html,
          body {
            background: var(--ns-bg);
            color: var(--ns-fg);
          }
          ::selection {
            text-shadow: none;
            background: var(--ns-selection);
            color: var(--ns-bg);
          }
          [role='grid']:focus {
            outline: none;
          }
          svg {
            text-rendering: optimizeLegibility;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            color: var(--ns-fg-heads);
            font-weight: 700;
          }
          p {
            font-weight: 400;
          }
          li {
            font-weight: 400;
          }
          p a,
          a {
            outline: none;
            color: inherit;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          p a:hover,
          p a:focus,
          p a:active,
          a:hover,
          a:focus {
            color: var(--ns-gray);
          }
          a {
            -webkit-tap-highlight-color: transparent;
          }
          @media (any-hover: hover) {
            a:hover {
              -webkit-tap-highlight-color: transparent;
            }
          }
          button {
            border: none;
            padding: 0;
            margin: 0;
            line-height: inherit;
            font-size: inherit;
          }
          pre,
          code {
            font-family: var(--font-mono);
          }
          ul,
          ol {
            list-style: none;
          }
          a[role='button'] {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            user-select: none;
          }
          a {
            -webkit-touch-callout: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }
          hr {
            border: none;
            border-bottom: 1px solid var(--ns-light-gray);
            transition: border-color 0.1s ease-in-out;
          }
          div {
            display: block;
          }
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </div>
  )
}
