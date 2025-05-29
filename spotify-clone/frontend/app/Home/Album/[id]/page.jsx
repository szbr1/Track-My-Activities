"use client";

import { ScrollArea } from "../../../components/ui/scroll-area";
import { useMusicStore } from "../../../store/useMusicStore";
import { usePlayerStore } from "../../../store/usePlayerStore";
import { Play } from "lucide-react";
import { Clock } from "lucide-react";
import { DotIcon } from "lucide-react";
import React, { useEffect } from "react";
import { CiMusicNote1 } from "react-icons/ci";
import { IoIosPause } from "react-icons/io";

export const ConVersion = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remaningSeconds = seconds % 60;
  return `${minutes}:${remaningSeconds.toString().padStart(2, "0")}`;
};


function page({ params }) {
  const { id } = React.use(params);
  const { AlbumResult, fetchDataPlaylist } = useMusicStore();
  const {isPlaying, currentSong, PlayAlbum,togglePlay} = usePlayerStore();


  useEffect(() => {
    fetchDataPlaylist(id);
  }, [AlbumResult]);

  const handlePlayMusic = (index)=>{
    if(!AlbumResult.songs) return;
    PlayAlbum(AlbumResult.songs, index)
  }
   
  const AlbumPlay = ()=>{
// if(!AlbumResult.songs) return;
    const checkSongAuth = AlbumResult?.songs.some((song)=> song?._id === currentSong?._id) 
    if(checkSongAuth) togglePlay()
    else PlayAlbum(AlbumResult.songs, 0)
  }

  

  return (
    <div className="h-full relative w-full bg-zinc-900 text-white md:p-3 lg:p-5 rounded-md overflow-hidden" >

      {/* Gradiant  */}
      <div className=" absolute inset-0  h-3/6 bg-gradient-to-b from-violet-700/80  to-zinc-900/70  "></div>
      {/* -- */}

      {AlbumResult ? (
        <div className="flex flex-col gap-3 flex-wrap text-white w-full">
          <div className="relative flex p-3 md:p-0 flex-wrap gap-4 lg:gap-8 z-20">
            <img
              src={AlbumResult.imageUrl}
              alt="Album Image"
              className="size-60 rounded-sm"
            />
            <div className=" flex flex-col gap-2 lg:gap-4 mt-5">
              <span className="text-md font-medium">Album</span>
              <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold">{AlbumResult.title}</h1>
              <div className="flex gap-3 items-center">
                <span>{AlbumResult.artist}</span>{" "}
                <span className="flex items-center">
                  <DotIcon /> {AlbumResult.songs.length}&nbsp;songs
                </span>{" "}
                <span className="flex items-center">
                  <DotIcon /> {AlbumResult.releaseYear}
                </span>{" "}
              </div>
            </div>
          </div>
             
          <div onClick={()=>AlbumPlay()} className="size-14 md:size-14 lg:size-14 hover:size-15 hover:cursor-pointer  mt-3 lg:mt-5 p-5 rounded-full bg-green-700 hover:bg-green-400 relative ml-5 z-20 flex justify-center items-center">
            {isPlaying && AlbumResult.songs.some(song=> song?._id === currentSong?._id)?
            <IoIosPause className="size-5 text-black" />  
            :  <Play className="size-5 text-black" />}

          </div>
          {/* songs  */}

          <div className="w-full gap- 5 border-b border-zinc-600  grid lg:grid-cols-[16px_1fr_150px_80px] p-3 gap-x-8 grid-cols-[5px_1fr_200px_80px] relative z-20 md:px-14">
            <div>#</div> <div>Title</div> <div className="ml-24 md:ml-0  truncate">Release Date</div>{" "}
            <Clock className="size-4 mt-1 hidden md:block" />
          </div>

          <ScrollArea className={`h-[13rem]  `}>
            {AlbumResult.songs.map((song, index) => {

              const isThisSongPlaying = song._id === currentSong?._id
              return (
                <div onClick={ ()=>handlePlayMusic(index)} className="w-full hover:bg-zinc-700/50  rounded-sm  overflow-hidden cursor-pointer p-3 group gap-x-8 md:px-14 items-center  grid lg:grid-cols-[16px_1fr_150px_80px] grid-cols-[5px_1fr_150px_80px]   relative z-20" key={index+1}>
                  {
                  isThisSongPlaying ? <CiMusicNote1  className="text-green-500 "/> : (
                    <>
                      <div className="group-hover:hidden">{index + 1}</div>
                      <div className="hidden group-hover:block">
                        <Play className="size-4" />
                      </div>
                    </>
                  )
                  }

                  <div className="flex items-center">
                    <img src={song.imageUrl} className="size-12 mr-2" alt="" />{" "}
                    <div className="flex flex-col ">
                      <span className=" truncate">{song.title}</span>{" "}
                      <span className="text-gray-400 truncate">{song.artist}</span>
                    </div>
                  </div>
                  <div className="ml-8 md:ml-5   lg:ml-0">{song.createdAt.split("T")[0]}</div>
                  <div className="hidden md:block">{ConVersion(song.duration)}</div>
                </div>
              );
            })}
          </ScrollArea>
        </div>
      ) : null}
    </div>
  );
}

export default page;
