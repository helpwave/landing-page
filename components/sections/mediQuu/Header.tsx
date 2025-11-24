import { HelpwaveLogo } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

export const MediQuuHeaderSection = () => {
  const translation = useLandingPageTranslation()
  return (
    <SectionBase >
      <div className="flex max-tablet:flex-col-reverse max-tablet:items-center tablet:row w-full gap-x-4 gap-y-8">
        <div className="col gap-y-2 desktop:max-w-[50%]">
          <h1 className="typography-headline-lg">{translation('mediquu.header.title')}</h1>
          <span className="typography-body-lg">
            <MarkdownInterpreter text={translation('mediquu.header.subTitle')}/>
          </span>
        </div>
        <div className="row justify-center items-center grow">
          <div className="col gap-y-4 min-w-[350px] max-w-[350px]">
            <div className="bg-white rounded-md px-6 py-4 !gap-x-2 !w-fit shadow-md">
              <Image src="https://cdn.helpwave.de/mediquu/logo_2021.png" alt="" width={140} height={64}/>
            </div>
            <div className="flex-row-2 justify-end">
              <div className="flex-row-2 items-center bg-secondary text-on-secondary w-fit shadow-md py-4 px-6 rounded-lg">
                <HelpwaveLogo size="lg" className="min-w-10 min-h-10"/>
                <span className="typography-title-lg">{'helpwave'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  )
}
