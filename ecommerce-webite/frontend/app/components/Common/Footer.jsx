import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiMagnifyingGlass } from "react-icons/gi";
import { LuPhoneCall } from "react-icons/lu";

function Footer() {
  return (
    <div className='container p-3 mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-4 border-t border-gray-300 mt-5'>
        {/* first  */}
       <div className=''>
        <h1 className=' text-xl  mb-3 font-medium'>News Letter</h1>
        <span className=' text-gray-500'>
            Lorem ipsum dolor sit amet consectetu, <br /> delectus aperiam recusandae.
        </span>
        <br />
        <br />

        <span className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <div className='flex mt-3'>

        <input type="text" placeholder='enter email' className='placeholder:text-white bg-black text-white py-2  px-3 rounded-l-lg' />
         <div className='p-2 bg-gray-300 flex justify-center items-center rounded-r-lg px-3'>
            <GiMagnifyingGlass />
         </div>
        </div>
       </div>

       {/* second contacts  */}

       <div className='flex  flex-col'>
        <h1 className='text-xl  mb-3 font-medium'>Contacts</h1>
        <div className='flex flex-col gap-1'>
        <Link href={''} className='uppercase' >Mens wear</Link>
        <Link href={''} className='uppercase' >womens wear</Link>
          
        <Link href={''} className='uppercase' >boys wear</Link>
        <Link href={''} className='uppercase' >child wear</Link>
        </div>
       </div>
      
      {/* third links  */}
       
      <div className='flex flex-col'>
        <h1 className='text-xl  mb-3 font-medium'>Support</h1>
        <div className='flex flex-col uppercase gap-1'>
        <span className=' hover:underline cursor-pointer'>About</span>
        <span className=' hover:underline cursor-pointer'>Profile</span>
        <span className=' hover:underline cursor-pointer'>Home</span>
          
        </div>
       </div>

       <div className='flex flex-col'>
        <div className='font-semibold text-xl'>Follow Us</div>
      <div className='flex gap-3 text-xl mt-3'> <FaInstagram className="hover:text-black cursor-pointer" />
              <FaFacebook className="hover:text-black cursor-pointer" />
              <FaYoutube className="hover:text-black cursor-pointer" /></div>
         <br />
        <div className="  text-gray-500 text-lg">Call Us</div>
     
      <div className='flex'>
      <LuPhoneCall className='mr-0.5 mt-1' /> 
      <div> +9231829823</div>
      </div>
       </div>
    </div>
  )
}

export default Footer