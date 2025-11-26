import clsx from 'clsx'
import Image from 'next/image'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { SectionBase } from '@/components/sections/SectionBase'

type FeatureItemProps = {
  imageUrl: string,
  size: number,
  title: string,
  description: string,
  reverse?: boolean,
}

const FeatureItem = ({
                       imageUrl,
                       size,
                       title,
                       description,
                       reverse = false
                     }: FeatureItemProps) => {
  return (
    <div className={clsx('max-tablet:col-reverse items-center gap-x-4 gap-y-6 desktop:!gap-x-8 justify-between', {
      'flex-row-reverse': reverse,
      'flex-row': !reverse
    })}>
      <div className="w-1/2 max-tablet:!w-full">
        <Image
          alt="Screenshots" src={imageUrl}
          style={{ objectFit: 'contain', width: `${size}px` }}
          width={size} height={size}
          className="shadow-md hover:shadow-2xl transition-all duration-500 w-full rounded-md"/>
      </div>

      <div className="col w-1/3 max-tablet:!w-full">
        <h2 className="typography-title-lg">
          {title}
        </h2>
        <span className="text-description">
          {description}
        </span>
      </div>
    </div>
  )
}

const FeatureSection = () => {
  const translation = useLandingPageTranslation()
  const screenshotTemplates = 'https://cdn.helpwave.de/screenshots/tasks_2.png'
  const screenshotCollab = 'https://cdn.helpwave.de/screenshots/tasks_3.png'
  const screenshotPatients = 'https://cdn.helpwave.de/screenshots/tasks_4.png'
  const size = 1024

  return (
    <SectionBase className="col gap-y-12">
      <FeatureItem
        imageUrl={screenshotTemplates}
        size={size}
        title={translation('tasks.features.taskTemplatesTitle')}
        description={translation('tasks.features.taskTemplatesText')}
      />
      <FeatureItem
        imageUrl={screenshotCollab}
        size={size}
        title={translation('tasks.features.collaborateTitle')}
        description={translation('tasks.features.collaborateText')}
        reverse={true}
      />
      <FeatureItem
        imageUrl={screenshotPatients}
        size={size}
        title={translation('tasks.features.patientsTitle')}
        description={translation('tasks.features.patientsText')}
      />
    </SectionBase>
  )
}

export default FeatureSection
