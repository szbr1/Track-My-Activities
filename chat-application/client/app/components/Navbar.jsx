'use client'
import { CiChat1 } from "react-icons/ci";
import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuthPage } from "../store/useAuthPage";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const {authUser , logout} = useAuthPage()
    const router = useRouter()
  return (
    <nav  className='h-10 z-10 mx-auto w-full px-12 bg-blue-900 flex justify-between items-center'>
      {/* //logo */}
      <Link href={'/Home'} className='cursor-pointer font-bold  flex'>

       <CiChat1 className="size-6" /> &nbsp; SZB CHAT
      </Link>

      {/* // icons */}
      <div className="flex lg:gap-10 gap-3 justify-center items-center">
        <div className='flex justify-center items-center cursor-pointer'>
            <IoSettingsOutline className="size-5 z-20" /> 
            <span className='hidden md:inline-block'> &nbsp;Settings</span>
            </div>
       {
        authUser ?
        <div className=' flex justify-center items-center cursor-pointer' onClick={()=> logout(router)}>
            <IoIosLogOut className="size-5" /><span className='hidden md:block'>&nbsp;Logout</span>
            </div>
        : null
       }
      </div>
    </nav>
  )
}
