'use client'
import { usePlayerStore } from '@/app/store/usePlayerStore'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function Audiosolo() {

   const {isPlaying,playNext,currentSong,currentIndex} = usePlayerStore()
   const audioManger = useRef(null)
   const prevSong  = useRef(null)
//    1. play pause 
   useEffect(()=>{
    if(!currentSong) return;
    if(isPlaying){
      audioManger.current.play()

    }else{
        audioManger.current.pause()
    }
   },[currentSong,isPlaying])
//    2.song end then play next song
useEffect(()=>{
   if(!currentSong) return;
   const handleNext = ()=>{
     playNext(currentIndex)
   }
   const audio = audioManger.current
   audio.addEventListener("ended", handleNext)
   return audio.removeEventListener("ended", handleNext)
},[playNext,currentSong])
//    3.
useEffect(()=>{
      
      const CurrentAudio = audioManger.current
      const PrevAudio = prevSong.current.audioUrl
      if(!CurrentAudio || !currentSong) return;

      if(CurrentAudio.src !== PrevAudio){
        CurrentAudio.src = currentSong.audioUrl

        prevSong.current = currentSong?.audioUrl
      }
      if(isPlaying){
        CurrentAudio.play()
      }
},[currentSong, isPlaying])


   
  return <audio ref={audioManger} />
}

export default Audiosolo