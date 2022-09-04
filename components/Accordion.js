import { useState } from 'react';

// import icons
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeInRight } from '../variants';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  // destructure accordion
  const { question, answer } = accordion;
  return (
    <motion.div variants={fadeInRight} className='max-w-[550px]'>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className='drop-shadow-primary bg-white cursor-pointer rounded-[10px] h-[90px] px-[35px] flex items-center'
      >
        <div className='w-full flex justify-between items-center'>
          {/* title */}
          <p className='lead font-medium leading-snug max-w-[400px]'>
            {question}
          </p>
          {/* icons */}
          <div className='transition-all duration-500'>
            {isOpen ? (
              <motion.div initial='initial' animate={{ rotate: 180 }}>
                <HiOutlineMinus className='text-[28px] text-accent' />
              </motion.div>
            ) : (
              <motion.div initial='initial' animate={{ rotate: 0 }}>
                <HiOutlinePlus className='text-[28px] text-accent' />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? 'max-h-[160px] p-8 bg-[#FFF7F5] rounded-[10px] drop-shadow-primary my-2'
            : 'max-h-0'
        } h-[160px] overflow-hidden transition-all`}
      >
        <p className='lead leading-[30px] mt-2'>{answer}</p>
      </div>
    </motion.div>
  );
};

export default Accordion;
