'use client'
import { ScrollArea } from '@/app/components/ui/scroll-area'
import { useMusicStore } from '@/app/store/useMusicStore'
import { Trash } from 'lucide-react'
import { Calendar } from 'lucide-react'
import React from 'react'
import { BsBucket } from 'react-icons/bs'
import { FaBucket } from 'react-icons/fa6'

function GridSongsLayout() {

    const {songs, deleteSong} = useMusicStore() 
  return (
    <div className='w-full h-full flex flex-col gap-10'>
     <div className='grid grid-cols-[2fr_2fr_2fr_1fr] bg-slate-900/10 text-zinc-300'>
        <span className='ml-8'>Title</span>
        <span>Artist</span>
        <span>Release Date</span>
        <span>Actions</span>
     </div>


        <ScrollArea className={"h-[220px]"}>
     <div className='grid grid-cols-[2fr_2fr_2fr_1fr] gap-3 text-zinc-300 h-full'>

        {songs?.map(song=>{
            return <>
            <span className='flex font-bold items-center'>
                <img src={song.imageUrl} className=' truncate size-14 rounded-md' alt="song.title" />&nbsp; &nbsp;{song.title}</span>
            <span className='flex items-center'>{song.artist}</span>
            <span className='flex items-center gap-1'><Calendar  className='size-4'/>{song.createdAt.split('T')[0]}</span>
            <span onClick={()=>deleteSong(song._id)} className='flex items-center ml-1'><Trash className='text-red-500 cursor-pointer' /></span>
            </>
        })}
     </div>
        </ScrollArea>
    </div>
  )
}

export default GridSongsLayout