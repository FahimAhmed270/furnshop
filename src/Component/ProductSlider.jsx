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
import { HiPlus } from 'react-icons/hi'


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
            <div className='grid grid-cols-2 gap-x-5'>
              {page.productList.map((product, id) => {
                const { image, name, price, oldPrice } = product
                return (
                  <div key={id}>
                    <div>
                      <img src={image.type} alt="" />
                      <div>
                        <HiPlus className='text-2xl text-primary' />
                      </div>
                    </div>
                    <div>{name}</div>
                    <div>
                      <div>$ {price}</div>
                      <div>$ {oldPrice}</div>
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
