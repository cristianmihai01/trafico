import Image from 'next/image';

// import components
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

// import motion
import { motion } from 'framer-motion';
// import variants
import { btnAnim } from '../variants';

const Header = ({ headerData, navData }) => {
  // destructure header data
  const { logoImg, btnText } = headerData;
  return (
    <header className='py-[40px] fixed w-full max-w-[1120px] z-20 flex justify-between items-center'>
      <Image src={logoImg} width={212} height={50} />
      {/* nav & button wrapper - initially hidden */}
      <div className='hidden lg:flex gap-x-[96px]'>
        {/* nav */}
        <Nav navData={navData} />
        {/* btn */}
        <motion.button
          variants={btnAnim}
          initial='initial'
          whileHover='hover'
          className='btn'
        >
          {btnText}
        </motion.button>
      </div>
      {/* nav mobile - hide on large screens */}
      <div className='lg:hidden'>
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
