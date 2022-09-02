import Image from 'next/image';

// import components
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

// import data
import { headerData, heroData, navData, faqData } from '../data.json';

const Home = ({ headerData, heroData, navData, faqData }) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <Faq faqData={faqData} />
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
      faqData,
    },
  };
};

export default Home;
