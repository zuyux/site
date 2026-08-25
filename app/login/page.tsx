import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Accede a ZUYUX.',
}

export default function Login() {

  return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className='fixed top-4 left-4'>
          <Link href="/"><Image src="/nexu.svg" height={18} width={60} alt="nexu-logo" className="mx-auto invert" /></Link>
        </div>

        <div className='block text-center text-zinc-400'>
          Acceso no disponible.
        </div>
        <div>
          <Link href="/manifesto">
            <Image src="/info.svg" height={21} width={21} alt="info" className='fixed bottom-4 right-4'/>
          </Link>
        </div>
      </main>
  );
}
