import { useAuth, useClerk, UserButton, useSignIn, useSignUp, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { BsSpotify } from 'react-icons/bs'

function Header() {
    
  return (
    <header className='flex justify-between items-center h-20 mb-7 '>
        <div>

        <Link href={'/Home'} className='flex gap-2 z-10 relative'>

     <BsSpotify className='size-15 text-green-500' /> 
     <span className='text-4xl font-bold '>Music Manager</span>   

        </Link>
        <span className='text-zinc-500 ml-20 '>Manage Your Music Catalog </span> 
        </div>


        <UserButton />
        
    </header>
  )
}

export default Header