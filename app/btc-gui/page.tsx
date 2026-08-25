import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { BtcGuiGallery } from './BtcGuiGallery'

export const metadata: Metadata = {
  title: 'Bitcoin Core GUI',
  description: 'Bitcoin Core GUI concept by ZUYUX: a calmer visual direction for the everyday Bitcoin node and wallet experience.',
}

export default function BtcGuiPage() {
  const images = [
    '/btc-gui/bc1_1.png',
    '/btc-gui/bc1_2.png',
    '/btc-gui/bc1_3.png',
    '/btc-gui/bc1_4.png',
    '/btc-gui/bc1_5.png',
    '/btc-gui/bc1_6.png',
  ]

  return (
    <main className="min-h-screen bg-[#010101] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-10 sm:px-8 sm:py-12">
        <nav className="mb-10 sm:mb-12">
          <p className="text-sm text-zinc-400">
            zuyux / interface research
          </p>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 sm:text-sm sm:tracking-[0.28em]">Bitcoin desktop client</p>
            <h1 className="mt-4 text-4xl font-black leading-none text-white sm:text-7xl">
              Bitcoin Core GUI
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-7 text-zinc-300 sm:text-xl sm:leading-8">
              A visual exploration for making Bitcoin Core feel clearer, calmer, and more approachable without hiding the power of a full node.
            </p>
          </div>

          <aside className="border-t border-zinc-800 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="text-zinc-500">Format</dt>
                <dd className="mt-1 text-zinc-200">Interface concept</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Status</dt>
                <dd className="mt-1 text-zinc-200">Design proposal</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Topics</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {['bitcoin', 'wallets', 'full nodes', 'desktop ui'].map((topic) => (
                    <span key={topic} className="border border-zinc-800 px-2 py-1 text-xs text-zinc-300">
                      {topic}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5 text-base leading-7 text-zinc-300">
            <h2 className="text-2xl font-bold text-white">What it is</h2>
            <p>
              This concept reimagines the Bitcoin Core desktop interface as a more legible control surface for running a node, managing a wallet, reviewing network state, and understanding local activity.
            </p>
            <p>
              The proposal keeps the experience intentionally restrained: fewer distractions, clearer hierarchy, careful contrast, and layouts that make technical information easier to scan for both new users and experienced operators.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Project notes</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-zinc-300">
              {[
                'Focuses on a calmer wallet and node management experience',
                'Explores cleaner navigation, status surfaces, and transaction views',
                'Uses a minimal visual language designed for long desktop sessions',
                'Presented as image-based interface research rather than a linked release',
              ].map((highlight) => (
                <li key={highlight} className="border-t border-zinc-900 pt-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white">Screens</h2>
          <BtcGuiGallery images={images} />
        </section>
      </section>
      <Footer />
    </main>
  )
}
