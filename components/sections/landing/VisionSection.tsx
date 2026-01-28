import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { Chip } from '@helpwave/hightide'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

const StartSection = () => {
  const translation = useLandingPageTranslation()
  const imageURL = 'https://cdn.helpwave.de/landing_page/process.png'
  return (
    <SectionBase
      className="flex-col-8 max-tablet:flex-col-reverse tablet:flex-row-8 items-center justify-center w-full"
      outerClassName="py-24"
      backgroundColor="variant"
    >
      <div className="flex-col-2 w-1/2 max-tablet:w-full">
        <Chip color="primary" className="font-semibold px-4"><h2>{translation('section.vision.ourVision')}</h2></Chip>
        <span className="typography-title-lg">{translation('section.vision.title')}</span>
        <span className="font-inter font-semibold"><MarkdownInterpreter text={translation('section.vision.description')}/></span>
      </div>
      <Image src={imageURL} alt="" width={0} height={0} className="max-tablet:w-full max-tablet:max-w-[500px] w-1/2 py-4 px-8 rounded-2xl dark:bg-white"/>
    </SectionBase>
  )
}

export default StartSection
