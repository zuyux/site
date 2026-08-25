import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Portal principal de zuyux: DAO de investigación TI, desarrollo peer-to-peer, privacidad y autonomía en Latinoamérica.',
}

export default function Home() {
  return (
    <main className="bg-[#010101] text-white min-h-screen flex flex-col">
      <div className="relative w-full h-[100vh] sm:h-[100vh] lg:h-[100vh] overflow-hidden">
        <Image
          src="/zuyux-lab.png"
          alt="Zuyux hero"
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
        />
      </div>

      <footer className="w-full py-8 px-4 sm:py-12 sm:px-8 my-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <Link href="/"><h2 className="text-lg font-semibold">zuyux</h2></Link>
            <p className="text-sm text-zinc-300">IT R&amp;D LAB</p>
          </div>

          <div className='text-center'>
            <h2 className="text-lg font-semibold">★</h2>
            <ul className="space-y-1 mt-2">
              
              <li><Link href="https://utxo.lat/" className="text-sm text-zinc-300">utxo.lat</Link></li>
              <li><Link href="https://bboxx.app" className="text-sm text-zinc-300">bboxx</Link></li>
              <li><Link href="https://cholo.meme" target='_blank' rel='noopener noreferrer' className="text-sm text-zinc-300">cholo</Link></li>
              <li><Link href="https://bitdevslima.org" className="text-sm text-zinc-300">bitdevs lima</Link></li>
              <li><Link href="/metauni" className="text-sm text-zinc-300">metauni</Link></li>
              <li><Link href="/btc-gui" className="text-sm text-zinc-300">bitcoin_gui</Link></li>
            </ul>
          </div>

          <div className='text-center sm:text-right'>
            <h2 className="text-lg font-semibold">!</h2>
            <ul className="space-y-1 mt-2">
              <li><Link href="/manifesto" className="text-sm text-zinc-300">manifesto</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
