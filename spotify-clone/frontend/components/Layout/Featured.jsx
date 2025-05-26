import { PlayIcon } from 'lucide-react'
import React from 'react'

function Featured({song,n}) {
  return (
    <div key={n} className='rounded-sm overflow-hidden relative  group hover:bg-zinc-800 text-white bg-zinc-900/60 p-2 flex gap-4 justify-start items-center'>
      <img src={song.imageUrl} alt="song.title" className=' truncate size-14  rounded-l-sm  object-cover overflow-hidden'/>
      <div className='font-semibold '>{song.title} <br /><span className='text-sm text-gray-500 font-normal'>{song.artist}</span></div>

      <PlayIcon  className='absolute cursor-pointer top-6 hidden  group-hover:block right-4 text-green-600'/>

    </div>
  )
}

export default Featured