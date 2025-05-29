import { usePlayerStore } from "@/app/store/usePlayerStore";
import React, { useEffect, useRef, useState } from "react";
import { FaLaptop, FaPause, FaPlay } from "react-icons/fa6";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { TfiLoop } from "react-icons/tfi";
import { TiArrowShuffle } from "react-icons/ti";
import { Slider } from "../ui/slider";
import { GiMicrophone } from "react-icons/gi";
import { MdVolumeUp } from "react-icons/md";
import { Button } from "../ui/button";

const formatTime = (seconds) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

function Footer() {
  const { currentSong, isPlaying, playNext, playPrev, togglePlay } =
    usePlayerStore();
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = document.querySelector("audio");
    const audio = audioRef.current;

    if (!audio) return;

    //functions
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const songEnded = () => {
      usePlayerStore.setState({ isPlaying: false });
    };

    audio?.addEventListener("timeupdate", updateTime);
    audio?.addEventListener("loadedmetadata", updateDuration);
    audio?.addEventListener("ended", songEnded);

    return () => {
      audio?.removeEventListener("timeupdate", updateDuration);
      audio?.removeEventListener("loadedmetadata", updateDuration);
      audio?.removeEventListener("ended", songEnded);
    };
  }, [currentSong]);

  const handleSeek = (value) => {
    if (audioRef.current) {
		console.log("log Available")
      audioRef.current.currentTime = value[0];
    }
  };

  return (
    <footer className=" rounded-md  flex mx-auto w-full px-14 justify-between text-white items-center h-24 bg-zinc-800 border-t border-zinc-700">
      {currentSong ? (
        <div className="flex gap-4 items-center justify-center">
          <img
            src={currentSong.imageUrl}
            className="size-15 rounded-sm truncate "
            alt={currentSong.title}
          />
          <div className=" flex flex-col ">
            <h2 className="text-white font-semibold">{currentSong.title}</h2>
            <span className="text-zinc-500 text-sm">{currentSong.artist}</span>
          </div>
        </div>
      ) : null}

      <div className="flex flex-col ">
        <div className="flex justify-between items-center gap-7 text-2xl text-zinc-500">
  <Button className="cursor-no-drop" variant={"ghost"}>
        <TiArrowShuffle className="cursor-no-drop" />	</Button>  
          <div className=" flex justify-between gap-5 items-center">
			<Button className="cursor-pointer" variant={"ghost"}>

            <IoPlaySkipBackSharp
              className="cursor-pointer"
              onClick={playPrev}
			  />
			  </Button>
            <div
              className="cursor-pointer"
              onClick={currentSong ? togglePlay : null}
            >
				<Button className="cursor-pointer" variant={"ghost"}>

              {isPlaying ? <FaPause /> : <FaPlay />}
				</Button>
            </div>
             <Button className="cursor-pointer" variant={"ghost"}>

            <IoPlaySkipForward className="cursor-pointer" onClick={playNext} />
			 </Button>
          </div>
		  <Button className="cursor-no-drop" variant={"ghost"}>

          <TfiLoop className="cursor-no-drop" />
		  </Button>
        </div>

        <div className="w-[30rem] mt-3 flex justify-center items-center gap-4">
          <div>{formatTime(currentTime)}</div>{" "}
          <Slider
            value={[currentTime]}
            
            max={duration}
            step={1}
			onValueChange={handleSeek}
          />
          <div>{formatTime(duration)}</div>
        </div>
      </div>
      <div className="text-green-500 flex gap-4 justify-center items-center">
		<Button className="cursor-pointer" variant={"ghost"}>

        <GiMicrophone className="cursor-pointer hover:text-white size-4" />
		</Button>
		<Button className="cursor-pointer" variant={"ghost"}>

        <FaLaptop className="cursor-pointer hover:text-white size-4" />
		</Button>
        <div className="w-36 flex justify-center items-center gap-2">
			<Button className="cursor-pointer" variant={"ghost"}>

          <MdVolumeUp onClick={()=> setVolume(0)} className="cursor-pointer hover:text-white size-4" />
			</Button>
          <Slider
            className={"cursor-pointer"}
            value={[volume]}
            max={100}
            step={1}
			onValueChange={(value) => {
				setVolume(value[0]);
				if (audioRef.current) {
					audioRef.current.volume = value[0] / 100;
				}}}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
