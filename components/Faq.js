import Image from 'next/image';

// import components
import Accordion from './Accordion';

const Faq = ({ faqData }) => {
  // destructure faq data
  const { pretitle, title, boyImg, accordions } = faqData;
  return (
    <section className='min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top py-6 lg:pt-40 lg:pb-24'>
      <div className='container mx-auto'>
        {/* top */}
        <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center relative pt-8 pb-16 lg:pt-16 lg:pb-32'>
          {/* text */}
          <div className='lg:w-[45%]'>
            <h3 className='h3 mb-6 lg:mb-12'>{pretitle}</h3>
            <h2 className='h2 mb-6 lg:mb-12'>{title}</h2>
          </div>
          {/* image */}
          <div className='lg:absolute lg:-right-16 lg:-top-16'>
            <Image src={boyImg} width={708} height={498} />
          </div>
        </div>
        {/* accordions list */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[10px]'>
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
