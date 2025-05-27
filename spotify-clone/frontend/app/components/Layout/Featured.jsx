import { usePlayerStore } from '@/app/store/usePlayerStore'
import { PauseIcon, PlayIcon } from 'lucide-react'
import React from 'react'


function Featured({song,n}) {

    const {isPlaying, setcurrentSong, currentSong, togglePlay} = usePlayerStore()
    
    const setSongDetails = (s)=>{
      const isSongPlaying = s?._id === currentSong?._id 
      if(isSongPlaying) togglePlay()
        else setcurrentSong(s)
    }

     
  
  return (
    
    <div key={n}  className='rounded-sm overflow-hidden relative  group hover:bg-zinc-800 text-white bg-zinc-900/60 p-2 flex gap-4 justify-start items-center'>
      <img draggable="false" src={song.imageUrl} alt="song.title" className=' truncate size-14  rounded-l-sm  object-cover overflow-hidden'/>
      <div className='font-semibold '>{song.title} <br /><span className='text-sm text-gray-500 font-normal'>{song.artist}</span></div>
<div  onClick={()=>setSongDetails(song) }>
      { isPlaying && song?._id === currentSong?._id ?<PauseIcon  className='absolute bg-white p-1 size-9 rounded-md cursor-pointer top-6  right-4 text-green-600'/>:      <PlayIcon  className='absolute bg-white p-1 size-9 rounded-md cursor-pointer top-6 hidden  group-hover:block right-4 text-green-600'/>  }

      </div>

    </div>
  )
}

export default Featured