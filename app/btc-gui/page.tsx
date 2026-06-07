import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bitcoin Core GUI',
  description: 'Propuesta de interfaz Bitcoin Core GUI de ZUYUX: visual minimalista para usuarios de Bitcoin.',
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
    <main className="min-h-screen bg-[#010101] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Bitcoin Core GUI</h1>
        <p className="text-lg text-zinc-300 mb-6">Check out our new Bitcoin Core GUI proposal – sleek, user-friendly, and intuitive!</p>
        <p className="mb-6 text-zinc-400">With this interface, managing your Bitcoin Core wallet you will enjoy even if you have 0 balance in your account! The color scheme is designed to be calming and easy on the eyes, perfect for all users. Our goal was to create a smooth, minimalistic experience for both basic and advanced users.</p>

        <div className="flex flex-col gap-8 mb-8">
          {images.map((src, idx) => (
            <div key={src} className="w-full rounded-xl overflow-hidden bg-black/20">
              <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image src={src} alt={`screenshot-${idx+1}`} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <p className="mb-6 text-zinc-300">If you want to collaborate on this project just message us to <Link href="https://x.com/zuyuxxyz" className="underline">x</Link> and talk to us!</p>
      </div>
    </main>
  )
}
