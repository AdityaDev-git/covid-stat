import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-3xl font-medium'>Covid Status</p>
      <div className='flex gap-4'>
        <FaBell className='hover:text-neo-orange cursor-pointer'/>
        <FaUser className='hover:text-neo-orange cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header