import { Button } from '@/app/components/ui/button'
import { Input } from '@/components/ui/input'
import { axiosInstance } from '@/lib/axios'
import { Upload } from 'lucide-react'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineLoading } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'
import { MdOutlineCancel } from 'react-icons/md'

function PopAlbumLayout({ setToggle, toggle }) {

    const [newAlbum , setNewAlbum] = useState({
        artist: "",
        title: "",
    })
    const [file , setfile ] = useState({
        image: null
    })
    


        const [isLoading, setIsLoading] = useState(false)
        const [year , setYear] = useState('2024')
        const imgRef = useRef(null)

     const handleSubmit = async ()=>{
        try {
            setIsLoading(true)
            
            const formData =  new FormData()

            formData.append("artist", newAlbum.artist)
            formData.append("title", newAlbum.title)
            formData.append("releaseYear", newAlbum.title)
            formData.append("imageFile", file.image)

            await axiosInstance.post("admins/album", formData, {
                headers: {
                "Content-Type": "multipart/form-data",
                }
            })
            console.log(newAlbum , file.image)
            toast.success("Album Uploaded Successfully")

        } catch (error) {
             console.error(error)
             toast.error(error)
        } finally {
            setIsLoading(false)
        }
     }
  return (
    <div className='fixed inset-0 flex items-center  justify-center z-50 backdrop-blur-sm'>

        <div className='w-[25rem] rounded-md border-zinc-500 border bg-gradient-to-b  from-zinc-800 to-zinc-950   flex flex-col gap-3 p-4'>
        <input type="file" accept='image/*' ref={imgRef} className='hidden' onChange={(e)=> setfile({image: e.target.files?.[0]})}/>

        <div className='flex justify-between items-start'>

            <div className='flex flex-col  '>
                <h2 className='font-bold text-xl'>Add Albums</h2>
                <span className='text-sm text-zinc-500'>Create your own albums</span>
            </div>

            <MdOutlineCancel  className='size-8 cursor-pointer' onClick={()=> setToggle(!toggle)} />


        </div>

         
         <div className='w-full border-dotted border-2 border-zinc-500 text-white flex flex-col gap-2 justify-center items-center rounded-md p-3' >

        {file.image ?
        <>
        <span  className='text-lg font-bold text-yellow-400/80 '>Image Selected</span>
        <div className='font-semibold '>{file.image.name.slice(0,20)}</div>
        </>

        
        :   
        <>
        <div   >

        <Upload  className='size-12' />
        </div>
        <span className='font-bold'>Upload Files</span>
        <div className=' cursor-pointer' onClick={()=> imgRef.current.click()}>

        <Button variant={"secondary"} className=' cursor-pointer' >Choose Image</Button>
        </div>

        </>
            

        }
         </div>
         <div>

         <label> Title </label>
         <Input  className={"w-full bg-zinc-700"} onChange={e=> setNewAlbum({...newAlbum, title: e.target.value})}  />
         </div>
<div>
         <label>Artist</label>
         <Input onChange={(e)=> setNewAlbum({...newAlbum, artist: e.target.value})} className={"w-full bg-zinc-700"}  />
</div>
   

        <div>
         <label>Artist</label>
         <Input type={"number"} value={year} onChange={(e)=> setYear({...year, year: e.target.value})} className={"w-full bg-zinc-700"}  />
</div>

        <div className='flex justify-end items-center gap-2'>
            <Button variant={"ghost"} className={"bg-black text-white hover:bg-red-500 cursor-pointer"} onClick={()=> setToggle(!toggle)}>Cancel</Button>
            <Button variant={"outline"} className={"bg-green-500 text-black cursor-pointer"} onClick={()=> handleSubmit()}>{isLoading ? <AiOutlineLoading className="size-3 animate-spin" />: <>Submit</>}</Button>
        </div>


        </div>
    </div>
  )
}

export default PopAlbumLayout