import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { TagIcon } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

export const TasksTemplatesSection = () => {
  const translation = useLandingPageTranslation()
  const imageUrl = 'https://cdn.helpwave.de/products/tasks_template_with_filter.png'

  return (
    <SectionBase
      className="max-tablet:flex max-tablet:flex-wrap-reverse max-tablet:justify-center tablet:row tablet:justify-between w-full !gap-x-16 gap-y-8 items-center"
      backgroundColor="secondary"
      outerClassName="py-24"
    >
      <div className="col gap-y-2 pb-16 max-tablet:pb-0 overflow-hidden break-words">
        <div className="col gap-y-2">
          <div className="row gap-x-1 text-primary items-center">
            <TagIcon/>
            <span className="typography-title-md">{translation('tasks.taskTemplates.taskTemplates')}</span>
          </div>
          <h2 className="typography-title-lg">{translation('tasks.taskTemplates.title')}</h2>
          <span className="font-space font-semibold">
            <MarkdownInterpreter text={translation('tasks.taskTemplates.description')}/>
          </span>
        </div>
      </div>
      <div
        className="row bottom-0 justify-center rounded-l-3xl max-tablet:w-full min-w-[50%] z-10 desktop:scale-125"
      >
        <Image
          src={imageUrl}
          alt=""
          width={0}
          height={0}
          className="w-fit desktop:max-h-[70vh]"
        />
      </div>
    </SectionBase>
  )
}
