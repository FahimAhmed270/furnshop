import React from 'react'
import { footer } from '../data'
import logo from '../assets/img/logo.svg'


const Footer = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between border-full border-b border-gray-700 border-opacity-700 pb-7 lg:pb-14'>
          <a href="" className='mb-6 lg:mb-0'>
            <img src={logo} alt="" />
          </a>
          {/* social */}
          <div className='flex gap-x-4'>
            {footer.social.map((item, id)=>{
              const {icon, href} = item
              return(
                <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center' key={id}>
                  <a href="">{icon}</a>
                </div>
              )
            })}
          </div>
        </div>
        {/* copy right */}
        <p className='text-center pt-8'>&copy;FurniShop 2023 - All right reserved</p>
      </div>
    </section>
  )
}

export default Footer
