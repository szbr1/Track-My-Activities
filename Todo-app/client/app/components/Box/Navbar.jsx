import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='h-16 w-full bg-fuchsia-200'>
         <div className='container  w-2/6 flex justify-between items-center '>
           <Link href=''>Todo's</Link>
           <Link href='' className='px-2 py-1 rounded-lg bg-green-300 text-black border border-black'>todos</Link>
           <Link href='' className='px-2 py-1 rounded-lg bg-green-300 text-gray-600 border border-black'>Logout</Link>

         </div>
    </div>
  )
}

export default Navbar