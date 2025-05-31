'use client'
import { useMusicStore } from '@/app/store/useMusicStore'
import { Album } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { BsPersonCheck } from 'react-icons/bs'
import { FaMicroscope, FaMusic } from 'react-icons/fa6'
import { IoLibrary } from 'react-icons/io5'

function CardButton() {

    // states from zustand 
    const {fetchStatuses,status,songs} =  useMusicStore()



    useEffect(()=>{
  
      // call states 
      fetchStatuses()
      
    },[ ])


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3'>

    <div className='bg-zinc-800 h-26 w-80 flex gap-5 px-4 justify-start items-center text-white p-2 rounded-md border border-zinc-700'>
      {/* img logo  */}
      <div className='bg-emerald-600/10 p-2 rounded-md'><FaMusic className='size-8 text-emerald-600 rounded' /></div>

      <div className='flex flex-col '>
        <span className=' text-gray-500 text-sm'>
          Total songs</span>

        <h3 className='text-3xl font-bold'>
          
        {status?.totalSongs}
          
          </h3>
      </div>
    </div>

  {/* 2.  */}

  <div className='bg-zinc-800 h-26 w-80 flex gap-5 px-4 justify-start items-center text-white p-2 rounded-md border border-zinc-700'>
      {/* img logo  */}
      <div className='bg-pink-500/50 p-2 rounded-md'><IoLibrary className='size-8 rounded text-white' /></div>

      <div className='flex flex-col '>
        <span className=' text-gray-500 text-sm'>
          Total albums</span>
 
        <h3 className='text-3xl font-bold'>
          
  {status?.totalAlbum}
          
          </h3>
      </div>
    </div>

  {/* 3.  */}

  <div className='bg-zinc-800 h-26 w-80 flex gap-5 px-4 justify-start items-center text-white p-2 rounded-md border border-zinc-700'>
      {/* img logo  */}
      <div className='bg-indigo-600/20 p-2 rounded-md'>< FaMicroscope className='size-8 rounded text-indigo-600' /></div>

      <div className='flex flex-col '>
        <span className=' text-gray-500 text-sm'>
          Total artists</span>

        <h3 className='text-3xl font-bold'>
          
        0
          </h3>
      </div>
    </div>

  {/* 4.  */}

  <div className='bg-zinc-800 h-26 w-80 flex gap-5 px-4 justify-start items-center text-white p-2 rounded-md border border-zinc-700'>
      {/* img logo  */}
      <div className='bg-orange-400/20 p-2 rounded-md'><BsPersonCheck className='size-8 rounded text-orange-500' /></div>

      <div className='flex flex-col '>
        <span className=' text-gray-500 text-sm'>
          Total users</span>

        <h3 className='text-3xl font-bold'>
          
        {status?.totalUsers}

          
          </h3>
      </div>
    </div>
  

    </div>
  )
}

export default CardButton