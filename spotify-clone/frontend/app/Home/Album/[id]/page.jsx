"use client";
import { useMusicStore } from "@/app/store/useMusicStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Play } from "lucide-react";
import { Clock } from "lucide-react";
import { DotIcon } from "lucide-react";
import React, { useEffect } from "react";

function page({ params }) {
  const { id } = React.use(params);
  const { AlbumResult, fetchDataPlaylist } = useMusicStore();

  useEffect(() => {
    fetchDataPlaylist(id);
  }, [AlbumResult]);

  const ConVersion = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remaningSeconds = seconds % 60;
    return `${minutes}:${remaningSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-screen relative w-full bg-zinc-900 text-white p-5 rounded-md overflow-hidden" >
      {/* Gradiant  */}
      <div className=" absolute inset-0  h-3/6 bg-gradient-to-b from-violet-700/80  to-zinc-900/70  "></div>
      {/* -- */}

      {AlbumResult ? (
        <div className="flex flex-col gap-3 flex-wrap text-white w-full">
          <div className="relative flex  gap-8 z-20">
            <img
              src={AlbumResult.imageUrl}
              alt="Album Image"
              className="size-60 rounded-sm"
            />
            <div className=" flex flex-col gap-4 mt-5">
              <span className="text-md font-medium">Album</span>
              <h1 className="text-7xl font-bold">{AlbumResult.title}</h1>
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

          <div className="h-20 w-20  mt-5 p-5 rounded-full bg-green-700 hover:bg-green-500 relative z-20 flex justify-center items-center">
            <Play className="size-7 text-black" />
          </div>
          {/* songs  */}

          <div className="w-full gap-8 md:px-14 bg-slate-500  grid grid-cols-[16px_1fr_150px_80px] relative z-20">
            <div>#</div> <div>Title</div> <div>Release Date</div>{" "}
            <Clock className="size-4 mt-1" />
          </div>

          <ScrollArea className={"h-[18rem] "}>
            {AlbumResult.songs.map((song, index) => {
              return (
                <div className="w-full hover:bg-slate-300 rounded-b-sm  hover:text-black overflow-hidden cursor-pointer p-3 group gap-x-8 md:px-14 items-center  grid grid-cols-[16px_1fr_150px_80px] relative z-20" key={index+1}>
                  <div className="group-hover:hidden">{index + 1}</div>
                  <div className="hidden group-hover:block">
                    <Play className="size-3" />
                  </div>
                  <div className="flex items-center">
                    <img src={song.imageUrl} className="size-12 mr-2" alt="" />{" "}
                    <div className="flex flex-col ">
                      <span>{song.title}</span>{" "}
                      <span className="text-gray-400">{song.artist}</span>
                    </div>
                  </div>
                  <div>{song.createdAt.split("T")[0]}</div>
                  <div>{ConVersion(song.duration)}</div>
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
