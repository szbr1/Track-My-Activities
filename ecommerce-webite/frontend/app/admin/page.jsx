'use client'
import { Building, LogOut, Users2 } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBoxOpen, FaHamburger } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'
import { GiHamburger } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'

function page() {
    const [togglesidebar , settoggleSidebar] = useState(false)

  return (
    <div className='min-h-screen w-full relative'>
    <nav className='md:hidden h-10 w-full bg-slate-950 opacity-90 flex items-center text-white'>
        <RxHamburgerMenu onClick={()=> settoggleSidebar(!togglesidebar)} className='text-2xl ml-3' />
            &nbsp; Dashboard 
    </nav>

    
        <div className={` absolute top-0 left-0 w-64 h-screen bg-slate-800 transition-all duration-300 ${togglesidebar ? 'translate-x-0': '-translate-x-full'} lg:translate-0`}>
        
        {/* cross button  */}
         <div className='md:hidden cursor-pointer mt-3 text-end'>
            <span onClick={()=> settoggleSidebar(!togglesidebar)} className='text-2xl m-3 h-5 px-4 text-white border py-1 pb-2 border-gray-400 rounded-full cursor-pointer'>x</span>
         </div>
         <Link href={'/admin'} className='absolute top-2 left-3 text-2xl font-bold text-slate-950'>Rabbit</Link>
         
        <br  className='hidden lg:block'/> <br  className='hidden lg:block'/> 
         <div className='text-center font-bold text-white text-xl mt-2'>Admin Dashboard </div>
         <div className='p-4 flex flex-col gap-2'>

         <Link href={''} className='text-white font-bold w-52 active:bg-slate-700 pl-7 pr-14 py-2 rounded-md uppercase flex hover:bg-slate-400'>
        <Users2 /> &nbsp; Users
         </Link>
         
             <Link href={''} className='text-white font-bold flex active:bg-slate-700 pl-7 pr-14 py-2 w-52 rounded-md uppercase hover:bg-slate-400'>
        <FaBoxOpen className='mt-1 text-2xl' /> &nbsp; Products
         </Link>
         <Link href={''} className='text-white font-bold w-52 active:bg-slate-700 pl-7 pr-14 py-2 rounded-md uppercase flex hover:bg-slate-400 '>
        <Building /> &nbsp;Orders
         </Link>
         <Link href={''} className='text-white font-bold w-52 active:bg-slate-700 pl-7 pr-14 py-2 rounded-md uppercase flex hover:bg-slate-400'>
         <FaShop className='text-2xl'/> &nbsp; Shop
         </Link>

         <button className=''><LogOut /> &nbsp; Logout</button>
         </div>
        </div>
       
        
    

    </div>
  )
}

export default page