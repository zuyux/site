"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function ZyxClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
        <div className='fixed top-0 left-4'>
          <Link href="/"><Image src="/zuyux.svg" height={30} width={72} alt="nexu-logo" className="mx-auto" /></Link>
        </div>
        <div className='rounded-3xl mt-8 p-8 w-full lg:max-w-md mb-24 text-md'>
          <i>We are applying for grants on this project:</i>
        <p className='font-bold'>Zyx: Nodalized Creation Port</p>
        <br/>
        <p className='text-sm italic'>Poly-Chain Files Market Application</p>
        <br/>
        <p>2024</p>
        Zyx is a decentralized application concept designed to enhance the exchange, trade, and management of digital assets within the community of artistic/architectural creators who use electronic media to express themselves. It aims to address the economic issue of job scarcity and facilitate their organization to add value. We propose automating electronic contracts for exchange/funding of local contests and initiatives using blockchain networks like Cardano, Solana and Bitcoin L2 on the platform, providing a secure, open-source environment for users to buy, sell, and trade digital products (3D models, CAD, stock videos, images, design files, and more).<p></p>

        <p className='text-sm'><strong>ZYX</strong>, Virtual exchange, Bitcoin Lightning, Solana, Cardano, Blockchain integration, Digital assets, Decentralized marketplace, Architecture, Digital design, ADA, SOL, BTC, Cryptocurrency, Smart contracts, Security, Trust, Scalability, Interoperability, Payment mechanism, Transaction facilitation, Proof of stake, Encryption protocols, LND, Lightning Network, Metamask, Phantom, Flint, decentralized finance (DeFi), gamified government, innovation.</p>
        
          <Link href="https://www.figma.com/proto/T1hdBzXSvfDUUb4ccM4CqM/zyx?node-id=129-19&t=TbtfsxwpyaJElwqP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target='_blank' rel='noopener noreferrer' className='block text-center border-2 border-white rounded-lg p-4 mb-2 w-full hover:bg-white hover:text-black'>
            Mockup on Figma</Link>
          <Link href="https://github.com/zuyux/dapp" target='_blank' rel='noopener noreferrer' className='block text-center border-2 border-white rounded-lg p-4 mb-2 w-full hover:bg-white hover:text-black'>
            Repository on Github</Link>
          <form onSubmit={handleSubmit} className='w-full'>
            <label htmlFor="email" className='sr-only'>Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              onChange={handleInputChange}
              value={formData.email}
              required
              className='block text-center border-2 border-white rounded-lg p-4 mb-4 w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white' />
            <button type="submit" className='block w-full text-center border-2 border-white rounded-lg p-4 mb-2 hover:bg-white hover:text-black'>Unirme</button>
          </form>
        </div>
    </main>
  )
}
