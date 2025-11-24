import { HelpwaveLogo } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Link from 'next/link'
import Image from 'next/image'
import { SectionBase } from '@/components/sections/SectionBase'
import { Check } from 'lucide-react'

/**
 * A Section for showing helpwave tasks features and information about the demo
 */
export const TasksDemoSection = () => {
  const translation = useLandingPageTranslation()

  const demoURL = 'https://tasks.helpwave.de'
  const imageURL = 'https://cdn.helpwave.de/products/tasks_preview.png'
  return (
    <SectionBase
      className="flex-col-20 items-center w-full"
      outerClassName="pb-0"
    >
      <div className="flex-col-8 desktop:flex-row-16 w-full items-end justify-between">
        <div className="flex-col-4 desktop:max-w-[70%]">
          <div className="flex-row-2 items-center justify-center text-primary bg-purple-100 !w-fit px-2 py-1 rounded">
            <HelpwaveLogo className="w-8 h-8"/>
            <h2 className="typography-title-md whitespace-nowrap">{translation('helpwaveTasks')}</h2>
          </div>
          <span className="typography-title-lg">{translation('section.demo.workflowManagement')}</span>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 overflow-x-auto mt-2">
            {[translation('section.demo.feature1'),
              translation('section.demo.feature2'),
              translation('section.demo.feature3'),
              translation('section.demo.feature4')]
              .map((feature, index) => (
                <div key={index} className="row items-center">
                  <div
                    className="col justify-center items-center bg-primary text-white rounded-full min-w-[24px] min-h-[24px]">
                    <Check size={18} strokeWidth={2.5}/>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
          </div>
        </div>
        <Link
          href={demoURL}
          className="btn-md hover:brightness-[98%] bg-on-primary text-primary font-bold text-lg whitespace-nowrap"
        >
          {translation('section.demo.tryDemo')}
        </Link>
      </div>
      <Image
        src={imageURL}
        alt=""
        className="w-full rounded-t-2xl max-w-[1000px]"
        style={{ transform: 'scale(101.28051%, 102.6862%) translate(-0.640255%, -1.3431%)' }}
        width={2351}
        height={1246}
        priority={true}
      />
    </SectionBase>
  )
}
