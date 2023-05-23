import React from 'react'
import Feature from './Component/Feature'
import FeatureSecond from './Component/FeatureSecond'
import Hero from './Component/Hero'
import NewItems from './Component/NewItems'
import Newsletter from './Component/Newsletter'
import Products from './Component/Products'
import Testimonial from './Component/Testimonial'

const App = () => {
  return (
    <div className='w-full bg-white mx-auto'>
      <Hero/>
      <Feature/>
      <NewItems/>
      <FeatureSecond/>
      <Products/>
      <Testimonial/>
      <Newsletter/>
    </div>
  )
}

export default App
