import React from 'react'
import { footer } from '../data'
import logo from '../assets/img/logo.svg'


const Footer = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between border-b border-gray-700 border-opacity-700 pb-7 lg:pb-14'>
          <a href="">
            <img src={logo} alt="" />
          </a>
          {/* social */}
          <div>
            {footer.social.map((item, id)=>{
              const {icon, href} = item
              return(
                <div key={id}>
                  <a href="">{icon}</a>
                </div>
              )
            })}
          </div>
        </div>
        {/* copy right */}
        <p className='text-center'>&copy;FurniShop 2023 - All right reserved</p>
      </div>
    </section>
  )
}

export default Footer
