import Image from 'next/image';

// import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// import data
import { heroData } from '../data.json';

const Home = ({ heroData }) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Header />
      <Hero heroData={heroData} />
      <Footer />
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
