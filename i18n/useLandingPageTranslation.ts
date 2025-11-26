import { useHightideTranslation } from '@helpwave/hightide'
import type { LandingPageTranslationLocales } from '@/i18n/translations'
import { landingPageTranslation } from '@/i18n/translations'

type UseLandingPageTranslationOverwrites = {
  locale?: LandingPageTranslationLocales,
}

export function useLandingPageTranslation(
  overwrites?: UseLandingPageTranslationOverwrites
) {
  return useHightideTranslation(landingPageTranslation, overwrites)
}