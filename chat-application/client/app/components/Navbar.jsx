'use client'
import { CiChat1 } from "react-icons/ci";
import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { useAuthPage } from "../store/useAuthPage";

import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Navbar() {
    const {authUser , logout} = useAuthPage()
    
    const router = useRouter()
  return (
    <nav  className='h-10 sticky top-0 left-0 z-10 mx-auto w-full px-12 bg-blue-900 flex justify-between items-center'>
      {/* //logo */}
      <Link href={'/Home'} className='cursor-pointer font-bold  flex'>

       <CiChat1 className="size-6" /> &nbsp; SZB CHAT
      </Link>

      {/* // icons */}
      <div className="flex lg:gap-10 gap-3 justify-center items-center">
        
       {
        authUser ?
        <div className="flex gap-9">
        

            <Link href={'/profile'} className=' flex justify-center items-center cursor-pointer'>
            <CgProfile className="size-5" /><span className='hidden md:block'>&nbsp;Profile</span>
            </Link>

            <div className=' flex justify-center items-center cursor-pointer' onClick={()=> logout(router)}>
            <IoIosLogOut className="size-5" /><span className='hidden md:block'>&nbsp;Logout</span>
            </div>
          </div>
            
        : null
       }
      </div>
    </nav>
  )
}
