import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Info from '@/components/info'

export const metadata: Metadata = {
  title: 'UNIT Token',
  description: 'UNIT es el token de ZUYUX en Optimism enfocado en investigación y desarrollo interno.',
}

export default function Unit() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-4 py-10 sm:px-6'>
        <div className='mb-12 mt-4 w-full max-w-md rounded-2xl border border-white p-5 text-base leading-7 sm:mb-20 sm:mt-8 sm:rounded-3xl sm:p-8 sm:text-xl sm:leading-8 lg:text-2xl'>
        <div className='block mt-8 sm:mt-12'>
            <Link href="/"><Image src="/zuyux.svg" height={30} width={72} alt="ZUYUX-logo" className="mx-auto" /></Link>
          </div><br/>
        <p>
          UNIT es el token de ZUYUX, con un suministro total de 1 billón de monedas (1,000,000,000,000) diseñado para impulsar la investigación y el desarrollo del club. Este token sigue el estándar ERC20 y, actualmente, se distribuye entre entusiastas y miembros de la <Link href="/dao" className='hover:underline'>DAO</Link>.
          </p>
          <p className='mb-6'>Puedes revisar el contrato en la cadena de Optimism en el siguiente enlace:</p>
        <Link href="https://optimistic.etherscan.io/address/0x922b38b1f36abc96f4ba8ba1321ff0253af79d03" target='_blank' rel='noopener noreferrer'
              className='block text-white bg-transparent text-center rounded-full border-2 border-white p-4 mb-4 hover:bg-white hover:text-black'>
                Contrato UNIT</Link>
        <div className='mb-6'>
          <label htmlFor='unit-contract' className='sr-only'>Dirección del contrato UNIT</label>
          <input id='unit-contract' value="0x922B38b1f36ABc96f4BA8ba1321FF0253Af79d03" className='w-full rounded-full p-2 px-4 text-center text-xs text-zinc-900 sm:text-sm' readOnly />
        </div>
        <p>
          Si te interesa colaborar en cualquiera de las tareas relacionadas con el desarrollo de ZUYUX, no dudes en ponerte en contacto enviándonos un mensaje a <Link href="mailto:40230@pm.me" className='underline'>40230@pm.me</Link>
        </p>
        <p><i>This Token is just for research and internal purposes. Is not intended for sale.</i></p>
        <Link href="/dao" className='block text-white bg-transparent text-center rounded-lg border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
        📢 DAO</Link>
        
        </div>
        <Info/>
    </main>
  )
}
