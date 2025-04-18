'use client'
import AdminNavbar from '@/app/components/Common/AdminNavbar';
import AdminSidebar from '@/app/components/Common/AdminSidebar';
import React, { useState } from 'react'

function page() {
     const orders = [
      {
        _id: 923847,
        name: 'Jhon Doe',
        price: 2384.99,
        status: 'Processing'

      },
      {
        _id: 923847,
        name: 'Jhon Doe',
        price: 2384.99,
        status: 'Processing'

      },
      {
        _id: 923847,
        name: 'Jhon Doe',
        price: 2384.99,
        status: 'Processing'

      }
     ]

    const [togglesidebar, settoggleSidebar] = useState(false);
  return (
    <div className='md:flex'>
           {/* navbar  */}
      <AdminNavbar
        togglesidebar={togglesidebar}
        settoggleSidebar={settoggleSidebar}
      />
      {/* sidebar  */}
      <AdminSidebar
        togglesidebar={togglesidebar}
        settoggleSidebar={settoggleSidebar}
      />

      <div className='mt-4 md:p-9 w-full min-h-screen'>

        <div className='text-xl uppercase  p-3 md:p-0  font-bold md:py-3'>Orders Mangement</div>
        <div className='overflow-x-auto p-2'>

        <table className=' rounded-lg  overflow-hidden whitespace-nowrap shadow-md border border-gray-200 md:w-full w-[35rem]  text-left'>
          <thead className='bg-slate-300 uppercase'>
            <tr className=''>
              <th className='px-4 py-2'>order id </th>
              <th className='px-4 py-2'>customer </th>
              <th className='px-4 py-2'>total price </th>
              <th className='px-4 py-2'>status </th>
              <th className='w-74 text-center py-2'>actions </th>
            </tr>
          </thead>

          <tbody>
            {
              orders.map(order => {
                 return (
                  <tr className='border-b border border-gray-200'>

                  <th className='px-4 py-2'>{order._id}</th>
                  <th className='px-4 py-2'>{order.name}</th>
                  <th className='px-4 py-2'>{order.price}</th>
                  <th className='px-4 py-2'><select className='rounded-md border py-1 px-2' name="status">
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Failed">Failed</option>
                    </select></th>
                    <td className='px-4 py-2 text-center '><button className='px-3 py-1 w-32 cursor-pointer  bg-green-500 rounded-md'>Delivered</button></td>
                  </tr>
                 )
              })
            }
          </tbody>
        </table>
        </div>
        

      </div>
    </div>
    
  )
}

export default page