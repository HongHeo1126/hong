import dynamic from 'next/dynamic';

const FindMeCardEditor = dynamic(() => import('../FindMeCardEditor'), { ssr: false });

export default function Home() {
  return <FindMeCardEditor />;
}
