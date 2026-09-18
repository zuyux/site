import type { MetadataRoute } from 'next'
import { projects } from './projects/data'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/manifesto', '/btc-gui', '/metauni', '/unit', ...projects.map(({ slug }) => `/projects/${slug}`)].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }))
}
