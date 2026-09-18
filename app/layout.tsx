import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { pageMetadata, siteDescription, siteUrl } from '@/lib/seo'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...pageMetadata({ title: 'Technology research & open-source projects', description: siteDescription, path: '/' }),
  metadataBase: new URL(siteUrl),
  title: { default: 'zuyux — Technology research & open-source projects', template: '%s | zuyux' },
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
