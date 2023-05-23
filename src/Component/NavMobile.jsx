import React from 'react'
import { navigation } from '../data'

const NavMobile = () => {
  return (
    <div className='bg-white w-full h-full shadow-2xl'>
      <ul className='text-center h-full flex justify-center items-center
      flex-col gap-y-12'>
        {navigation.map((item, id)=>{
          return (
            <li key={id}>
              <a className='text-2xl font-medium capitalize' href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavMobile
