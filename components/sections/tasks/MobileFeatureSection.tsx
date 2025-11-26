import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'
import { TasksPlaystoreBadge } from '@/components/TasksPlaystoreBadge'
import { TasksAppStoreBadge } from '@/components/TasksAppStoreBadge'

export const MobileFeatureSection = () => {
  const translation = useLandingPageTranslation()
  const imageUrl = 'https://cdn.helpwave.de/products/mobile_preview.png'

  return (
    <SectionBase
      className="max-tablet:flex max-tablet:flex-wrap-reverse justify-center tablet:row tablet:justify-between w-full gap-8"
      backgroundColor="secondary"
      outerClassName="!pb-0"
    >
      <div className="flex-col-2 pb-16 desktop:w-3/5 justify-center">
        <div className="flex-col-2 max-tablet:pb-0">
          <h2 className="typography-title-lg">{translation('tasks.mobile.title')}</h2>
          <span className="typography-body-lg"><MarkdownInterpreter text={translation('tasks.mobile.description')}/></span>
        </div>
        <div
          // DO NOT CHANGE THE GAP. IT IS MANDATORY BY Apple
          className="flex flex-wrap gap-x-8 gap-y-4 mt-6"
        >
          <TasksPlaystoreBadge/>
          <TasksAppStoreBadge/>
        </div>
        <div className="col mt-6 gap-y-1">
          <span className="opacity-70 !text-xs">{translation('tasks.mobile.tradmarkPlaystore')}</span>
          <span className="opacity-70 !text-xs">{translation('tasks.mobile.trademarkAppstore')}</span>
        </div>
      </div>
      <div
        className="col items-center justify-end rounded-l-3xl w-2/5 max-tablet:w-full tablet:min-w-[220px] z-10 max-h-[70vh] min-h-[100%] desktop:min-h-[400px]"
      >
        <Image
          src={imageUrl}
          alt=""
          width={0}
          height={0}
          className="w-fit h-full max-h-[70vh] max-tablet:-translate-x-[6%]"
        />
      </div>
    </SectionBase>
  )
}
