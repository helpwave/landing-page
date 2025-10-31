import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider, ThemeProvider } from '@helpwave/hightide'
import '../globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const pathname = usePathname()

  // All mediQuu customers are from germany, therefore /mediquu overrides the defaultLanguage
  const defaultLanguage = pathname === '/mediquu' ? 'de' : undefined

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
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider language={defaultLanguage}>
            <Component {...pageProps}/>
            <Toaster/>
          </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
