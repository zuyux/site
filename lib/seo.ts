import type { Metadata } from 'next'

export const siteUrl = 'https://zuyux.org'
export const siteDescription = 'Zuyux is a technology research DAO in Latin America building open-source projects for Bitcoin, peer-to-peer communities, privacy, and technological autonomy.'
const socialImage = {
  url: '/zuyux-cover.png',
  width: 1123,
  height: 794,
  alt: 'zuyux — technology research and open-source projects',
}

export function pageMetadata({ title, description, path, locale = 'en_US', noIndex = false }: {
  title: string
  description: string
  path: string
  locale?: string
  noIndex?: boolean
}): Metadata {
  const socialTitle = `${title} | zuyux`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: 'zuyux',
      type: 'website',
      locale,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      creator: '@zuyuxxyz',
      images: [socialImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  }
}
