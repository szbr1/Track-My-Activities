import React from 'react'
import { GiMagnifyingGlass } from "react-icons/gi";

function Footer() {
  return (
    <div className='container p-3 mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-4 border-t border-gray-200 py-10'>
        {/* first  */}
       <div className=''>
        <h1 className=' text-xl font-bold'>News Letter</h1>
        <span className=''>
            Lorem ipsum dolor sit amet consectetu, delectus aperiam recusandae.
        </span>
        <div className='flex mt-3'>

        <input type="text" placeholder='enter email' className='placeholder:text-white bg-black text-white py-2  px-3 rounded-l-lg' />
         <div className='p-2 bg-gray-300 flex justify-center items-center rounded-r-lg px-3'>
            <GiMagnifyingGlass />
         </div>
        </div>
       </div>

       {/* second contacts  */}

       <div className='flex  flex-col'>
        <h1 className='text-xl font-bold'>Contacts</h1>
        <span>+92 31793000</span>
        <span>szb8480@gmail.com</span>
       </div>
      
      {/* third links  */}
       
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold'>Website Links</h1>
        <span className='ml-6 hover:underline cursor-pointer'>About</span>
        <span className='ml-6 hover:underline cursor-pointer'>Profile</span>
        <span className='ml-6 hover:underline cursor-pointer'>Home</span>
       </div>
    </div>
  )
}

export default Footer