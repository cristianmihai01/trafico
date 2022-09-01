import Image from 'next/image';

// import components
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// import data
import { headerData, heroData } from '../data.json';

const Home = ({ heroData }) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero heroData={heroData} headerData={headerData} />
      <Footer />
      <div className='h-[3000px]'></div>
    </div>
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
