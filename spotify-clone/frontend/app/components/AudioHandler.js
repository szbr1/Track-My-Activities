"use client";
import { usePlayerStore } from "@/app/store/usePlayerStore";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Audiosolo() {
  const { isPlaying, playNext, currentSong, currentIndex } = usePlayerStore();
  const audioRef = useRef(null);
  const prevRef = useRef(null);

  //    1. play pause

      useEffect(()=>{
        if(isPlaying)audioRef.current?.play();
        else audioRef.current?.pause()
      },[isPlaying])


  //    2.on ending play next song

    useEffect(()=>{
      const audio = audioRef.current;


      const handleNext = ()=>{
        playNext()
      }
      audio?.addEventListener("ended",handleNext)
      return ()=> audio?.removeEventListener("ended",handleNext)
    },[playNext])


//    3. this will changeThe Song;
  useEffect(()=>{
    if(!audioRef.current || !currentSong) return;
     const audio = audioRef.current
    try {
      const compare = prevRef.current !== currentSong.audioUrl
      if(compare){
        audio.src = currentSong.audioUrl 
        audio.currentTime = 0
        prevRef.current = currentSong.audioUrl
        if(isPlaying) audio.play()
      }
    } catch (error) {
      console.error({ThirdErrorCrash: error})
    }
  },[currentSong,isPlaying])

  return <audio ref={audioRef} />;
}

export default Audiosolo;
