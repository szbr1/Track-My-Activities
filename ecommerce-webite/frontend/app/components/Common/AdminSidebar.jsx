'use client'
import { Building, LogOut, Users2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'

function AdminSidebar({togglesidebar, settoggleSidebar}) {
  return (
    <div>        <div className={`  top-0 left-0 md:sticky absolute w-64 h-screen bg-slate-800 transition-all duration-300 z-30 ${togglesidebar ? 'translate-x-0': '-translate-x-full'} md:translate-0`}>
        
    {/* cross button  */}
     <div className='md:hidden cursor-pointer mt-3 text-end'>
        <span onClick={()=> settoggleSidebar(!togglesidebar)} className='text-2xl m-3 h-5 px-4 text-white border py-1 pb-2 border-gray-400 rounded-full cursor-pointer'>x</span>
     </div>
     <Link href={'/admin'} className='absolute top-2 left-3 text-2xl font-bold text-slate-950'>Rabbit</Link>
     
    <br  className='hidden lg:block'/> <br  className='hidden lg:block'/> 
     <div className='text-center font-bold text-white text-xl mt-2'>Admin Dashboard </div>
     <div className='p-4 flex flex-col gap-2'>

     <Link href={'/admin/users'} className='text-white font-bold w-52 active:bg-slate-700 pl-7 pr-14 py-2 rounded-md uppercase flex hover:bg-slate-400'>
    <Users2 /> &nbsp; Users
     </Link>
     
         <Link href={'/admin/products'} className='text-white font-bold flex active:bg-slate-700 pl-7 pr-14 py-2 w-52 rounded-md uppercase hover:bg-slate-400'>
    <FaBoxOpen className='mt-1 text-2xl' /> &nbsp; Products
     </Link>
     <Link href={'/admin/orders'} className='text-white font-bold w-52 active:bg-slate-700 pl-7 pr-14 py-2 rounded-md uppercase flex hover:bg-slate-400 '>
    <Building /> &nbsp;Orders
     </Link>
     <Link href={''} className='text-white font-bold w-52 active:bg-slate-700 pl-7 pr-14 py-2 rounded-md uppercase flex hover:bg-slate-400'>
     <FaShop className='text-2xl'/> &nbsp; Shop
     </Link>
 <br />
     <button className='flex bg-red-500 text-white w-32 py-2 rounded-md  ml-6 px-1'><LogOut /> &nbsp; Logout</button>
     </div>
    </div></div>
  )
}

export default AdminSidebar