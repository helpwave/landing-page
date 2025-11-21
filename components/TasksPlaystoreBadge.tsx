import { useLocale } from '@helpwave/hightide'
import Image from 'next/image'
import Link from 'next/link'

/**
 * WHEN USING MAKE THE NECESSARY ATTRIBUTION TO GOOGLE
 *
 * https://play.google.com/intl/en_us/badges/
 *
 */
export const TasksPlaystoreBadge = () => {
  const { locale } = useLocale()
  const linkURL = {
    'de-DE': 'https://play.google.com/store/apps/details?id=de.helpwave.tasks&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    'en-US': 'https://play.google.com/store/apps/details?id=de.helpwave.tasks&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
  }[locale]

  const alt = {
    'de-DE': 'Jetzt bei Google Play',
    'en-US':  'Get it on Google Play'
  }[locale]

  const imageURL = {
    'de-DE': '/images/google_play_badge_german.png',
    'en-US':  '/images/google_play_badge_english.png'
  }[locale]
  return (
    <Link href={linkURL} target="_blan" className="rounded-md">
      <Image alt={alt} src={imageURL} height={0} width={0} className="w-full min-h-[54px] max-h-[54px] min-w-[182px] max-w-[182px]"/>
    </Link>
  )
}
