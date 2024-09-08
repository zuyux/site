import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Socials from '@/compos/socials'
import Info from '@/compos/info'

export default function Dao() {
  return (
    <div className='flex flex-col items-center justify-center pb-20'>
        <div className='rounded-3xl mt-8 p-8 w-full lg:max-w-md mb-24 text-2xl border-[1px] border-white'>
          <div className='block mt-12'>
            <Link href="/"><Image src="/zuyux.svg" height={30} width={72} alt="ZUYUX-logo" className="mx-auto" /></Link>
          </div><br/>
          <p><strong>ZUYUX</strong> funciona como una <strong>DAO</strong> [<Link href="https://es.wikipedia.org/wiki/Organizaci%C3%B3n_aut%C3%B3noma_descentralizada" target='_blank' className='hover:underline'><strong>Organización Autónoma Descentralizada</strong></Link>], entidad directiva sin intermediarios que opera en la blockchain de <Link href="https://optimism.io" target="_blank" className='hover:underline font-bold'>Optimism</Link>. </p>
          <br/>
          <div className='text-center'>
          <Link href="https://www.xdao.app/10/dao/0x0cAa49278724aD64c635DC1249dC4b38869f83B1" className='block rounded-full border-2 border-white p-4 mb-4 hover:bg-white hover:text-black'>
            ZUYUX en xDAO </Link>
          <Link href="https://optimistic.etherscan.io/address/0x0caa49278724ad64c635dc1249dc4b38869f83b1" className='block rounded-full border-2 border-white p-4 mb-4 hover:bg-white hover:text-black'>
            Contrato DAO</Link>
          <p>Desde 8 de Noviembre 2023</p>
          <p className='font-bold'>Integrantes:</p>
          
          <Link 
            className="block border-2 border-white rounded-full px-4 py-2 mb-4 w-full hover:bg-white hover:text-black"
            href="https://optimistic.etherscan.io/address/0x2e41898cfbde4c56316e157a10d4a89409e7924e" target="_blank">Evelin Espinoza</Link>
          <Link 
            className="block border-2 border-white rounded-full px-4 py-2 mb-4 w-full hover:bg-white hover:text-black"
            href="https://optimistic.etherscan.io/address/0x81b451abc87c8be56e3bf0f16e6fe488ecc15d15" target="_blank">Eric Camborda</Link>
          <Link 
            className="block border-2 border-white rounded-full px-4 py-2 mb-4 w-full hover:bg-white hover:text-black"
            href="https://optimistic.etherscan.io/address/0x188af7105D20a61a3233ADA22ED9c61b80Ab903A" target="_blank">Fabo Hax</Link>
          <Link 
            className="block border-2 border-white rounded-full px-4 py-2 mb-4 w-full hover:bg-white hover:text-black"
            href="https://optimistic.etherscan.io/address/0x67f72CbBf304A54CE711c60a7616e9C9eaDe7F42" target="_blank">Jimmy Riojas</Link>
          <Link
            className="block border-2 border-white rounded-full px-4 py-2 mb-4 w-full hover:bg-white hover:text-black"
            href="https://optimistic.etherscan.io/address/0x307790d8E7d308207A0840B465d1c70c297B5487" target="_blank">Pedro Román</Link>
            <Link
            className="block border-2 border-white rounded-full px-4 py-2 mb-4 w-full hover:bg-white hover:text-black"
            href="https://optimistic.etherscan.io/address/0x397ceDB2a059D2E785e1bC58Eab276C166704eF6" target="_blank">Brian Herrera</Link>
          </div>
          <Link href="/unit" className='block text-white bg-transparent text-center rounded-lg border-2 border-white p-4 mt-12 mb-2 hover:bg-white hover:text-black'>
          🪙 TOKEN</Link>
          
        </div>
        <Socials/>
        <Info/>
    </div>
  )
}
