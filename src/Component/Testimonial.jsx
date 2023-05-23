import React from 'react'
import { testimonial } from '../data'
import TestimonialSlider from './TestimonialSlider'


const Testimonial = () => {
  const {title, image} = testimonial
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div className='lg:max-w-[50%]'>
            <h2 className='title mb-9'>{title}</h2>
            {/* slider */}
            <TestimonialSlider/>
          </div>
          <img src={image.type} className='order-1' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
