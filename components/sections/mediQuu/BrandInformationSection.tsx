import type { Translation } from '@helpwave/hightide'
import { HelpwaveLogo } from '@helpwave/hightide'
import { useTranslation } from '@helpwave/hightide'
import Image from 'next/image'
import { SectionBase } from '@/components/sections/SectionBase'

type MediQuuBrandDescriptionTranslation = {
  aboutMediQuuTitle: string,
  aboutHelpwaveTitle: string,
  aboutMediQuuDescription: string,
  aboutHelpwaveDescription: string,
  brandDescriptions: string,
}

const defaultMediQuuBrandDescriptionTranslation: Translation<MediQuuBrandDescriptionTranslation> = {
  en: {
    aboutMediQuuTitle: 'About mediQuu',
    aboutHelpwaveTitle: 'About helpwave',
    aboutMediQuuDescription: `
      Since 2015, we have been ensuring a comfortable and comprehensive networking of providers in the healthcare sector.
      Our goal is a demand-oriented development of digital services to simplify the networking of all actors
      and create new possibilities. In the future, we will pursue this path with the strong team of helpwave GmbH.
    `,
    aboutHelpwaveDescription: `
      As a dynamic technology company, helpwave is committed to the Open Innovation approach in healthcare, fostering new
      innovators to facilitate the easy and effective creation of high-quality health products with strong interoperability.
      With recent regulatory changes such as the introduction of the ePA and other directives impacting the outpatient sector,
      helpwave positions itself with a process-oriented development strategy as the leading alternative in the healthcare market,
      ensuring optimal digital healthcare delivery.
    `,
    brandDescriptions: 'Brand Descriptions',
  },
  de: {
    aboutMediQuuTitle: 'Über mediQuu',
    aboutHelpwaveTitle: 'Über helpwave',
    aboutMediQuuDescription: `
      Seit 2015 sorgen wir für eine komfortable und übergreifende Vernetzung von Versorgern und Leistungserbringern im Gesundheitswesen.
      Unser Ziel ist stets eine bedarfsgerechte Entwicklung von digitalen Diensten, um die Vernetzung aller Aktuere zu vereinfachen
      und neue Möglichkeiten zu schaffen. Zukünftig werden wir diesen Weg mit dem starken Team der helpwave GmbH beschreiten.
    `,
    aboutHelpwaveDescription: `
      Als dynamisches Technologieunternehmen haben wir uns dem Open Innovation-Ansatz im Gesundheitswesen verschrieben.
      Durch die Förderung neuer Innovatoren ermöglichen wir die einfache und effektive Schöpfung hochwertiger Gesundheitsprodukte
      mit hoher Interoperabilität. Angesichts der jüngsten regulatorischen Veränderungen wie der Einführung der ePA und anderer Vorschriften
      mit Auswirkungen im ambulanten Bereich positioniert sich helpwave mit einer prozessorientierten Entwicklungsstrategie als
      führende Alternative im Gesundheitsmarkt, um eine optimale digitale Versorgung zu gewährleisten.
    `,
    brandDescriptions: 'Marken Beschreibungen',
  }
}
export const BrandDescriptionsSection = () => {
  const translation = useTranslation([defaultMediQuuBrandDescriptionTranslation])
  return (
    <SectionBase className="flex-col-8 justify-center">
      <h2 className="sr-only">{translation('brandDescriptions')}</h2>
      <div
        className="flex-col-8 tablet:flex-row-8 bg-surface text-on-surface rounded-3xl px-6 max-tablet:py-6 tablet:py-12 desktop:py-16 shadow-md"
      >
        <div className="flex-row-0 items-center justify-center min-w-56 p-4 rounded-lg dark:bg-white">
          <Image src="https://cdn.helpwave.de/mediquu/logo_2021.png" alt="" width={220} height={64} className=""/>
        </div>
        <div className="flex-col-2">
          <span className="typography-title-lg">
          {translation('aboutMediQuuTitle')}
        </span>
          <span>
          {translation('aboutMediQuuDescription')}
        </span>
        </div>
      </div>
      <div
        className="flex-col-8 tablet:flex-row-8 text-on-secondary bg-secondary rounded-3xl px-6 max-tablet:py-6 tablet:py-12 desktop:py-16 shadow-md"
      >
        <div className="flex-row-2 items-center justify-center min-w-56">
          <HelpwaveLogo size="lg"/>
          <span className="typography-title-lg">{'helpwave'}</span>
        </div>
        <div className="flex-col-2">
          <span className="typography-title-lg">
          {translation('aboutHelpwaveTitle')}
        </span>
          <span>
          {translation('aboutHelpwaveDescription')}
        </span>
        </div>
      </div>
    </SectionBase>
  )
}
