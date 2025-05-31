'use client'
import { ScrollArea } from '@/app/components/ui/scroll-area'
import { useMusicStore } from '@/app/store/useMusicStore'
import { Trash } from 'lucide-react'
import { Calendar } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'

function GridSongsLayout() {

    const {songs, deleteSong, fetchSongs} = useMusicStore()
    
    useEffect(()=>{
        fetchSongs()
    },[])
  return (
    <div className='w-full h-full  flex flex-col gap-10 '>
     <div className='grid grid-cols-[2fr_2fr_2fr_1fr]  border-b py-1 border-zinc-600 text-zinc-300'>
        <span className='ml-8'>Title</span>
        <span>Artist</span>
        <span>Release Date</span>
        <span>Actions</span>
     </div>

     

     


     <div className='grid grid-cols-[2fr_2fr_2fr_1fr] gap-3 text-zinc-300 h-full'>

        {songs?.map(song=>{
            return <React.Fragment key={song._id}>
            <span className='flex font-bold items-center'>
                <img src={song.imageUrl} className=' truncate size-14 rounded-md' alt="song.title" />&nbsp; &nbsp;{song.title}</span>
            <span className='flex items-center'>{song.artist}</span>
            <span className='flex items-center gap-1'><Calendar  className='size-4'/>{song.createdAt.split('T')[0]}</span>
            <span onClick={()=>deleteSong(song._id)} className='flex items-center ml-1'><Trash className='text-red-500 cursor-pointer' /></span>
            </React.Fragment>
        })}
     </div>
    </div>
  )
}

export default GridSongsLayout