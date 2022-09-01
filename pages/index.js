import Image from 'next/image';

// import components
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// import data
import { headerData, heroData, navData } from '../data.json';

const Home = ({ headerData, heroData, navData }) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <Footer />
      <div className='h-[3000px]'></div>
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
    },
  };
};

export default Home;
