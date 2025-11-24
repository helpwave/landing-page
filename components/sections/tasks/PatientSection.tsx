import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { TagIcon } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

export const PatientSection = () => {
  const translation = useLandingPageTranslation()
  const imageUrl = 'https://cdn.helpwave.de/products/patient_list.png'

  return (
    <SectionBase
      outerClassName="tablet:pb-0 desktop:pb-0"
      className="max-tablet:flex max-tablet:flex-wrap max-tablet:justify-center tablet:row tablet:justify-between w-full !gap-x-16 gap-y-8 items-center"

    >
      <div
        className="row items-end justify-center rounded-l-3xl max-tablet:w-full w-2/5 z-10 min-w-[250px]"
      >
        <Image
          src={imageUrl}
          alt=""
          width={371}
          height={649}
          className="max-h-[70vh]"
        />
      </div>
      <div className="col gap-y-2 pb-16 max-tablet:pb-0">
        <div className="col gap-y-2">
          <div className="row gap-x-1 text-primary items-center">
            <TagIcon/>
            <span className="typography-title-md">{translation('tasks.patients.patients')}</span>
          </div>
          <h2 className="typography-title-lg">{translation('tasks.patients.title')}</h2>
          <span className="font-space font-semibold">
            <MarkdownInterpreter text={translation('tasks.patients.description')}/>
          </span>
        </div>
      </div>
    </SectionBase>
  )
}
