import { pageMetadata } from '@/lib/seo'
import { headers } from 'next/headers'

import ManifestoClient from './ManifestoClient'
import { translations, type Locale } from './content'

export function generateMetadata() {
  const locale = getLocale()
  return pageMetadata({
    title: 'Manifesto',
    description: translations[locale].metaDescription,
    path: '/manifesto',
    locale: { en: 'en_US', es: 'es_PE', pt: 'pt_BR' }[locale],
  })
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
