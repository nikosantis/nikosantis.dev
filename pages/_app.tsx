import '../styles/fonts.css'
import '../styles/base.css'
import type { AppProps } from 'next/app'
// import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import Progress from 'components/nprogress'
import { components } from 'components/mdx-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      {/* <ThemeProvider attribute='class' enableSystem={false}> */}
      <Progress />
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </MDXProvider>
  )
}

export default MyApp
