import type { Metadata } from 'next'
import Image from 'next/image'

import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Portal principal de zuyux: DAO de investigación TI, desarrollo peer-to-peer, privacidad y autonomía en Latinoamérica.',
}

export default function Home() {
  return (
    <main className="bg-[#010101] text-white min-h-screen flex flex-col">
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
