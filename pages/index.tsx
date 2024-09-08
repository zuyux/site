import Image from 'next/image';
import Link from 'next/link';
import { MetaMaskProvider } from "@metamask/sdk-react";
import Socials from '@/compos/socials';
import Info from '@/compos/info';

export default function Home() {

  const host =
  typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Zuyux ",
      url: host, 
    },
  };
  
  return (
      <main>
        
          <Image src="/zuyux.svg" height={21} width={63} alt="nexu-logo" className='h-screen w-1/9 mx-auto'/>
          <Link href="https://optimistic.etherscan.io/address/0x0caa49278724ad64c635dc1249dc4b38869f83b1" target='_blank' className='fixed bottom-2 w-full hover:underline text-center text-sm mx-auto'>0x0cAa49278724aD64c635DC1249dC4b38869f83B1</Link>
        <Info/>
        <Socials/>
      </main>
  );
}
