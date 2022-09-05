import Image from 'next/image';

// import motion
import { motion } from 'framer-motion';
// import variants
import { staggerFooterContainer, truckAnim } from '../variants';
// import icons
import { CgArrowLongRight } from 'react-icons/cg';

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
          className='hidden lg:flex  absolute -top-24 -left-[6.8%]'
        >
          <Image src={truckImg} width={430} height={210} />
        </motion.div>
        {/* hill image */}
        <motion.div className='hidden lg:flex absolute z-10 top-[22px] left-0'>
          <Image src={hillImg} width={137} height={92} />
        </motion.div>

        {/* text & form */}
        <div className='flex flex-col lg:flex-row  items-center lg:pr-[95px]'>
          {/* text */}
          <div className='flex-1 order-2 lg:order-1'>
            <p>{text}</p>
          </div>
          {/* form */}
          <form className='w-full max-w-[550px] min-h-[440px] bg-white flex-1 rounded-[10px] order-1 lg:order-2 flex flex-col px-[75px] py-[52px]  space-y-[40px] drop-shadow-primary'>
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
            <button className='btn self-start'>
              {form.btnText}
              <CgArrowLongRight className='text-[30px]' />
            </button>
          </form>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
