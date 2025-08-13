'use client'

// Icons
import { CiChat1 } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

// React and Next.js imports
import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

// Store (Custom hook for authentication state)
import { useAuthPage } from "../store/useAuthPage";

export default function Navbar() {
  // Destructure values from your auth store
  const { authUser, logout, LiveConnection } = useAuthPage();

  
  const router = useRouter();

  return (
    <nav className='h-10 sticky top-0 left-0 z-10 mx-auto w-full px-12 bg-blue-900 flex justify-between items-center'>
      
      {/* Logo section */}
      <Link href={'/Home'} className='cursor-pointer font-bold flex'>
        <CiChat1 className="size-6" /> &nbsp; SZB CHAT
      </Link>

      {/* Right side icons */}
      <div className="flex lg:gap-10 gap-3 justify-center items-center">
        {
          authUser ? (
            <div className="flex gap-9">
              
              {/* Profile Link */}
              <Link href={'/profile'} className='flex justify-center items-center cursor-pointer'>
                <CgProfile className="size-5" />
                <span className='hidden md:block'>&nbsp;Profile</span>
              </Link>

              {/* Logout Button */}
              <div
                className='flex justify-center items-center cursor-pointer'
                onClick={() => logout(router)}
              >
                <IoIosLogOut className="size-5" />
                <span className='hidden md:block'>&nbsp;Logout</span>
              </div>
            </div>
          ) : null
        }
      </div>
    </nav>
  );
}
