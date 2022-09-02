import { useState } from 'react';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  // destructure accordion
  const { id, title, subtitle } = accordion;
  return (
    <div className='max-w-[550px] mb-8'>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className='shadow-primary bg-white cursor-pointer'
      >
        <div className='py-4 px-8 rounded-[10px]'>
          <div className='lead font-medium'>{title}</div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'max-h-[160px] p-8 bg-red-100' : 'max-h-0'
        } h-[160px] overflow-hidden transition-all`}
      >
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Accordion;
