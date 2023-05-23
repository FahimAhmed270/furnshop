import React from 'react'
import Feature from './Component/Feature'
import FeatureSecond from './Component/FeatureSecond'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Hero from './Component/Hero'
import NewItems from './Component/NewItems'
import Newsletter from './Component/Newsletter'
import Products from './Component/Products'
import Testimonial from './Component/Testimonial'

const App = () => {
  return (
    <div className='w-full bg-white mx-auto'>
       <Header/>
      <Hero/>
      <Feature/>
      <NewItems/>
      <FeatureSecond/>
      <Products/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
     
    </div>
  )
}

export default App
