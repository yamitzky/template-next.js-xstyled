import { AppProps } from 'next/app'
import { ThemeProvider, Preflight } from '@xstyled/emotion'
import { GlobalStyle, theme } from '~/theme'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
