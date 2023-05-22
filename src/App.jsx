import React from 'react'
import Feature from './Component/Feature'
import FeatureSecond from './Component/FeatureSecond'
import Hero from './Component/Hero'
import NewItems from './Component/NewItems'

const App = () => {
  return (
    <div className='w-full bg-white mx-auto'>
      <Hero/>
      <Feature/>
      <NewItems/>
      <FeatureSecond/>
    </div>
  )
}

export default App
