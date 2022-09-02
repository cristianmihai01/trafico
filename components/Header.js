import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import components
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

// import motion
import { motion } from 'framer-motion';

const Header = ({ headerData, navData }) => {
  const [header, setHeader] = useState(false);
  // destructure header data
  const { logoImg, btnText } = headerData;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? 'bg-white px-4 py-[20px] rounded-md' : 'py-[40px]'
      } fixed w-full max-w-[1120px] z-20 flex justify-between items-center transition-all`}
    >
      {/* logo */}
      <Link href={'/'}>
        <a>
          <Image src={logoImg} width={212} height={50} />
        </a>
      </Link>
      {/* nav & button wrapper - initially hidden */}
      <div className='hidden lg:flex gap-x-[96px]'>
        {/* nav */}
        <Nav navData={navData} />
        {/* btn */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
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
