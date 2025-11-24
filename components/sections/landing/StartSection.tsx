import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'
import { MarkdownInterpreter } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'

const StartSection = () => {
    const translation = useLandingPageTranslation()
    return (
        <SectionBase
            className="flex row flex-wrap-reverse w-full max-w-full gap-8 justify-between max-tablet:justify-center items-center"
            outerClassName="desktop:pr-0 tablet:pr-0 py-32"
        >
            <div className="col items-center flex-1">
                <div className="col gap-y-2 max-w-[600px]">
                    <h1 className="typography-headline-lg">{translation('titleLandingPage')}</h1>
                    <span className="typography-headline-md"><MarkdownInterpreter text={translation('descriptionLandingPage')}/></span>
                </div>
            </div>
            <Image
                // TODO make attribution to https://www.freepik.com/free-vector/medics-working-charts_4950249.htm
                src="https://cdn.helpwave.de/landing_page/doctor_statistics.svg"
                alt=""
                width={300}
                height={200}
                className="rounded-l-3xl shadow-around-lg w-2/5 max-tablet:w-full max-tablet:max-w-[512px] max-tablet:rounded-3xl tablet:min-w-[360px] desktop:right-0 h-fit"
            />
        </SectionBase>
    )
}

export default StartSection
