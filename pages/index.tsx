import type { NextPage } from 'next'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import PartnerSection from '../components/sections/landing/PartnerSection'
import StartSection from '../components/sections/landing/StartSection'
import { Page } from '@/components/Page'
import { TasksDemoSection } from '@/components/sections/landing/TasksDemoSection'

const Home: NextPage = () => {
  const translation = useLandingPageTranslation()

  return (
    <Page outerClassName="z-0" className="z-0" pageTitle={translation('home')}>
      <StartSection />
      <PartnerSection />
      <TasksDemoSection />
    </Page>
  )
}

export default Home
