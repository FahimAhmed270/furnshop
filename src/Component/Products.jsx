import React from 'react'
import { products } from '../data'
import ProductSlider from './ProductSlider'

const Products = () => {
  const {title, subtitle} = products
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* text */}
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
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
