import Navbar from '@/component/Navbar';
import Monitoring from './monitoring/page';

export default async function Home() {
  return (
    <main className='bg-blue-gray-400 min-h-screen pb-4'>
      <Navbar />
      <p>test manual mqtt</p>
      <Monitoring />
    </main>
  );
}
