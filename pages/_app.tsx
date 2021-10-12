import '../styles/base.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import 'components/nprogress'
import MdxComponentsProvider from 'components/mdx-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </MdxComponentsProvider>
  )
}

export default MyApp
