import type { NextPage } from 'next'
import Link from 'next/link'
import { HelpwaveLogo } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { SectionBase } from '@/components/sections/SectionBase'
import { Page } from '@/components/Page'

const NotFound: NextPage = () => {
  const translation = useLandingPageTranslation()
  return (
    <Page className="h-screen" pageTitle={translation('notFound')}>
      <SectionBase className="col h-full items-center justify-center text-center" outerClassName="h-full">
        <HelpwaveLogo className="w-64 h-64 left-1/2" animate="bounce"/>
        <h1 className="text-9xl max-tablet:text-6xl font-space mb-8">{`404 ${translation('notFound')}`}</h1>
        <p className="text-4xl max-tablet:text-xl font-inter">{translation('descriptionNotFoundPage')}</p>
        <p className="text-4xl max-tablet:text-xl font-inter">
          {translation('toHomePage') + ' '}
          <Link className="underline text-primary" href="/">home page</Link>
        </p>
      </SectionBase>
    </Page>
  )
}

export default NotFound
