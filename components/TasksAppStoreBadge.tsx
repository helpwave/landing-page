import { useLocale } from '@helpwave/hightide'
import Image from 'next/image'
import Link from 'next/link'

/**
 * WHEN USING MAKE THE NECESSARY ATTRIBUTION TO APPLE
 *
 * https://developer.apple.com/app-store/marketing/guidelines/
 *
 * Margin of 10% of element to all sides (8px)
 * Min height of 40px must be kepts
 */
export const TasksAppStoreBadge = () => {
  const { locale } = useLocale()
  const linkURL = {
    'de-DE': 'https://apps.apple.com/de/app/helpwave-tasks/id6472594365?itsct=apps_box_badge&amp;itscg=30200',
    'en-US': 'https://apps.apple.com/en/app/helpwave-tasks/id6472594365?itsct=apps_box_badge&amp;itscg=30200'
  }[locale]

  const alt = {
    'de-DE': 'Jetzt bei Google Play',
    'en-US': 'Download on the App Store'
  }[locale]

  const imageURL = {
    'de-DE': 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/de-de?size=250x83&amp;releaseDate=1702857600',
    'en-US': 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1702857600'
  }[locale]

  return (
    <Link href={linkURL} target="_blank" className="rounded-md">
      <Image
        alt={alt} src={imageURL} height={0} width={156}
        className="w-full min-h-[54px] max-h-[54px] min-w-[156px] max-w-[156px]"
      />
    </Link>
  )
}
