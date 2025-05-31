import { Button } from "@/app/components/ui/button";
import { Music } from "lucide-react";
import { Upload } from "lucide-react";
import { Cross } from "lucide-react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { BiCross } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { MdCancel } from "react-icons/md";

function PopSongLayout({ setToggle, toggle }) {
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    albumId: undefined,
    duration: "",
  });
  const [file, setFile] = useState({
    image: null,
    audio: null,
  });

  const audioRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <div className="h-[30rem]  p-2 text-white w-[23rem] bg-gradient-to-b from-zinc-800 from to-zinc-950 border border-zinc-500 absolute top-1/5 right-1/2 rounded-md transform translate-x-1/2">
      {/* Header of Song Pop  */}
      <div className="flex justify-between">
        <div className="font-bold text-xl">
          Custom Songs <br />{" "}
          <span className="text-zinc-500 text-sm mb-3 font-normal">
            Add Everything About You.
          </span>
        </div>
        <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
          <Button
            variant={"ghost"}
            className={"hover:bg-zinc-700/20 hover:text-white"}
          >
            {" "}
            <MdCancel className="size-8" />{" "}
          </Button>
        </div>
      </div>

      {/* main  */}

      {/* audio file selection input  */}
      <input
        type="file"
        accept="audio/*"
        className="hidden"
        ref={audioRef}
        onChange={(e) =>
          setFile((prev) => ({ ...prev, audio: e.target.files?.[0] }))
        }
      />

      {/* image file selection input  */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={imgRef}
        onChange={(e) =>
          setFile((prev) => ({ ...prev, image: e.target.files?.[0] }))
        }
      />

      <div className="border-2 border-dashed flex flex-col gap-2 border-zinc-500 justify-center items-center p-3 rounded-md ">
        {file.image ? (
          <>
            <div className="text-yellow-300">Image Selected</div>
            <div>{file.image.name.split(0, 20)}</div>
          </>
        ) : (
          <>
            <Upload className="size-12" />
            Upload Files
            <div onClick={(e) => imgRef.current.click()}>
              <Button
                variant={"outline"}
                className={
                  "text-black hover:text-gray-500 hover:bg-slate-900 cursor-pointer"
                }
              >
                Choose Image
              </Button>
            </div>
          </>
        )}
      </div>

      <div className="w-full" onClick={()=> audioRef.current.click()}>
      <Button className="w-full" variant={"secondary"}>
         {file.audio? 
                  (
                    <>
                    {file.audio.name.split(0 ,10)}
                    </>
                  )
                  :
                  (
                    <>
                  <Music className="text-green-500"/>  Select Audio 
                    </>
                  )
         }
      </Button>
     </div>
    </div>
  );
}

export default PopSongLayout;
