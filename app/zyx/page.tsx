import type { Metadata } from 'next'
import ZyxClient from './ZyxClient'

export const metadata: Metadata = {
  title: 'ZYX',
  description: 'ZYX es un marketplace de archivos polifacético para creadores, con integración blockchain y economía descentralizada.',
}

export default function ZyxPage() {
  return <ZyxClient />
}
