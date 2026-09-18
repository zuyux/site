import { pageMetadata, siteDescription, siteUrl } from '@/lib/seo'
import Image from 'next/image'

import { Footer } from '@/components/footer'

export const metadata = pageMetadata({
  title: 'Technology research & open-source projects',
  description: siteDescription,
  path: '/',
  locale: 'en_US',
})

export default function Home() {
  return (
    <main className="bg-[#010101] text-white min-h-screen flex flex-col">
      <h1 className="sr-only">zuyux — Technology research and open-source projects</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'zuyux', url: siteUrl, description: siteDescription, publisher: { '@id': `${siteUrl}/#organization` } },
            { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'zuyux', url: siteUrl, description: siteDescription, logo: `${siteUrl}/default.png`, sameAs: ['https://github.com/zuyux', 'https://x.com/zuyuxxyz'] },
          ],
        }).replace(/</g, '\\u003c') }}
      />
      <div className="relative h-[100svh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/zuyux-lab.png"
          alt="Zuyux hero"
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
        />
      </div>

      <Footer />
    </main>
  )
}
