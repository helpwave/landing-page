import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { TagIcon } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

export const TasksKanbanSection = () => {
  const translation = useLandingPageTranslation()
  const imageUrl = 'https://cdn.helpwave.de/products/tasks_kanban.png'

  return (
    <SectionBase
      className="max-tablet:flex max-tablet:flex-wrap-reverse max-tablet:justify-center tablet:row tablet:justify-between w-full !gap-x-16 gap-y-8 items-center"
      backgroundColor="variant"
    >
      <div className="flex-col-2 pb-16 max-tablet:pb-0">
        <div className="flex-col-2">
          <div className="flex-row-1 text-primary items-center">
            <TagIcon/>
            <span className="typography-title-md">{translation('tasks.kanban.tasks')}</span>
          </div>
          <h2 className="typography-title-lg">{translation('tasks.kanban.title')}</h2>
          <span className="font-space font-semibold">
            <MarkdownInterpreter text={translation('tasks.kanban.description')}/>
          </span>
        </div>
      </div>
      <div
        className="row bottom-0 justify-center rounded-l-3xl max-tablet:w-5/6 min-w-[50%] z-10"
      >
        <Image
          src={imageUrl}
          alt=""
          width={0}
          height={0}
          className="w-fit desktop:max-h-[70vh] p-4 rounded-lg dark:bg-white"
        />
      </div>
    </SectionBase>
  )
}
