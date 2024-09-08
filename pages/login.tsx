import Image from 'next/image';
import Link from 'next/link';

export default function Login() {

  return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className='fixed top-4 left-4'>
          <Link href="/"><Image src="/nexu.svg" height={18} width={60} alt="nexu-logo" className="mx-auto invert" /></Link>
        </div>

        <div className='block'>
                <Link href="/go/metamask"><button className='border-2 border-white rounded-full bg-transparent hover:bg-white hover:text-black p-4'>
                <Image src="/mmask.svg" height={28} width={28} alt="metamask" className='inline'></Image></button></Link>
        </div>
        <div>
          <Link href="/info">
            <Image src="/info.svg" height={21} width={21} alt="info" className='fixed bottom-4 right-4'></Image>
          </Link>
        </div>
      </main>
  );
}
