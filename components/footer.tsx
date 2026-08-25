import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 sm:py-12 sm:px-8 my-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="text-center sm:text-left">
          <Link href="/"><h2 className="text-lg font-semibold">zuyux</h2></Link>
          <p className="text-sm text-zinc-300">IT R&amp;D LAB</p>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold">★</h2>
          <ul className="space-y-1 mt-2">
            <li><Link href="/projects/utxo-lat" className="text-sm text-zinc-300">utxo.lat</Link></li>
            <li><Link href="/projects/bboxx" className="text-sm text-zinc-300">bboxx</Link></li>
            <li><Link href="/projects/cholo" className="text-sm text-zinc-300">cholo</Link></li>
            <li><Link href="/projects/bitdevs-lima" className="text-sm text-zinc-300">bitdevs lima</Link></li>
            <li><Link href="/btc-gui" className="text-sm text-zinc-300">bitcoin_gui</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-right">
          <h2 className="text-lg font-semibold">!</h2>
          <ul className="space-y-1 mt-2">
            <li><Link href="/manifesto" className="text-sm text-zinc-300">manifesto</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
