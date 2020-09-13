import { MDXProvider } from '@mdx-js/react'
import baseStyles from 'styles/base'
import fonts from 'styles/fonts'
import { DarkModeProvider } from 'lib/contexts/dark-mode-context'
import Progress from 'components/nprogress'
import { components } from 'components/mdx-components'

function MyApp ({ Component, pageProps }) {
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
