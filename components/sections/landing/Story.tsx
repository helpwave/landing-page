import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { SectionBase } from '@/components/sections/SectionBase'

type StoryBlockProps = {
  pill?: string,
  header: string,
  content: string,
}

const StoryBlock = ({
  pill,
  header,
  content,
}: StoryBlockProps) => {
  return (
    <div className="w-2/3 max-tablet:w-full tablet:w-full">
      <div className="col items-start">
        {pill && <h4 className="text-sm text-green-600 bg-green-100 px-3 py-0.5 font-semibold tracking-widest rounded-lg">{pill}</h4>}
      </div>
      <h2 className="pt-4 text-4xl font-space font-bold">{header}</h2>
      <br />
      <p className="text-md">
        {content}
      </p>
    </div>
  )
}

const StorySection = () => {
  const translation = useLandingPageTranslation()
  return (
    <SectionBase className="flex max-tablet:flex-row tablet:flex-wrap w-full relative gap-16" >
      <StoryBlock
        pill={translation('section.story.innovation')}
        header={translation('section.story.innovationHeader')}
        content={translation('section.story.innovationDescription')}
      />
      <StoryBlock
        pill={translation('section.story.disruption')}
        header={translation('section.story.disruptionHeader')}
        content={translation('section.story.disruptionDescription')}
      />
      <StoryBlock
        pill={translation('section.story.mission')}
        header={translation('section.story.missionHeader')}
        content={translation('section.story.missionDescription')}
      />
    </SectionBase>
  )
}

export default StorySection
