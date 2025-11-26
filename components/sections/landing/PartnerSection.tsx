import { Carousel } from '@helpwave/hightide'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { SectionBase } from '@/components/sections/SectionBase'
import Image from 'next/image'

export type Partner = {
  name: string,
  url: string,
}

const images: Partner[] = [
    {
        name: 'REACH',
        url: 'https://cdn.helpwave.de/partners/reach.svg'
    },
    {
        name: 'RWTH Aachen University',
        url: 'https://cdn.helpwave.de/partners/rwth_logo.svg',
    },
    {
        name: 'MedLife',
        url: 'https://cdn.helpwave.de/partners/medlife.png'
    },
    {
        name: 'Collective Incubator',
        url: 'https://cdn.helpwave.de/partners/collective_incubator_black.png'
    },
    {
        name: 'mediQuu',
        url: 'https://cdn.helpwave.de/mediquu/logo_2021.png'
    },
    {
        name: 'Digital Hub Aachen',
        url: 'https://cdn.helpwave.de/partners/digitalhub_aachen.png'
    },
    {
        name: 'New Business Factory',
        url: 'https://cdn.helpwave.de/partners/nbf.png'
    },
    {
        name: 'Digital Hub münsterLAND',
        url: 'https://cdn.helpwave.de/partners/digitalhub_muensterland.png'
    },
    {
        name: 'Ministerium für Wirtschaft, Industrie, Klimaschutz, und Energie des Landes NRW',
        url: 'https://cdn.helpwave.de/partners/mfw.svg'
    },
    {
        name: 'Gründungsstipendium.NRW',
        url: 'https://cdn.helpwave.de/partners/gruendungsstipendium.png'
    },
    {
        name: 'Münsterhack',
        url: 'https://cdn.helpwave.de/partners/mshack_2023.png',
    },
]

const PartnerSection = () => {
  const translation = useLandingPageTranslation()

  return (
    <SectionBase
      className="gap-16 select-none justify-between items-center w-full"
      outerClassName="px-0"
    >
      <div className="flex-col-4 items-center w-full">
        <h2 className="typography-title-lg">{translation('titlePartnerSection')}</h2>
        <Carousel
          hintNext={true} isLooping={true} isAutoPlaying={true}
          heightClassName="h-[8rem]"
          slideClassName="w-1/2 tablet:w-3/10"
        >
          {images.map(partner => (
            <div
              key={partner.name}
              className="flex-col-2 h-full items-center justify-center rounded-lg mx-2 dark:bg-white border-4 border-transparent group-focus-within/slide:border-primary"
            >
              <Image
                key={partner.name}
                width={0}
                height={0}
                src={partner.url}
                alt={partner.name}
                className="w-auto max-h-[100px] p-4"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </SectionBase>
  )
}

export default PartnerSection
