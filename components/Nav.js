import Link from 'next/link';

// import motion
import { motion } from 'framer-motion';
// import variants
import { linkHover } from '../variants';

const Nav = ({ navData }) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-[96px]'>
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <motion.a
                  variants={linkHover}
                  initial='initial'
                  whileHover='hover'
                  className='cursor-pointer'
                >
                  {name}
                </motion.a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
