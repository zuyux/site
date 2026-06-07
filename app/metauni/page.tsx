import type { Metadata } from 'next'
import MetauniClient from './MetauniClient'

export const metadata: Metadata = {
  title: 'META-UNI',
  description: 'META-UNI: espacio virtual de ZUYUX para explorar entornos inmersivos y colaboración en metaverso.',
}

export default function MetauniPage() {
  return <MetauniClient />
}
