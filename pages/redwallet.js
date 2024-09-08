import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redwallet() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://play.google.com/store/apps/details?id=com.redlineblockchain.wallet');
  }, [router]);

  return null;

}
