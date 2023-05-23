import React from 'react'
import { newsletter } from '../data'

const Newsletter = () => {
  const { title, subtitle, placeholder, buttonText } = newsletter
  return (
    <section className="section bg-newsletter min-h-[490px]">
      <div className="container mx-auto flex justify-center lg:justify-end">
        <div className='w-full max-w-[558px] text-white text-center lg:text-left'>
          <h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 leading-normal'>{title}</h2>
          <p>{subtitle}</p>
          <div>
            <input type="text" />
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
