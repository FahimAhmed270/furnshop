import React from 'react'
import Feature from './Component/Feature'
import FeatureSecond from './Component/FeatureSecond'
import Hero from './Component/Hero'
import NewItems from './Component/NewItems'
import Products from './Component/Products'

const App = () => {
  return (
    <div className='w-full bg-white mx-auto'>
      <Hero/>
      <Feature/>
      <NewItems/>
      <FeatureSecond/>
      <Products/>
    </div>
  )
}

export default App
