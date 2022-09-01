import Image from 'next/image';

const Header = ({ headerData }) => {
  // destructure header data
  const { logoImg } = headerData;
  return (
    <header className='py-4 fixed w-full max-w-[1120px] z-20'>
      <Image src={logoImg} width={212} height={50} />
    </header>
  );
};

export default Header;
