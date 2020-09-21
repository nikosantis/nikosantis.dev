import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Page ({ title, description, image, ogUrl, ogType, children }) {
  return (
    <div className='page'>
      <Head>
        <title>{title || 'Nikolas Santis | Desarrollador JavaScript'}</title>
        <meta
          name='description'
          content={description || 'Soy Nikolas Santis, Desarrollador JavaScript de Software, Web y Mobile.  Este es mi Blog. Santiago, Chile 2020.'}
        />
        <meta property='og:title' content={title || 'Nikolas Santis | Desarrollador JavaScript'} />
        <meta property='og:site_name' content='Nikolas Santis | Desarrollador JavaScript' />
        <meta property='og:url' content={ogUrl || 'https://nikosantis.dev/'} />
        <meta property='og:type' content={ogType || 'website'} />
        <meta property='og:locale' content='es_CL' />
        <meta
          property='og:description'
          content='Soy Nikolas Santis, Desarrollador JavaScript de Software, Web y Mobile. Este es mi Blog Santiago, Chile 2020.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nikosantise' />
        <meta name='twitter:creator' content='@nikosantise' />
        <meta
          property='og:image'
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
            width: 100vw;
            min-height: 100vh;
          }
        `}
      </style>
      <style global jsx>
        {`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          a {
            -webkit-tap-highlight-color: transparent;
          }
          @media (any-hover: hover) {
            a:hover {
              -webkit-tap-highlight-color: transparent;
            }
          }
          html {
            scroll-behavior: smooth;
          }
          body {
            font-family: var(--font-sans);
            background: var(--ns-bg);
            color: var(--ns-fg);
            width: 100vw;
            min-height: 100vh;
            transition: color 0.1s ease-in-out, background 0.1s ease-in-out;
            margin: 0;
          }
          h1, h2, h3 {
            margin: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: var(--font-sans);
            font-weight: 600;
            line-height: 1.75;
          }
          h1 {
            font-size: 2.25rem;
            font-weight: 600;
            line-height: 1.25;
            letter-spacing: -0.89px;
          }
          h2 {
            font-size: 2rem;
            letter-spacing: -0.69px;
          }
          h3 {
            font-size: 1.5rem;
            letter-spacing: -0.47px;
          }
          h4 {
            font-size: 1.25rem;
            letter-spacing: -0.33px;
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
          button {
            border: none;
            padding: 0;
            margin: 0;
            line-height: inherit;
            font-size: inherit;
          }
          ::selection {
            text-shadow: none;
            background: var(--ns-selection);
            color: var(--ns-bg);
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
          .no-tap-highlight,
          a {
            -webkit-touch-callout: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }
          hr {
            border: none;
            border-bottom: 1px solid var(--ns-light-gray);
            transition: border-color .1s ease-in-out;
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
