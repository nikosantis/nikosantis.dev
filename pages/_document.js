import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'lib/gtag'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='es'>
        <Head>
          <meta charSet='utf-8' />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
          <link rel='icon' href='/favicon/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/favicon/site.webmanifest' />
          <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000000' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `(function() {
                try {
                  var mode = localStorage.getItem('mode');
                  var darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (mode === 'dark') {
                    document.body.classList.add('dark-mode');
                    window.isDark = true
                  }
                  if (!mode && darkMode) {
                    document.body.classList.add('dark-mode');
                    window.isDark = true
                  }
                  if (!mode && !darkMode) return;
                } catch (e) {}
              })()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
