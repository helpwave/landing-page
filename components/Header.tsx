import Link from 'next/link'
import { HelpwaveLogo, MarkdownInterpreter, Navigation } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'

const homeURL = '/'

const Header = () => {
  const translation = useLandingPageTranslation()

  return (
    <div className="absolute top-0 z-[50] row items-center justify-between w-screen section-padding-x h-16 pt-2">
      <Link href={homeURL} className="row gap-x-1 items-center text-2xl">
        <HelpwaveLogo className="w-10 h-10" />
        <MarkdownInterpreter text={'\\helpwave'} />
      </Link>
      <Navigation
        items={[
          {
            label: translation('products'),
            link: '/product',
            items: [
              {
                label: translation('tasks'),
                link: '/product/tasks',
              },
              {
                label: translation('appzumdoc'),
                link: 'https://app-zum-doc.de',
                external: true
              },
              {
                label: translation('netzmanager'),
                link: 'https://mediquu.de/mediquu_netzmanager.html',
                external: true
              }
            ]
          },
          {
            label: 'invest',
            link: 'https://invest.helpwave.de',
            external: true
          },
          {
            label: translation('support'),
            link: 'https://support.helpwave.de',
            external: true
          },
          {
            label: translation('team'),
            link: '/team'
          },
        ]}
        className="w-full max-w-[1200px] desktop:justify-end"
      />
    </div>
  )
}

export default Header
