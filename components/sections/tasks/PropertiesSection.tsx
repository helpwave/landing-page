import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { TagIcon } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

export const PropertiesSection = () => {
  const translation = useLandingPageTranslation()
  const imageUrl = 'https://cdn.helpwave.de/products/properties.png'

  return (
    <SectionBase
      outerClassName="desktop:py-0 tablet:py-0"
      className="max-tablet:flex max-tablet:flex-wrap max-tablet:justify-center tablet:row tablet:justify-between w-full !gap-x-16 gap-y-8 items-center"
    >
      <div
        className="row bottom-0 justify-center rounded-l-3xl max-tablet:w-full min-w-[40%] w-2/5 z-10"
      >
        <Image
          src={imageUrl}
          alt=""
          width={443}
          height={649}
          className="max-h-[70vh]"
        />
      </div>
      <div className="flex-col-2 pb-16 max-tablet:pb-0">
        <div className="flex-col-2">
          <div className="flex-row-1 text-primary items-center">
            <TagIcon/>
            <span className="typography-title-md">{translation('tasks.properties.properties')}</span>
          </div>
          <h2 className="typography-title-lg">{translation('tasks.properties.title')}</h2>
          <span className="font-space font-semibold"><MarkdownInterpreter text={translation('tasks.properties.description')}/></span>
        </div>
      </div>
    </SectionBase>
  )
}
