import Link from 'next/link';
// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

const Copyright = () => {
  return (
    <div className='bg-white h-[140px]'>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full lg:pr-24'>
          {/* copyright text */}
          <p>Copyright &copy; 2022</p>
          <div className='flex gap-x-[30px]'>
            <Link href={'/'}>
              <a>
                <div className='w-9 h-9 bg-accent text-white rounded-full flex justify-center items-center'>
                  <FaYoutube className='text-lg' />
                </div>
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <div className='w-9 h-9 bg-accent text-white rounded-full flex justify-center items-center'>
                  <FaInstagram className='text-lg' />
                </div>
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <div className='w-9 h-9 bg-accent text-white rounded-full flex justify-center items-center'>
                  <FaGithub className='text-lg' />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
