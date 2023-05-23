import React from 'react'
import { products } from '../data'
import ProductSlider from './ProductSlider'

const Products = () => {
  const {title, subtitle} = products
  return (
    <section className="section">
      <div className="container mx-auto text-center">
        {/* text */}
        <div>
          <h2 className='title'>{title}</h2>
          <p className='max-w-[650px]  mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
        </div>
        {/* slider */}
        <div>
          <ProductSlider/>
        </div>
      </div>
    </section>
  )
}

export default Products
