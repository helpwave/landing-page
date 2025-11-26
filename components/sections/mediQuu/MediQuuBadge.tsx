import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'
import Image from 'next/image'

export const MediQuuBadge = () => {
  const translation = useLandingPageTranslation()

  return (
    <div className="row bg-white rounded-md px-2 py-1 !gap-x-1 !w-fit text-sm font-semibold text-gray-800 items-center">
      {translation('previously')}
      <Image src="https://cdn.helpwave.de/mediquu/logo_2021.png" alt="" width={80} height={40}/>
    </div>
  )
}
