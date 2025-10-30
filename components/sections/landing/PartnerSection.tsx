import type { Translation } from '@helpwave/hightide'
import { Carousel } from '@helpwave/hightide'
import { useTranslation } from '@helpwave/hightide'
import { SectionBase } from '@/components/sections/SectionBase'
import Image from 'next/image'

type PartnerSectionTranslation = {
  title: string,
}

const defaultPartnerSectionTranslation: Translation<PartnerSectionTranslation> = {
  en: {
    title: 'Our partners'
  },
  de: {
    title: 'Unsere Partner'
  }
}

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
    url: 'https://cdn.helpwave.de/partners/collective_incubator_black.svg'
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
    name: 'Digital Hub münsterLAND',
    url: 'https://cdn.helpwave.de/partners/digitalhub_muensterland.png'
  },
  {
    name: 'Ministerium für Wirtschaft, Industrie, Klimaschutz, und Energie des Landes NRW',
    url: 'https://cdn.helpwave.de/partners/mfw.svg'
  },
  {
    name: 'Gründungsstipendium.NRW',
    url: 'https://cdn.helpwave.de/partners/gruendungsstipendium.jpg'
  },
  {
    name: 'Münsterhack',
    url: 'https://cdn.helpwave.de/partners/mshack_2023.png',
  },
]

const PartnerSection = () => {
  const translation = useTranslation([defaultPartnerSectionTranslation])

  return (
    <SectionBase
      className="gap-16 select-none justify-between items-center w-full"
      outerClassName="px-0"
    >
      <div className="flex-col-4 items-center w-full">
        <h2 className="typography-title-lg">{translation('title')}</h2>
        <Carousel
          hintNext={true} isLooping={true} isAutoPlaying={true}
          heightClassName="h-[8rem]"
          widthClassName="w-1/2 tablet:w-3/10"
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
