'use client'
import { Button } from '@/app/components/ui/button'
import { Library } from 'lucide-react'
import { Music } from 'lucide-react'
import { Plus } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import PopAlbumLayout from './PopAlbumLayout'

function AlbumHeader() {
  const [toggleReal,setToggleReal] = useState(false)
  return (
    <div className=' h-20 w-full flex justify-between items-start'>
        <div className='flex flex-col '>
            <h3 className='flex font-semibold'><Library  className='text-blue-600'/> &nbsp; Music Library</h3>
            <span className='text-zinc-400'>Manage Your Albums</span>
        </div>

        {
        toggleReal ? null :
      <div onClick={()=>setToggleReal(!toggleReal)}>
            <Button variant={"secondary"} className={"bg-blue-400 text-black cursor-pointer"}><Plus />&nbsp; &nbsp; Add Albums</Button>
        </div>
          }
    {toggleReal ?

      <PopAlbumLayout setToggle={setToggleReal} toggle={toggleReal} /> : null
    }
    </div>
  )
}

export default AlbumHeader