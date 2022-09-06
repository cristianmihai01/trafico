import Image from 'next/image';
import Link from 'next/link';

// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeInUp, footerTruckAnim, staggerFooterContainer } from '../variants';
// import icons
import { CgArrowLongRight } from 'react-icons/cg';

const Footer = ({ footerData }) => {
  // destructure footer data
  const { truckImg, hillImg, text, logo, links, form } = footerData;
  return (
    <footer className='bg-darkblue lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom relative lg:min-h-[738px] pt-12 lg:pt-0'>
      <motion.div
        variants={staggerFooterContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.1 }}
        className='container mx-auto lg:min-h-[738px] flex flex-col justify-between'
      >
        {/* truck image */}
        <motion.div
          variants={footerTruckAnim}
          className='hidden lg:flex absolute -top-24 -left-[6.8%]'
        >
          <Image src={truckImg} width={430} height={210} />
        </motion.div>
        {/* hill image */}
        <motion.div className='hidden lg:flex absolute z-10 top-[22px] left-0'>
          <Image src={hillImg} width={137} height={92} />
        </motion.div>

        {/* text & form */}
        <motion.div
          variants={fadeInUp}
          className='flex flex-col lg:flex-row items-center lg:pr-[95px] lg:gap-x-[95px] gap-y-10 lg:gap-y-0'
        >
          {/* text */}
          <div className='flex-1 text-white border-l-[10px] border-accent py-4 lg:mt-24'>
            <p className='max-w-[330px] text-[20px] leading-[30px] ml-[40px]'>
              {text}
            </p>
          </div>
          {/* form */}
          <form className='w-full max-w-[550px] bg-white flex-1 rounded-[10px] lg:order-2 flex flex-col px-[35px] lg:px-[75px] py-[25px] lg:py-[52px] space-y-[40px] drop-shadow-primary'>
            {/* name input */}
            <div className='flex flex-col'>
              <label className='font-light mb-[10px]' htmlFor='name'>
                {form.labelName}
              </label>
              <input
                className='input'
                type='text'
                id='name'
                placeholder={form.placeholderName}
              />
            </div>
            {/* email input */}
            <div className='flex flex-col'>
              <label className='font-light mb-[10px]' htmlFor='email'>
                {form.labelEmail}
              </label>
              <input
                className='input'
                type='email'
                id='email'
                placeholder={form.placeholderEmail}
              />
            </div>
            <button className='btn self-start hover:bg-accent-hover transition'>
              {form.btnText}
              <CgArrowLongRight className='text-[30px]' />
            </button>
          </form>
        </motion.div>
        {/* logo & links */}
        <motion.div
          variants={fadeInUp}
          className='py-[120px] flex flex-col lg:flex-row justify-between lg:pr-24'
        >
          {/* logo */}
          <div className='mb-6 mx-auto lg:mb-0 lg:mx-0'>
            <Link href={'/'}>
              <a>
                <Image src={logo} width={170} height={41} />
              </a>
            </Link>
          </div>
          {/* links */}
          <ul className='flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0 gap-x-[100px] text-center'>
            {links.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className='text-white font-light hover:text-accent transition'
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
