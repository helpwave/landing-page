import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import { VerticalDivider } from '@helpwave/hightide'
import { DividerInserter } from '@helpwave/hightide'
import Image from 'next/image'
import { SectionBase } from '@/components/sections/SectionBase'
import type { Partner } from '@/components/sections/landing/PartnerSection'

const images: Partner[] = [
  {
    name: 'UKM',
    url: 'https://cdn.helpwave.de/partners/ukm.png'
  },
]

const TrustedBySection = () => {
  const translation = useLandingPageTranslation()

  return (
    <SectionBase className="col gap-y-8 select-none justify-between items-center w-full" >
      <span className="typography-title-lg">{translation('trustedBy')}</span>
      <DividerInserter
        className="row gap-x-6 items-center justify-center w-full"
        divider={index => (<VerticalDivider key={index} height={128}/>)}
      >
        {images.map(partner => (
          <Image
            key={partner.name}
            width={0}
            height={0}
            src={partner.url}
            alt={partner.name}
            className="w-auto max-h-[64px]"
          />
        ))}
      </DividerInserter>
    </SectionBase>
  )
}

export default TrustedBySection
