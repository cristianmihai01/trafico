import Image from 'next/image';

// import motion
import { motion } from 'framer-motion';
// import variants
import { staggerFooterContainer, truckAnim } from '../variants';

const Footer = ({ footerData }) => {
  // destructure footer data
  const { truckImg, hillImg, text, logo, links, form } = footerData;
  return (
    <footer className='bg-footer min-h-[737px] bg-no-repeat bg-left-bottom relative'>
      <motion.div
        variants={staggerFooterContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.2 }}
        className='container mx-auto'
      >
        {/* truck image */}
        <motion.div
          variants={truckAnim}
          className='absolute -top-24 -left-[6.8%]'
        >
          <Image src={truckImg} width={430} height={210} />
        </motion.div>
        {/* hill image */}
        <motion.div className='absolute z-10 top-[22px] left-0'>
          <Image src={hillImg} width={137} height={92} />
        </motion.div>
        {/* text & form */}
        <div className='flex items-center'>
          {/* text */}
          <div className='flex-1'>
            <p>{text}</p>
          </div>
          {/* form */}
          <form className='w-[550px] h-[440px] bg-white flex-1'>form</form>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
