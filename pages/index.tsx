// pages/index.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Socials from '@/components/socials';
import Subscribe from '@/components/subscribe';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-[#010101] text-white min-h-screen flex flex-col justify-center items-center">
      <div>
        <Image src="/hero.webp" height={920} width={1200} alt="hero" className='w-screen rounded-3xl'></Image>
      </div>
      <footer className="w-full p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-36">
          <div>
            <Link href="/"><h2 className="text-lg font-semibold">zuyux</h2></Link>
            <Link href="https://optimistic.etherscan.io/address/0x0caa49278724ad64c635dc1249dc4b38869f83b1" className='text-sm break-words'>
              0x0caa49278724ad64c635dc1249dc4b38869f83b1
            </Link>
            <p>IT Research & Development DAO</p>
            <br />
            <p className='text-sm'>02.02.2022</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Proyectos</h2>
            <ul className="space-y-1">
              <li><Link href="https://github.com/zuyux/ox">vlinks</Link></li>
              <li><Link href="/pro/metauni">metauni</Link></li>
              <li><Link href="/pro/bitcoin-core-gui">bitcoin_core_gui</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Qué es zuyux?</h2>
            <ul className="space-y-1">
              <li><Link href="/info">Manifiesto</Link></li>
              <li><Link href="/dao">Nodos</Link></li>
              <li><Link href="#">Ruta</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Eres Coder?</h2>
            <ul className="space-y-1">
              <li><Link href="#">Aprende WWW3</Link></li>
              <li><button onClick={openModal}>Suscríbete</button></li>
            </ul>
          </div>
        </div>
      </footer>
      <Socials />
      <Subscribe
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}