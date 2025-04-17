'use client'
import { Building, LogOut, Users2 } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBoxOpen, FaHamburger } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'
import { GiHamburger } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'
import AdminSidebar from '../components/Common/AdminSidebar'
import AdminNavbar from '../components/Common/AdminNavbar'

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
    <div className='min-h-screen w-full relative flex flex-col '>
    {/* navbar  */}
      <AdminNavbar togglesidebar={togglesidebar} settoggleSidebar={settoggleSidebar}/>
     {/* sidebar  */}
       <AdminSidebar togglesidebar={togglesidebar} settoggleSidebar={settoggleSidebar} />
        <br />
        
       <div className='lg:ml-72  p-2  '>
        <div className='text-2xl lg:mt-8 font-bold mb-5 '>Admin Dashboard</div>
        <div className='grid grid-col-1 gap-3 sm:grid-col-2 md:grid-cols-3 md:gap-0 '>

        

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
        <div className='mt-8 overflow-x-scroll  font-bold text-2xl mb-8'>Recent Orders</div>
        <div className='overflow-x-auto '>

        <table className='w-[40rem] md:w-3/5'>
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
        
    

    </div>
  )
}

export default page