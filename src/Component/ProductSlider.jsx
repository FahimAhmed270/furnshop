import React from 'react'

// import Swiper core
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css'

// import data
import { products } from '../data'
import { AiOutlinePlus } from 'react-icons/ai'



const ProductSlider = () => {
  const { pages } = products
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    pagination={{clickable: true}}
    navigation={true}
    className='productSlider min-h-[1300px]'
    >
      {pages.map((page, id) => {
        return (
          <SwiperSlide key={id}>
            <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 lg:gap-[30px]'>
              {page.productList.map((product, id) => {
                const { image, name, price, oldPrice } = product
                return (
                  <div className='w-full max-w-[300px] h-[380px] text-left' key={id}>
                    <div className='border hover:border-accent rounded-[18px] w-full h-full max-w-[285px] max-h-[300px] flex items-center justify-center mb-[15px] relative transition'>
                      <img src={image.type} alt="" />
                      <div className='absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
                        <AiOutlinePlus className='text-2xl text-primary' />
                      </div>
                    </div>
                    <div className='font-semibold lg:text-xl'>{name}</div>
                    <div className='flex items-center gap-x-3'>
                      <div>$ {price}</div>
                      <div className='text-grey text-[15px] line-through'>$ {oldPrice}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ProductSlider
