'use client'
import React from 'react'
import { useIsAdmin } from '../store/useAuthStore'
import Header from './components/Layout/Header'
import MainLayout from './components/Layout/MainLayout'
import Statuses from './components/Layout/Statuses'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

function page() {
  const Admin=  useIsAdmin()
  
  return (
    <div className='bg-gradient-to-b  from-zinc-800 via-zinc-950 to-black rela h-full w-full min-h-screen  mx-auto'>
      {
        Admin ? 
        <div className=' w-full  px-8 py-3 text-white'>
         {/* header  */}

         <Header />
        
        {/* Status Bar  */}
          <Statuses
          ses />

         {/* Main Layout  */}

         <MainLayout />
          

        </div> 
          
          
          
          
          :  <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-100 flex flex-col items-center justify-center px-4 text-center">
          <AlertTriangle className="text-red-500 size-20 mb-4 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Access Denied</h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-6">
            Oops! You're trying to access the <span className="text-green-500">Admin Panel</span>,
            but it seems you're not an admin. This area is for authorized personnel only.
          </p>
          <Link href="/Home">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow-lg">
              Go Back to Home
            </Button>
          </Link>
          <div className="mt-10">
            <p className="text-sm text-zinc-500">Error 404 • Not Authorized</p>
          </div>
        </div>
      }
      </div>
  )
}

export default page