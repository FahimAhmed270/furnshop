import React from 'react'
// swiper module
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { newInStore } from '../data'


const NewItemsSlider = () => {
  return (
    <Swiper
    modules={[Autoplay]}
    grabCursor={true}
    loop={true}
    autoplay={{
      delay: 7000,
      disableOnInteraction: false
  }}
    breakpoints={{
      300:{
        slidesPerView:1,
        spaceBetween:20,
      },
      400:{
        slidesPerView:1,
        spaceBetween:20,
      },
      768:{
        slidesPerView:2,
        spaceBetween:20,
      },
      1200:{
        slidesPerView:3,
        spaceBetween:20,
      }
    }}
    >
      {newInStore.products.map((product, id)=>{
        return(
          <SwiperSlide className='max-w-[265px]' key={id}>
            <div className='relative'>
              <img src={product.image.type} alt="" />
              <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-semibold'>{product.name}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default NewItemsSlider
