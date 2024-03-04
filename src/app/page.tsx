import Image from 'next/image';
import Monitorng from './monitoring/page';
import Navbar from '@/component/Navbar';
export default function Home() {
  return (
    <main className='bg-blue-gray-400 min-h-screen pb-4'>
      <Navbar />
      <Monitorng />
    </main>
  );
}
