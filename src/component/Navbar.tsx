import Image from 'next/image';
import Logo from '/public/logo.png';

const Navbar = () => {
  return (
    <div className='bg-blue-bar'>
      <div className='relative flex h-16 items-center justify-between mx-44'>
        <div>
          <Image
            className=' h-8 w-auto lg:block md:justify-center'
            src={Logo}
            alt='Fastpect Logo'
          />
        </div>
        <div>
          <p className='text-white hidden lg:block uppercase font-bold'>
            Online Monitoring System
          </p>
        </div>
        <div>
          <p className='text-white hidden lg:block font-bold'>DLH Klungkung</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
