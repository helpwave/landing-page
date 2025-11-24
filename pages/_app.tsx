import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import type { HightideTranslationLocales } from '@helpwave/hightide'
import { LocaleProvider, ThemeProvider } from '@helpwave/hightide'
import { Inter, Space_Grotesk } from 'next/font/google'
import { useEffect, useState } from 'react'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const pathname = usePathname()

  // All mediQuu customers are from germany, therefore /mediquu overrides the defaultLanguage
  const [defaultLocaleOverride, setDefaultLocaleOverride] = useState<HightideTranslationLocales>()
  const [usedPath, setUsedPath] = useState<boolean>(false)

  useEffect(() => {
    if(!usedPath) {
      setDefaultLocaleOverride(pathname === '/mediquu' ? 'de-DE': undefined)
      setUsedPath(true)
    }
  }, [pathname, usedPath])

  return (
    <>
      <Head>
        <title>helpwave</title>
        <style>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-space: ${spaceGrotesk.style.fontFamily};
          }
        `}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LocaleProvider locale={defaultLocaleOverride}>
            <Component {...pageProps}/>
            <Toaster/>
          </LocaleProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
