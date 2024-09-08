import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Uni() {

  useEffect(() => {
    const handleFullScreen = () => {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    };

    handleFullScreen();

    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };
  }, []);

  return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className='absolute top-4 left-4'>
          <Link href="/"><Image src="/default.png" height={18} width={18} alt="nexu-logo" className="mx-auto z-500" /></Link>
        </div>
          <iframe src="https://www.spatial.io/embed/META-UNI-6555c78d7891524361845463?share=2157973459901763422&autoplay=1&enableRtc=1" width="1280px" height="720px" allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"></iframe>
        <div>
          <Link href="/info">
            <Image src="/info.svg" height={21} width={21} alt="info" className='fixed bottom-4 right-4'></Image>
          </Link>
        </div>
      </main>
  );
}
