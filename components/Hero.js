const Hero = ({ heroData }) => {
  // destructure heroData
  const { title, sceneImg } = heroData;
  return (
    <section className='bg-hero bg-no-repeat  h-[800px]'>
      <div className='container mx-auto'>
        <h1 className='h1'>{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
