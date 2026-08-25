import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zuyux.org'),
  title: { default: 'zuyux', template: '%s | zuyux' },
  description: 'zuyux es una DAO de investigación en TI en LATAM que crea proyectos descentralizados, comunidades P2P y herramientas de privacidad.',
  alternates: { canonical: 'https://zuyux.org' },
  openGraph: {
    title: 'zuyux',
    description: 'DAO de investigación TI en LATAM: proyectos abiertos, privacidad digital y autonomía tecnológica.',
    url: 'https://zuyux.org',
    siteName: 'zuyux',
    type: 'website',
    locale: 'es_PE',
    images: [
      {
        url: '/zuyux-lab.png',
        width: 1200,
        height: 670,
        alt: 'Zuyux cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zuyux',
    description: 'DAO de investigación TI en LATAM: proyectos abiertos, privacidad digital y autonomía tecnológica.',
    creator: '@zuyuxxyz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/default.png',
    shortcut: '/default.png',
    apple: '/default.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
        
      </html>
  )
}
