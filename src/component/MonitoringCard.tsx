import { Radio, RefreshCwOff } from 'lucide-react';
import { HiOutlineSignalSlash } from 'react-icons/hi2';

type Props = {
  title: string;
  unit: string;
  value: number;
  time: string;
};

export default function MonitoringCard({ title, unit, value, time }: Props) {
  return (
    <div className='flex w-full flex-col items-center justify-between overflow-hidden rounded-xl bg-blue-bar shadow'>
      <div className='w-full space-y-2 px-5 py-3 text-center'>
        <h2 className='text-2xl font-bold text-white'>{title}</h2>
        <div className=' w-full rounded-xl bg-white  py-5 text-center  text-blue-bar'>
          <p className='text-4xl font-bold '>{value}</p>
          <p className='text-[20px] font-bold '>{unit}</p>
          <p className='text-nowrap'>{time}</p>
        </div>
      </div>
      <div className='flex w-full justify-evenly bg-blue-gray-50 py-2  dark:bg-darkSecondary'>
        <Radio
          className={`h-8 w-8 ${
            value === 0 ? 'text-[#d4d4d4]' : 'text-green-500'
          }`}
        />
        <HiOutlineSignalSlash
          className={`h-8 w-8 ${
            value !== 0 ? 'text-[#d4d4d4]' : 'text-red-500'
          }`}
        />
      </div>
    </div>
  );
}
