import type { HightideTranslationLocales } from '@helpwave/hightide'
import { useLocale } from '@helpwave/hightide'
import { HelpwaveLogo } from '@helpwave/hightide'
import clsx from 'clsx'
import { SectionBase } from '@/components/sections/SectionBase'
import type { ProfileProps } from '@/components/Profile'
import { Profile } from '@/components/Profile'
import { MediQuuBadge } from '@/components/sections/mediQuu/MediQuuBadge'
import type { Translation } from '@helpwave/internationalization'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'

const imageUrl = (key: string) => `https://cdn.helpwave.de/profile/${key}.png`

const contactsHelpwave: ProfileProps[] = [
  {
    name: 'Felix Evers',
    roleBadge: 'CEO',
    role: 'Chief Executive Officer',
    imageUrl: imageUrl('felix_evers'),
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/f-evers/' },
      { type: 'mail', url: 'mailto:felix.evers@helpwave.de' },
      { type: 'website', url: 'https://felixevers.de' },
      { type: 'github', url: 'https://github.com/use-to' },
    ],
    imageClassName: '!w-[230px] !h-[200px]'
  },
  {
    name: 'Christian Porschen',
    prefix: 'Dr. med.',
    role: 'Chief Medical Officer',
    roleBadge: 'CMO',
    imageUrl: imageUrl('christian_porschen'),
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/cpors/' },
      { type: 'mail', url: 'mailto:christian.porschen@helpwave.de' },
      { type: 'github', url: 'https://github.com/aegis301' },
    ],
    imageClassName: '!w-[230px] !h-[200px]'
  },
  {
    name: 'Ludwig Maidowski',
    prefix: 'Dr. med., Dipl.-Jur.',
    suffix: 'Maître en droit, Paris II',
    role: 'Chief Legal Officer',
    roleBadge: 'CLO',
    imageUrl: imageUrl('ludwig_maidowski'),
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/ludwig-maidowski-896b83208/' },
      { type: 'mail', url: 'mailto:ludwig.maidowski@helpwave.de' },
    ],
    imageClassName: 'w-[200px] h-[200px]'
  },
]

const contactsMediquu: (ProfileProps & { translatedInfo?: Translation<HightideTranslationLocales, { info: string }> })[] = [
  {
    name: 'Christian Remfert',
    roleBadge: 'Advisor',
    imageUrl: 'https://cdn.helpwave.de/mediquu/christian_remfert.jpg',
    socials: [
      { type: 'linkedin', url: 'https://www.linkedin.com/in/christian-remfert/' },
    ],
    imageClassName: '!w-[230px] !h-[200px]',
    translatedInfo: {
      'de-DE': { info: 'Zuständig für die konzeptionelle und technische Umsetzung der mediQuu-Plattform, zukünftig beratend tätig.' },
      'en-US': { info: 'Responsible for the conceptual and technical implementation of the mediQuu platform, providing advisory services in the future.' }
    },
    className: 'w-500px'
  },
  {
    name: 'Peter Körner',
    roleBadge: 'Advisor',
    imageUrl: 'https://cdn.helpwave.de/mediquu/peter_koerner.jpg',
    socials: [
      { type: 'mail', url: 'mailto:koerner@mediquu.de' },
    ],
    imageClassName: '!w-[230px] !h-[200px]',
    translatedInfo: {
      'de-DE': { info: 'Zuständig für die konzeptionelle und visuelle Umsetzung der mediQuu-Plattform, zukünftig beratend tätig.' },
      'en-US': { info: 'Responsible for the conceptual and visual implementation of the mediQuu platform, providing advisory services in the future.' }
    }
  },
]

export const TeamSection = () => {
  const translation = useLandingPageTranslation()
  const locale = useLocale().locale
  return (
    <SectionBase className="flex-col-2">
      <h2 className="typography-title-lg text-primary">{translation('contactPersons')}</h2>
      <span>{translation('contactDescription')}</span>
      <div className="flex flex-wrap justify-around gap-x-8 gap-y-6 mt-8">
        {contactsHelpwave.map(value => {
          const profileProps = { ...value }
          return (
            <Profile
              {...profileProps}
              key={value.name}
              badge={(
                <div className="flex-row-1 px-2 py-1 bg-black text-white w-fit rounded-md">
                  <HelpwaveLogo className="w-6 h-6"/>
                  {'helpwave'}
                </div>
              )}
              className={clsx('drop-shadow-lg hover:drop-shadow-3xl', value.className)}
            />
          )
        })}
      </div>
      <div className="flex flex-wrap justify-around gap-x-8 gap-y-6 mt-6">
        {contactsMediquu.map(value => {
          const profileProps = { ...value }
          delete profileProps.translatedInfo
          return (
            <Profile
              {...profileProps}
              key={value.name}
              info={value.translatedInfo ? value.translatedInfo[locale].info : undefined}
              badge={<MediQuuBadge/>}
              className={clsx('drop-shadow-lg hover:drop-shadow-3xl', value.className)}
            />
          )
        })}
      </div>
    </SectionBase>
  )
}
