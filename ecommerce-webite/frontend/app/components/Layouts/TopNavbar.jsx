import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function TopNavbar() {
  return (
    <div className='bg-red-600 h-8 w-full flex justify-center items-center text-md font-semibold text-white relative'>
        Our Name is Know for Trust.
        <div className='flex gap-3 absolute left-8 '><FaInstagram className='hover:text-black cursor-pointer' /> <FaFacebook className='hover:text-black cursor-pointer'/> <FaYoutube className='hover:text-black cursor-pointer' /></div>
    </div>
  )
}

export default TopNavbar