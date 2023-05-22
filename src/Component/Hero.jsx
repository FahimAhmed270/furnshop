import React from 'react'
import { hero } from '../data'
import Stars from './Stars'


const Hero = () => {
  const { title, subtitle, buttonText } = hero
  return (
    <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:text-center lg:mb-28'>
      <div className="container mx-auto text-center">
        <h1 className='text-2xl font-semibold mb-[30px] mx-auto lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>
        <h2 className='mb-[30px] max-w-[625px] mx-auto lg:mb=[65px] lg:text-xl'>{subtitle}</h2>
        <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[190px]'>{buttonText}</button>
        <div><Stars /></div>
      </div>
    </section>
  )
}

export default Hero
