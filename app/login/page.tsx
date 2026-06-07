import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Accede a ZUYUX conectando tu wallet Metamask.',
}

export default function Login() {

  return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className='fixed top-4 left-4'>
          <Link href="/"><Image src="/nexu.svg" height={18} width={60} alt="nexu-logo" className="mx-auto invert" /></Link>
        </div>

        <div className='block'>
          <Link href="/go/metamask" className='inline-flex border-2 border-white rounded-full bg-transparent hover:bg-white hover:text-black p-4 items-center justify-center'>
            <Image src="/mmask.svg" height={28} width={28} alt="metamask" className='inline'/>
            <span className='sr-only'>Conectar con MetaMask</span>
          </Link>
        </div>
        <div>
          <Link href="/info">
            <Image src="/info.svg" height={21} width={21} alt="info" className='fixed bottom-4 right-4'/>
          </Link>
        </div>
      </main>
  );
}
