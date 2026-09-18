import { pageMetadata } from '@/lib/seo'
import MetauniClient from './MetauniClient'

export const metadata = pageMetadata({
  title: 'META-UNI',
  description: 'Explore META-UNI, the Zuyux virtual space for immersive environments and collaboration in the metaverse.',
  path: '/metauni',
  locale: 'en_US',
})

export default function MetauniPage() {
  return <MetauniClient />
}
