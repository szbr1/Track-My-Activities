import React from 'react'
import { auth } from '@clerk/nextjs/server'

async function page() {
    const {userId} = await auth()
    
    if(!userId){
      return (
        <div className='bg-black h-screen w-full flex justify-center items-center'>
            <span className='text-7xl text-white'>Please Signin first to acces Thanks ❤️</span>
        </div>
      )
    }
  return (
    <div>page</div>
  )
}

export default page