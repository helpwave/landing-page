import Image from 'next/image'
import Link from 'next/link'
import { HelpwaveLogo } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { Chip } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

const StartSection = () => {
  const translation = useLandingPageTranslation()

  const demoURL = 'https://tasks.helpwave.de'
  const screenshotURL = 'https://cdn.helpwave.de/products/helpwave_tasks_ui_elements.png'

  return (
    <SectionBase
      className="col desktop:flex-row gap-x-16 gap-y-8 justify-center items-center"
      outerClassName="py-24"
    >
      <Image
        alt="Screenshots"
        src={screenshotURL}
        width={0}
        height={0}
        className="object-contain w-full desktop:min-w-[40%] desktop:scale-125 -rotate-12"
      />
      <div className="col gap-y-4">
        <Link href={demoURL} target="_blank" className="rounded-md w-min">
          <Chip className="row w-fit items-center" color="default">
            <HelpwaveLogo className="min-w-[24px] min-h-[24px]" />
            <span className="font-bold whitespace-nowrap">helpwave tasks</span>
          </Chip>
        </Link>
        <h1 className="typography-headline-md">{translation('tasks.start.title')}</h1>
        <MarkdownInterpreter text={translation('tasks.start.text')} className="text-xl font-medium" />
      </div>
    </SectionBase>
  )
}

export default StartSection
