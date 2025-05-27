'use client'
import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineDashboard } from "react-icons/md";
import { SignInButton, SignOutButton, useAuth, UserButton, useSignIn } from '@clerk/nextjs';
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoogleSignIn from './buttons/googleSignIn';
import Link from 'next/link';
import { useIsAdmin } from '../store/useAuthStore';


function Topbar() {
    const admin = useIsAdmin()
    const {userId } = useAuth()

  
  return (
    <nav className='h-12 w-full rounded-md relative p-1 bg-zinc-800 flex justify-between px-4'>
        {/* logo  */}
        <Link href={'/Home'} className='text-xl flex cursor-pointer justify-center items-center text-white'>
           <FaSpotify className='size-6 text-green-500' /> &nbsp;Spotify
        </Link>
        {
            admin && userId ? <Link href={'/Home/admin'}  className='ml-96 absolute right-[14%]  top-2 bg-black py-1 cursor-pointer rouded-md px-4 flex justify-center items-center text-white'>
                 <MdOutlineDashboard className='size-5  text-white'/> Dashboared
            </Link> : null
        }
        <div className=' absolute right-4 top-[6px]'>
            
        <SignedOut>
            <SignInButton>
                <GoogleSignIn />
            </SignInButton>
        </SignedOut>
        </div>

            <UserButton />
         
  

    </nav>
  )
}

export default Topbar