import type { NextPage } from 'next'
import Link from 'next/link'
import type { Translation } from '@helpwave/hightide'
import { HelpwaveLogo } from '@helpwave/hightide'
import { useTranslation } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'
import { Page } from '@/components/Page'

type NotFoundTranslation = {
  notFound: string,
  description: string,
  toHomePage: string,
}

const defaultNotFoundTranslation: Translation<NotFoundTranslation> = {
  en: {
    notFound: 'Not Found',
    description: 'This is definitely not the site you&\'re looking for.',
    toHomePage: 'Let me take you to the',
  },
  de: {
    notFound: 'Nicht Gefunden',
    description: 'Das ist definitv nicht die Seite nach der Ihr gesucht habt.',
    toHomePage: 'Lass mich dich zurückbringen zur',
  }
}

const NotFound: NextPage = () => {
  const translation = useTranslation([defaultNotFoundTranslation])
  return (
    <Page className="h-screen" pageTitleAddition={translation('notFound')}>
      <SectionBase className="col h-full items-center justify-center text-center" outerClassName="h-full">
        <HelpwaveLogo className="w-64 h-64 left-1/2" animate="bounce"/>
        <h1 className="text-9xl max-tablet:text-6xl font-space mb-8">{`404 ${translation('notFound')}`}</h1>
        <p className="text-4xl max-tablet:text-xl font-inter">{translation('description')}</p>
        <p className="text-4xl max-tablet:text-xl font-inter">
          {translation('toHomePage') + ' '}
          <Link className="underline text-primary" href="/">home page</Link>
        </p>
      </SectionBase>
    </Page>
  )
}

export default NotFound
