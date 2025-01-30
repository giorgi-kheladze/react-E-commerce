import React from 'react'
import { assets } from '../assets/assets'

const navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium bg-amber-500'>
      <img src={assets.logo} className='w-36'/>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

      </ul>
    </div>
  )
}

export default navbar