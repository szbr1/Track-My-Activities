'use client'
import React from 'react'
import { useIsAdmin } from '../store/useAuthStore'
import Header from './components/Layout/Header'
import MainLayout from './components/Layout/MainLayout'
import Statuses from './components/Layout/Statuses'

function page() {
  const Admin=  useIsAdmin()
  
  return (
    <div className='max-h-screen overflow-hidden'>
      {
        Admin ? 
        <div className='h-screen w-full bg-gradient-to-b from-zinc-800 via-zinc-950 to-black mx-auto px-8 py-3 text-white'>
         {/* header  */}

         <Header />
        
        {/* Status Bar  */}
          <Statuses
          ses />

         {/* Main Layout  */}

         <MainLayout />
          

        </div> 
          
          
          
          
          : <div>Unauthorized</div>
      }
      </div>
  )
}

export default page