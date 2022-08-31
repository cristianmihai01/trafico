import Link from 'next/link';
import Image from 'next/image';

// import data
import { heroData } from '../data.json';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';

// import motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = ({ heroData }) => {
  // destructure hero
  const { title, image } = heroData;
  return (
    <>
      <Header />
      <motion.h1
        initial='initial'
        animate='animate'
        variants={fadeIn('down')}
        className='h1'
      >
        {title}
      </motion.h1>
      <Image src={image} width={160} height={160} />
      <Link href='#'>Hello</Link>
      <p className='lead'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error sit
        optio, molestias, eum praesentium quas vitae nisi sint temporibus
        corrupti cupiditate est?
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
