import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nexu',
  description: 'club w3d',
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
