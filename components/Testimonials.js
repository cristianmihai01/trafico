// import components
import Slider from './Slider';

const Testimonials = ({ testimonialData }) => {
  // destructure testimonial data
  const { pretitle, title, clients } = testimonialData;
  return (
    <section className='relative'>
      <div className='container mx-auto'>
        <div className='flex'>
          {/* text */}
          <div className='w-[40%]'>
            <h3 className='h3'>{pretitle}</h3>
            <h2 className='h2'>{title}</h2>
          </div>
          {/* slider */}
          <div className='w-[60%] absolute right-0'>
            <Slider clients={clients} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
