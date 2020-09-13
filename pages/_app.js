import { MDXProvider } from '@mdx-js/react'
import baseStyles from 'styles/base'
import fonts from 'styles/fonts'
import { DarkModeProvider } from 'lib/contexts/dark-mode-context'
import Progress from 'components/nprogress'
import { components } from 'components/mdx-components'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from 'lib/gtag'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <MDXProvider components={components}>
      <DarkModeProvider>
        <Progress />
        <style global jsx>
          {fonts}
        </style>
        <style global jsx>
          {baseStyles}
        </style>
        <Component {...pageProps} />
      </DarkModeProvider>
    </MDXProvider>
  )
}

export default MyApp
