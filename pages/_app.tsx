import type { AppProps } from 'next/app'

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import GlobalStyle from './../styles/GlobalStyle'
import LightTheme from './../styles/LightTheme'

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'
import DarkTheme from '../styles/DarkTheme'

const ThemeContext = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { resolvedTheme } = useTheme()
  return (
    <StyledComponentsThemeProvider
      theme={resolvedTheme === 'light' ? LightTheme : DarkTheme}
    >
      {children}
    </StyledComponentsThemeProvider>
  )
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <NextThemeProvider>
        <GlobalStyle />
        <ThemeContext>
          <Component {...pageProps} />
        </ThemeContext>
      </NextThemeProvider>
    </>
  )
}
export default MyApp
