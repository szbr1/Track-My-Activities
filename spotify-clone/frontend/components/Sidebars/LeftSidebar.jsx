'use client'
import React, { useEffect } from 'react'
import { IoLibrarySharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { Button } from '../ui/button'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { BiMessageSquareDetail } from "react-icons/bi";
import { useAuth } from '@clerk/nextjs'
import PlaylistSkeleton from '../skeletons/PlaylistSkeleton';
import { ScrollArea } from '../ui/scroll-area';
import { useMusicStore } from '@/app/store/useMusicStore';
import { Dot } from 'lucide-react';

function LeftSidebar() {
    const {isSignedIn} = useAuth()
    const {isLoading, albums, fetchplaylist} = useMusicStore()

    useEffect(()=>{
        fetchplaylist()
    },[])
  return (
    <div className='bg-black h-screen w-full'>
        <div className={'bg-zinc-900 border-none  p-2 rounded-md mt-2  flex flex-col gap-1  '}>
          <Button variant={'ghost'} className={" p-0 m-0  text-white cursor-pointer  hover:bg-zinc-600"}>
         <Link className='flex justify-start px-6  w-full md:px-2 items-center text-start ' href={'/Home'}><HomeIcon /> <span className='hidden md:block'>&nbsp;Home</span>
         </Link>   
          </Button>
           { isSignedIn ? 
               <Button variant={'ghost'} className={" p-0 m-0  text-white cursor-pointer  hover:bg-zinc-600"}>
         <Link className='flex justify-start w-full px-6 md:px-2 items-center text-start ' href={'/Songs'}><BiMessageSquareDetail /><span className='hidden md:block'>&nbsp;Messages</span>
         </Link>   
        
          </Button> : null
        }


        </div>

        <div className={"bg-zinc-900 rounded-md mt-3 h-8/10 p-2"}>
          <div className='flex md:px-3  text-white justify-start items-center pb-4 md:py-0 '>
            <IoLibrarySharp className='hidden md:block' /> <span className='font-medium'>&nbsp; Playlists</span>
            <br />
            <br />
          </div>

          <ScrollArea className='h-[16rem]'>
               {
                isLoading? <PlaylistSkeleton /> : (
    albums.map((album)=>{
     return(
        <Link href={`/Home/Album/${album._id}`} className='w-full p-1 rounded-sm gap-3 text-white hover:bg-zinc-600 flex items-center ' key={album._id}>
          <img src={album.imageUrl} alt="image" className='object-cover size-14 md:size-12' />
          <div className='md:flex hidden flex-col gap-1'>
            <h2 className='text-lg font-semibold'>{album.title}</h2>     <span className='text-sm flex text-gray-300'>Album <Dot />{album.artist}</span>
            </div>
        </Link>
     )
    })
                )
               }
            </ScrollArea>
        </div>
    </div>
  )
}

export default LeftSidebar