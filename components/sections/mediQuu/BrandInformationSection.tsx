import { HelpwaveLogo } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { SectionBase } from '@/components/sections/SectionBase'

export const BrandDescriptionsSection = () => {
  const translation = useLandingPageTranslation()
  return (
    <SectionBase className="flex-col-8 justify-center">
      <h2 className="sr-only">{translation('mediquu.brand.brandDescriptions')}</h2>
      <div
        className="flex-col-8 tablet:flex-row-8 bg-surface text-on-surface rounded-3xl px-6 max-tablet:py-6 tablet:py-12 desktop:py-16 shadow-md"
      >
        <div className="flex-row-0 items-center justify-center min-w-56 p-4 rounded-lg dark:bg-white">
          <Image src="https://cdn.helpwave.de/mediquu/logo_2021.png" alt="" width={220} height={64} className=""/>
        </div>
        <div className="flex-col-2">
          <span className="typography-title-lg">
          {translation('mediquu.brand.aboutMediQuuTitle')}
        </span>
          <span>
          {translation('mediquu.brand.aboutMediQuuDescription')}
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
          {translation('mediquu.brand.aboutHelpwaveTitle')}
        </span>
          <span>
          {translation('mediquu.brand.aboutHelpwaveDescription')}
        </span>
        </div>
      </div>
    </SectionBase>
  )
}
