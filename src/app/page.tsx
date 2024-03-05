import Navbar from '@/component/Navbar';
import { MonitPage } from '@/app/monitoring/MonitPage';
import Monitoring from './monitoring/page';

export default async function Home() {
  const id = 240305005225029;
  // const posts = await fetchPostById();
  // console.log(posts);
  return (
    <main className='bg-blue-gray-400 min-h-screen pb-4'>
      <Navbar />
      <Monitoring />
    </main>
  );
}
