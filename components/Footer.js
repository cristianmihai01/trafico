import Image from 'next/image';

const Footer = ({ footerData }) => {
  // destructure footer data
  const { truckImg, hillImg, text, logo, links, form } = footerData;
  return (
    <footer className='bg-footer min-h-[737px] bg-no-repeat bg-left-bottom relative'>
      {/* truck image */}
      <div className='absolute -top-24  -left-[7%]'>
        <Image src={truckImg} width={430} height={210} />
      </div>
      {/* hill image */}
      <div className='absolute z-10 top-6'>
        <Image src={hillImg} width={137} height={92} />
      </div>
    </footer>
  );
};

export default Footer;
