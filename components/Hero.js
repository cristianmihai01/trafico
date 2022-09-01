import Image from 'next/image';

// import motion
import { motion } from 'framer-motion';
// import variants
import {
  staggerContainer,
  girlAnim,
  boyAnim,
  truckAnim,
  fadeInDown,
} from '../variants';

const Hero = ({ heroData }) => {
  // destructure heroData
  const { title, boyImg, girlImg, truckImg } = heroData;

  return (
    <section className='bg-hero bg-no-repeat bg-left-top min-h-[950px]'>
      {/* container */}
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='container mx-auto relative min-h-[950px]'
      >
        {/* title */}
        <motion.h1
          variants={fadeInDown}
          className='h1 max-w-[740px] text-white pt-[12rem]'
        >
          {title}
        </motion.h1>

        {/* girl image */}
        <motion.div variants={girlAnim} className='absolute bottom-0'>
          <Image src={girlImg} width={206} height={495} />
        </motion.div>

        {/* truck image */}
        <motion.div
          variants={truckAnim}
          className='absolute -bottom-[25%] -left-[30%]'
        >
          <Image src={truckImg} width={811} height={395} />
        </motion.div>

        {/* boy image */}
        <motion.div
          variants={boyAnim}
          className='absolute right-[380px] bottom-0 z-10'
        >
          <Image src={boyImg} width={206} height={495} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
