import { Button } from '@/app/components/ui/button'
import { Library } from 'lucide-react'
import { Music } from 'lucide-react'
import { Plus } from 'lucide-react'
import React from 'react'

function AlbumHeader() {
  return (
    <div className=' h-20 w-full flex justify-between items-start'>
        <div className='flex flex-col '>
            <h3 className='flex font-semibold'><Library  className='text-blue-600'/> &nbsp; Music Library</h3>
            <span className='text-zinc-400'>Manage Your Albums</span>
        </div>

        <div>
            <Button variant={"secondary"} className={"bg-blue-600 text-white hover:bg-black cursor-pointer"}><Plus />&nbsp; &nbsp; Add Songs</Button>
        </div>
    </div>
  )
}

export default AlbumHeader