import Link from 'next/link';

const NavMobile = ({ navData }) => {
  return (
    <nav className='bg-accent w-full p-4'>
      {/* nav list */}
      <ul className='flex flex-col gap-y-6'>
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
