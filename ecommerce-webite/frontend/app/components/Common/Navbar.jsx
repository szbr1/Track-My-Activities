'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Cartlayout from '../Layouts/Cartlayout';
import TopNavbar from '../Layouts/TopNavbar'


import { AiOutlineAlignRight } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaLuggageCart } from "react-icons/fa";
import HamburgerLayout from '../Layouts/Hamburger';





function Navbar() {
 const [cartOpne, setCartOpen]= useState(false)
 const [hamburger, sethamburger]= useState(false)


  return (
    <div className='border-b border-gray-300'>
    <TopNavbar />
    {/* main  */}
    <main className='  container mx-auto flex justify-between items-center p-3'>

        {/* logo  */}
      <Link 
       href={"/"}
       className=' cursor-pointer text-2xl font-bold uppercase text-red-600'>Reb<span className='text-black'>bit.</span></Link>
      {/* main  */} 
     <div  className='hidden uppercase md:flex gap-4 text-sm '>
        <Link className='cursor-pointer hover:text-gray-400 hover:underline' href={'/'}>Top wear</Link>
        <Link className='cursor-pointer hover:text-gray-400 hover:underline' href={'/'}>bottom wear</Link>
        <Link className='cursor-pointer hover:text-gray-400 hover:underline' href={'/'}>men</Link>
        <Link className='cursor-pointer hover:text-gray-400 hover:underline' href={'/'}>women</Link>
     </div>
      
       {/* side buttons  */}
      <div className='text-xl flex gap-3'>
        <Link href={'/admin'} className='text-sm bg-black text-white px-2 py-1 rounded-md cursor-pointer'>admin</Link>
      <FaLuggageCart className=' cursor-pointer hover:text-gray-300' onClick={()=> setCartOpen(!cartOpne)}/>
      <IoSearchOutline  className='cursor-pointer hover:text-gray-200'/>

      <AiOutlineAlignRight  onClick={()=> sethamburger(!hamburger)}className='cursor-pointer md:hidden block hover:text-gray-200'/>

      </div>
      
      {/* cart toogle  */}
    {
      cartOpne ?  <Cartlayout cart={cartOpne} setCart={setCartOpen} /> : null
     
    }
    {/* hamburger toogle  */}

 {
      hamburger ?  <HamburgerLayout cart={hamburger} setCart={sethamburger} /> : null
     
    }
    </main>
    </div>
    
  )
}

export default Navbar