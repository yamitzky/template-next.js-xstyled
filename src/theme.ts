import { Theme } from '@emotion/react'
import { defaultTheme, createGlobalStyle } from '@xstyled/emotion'

// テーマ変更時は next-env.d.ts も更新する

export const theme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    text: '#1f2937',
    primary: '#0e7490',
  },
  screens: {
    ...defaultTheme.screens,
    '2xs': 0,
    xs: 375,
  },
}

export const GlobalStyle = createGlobalStyle`
  body {
    color: text;
  }
  a {
    color: blue-800;
  }
  img {
    max-width: 100%;
    height: auto;
    flex-shrink: 0;
  }
`
