'use client'
import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineDashboard } from "react-icons/md";
import { SignInButton, SignOutButton, useSignIn } from '@clerk/nextjs';
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoogleSignIn from './buttons/googleSignIn';
import { Button } from './ui/button';


function Navbar() {
    const admin = true

  
  return (
    <nav className='h-12 w-full p-1 bg-zinc-800 flex justify-between px-4'>
        {/* logo  */}
        <div className='text-xl flex justify-center items-center text-white'>
           <FaSpotify className='size-6 text-green-500' /> &nbsp;Spotify
        </div>
        {
            admin ? <Button variant={'ghost'}  className='ml-96 hover:text-black py-1 cursor-pointer rouded-md px-4 flex justify-center items-center bg-slate-600'>
                 <MdOutlineDashboard className='size-5  text-white'/> Dashboared
            </Button> : null
        }
        <SignedOut>
            <SignInButton>
                <GoogleSignIn />
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <SignOutButton>
                <Button variant={'outline'} className='cursor-pointer text-white rounded-md bg-slate-400/10'>Sign Out</Button>
            </SignOutButton>
        </SignedIn>

    </nav>
  )
}

export default Navbar