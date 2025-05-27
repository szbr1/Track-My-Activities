import React from 'react'
import { usePlayerStore } from '../store/usePlayerStore'
import { PauseIcon, PlayIcon } from 'lucide-react'

function NewButton({song}) {

       const {isPlaying, setcurrentSong, currentSong, togglePlay} = usePlayerStore()
        
        const setSongDetails = (s)=>{
          const isSongPlaying = s?._id === currentSong?._id 
          if(isSongPlaying) togglePlay()
            else setcurrentSong(s)
        }
  return (
    <div className='absolute right-2 top-35'><div  onClick={()=>setSongDetails(song) }>
    { isPlaying && song?._id === currentSong?._id ?<PauseIcon  className='absolute bg-white p-1 size-9 rounded-md cursor-pointer top-6  right-4 text-green-600 '/>:      <PlayIcon  className='absolute bg-white p-1 size-9 rounded-md cursor-pointer top-6  right-4 text-green-600 hidden group-hover:block'/>  }

    </div></div>
  )
}

export default NewButton