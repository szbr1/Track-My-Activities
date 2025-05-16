import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='h-16 w-full bg-sky-500 backdrop-blur-3xl border-b-2 border-gray-500'>
         <div className='container  w-2/6 flex justify-between items-center p-2 '>
           <Link href='/' className='text-2xl font-semibold uppercase text-green-800 m-2'>Todo's</Link>
           <Link href='' className='text-md font-stretch-50% uppercase w-24 flex justify-center py-1 rounded-sm cursor-pointer hover:bg-sky-400 hover:border hover:border-blue-950 ml-28 bg-sky-300'>todos</Link>
           <Link href=''  className='text-md font-stretch-50% uppercase w-24 flex justify-center py-1 rounded-sm cursor-pointer hover:bg-sky-400 hover:border hover:border-blue-950 bg-sky-300'>Logout</Link>
         </div>
    </div>
  )
}

export default Navbar