import type { NextPage } from 'next'
import type { Translation } from '@helpwave/hightide'
import { useTranslation } from '@helpwave/hightide'
import StoryHeader from '@/components/sections/story/StoryHeader'
import { Page } from '@/components/Page'
import { StorySliderSection } from '@/components/sections/story/StoriesSliderSection'

type StoryTranslation = {
  title: string,
}

const defaultStoryTranslation: Translation<StoryTranslation> = {
  en: {
    title: 'Story',
  },
  de: {
    title: 'Story',
  }
}

const Story: NextPage = () => {
  const translation = useTranslation([defaultStoryTranslation])
  return (
    <Page pageTitleAddition={translation('title')}>
      <StoryHeader/>
      <StorySliderSection/>
    </Page>
  )
}

export default Story
