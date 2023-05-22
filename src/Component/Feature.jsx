import React from 'react'
import {features} from '../data'

const Feature = () => {
  const {title, subtitle, image, buttonText, items} = features
  return (
   <section className='section'>
     <div className="container mx-auto">
       <div>
         {/* images */}
         <div>
           <img src={image.type} alt="" />
         </div>
         {/* text */}
       </div>
     </div>
   </section>
  )
}

export default Feature
