import Link from 'next/link'
import type { Translation } from '@helpwave/hightide'
import { HelpwaveLogo, MarkdownInterpreter, Navigation, useTranslation } from '@helpwave/hightide'

const homeURL = '/'

type LinkNames = 'products' | 'mediquu' | 'support' | 'team' | 'invest' | 'tasks' | 'appzumdoc' | 'netzmanager'

type HeaderTranslationType = {
    contact: string,
} & { [key in LinkNames]: string }

const defaultHeaderTranslation: Translation<HeaderTranslationType> = {
    en: {
        products: 'Products',
        mediquu: 'mediQuu',
        team: 'Team',
        contact: 'Contact us',
        tasks: 'tasks',
        support: 'Support',
        invest: 'Invest',
        appzumdoc: 'App Zum Doc',
        netzmanager: 'mediQuu Netzmanager',
    },
    de: {
        products: 'Produkte',
        mediquu: 'mediQuu',
        team: 'Team',
        contact: 'Kontakt',
        tasks: 'tasks',
        support: 'Hilfe',
        invest: 'Investieren',
        appzumdoc: 'App Zum Doc',
        netzmanager: 'mediQuu Netzmanager',
    }
}

const Header = () => {
  const translation = useTranslation([defaultHeaderTranslation])

  return (
    <div className="absolute top-0 z-[50] row items-center justify-between w-screen section-padding-x h-16 pt-2">
      <Link href={homeURL} className="row gap-x-1 items-center text-2xl">
        <HelpwaveLogo className="w-10 h-10"/>
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
            label: translation('mediquu'),
            link: '/mediquu'
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
