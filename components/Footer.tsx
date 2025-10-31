import { useEffect, useState } from 'react'
import type { Translation } from '@helpwave/hightide'
import { HelpwaveLogo, LanguageDialog, TextButton, ThemeDialog, useTranslation } from '@helpwave/hightide'
import * as CookieConsent from 'vanilla-cookieconsent'
import pluginConfig from '../utils/CookieConsentConfig'
import FooterLinkGroup from './FooterLinkGroup'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import { Globe, SunIcon } from 'lucide-react'

type Categories = 'socials' | 'general' | 'products' | 'development'
type FooterTranslation = { [key in Categories]: string } & {
  changeTheme: string,
  changeLanguage: string,
}

const defaultFooterTranslation: Translation<FooterTranslation> = {
  en: {
    socials: 'socials',
    general: 'general',
    products: 'products',
    development: 'development',
    changeLanguage: 'Change Language',
    changeTheme: 'Change Theme',
  },
  de: {
    socials: 'social',
    general: 'allgemein',
    products: 'produkte',
    development: 'entwicklung',
    changeLanguage: 'Sprache ändern',
    changeTheme: 'Farbschema ändern',
  }
}

type LinkType = { name: string, link: string, openInCurrentTab?: boolean, onClick?: () => void }
const linkGroups: Record<Categories, LinkType[]> = {
  socials: [
    { name: 'GitHub', link: 'https://github.com/helpwave/' },
    { name: 'LinkedIn', link: 'https://linkedin.com/company/helpwave/' },
    { name: 'Instagram', link: 'https://instagram.com/helpwave_de/' },
    { name: 'Chrunchbase', link: 'https://www.crunchbase.com/organization/helpwave' },
    { name: 'Twitter', link: 'https://twitter.com/helpwave_org' },
    { name: 'YouTube', link: 'https://www.youtube.com/@helpwave' },
    { name: 'Twitch', link: 'https://www.twitch.tv/helpwave' },
    /*
    { name: 'Spotify', link: 'https://open.spotify.com/show/6hL5UMytp81gmURnfn3dS9' },
    { name: 'Apple Podcasts', link: 'https://podcasts.apple.com/us/podcast/helpwave-talks/id1695217116' },
    {
      name: 'Google Podcasts',
      link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lNTE1NWZhMC9wb2RjYXN0L3Jzcw'
    },
    { name: 'Slack', link: 'https://helpwave.slack.com' },
    */
  ],
  development: [
    { name: 'Status', link: 'https://helpwave.betteruptime.com/' },
    { name: 'web', link: 'https://github.com/helpwave/web' },
    { name: 'mobile-app', link: 'https://github.com/helpwave/mobile-app' },
    { name: 'services', link: 'https://github.com/helpwave/services' },
    { name: 'helpwave tasks', link: 'https://tasks.helpwave.de' },
  ],
  general: [
    { name: 'Support', link: 'https://support.helpwave.de' },
    { name: 'Imprint', link: 'https://cdn.helpwave.de/imprint.html' },
    { name: 'Privacy', link: 'https://cdn.helpwave.de/privacy.html' },
    { name: 'Cookies', link: '', onClick: () => CookieConsent.showPreferences() },
    { name: 'Contact', link: 'mailto:contact@helpwave.de' },
    { name: 'Media Kit', link: 'https://assets.helpwave.de' },
    { name: 'Invest', link: 'https://invest.helpwave.de' },
    { name: 'Pitchdeck', link: 'https://cdn.helpwave.de/helpwave_pitchdeck.pdf' },
    { name: 'Onepager', link: 'https://cdn.helpwave.de/helpwave_onepager.pdf' },
    { name: 'LOI', link: 'https://cdn.helpwave.de/helpwave_letter_of_intent.pdf' },
    // { name: 'Tech-Radar', link: '/tech-radar', openInCurrentTab: true },
    { name: 'Credits', link: '/credits', openInCurrentTab: true },
  ],
  products: [
    { name: 'helpwave tasks', link: '/product/tasks' },
    { name: 'App Zum Doc', link: 'https://app-zum-doc.de/' },
    { name: 'mediQuu Netzmanager', link: 'https://mediquu.de/mediquu_netzmanager.html' },
    /* { name: 'scaffold', link: '/product/scaffold' },
      { name: 'cloud', link: '/product/cloud' },
      { name: 'impulse', link: '/product/impulse' },
      { name: 'analytics', link: '/product/analytics' },
      { name: 'core', link: '/product/core' }, */
  ]
}

const grouping: (Categories[])[] = [
  ['socials'],
  ['general', 'products'],
  ['development']
]

const Footer = () => {
  const year = new Date().getFullYear()
  const translation = useTranslation([defaultFooterTranslation], {})
  const [isThemeDialogOpen, setIsThemeDialogOpen] = useState<boolean>(false)
  const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState<boolean>(false)

  useEffect(() => {
    CookieConsent.run(pluginConfig)
  }, [])

  return (
    <footer className="w-screen bg-black text-white py-8 col items-center justify-center">
      <ThemeDialog
        isOpen={isThemeDialogOpen}
        onClose={() => setIsThemeDialogOpen(false)}
      />
      <LanguageDialog
        isOpen={isLanguageDialogOpen}
        onClose={() => setIsLanguageDialogOpen(false)}
      />
      <div
        className="flex flex-wrap w-full max-w-[900px] max-tablet:px-6 tablet:px-24 desktop:px-24 mx-auto justify-between">
        {grouping.map((groups, index) => (
          <div key={index} className="col max-tablet:w-full w-[192px] max-tablet:text-center max-tablet:items-center">
            {groups.map((category) => (
              <FooterLinkGroup key={category} title={translation(category)} links={linkGroups[category]}/>
            ))}
            {index === 2 && (
              <>
                <TextButton
                  onClick={() => setIsLanguageDialogOpen(true)}
                  size="small"
                  className="justify-start w-min light:!text-white light:hover:!bg-white/20"
                >
                  <Globe size={18}/>
                  {translation('changeLanguage')}
                </TextButton>
                <TextButton
                  onClick={() => setIsThemeDialogOpen(true)}
                  size="small"
                  className="justify-start w-min light:!text-white light:hover:!bg-white/20"
                >
                  <SunIcon size={18}/>
                  {translation('changeTheme')}
                </TextButton>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="row w-full h-[128px] items-center justify-center mx-auto font-space">
        <HelpwaveLogo color="white" className="w-32 h-32"/>
        <span className="typography-title-md">&copy; {year} helpwave</span>
      </div>
    </footer>
  )
}

export default Footer
