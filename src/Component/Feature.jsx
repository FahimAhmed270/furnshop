import React from 'react'
import { features } from '../data'

const Feature = () => {
  const { title, subtitle, image, buttonText, items } = features
  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          {/* images */}
          <div className='flex-1 order-1 lg:-order-1'>
            <img src={image.type} alt="" />
          </div>
          {/* text */}
          <div className='flex flex-1 flex-col justify-end'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
            {/* items */}
            <div>
              {items.map((item, id) => {
                const { title, subtitle, icon } = item
                return (
                  <div className='flex mb-6 lg:mb-0' key={id}>
                    <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                    <div className='pb-3'>
                      <h4 className='text-base lg:text-xl font-semibold mb-3'>{title}</h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
