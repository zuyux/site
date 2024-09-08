import Link from 'next/link'
import Image from 'next/image'
import Socials from '@/compos/socials'

export default function Info() {

  return (
      <div className='flex flex-col items-center justify-center'>
          <div className='fixed top-0 left-6'>
            <Link href="/"><Image src="/zuyux.svg" height={21} width={69} alt="logo" className="mx-auto" /></Link>
          </div>
          <div className='block rounded-3xl p-8 w-full lg:max-w-md text-lg my-12 leading-relaxed'>
              <div>
                <p></p>
                <p><strong>ZUYUX</strong> started as a Metaverse research project at the IT Office of <strong>UNI</strong> in Peru, later expanding beyond the campus to the globe.</p>
                <p>We are dedicated to exploring and promoting local <strong>IT</strong> Research & Development through a wide range of activities, including events, workshops, and innovative applications.</p>
              </div>   
          </div>
          <div className='flex flex-col relative w-full lg:m-0 lg:w-1/3 md:w-1/2 rounded-3xl p-8 text-center'>
              <br/>
              <Link href="/zyx" className='block text-white bg-transparent text-center rounded-lg border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
                🚀 ZYX</Link>
              <Link href="/metauni"
                className='block text-center border-2 border-white rounded-lg p-4 mb-2 w-full hover:bg-white hover:text-black'>
                🧊 METAUNI
              </Link>
              <Link href="/dao" className='block text-white bg-transparent text-center rounded-lg border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
              📢 DAO</Link>
              <Link href="/unit" className='block mb-4 text-white bg-transparent text-center rounded-lg border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
              🪙 TOKEN</Link>
              <div>
                <p>Do you want to fund us?</p>
                <p>Please talk to us or directly donate to our Optimistic DAO Address:</p>
                <input value="0x0cAa49278724aD64c635DC1249dC4b38869f83B1" className='text-white bg-transparent'>
                </input>
              </div>                       
            </div>
            
            <Socials/>
      </div>
  )
}
