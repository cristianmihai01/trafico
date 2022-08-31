import Link from 'next/link';
import Image from 'next/image';

// import data
import { heroData } from '../data.json';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ heroData }) => {
  // destructure hero
  const { title, image } = heroData;
  return (
    <>
      <Header />
      <h1 className='h1' data-aos='fade-up'>
        {title}
      </h1>
      <Image src={image} width={160} height={160} />
      <Link href='#'>Hello</Link>
      <p className='lead'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, et
        ad architecto beatae ipsum sequi consequatur veritatis ea facere quo!
      </p>
      <h3 className='h3'>Lorem Ipsum</h3>
      <Footer />
    </>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      heroData,
    },
  };
};

export default Home;
