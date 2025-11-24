import { MarkdownInterpreter } from '@helpwave/hightide'
import Image from 'next/image'
import { SectionBase } from '@/components/sections/SectionBase'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'

export const MediQuuInformationSection = () => {
  const translation = useLandingPageTranslation()
  return (
    <SectionBase
      className="flex max-tablet:flex-wrap max-tablet:justify-center tablet:flex-row tablet:justify-between gap-8"
      backgroundColor="variant">
      <div className="max-w-[300px]">
        <Image
          src="https://cdn.helpwave.de/icons/agreement.svg"
          alt="two pages ready for signatures"
          width={400}
          height={150}
        />
      </div>
      <div className="col">
        <h2 className="typography-title-lg text-primary">{translation('mediquu.info.title')}</h2>
        <span className="text-justify">{translation('mediquu.info.subTitle1')}</span>
        <br/>
        <span className="text-justify"><MarkdownInterpreter text={translation('mediquu.info.subTitle2')}/></span>
        <br/>
        <span className="text-justify">
          {translation('mediquu.info.subTitle3') + ' '}
          <a className="underline" href="mailto:mediquu@helpwave.de">
            mediquu@helpwave.de
          </a>
        </span>
      </div>
    </SectionBase>
  )
}
