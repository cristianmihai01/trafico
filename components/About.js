import Image from 'next/image';

const About = ({ aboutData }) => {
  // destructure about data
  const { title, subtitle, text, boyImg } = aboutData;
  return (
    <section className='mb-[60px] lg:mb-[160px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[20px]'>
          {/* text */}
          <div className='flex-1 mt-[74px]'>
            <h3 className='h3 mb-10'>{title}</h3>
            <p className='lead max-w-[470px] mb-[70px]'>{subtitle}</p>
            {/* text box */}
            <div className='bg-accent/10 border-l-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center mb-8 lg:mb-0'>
              <p className='text-[20px] leading-normal lg:text-[24px] lg:leading-[32px] font-medium max-w-[320px] lg:max-w-[460px]'>
                {text}
              </p>
            </div>
          </div>
          {/* image */}
          <div className='flex-1'>
            <Image src={boyImg} width={575} height={480} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
