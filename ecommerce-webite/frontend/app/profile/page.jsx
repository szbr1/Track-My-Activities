import React from 'react'
import MyOrders from '../components/Layouts/MyOrders'

function page() {
  return (
    <div className='min-h-screen w-full flex flex-col'>
    <div className='flex flex-grow container mx-auto p-4 md:p-6'>
   <div>
    <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>

    {/* left side  */}
    <div className='w-full md:w-1/3 lg:w-full shadow-md rounded-lg p-6'>
      <h1 className='text-2xl md:text-3xl font-bold mb-4'>John Doe</h1>
       <p className='mb-4 text-gray-600 text-lg'>Jhon@example.com</p>
       <button className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>Delete</button>
    </div>

    {/* Right side  */}
    <div className='flex w-full px-4 py-2 shadow-lg'>
        <MyOrders />
    </div>

    </div>
   </div>
    </div>
    </div>
  )
}

export default page