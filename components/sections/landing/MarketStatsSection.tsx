import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import type { PropsWithChildren } from 'react'
import Image from 'next/image'
import { SectionBase } from '@/components/sections/SectionBase'

type MarketStatsItemProps = PropsWithChildren<{
  stat: string,
  title: string,
}>

const MarketStatsItem = ({ children, stat, title }: MarketStatsItemProps) => {
  return (
    <div className="col items-center min-w-56">
      {children}
      <span className="text-3xl max-tablet:text-xl mt-2 max-tablet:font-semibold">{stat}</span>
      <h4><span className="text-on-secondary/60 text-xl max-tablet:!text-base">{title}</span></h4>
    </div>
  )
}

const MarketStatsSection = () => {
  const translation = useLandingPageTranslation()
  return (
    <SectionBase backgroundColor="secondary" className="flex-col-2 text-on-secondary font-space" outerClassName="pb-24">
      <h1 className="w-full text-3xl text-center font-space">{translation('section.market.germanyHealthcareSystem')}</h1>
      <span className="text-center text-on-secondary/60">{translation('section.market.marketPotential')}</span>
      <div className="mt-8 w-full flex flex-wrap gap-y-16 gap-x-24 justify-evenly items-center">
        <MarketStatsItem stat="1.800" title={translation('section.market.hospitals')}>
          {/* Image needs attribution to https://www.flaticon.com/free-icon/hospital_3809392?term=hospital&page=1&position=8&origin=search&related_id=3809392 */}
          <Image width={72} height={72} alt="" src="https://cdn.helpwave.de/icons/hospital.png" className="w-[72px] h-[72px] max-tablet:w-[48px] max-tablet:h-[48px] p-[5%]"/>
        </MarketStatsItem>

        <MarketStatsItem stat="1.000.000" title={translation('section.market.healthcareWorkers')}>
          {/* Image needs attribution to https://www.flaticon.com/free-icon/hospital_3809392?term=hospital&page=1&position=8&origin=search&related_id=3809392 */}
          <Image width={72} height={72} alt="" src="https://cdn.helpwave.de/icons/doctors.png" className="w-[72px] h-[72px] max-tablet:w-[48px] max-tablet:h-[48px]"/>
        </MarketStatsItem>

        <MarketStatsItem stat="12,1%" title={translation('section.market.gdp')}>
          {/* Image needs attribution to https://www.freepik.com/icon/donut-chart_483638 */}
          <Image width={72} height={72} alt="" src="https://cdn.helpwave.de/icons/pie_chart.png" className="w-[72px] h-[72px] max-tablet:w-[48px] max-tablet:h-[48px]"/>
        </MarketStatsItem>
      </div>
    </SectionBase>
  )
}

export default MarketStatsSection
