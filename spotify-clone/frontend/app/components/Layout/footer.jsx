import { usePlayerStore } from '@/app/store/usePlayerStore'
import React, { useEffect, useRef, useState } from 'react'

function Footer() {

  const {currentSong, isPlaying, playNext, playPrev,togglePlay} = usePlayerStore();
  const [duration, setDuration]  = useState(0)
  const [volume , setVolume] = useState(0)
  const [currentTime,setCurrentTime] = useState(0)


  const audioRef = useRef(null)

  audioRef.current = document.querySelector("audio")
  const audio = audioRef.current

  useEffect(()=>{
    //functions 
    const updateDuration = ()=>{
      setCurrentTime(audio.currentTime)
    }

    const Duration = ()=>{
      setDuration(currentSong.duration)
    }

    const SongEnded = ()=>{
      usePlayerStore.setState({isPlaying: false})
    }
    
    audio?.addEventListener("timeupdate", updateDuration)
    audio?.addEventListener("loadedmetadata", Duration)
    audio?.addEventListener("ended", SongEnded)

    return ()=>{
    audio?.removeEventListener("timeupdate", updateDuration)
    audio?.removeEventListener("loadedmetadata", Duration)
    audio?.removeEventListener("ended", SongEnded)
    }
  },[currentSong])


  return (
    <div className='text-green-600'>footer</div>
  )
}

export default Footer