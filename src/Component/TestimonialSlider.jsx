import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { testimonial } from '../data'

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      className='testimonialSlider'
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
    >
      {testimonial.persons.map((person, id) => {
        const { avatar, name, occupation, message } = person
        return (
          <SwiperSlide key={id}>
            <div className='flex flex-col lg:min-h-[280px] sm:min-h-[200px]'>
              <div className='flex items-center gap-x-5 mb-5'>
                {/* avater */}
                <img src={avatar.type} alt="" />
                <div>
                  <div className='text-xl font-semibold'>{name}</div>
                  <div className='text-gray-500'>{occupation}</div>
                </div>
              </div>
              {/* text */}
              <div className='text-xl max-w-[550px]'>{message}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
