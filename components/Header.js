import Image from 'next/image';
import Link from 'next/link';

const Header = ({ headerData, navData }) => {
  // destructure header data
  const { logoImg, btnText } = headerData;
  return (
    <header className='py-[40px] fixed w-full max-w-[1120px] z-20 flex justify-between items-center'>
      <Image src={logoImg} width={212} height={50} />
      {/* nav & button wrapper */}
      <div className='flex gap-x-[96px] items-center'>
        {/* nav */}
        <nav>
          <ul className='flex gap-[96px]'>
            {navData.map((item, idx) => {
              // destructure item
              const { name, href } = item;
              return (
                <li key={idx}>
                  <Link href={href}>
                    <a className='text-white'>{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* btn */}
        <button className='btn'>{btnText}</button>
      </div>
    </header>
  );
};

export default Header;
