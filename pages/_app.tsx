import '../styles/fonts.css'
import '../styles/base.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import Progress from 'components/nprogress'
import MdxComponentsProvider from 'components/mdx-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <ThemeProvider attribute='class'>
        <Progress />
        <Component {...pageProps} />
      </ThemeProvider>
    </MdxComponentsProvider>
  )
}

export default MyApp
