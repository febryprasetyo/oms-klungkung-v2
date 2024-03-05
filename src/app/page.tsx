import Navbar from '@/component/Navbar';
import MonitPage from '@/app/monitoring/MonitPage';
export default function Home() {
  return (
    <main className='bg-blue-gray-400 min-h-screen pb-4'>
      <Navbar />
      <MonitPage />
    </main>
  );
}
