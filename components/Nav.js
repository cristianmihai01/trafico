import Link from 'next/link';

const Nav = ({ navData }) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-[96px]'>
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

export default Nav;
