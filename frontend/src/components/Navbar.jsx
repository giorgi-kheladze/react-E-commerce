import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 px-5 font-medium bg-amber-800 text-white'>
      <img src={assets.logo} className='w-36'/>

      <ul className='hidden sm:flex gap-5 text-sm text-black-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'/>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'/>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.searchIcon} className='w-5'/>

        <div className='group relative'>
          <img src={assets.personIcon} className='w-5 cursor-pointer'/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className='relative'>
          <i class='bx bx-cart'></i>
          <p className='absolute right-[-2px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.burgerMenu} className='w-5 cursor-pointer sm:hidden'/>
      </div>

      {/* menu for small screens */}
      <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-gray-600 transition-all ${visible ? "w-[100%]" : "w-0"}`}>
        <div className='flex flex-col text-white'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer border-b-2 mb-2'>
            <img src={assets.back} className='w-5'/>
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-1' to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-1' to="/collection">Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-1' to="/about">About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-1' to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default navbar