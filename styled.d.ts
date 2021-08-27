// import original module declarations
import '@xstyled/system'
import '@emotion/react'
import { ITheme, DefaultTheme as XStyledDefaultTheme } from '@xstyled/emotion'

interface AppTheme extends XStyledDefaultTheme {
  /* Customize your theme */
  colors: XStyledDefaultTheme['colors'] & {
    text: string
    primary: string
  }
  screens: XStyledDefaultTheme['screens'] & {
    '2xs': number // for iPhone XS
  }
}

// and extend them!
declare module '@xstyled/system' {
  export interface Theme extends ITheme, AppTheme {}
}
declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
