import type { Metadata } from 'next'
import { headers } from 'next/headers'

import ManifestoClient from './ManifestoClient'
import { translations, type Locale } from './content'

export const metadata: Metadata = {
  title: 'manifesto',
  description: translations.en.metaDescription,
  alternates: {
    languages: {
      en: '/manifesto',
      pt: '/manifesto',
      es: '/manifesto',
    },
  },
}

function getLocale(): Locale {
  const languageHeader = headers().get('accept-language') ?? ''
  const languages = languageHeader
    .split(',')
    .map((entry) => entry.split(';')[0]?.trim().toLowerCase())
    .filter(Boolean)

  for (const language of languages) {
    const baseLanguage = language.split('-')[0]

    if (baseLanguage === 'pt' || baseLanguage === 'es' || baseLanguage === 'en') {
      return baseLanguage
    }
  }

  return 'en'
}

export default function Manifesto() {
  return <ManifestoClient initialLocale={getLocale()} />
}
