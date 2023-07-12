import '@/styles/globals.css'
import { darkTheme, lightTheme, customTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string
}

export default function App({ Component, pageProps, theme = 'light' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark')
        ? darkTheme
        : customTheme
    setCurrentTheme(selectedTheme)
  }, [])



  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


// App.getInitialProps=async(appContext:AppContext) =>{
//   const {theme}=appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme:'light'}
//   const validThemes=['light','dark','custom']
//   console.log(theme)
//   return {
//     theme:validThemes.includes(theme) ? theme : 'light',
//   }
// }