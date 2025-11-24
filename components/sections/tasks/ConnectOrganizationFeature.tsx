import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'
import { Check } from 'lucide-react'

export const ConnectOrganizationFeatureSection = () => {
  const translation = useLandingPageTranslation()
  const imageUrl = 'https://cdn.helpwave.de/products/tasks_ward_overview.png'

  const features = [
    translation('tasks.connectOrganization.feature1'),
    translation('tasks.connectOrganization.feature2'),
    translation('tasks.connectOrganization.feature3'),
    translation('tasks.connectOrganization.feature4'),
    translation('tasks.connectOrganization.feature5'),
    translation('tasks.connectOrganization.feature6')
  ]
  const featureStyle = 'font-semibold'

  return (
    <SectionBase
      className="max-tablet:flex max-tablet:flex-wrap-reverse max-tablet:justify-end tablet:row tablet:justify-between  w-full !max-w-full gap-8 items-center"

      outerClassName="!pr-0"
    >
      <div className="flex-col-2 items-start tablet:items-center pr-6 tablet:pr-0">
        <div className="flex-col-2 max-w-[500px] max-tablet:max-w-full">
          <h2 className="typography-title-lg">{translation('tasks.connectOrganization.title')}</h2>
          <span className="font-space font-semibold">
            <MarkdownInterpreter text={translation('tasks.connectOrganization.description')}/>
          </span>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 overflow-x-auto mt-2">
            {features.map((feature, index) => (
              <div key={index}  className="row items-center">
                <div className="col justify-center items-center bg-primary text-white rounded-full min-w-[24px] min-h-[24px]">
                  <Check size={18} strokeWidth={2.5}/>
                </div>
                <span className={featureStyle}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        // TODO fix image size and add dashed lines
        className="relative right-0 rounded-l-3xl w-2/5 tablet:min-w-[360px] max-tablet:w-4/5 z-10">
        <Image
          src={imageUrl}
          alt=""
          width={0}
          height={0}
          className="w-full object-cover"
        />
      </div>
    </SectionBase>
  )
}
