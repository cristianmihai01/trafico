import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Slider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      modules={[]}
      className='testimonialSlider'
    >
      {clients.map((client, idx) => {
        // destructure client
        const { message, image, name } = client;
        return (
          <SwiperSlide key={idx}>
            <div className='bg-white h-[360px] drop-shadow-primary'>
              {message}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
