import type { SupportedLocale } from '@helpwave/hightide'
import { useTranslation as useHightideTranslation } from '@helpwave/hightide'
import { generatedTranslations as hightideTranslations } from '@/i18n/translations'

type UseTranslationOverwrites = {
  locale?: SupportedLocale,
}

export function useTranslation(
  overwrites?: UseTranslationOverwrites
) {
  return useHightideTranslation(hightideTranslations, overwrites)
}