import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Socials from '@/compos/socials'
import Info from '@/compos/info'

export default function Unit() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen pb-24'>
        <div className='rounded-3xl p-8 mb-20 lg:max-w-md text-2xl mt-8 border-[1px] border-white'>
        <div className='block mt-12'>
            <Link href="/"><Image src="/zuyux.svg" height={30} width={72} alt="ZUYUX-logo" className="mx-auto" /></Link>
          </div><br/>
        <p>
          UNIT es el token de ZUYUX, con un suministro total de 1 billón de monedas (1,000,000,000,000) diseñado para impulsar la investigación y el desarrollo del club. Este token sigue el estándar ERC20 y, actualmente, se distribuye entre entusiastas y miembros de la <Link href="/dao" className='hover:underline'>DAO</Link>.
          </p>
          <p>Puedes revisar el contrato en la cadena de Optimism en el siguiente enlace:
        </p>
        <Link href="https://optimistic.etherscan.io/address/0x922b38b1f36abc96f4ba8ba1321ff0253af79d03" target='_blank'
              className='block text-white bg-transparent text-center rounded-full border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
                Contrato UNIT</Link>
        <p><input value="0x922B38b1f36ABc96f4BA8ba1321FF0253Af79d03" className='p-2 text-zinc-900 rounded-full text-sm pl-4 pr-4 w-full text-center'></input></p>
        <p>
          Si te interesa colaborar en cualquiera de las tareas relacionadas con el desarrollo de ZUYUX, no dudes en ponerte en contacto enviándonos un mensaje a <Link href="mailto:40230@pm.me" className='underline'>40230@pm.me</Link>
        </p>
        <p><i>This Token is just for research and internal purposes. Is not intended for sale.</i></p>
        <Link href="/dao" className='block text-white bg-transparent text-center rounded-lg border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
        📢 DAO</Link>
        
        </div>
        <Socials/>
        <Info/>
    </div>
  )
}
