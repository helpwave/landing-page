import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

const ReachoutSection = () => {
  const translation = useLandingPageTranslation()

  return (
    <SectionBase className="text-xl desktop:text-center">
      <h2 className="font-space text-4xl font-bold">{translation('tasks.reachout.medicalHeroTitle')}</h2>
      <h3 className="font-sans text-xl font-medium mt-2 mb-2 text-"/>
      <h3 className="font-sans text-xl font-medium mt-2 mb-2 text-description">
        <MarkdownInterpreter text={translation('tasks.reachout.medicalHeroSubtitle')}/>
      </h3>
      <p className="mb-5">
        <MarkdownInterpreter text={translation('tasks.reachout.medicalHeroText')}/>
      </p>
      <h2 className="font-space text-4xl font-bold">{translation('tasks.reachout.hospitalManagerTitle')}</h2>
      <h3 className="font-sans text-xl font-medium mt-2 mb-2 text-description">
        <MarkdownInterpreter text={translation('tasks.reachout.hospitalManagerSubtitle')}/>
      </h3>
      <p>
        <MarkdownInterpreter text={translation('tasks.reachout.hospitalManagerText')}/>
      </p>
    </SectionBase>
  )
}

export default ReachoutSection
