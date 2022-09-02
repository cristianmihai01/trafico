import Link from 'next/link';

const NavMobile = ({ navData }) => {
  return (
    <nav className='bg-slate-800 h-screen absolute right-0 top-0 w-48'>
      <ul className='flex flex-col'>
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a className='text-white hover:text-accent'>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
