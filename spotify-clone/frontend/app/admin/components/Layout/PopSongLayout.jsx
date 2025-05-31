import { Button } from "@/app/components/ui/button";
import { Input } from "@/components/ui/input";
import { Music } from "lucide-react";
import { Upload } from "lucide-react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { CgFolderAdd } from "react-icons/cg";
import { useMusicStore } from "@/app/store/useMusicStore";
import { AiOutlineLoading } from "react-icons/ai";





import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from "@/components/ui/select";
import { useEffect } from "react";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";


function PopSongLayout({ setToggle, toggle }) {

  const {allAlbums, fetchAlbums} = useMusicStore()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    fetchAlbums()
  },[])
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: "",
    duration: "",
  });
  const [file, setFile] = useState({
    image: null,
    audio: null,
  });


  const handleSubmit = async ()=>{
    if(!file.audio || !file.image) return;
   
    
try {
  setIsLoading(true)
    const formData = new FormData()

    formData.append("title", newSong.title)
    formData.append("artist", newSong.artist)
    formData.append("duration", newSong.duration)

    if(newSong.album && newSong.album !== "none"){
      formData.append("albumId", newSong.album)
    }
    formData.append("audioFile", file.audio)
    formData.append("imageFile", file.image)


    await  axiosInstance.post("/admins/songs" ,formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    setNewSong({
      title: "",
      artist: "",
      album: "",
      duration: "0",
    });

    setFile({
      audio: null,
      image: null,
    });
    toast.success("Song Uploaded Successfully")
  } catch (error) {
     toast.error(error?.message || "Upload failed");
     console.error(error)
  } finally{
    setIsLoading(false)

  }

  }

  const audioRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="p-4 text-white w-[25rem] bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-500 rounded-md flex flex-col gap-3">

      {/* Header of Song Pop  */}
      <div className="flex justify-between">
        <div className="font-bold text-xl">
         <div className="flex items-center"><CgFolderAdd className="text-green-500" /> &nbsp;  Add Songs </div>{" "}
          <span className="text-zinc-500 text-sm mb-3 font-normal">
            Add Everything About You.
          </span>
        </div>
        <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
       
            {" "}
            <MdCancel className="size-8 mb-4 ml-9" />{" "}
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
   
   {/* image uploader */}
      <div className="border-2 border-dashed flex flex-col gap-2 border-zinc-500 justify-center items-center p-3 rounded-md ">
        {file.image ? (
          <>
            <div className="text-yellow-300">Image Selected</div>
            <div>{file.image.name.slice(0, 20)}</div>
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


  {/* audio uploader  */}
      <div className="w-full" onClick={()=> audioRef.current.click()}>
      <Button className="w-full" variant={"secondary"}>
         {file.audio? 
                  (
                    <>
                    {file.audio.name.slice(0 ,10)}
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

   <div>
    <label>Title</label>
							
              <Input className='bg-zinc-800 border-zinc-700' onChange={(e)=>   setNewSong({...newSong, title: e.target.value}) }  />
   </div>
    <div>

   <label className='text-sm font-medium'>Duration (seconds)</label>
						<Input
							type='number'
							min='0'
							value={newSong.duration}
							onChange={(e) => setNewSong({ ...newSong, duration: e.target.value || "0" })}
							className='bg-zinc-800 border-zinc-700'
              />
  </div>
    
   <div>
    <label>Artist</label>
    <Input className='bg-zinc-800 border-zinc-700' onChange={(e)=> setNewSong({...newSong, artist: e.target.value})} />
   </div>


   <div className="h-full w-full">
   <label>Albums</label>
   <Select value={newSong.album} onValueChange={(value)=>setNewSong({...newSong, album: value}) }>
  <SelectTrigger  className="w-full">
    <SelectValue placeholder="Albums (options)" />
  </SelectTrigger>

  <SelectContent>
    <SelectGroup>
      <SelectLabel>Albums</SelectLabel> {/* Optional static label */}
      <SelectItem value='none'>No Album (Single)</SelectItem>
      {allAlbums.map((album) => (
        <SelectItem  key={album._id} value={album._id}>
          {album.title}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>

<div className="flex items-center gap-2 justify-end py-2">

<Button variant={"ghost"} className={"bg-black text-white hover:bg-red-500 cursor-pointer"} onClick={()=> setToggle(!toggle)}>Cancel</Button>
<Button variant={"outline"} className={"bg-green-500 text-black cursor-pointer"} onClick={()=> handleSubmit()}>{isLoading ? <AiOutlineLoading className="size-3 animate-spin" />: <>Submit</>}</Button>
</div>

   </div>

   

          </div>
    </div>
  );
}

export default PopSongLayout;
