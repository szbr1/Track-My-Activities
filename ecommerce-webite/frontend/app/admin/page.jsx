'use client'
import { Building, LogOut, Users2 } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBoxOpen, FaHamburger } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'
import { GiHamburger } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'

function page() {
  const orders = [
   {_id: 23892739229372392,
    user: 'Admin User',
    price: 299,
    status: "Pending"
   },
   {_id: 23892739229372392,
    user: 'Admin User',
    price: 299,
    status: "Pending"
   },
   {_id: 23892739229372392,
    user: 'Admin User',
    price: 9,
    status: "Processing"
   }
   ,{_id: 23892739229372392,
    user: 'Admin User',
    price: 2929.9,
    status: "Delivered"
   }
  ]
    const [togglesidebar , settoggleSidebar] = useState(false)

  return (
    <div className='min-h-screen w-full relative flex  '>
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
     <br />
         <button className='flex bg-red-500 text-white w-32 py-2 rounded-md  ml-6 px-1'><LogOut /> &nbsp; Logout</button>
         </div>
        </div>
        
       <div className='ml-72 w-full  '>
        <div className='text-2xl mt-8 font-bold mb-5 '>Admin Dashboard</div>
        <div className='grid grid-col-1 sm:grid-col-2 md:grid-cols-3 gap-x-5'>

        

         <div className='font-semibold shadow-md rounded-lg w-64 py-4 border border-gray-200 p-2'>
          <span className='text-xl'>Revenue </span>
          <br />
          <span className='text-2xl'>$1000</span>
         </div>
         <div className='font-semibold shadow-md rounded-lg w-64 py-4 border border-gray-200 p-2'>
          <span className='text-xl'>Total Orders </span>
          <br />
          <span className='text-2xl'>200</span>
          <br />
          <Link href={'/admin'} className='text-blue-800 hover:underline'>Manage Orders</Link>
         </div>
         <div className='font-semibold shadow-md rounded-lg w-64 py-4 border border-gray-200 p-2'>
          <span className='text-xl'>Total Products </span>
          <br />
          <span className='text-2xl'>220</span> <br />
          <Link href={'/admin'} className='text-blue-800 hover:underline'>Manage Products</Link>

         </div>
        </div>
         <div className='mt-12 h-[2px] w-full bg-slate-200 '></div>
        <div className='mt-8 font-bold text-2xl mb-8'>Recent Orders</div>
        <table>
          <thead>
            <tr className=' bg-gray-200 w-full rounded-md '>
              <th className='w-80 text-start px-3 py-2 uppercase text-sm' >order id</th>
              <th className='w-44 text-start px-3 py-2 uppercase text-sm' >user</th>
              <th className='w-44 text-start px-3 py-2 uppercase text-sm' >total price</th>
              <th className='w-44 text-start px-3 py-2 uppercase text-sm' >status</th>
              
            </tr>
          </thead>
          <tbody>
            
              {orders.map((order, index) => {
                return(
                  <tr className='border-t py-2 border-gray-200' key={index}> 
                  <td className='py-2 px-3'>{order._id}</td>
                  <td className='py-2 px-3'>{order.user}</td>
                  <td className='py-2 px-3'>{order.price}</td>
                  <td className='py-2 px-3'>{order.status}</td>
                  </tr>
                )
              })}
            
          </tbody>
        </table>
       </div>
        
    

    </div>
  )
}

export default page