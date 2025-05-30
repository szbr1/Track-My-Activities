import { Button } from '@/app/components/ui/button'
import { Music } from 'lucide-react'
import { Plus } from 'lucide-react'
import React from 'react'

function StatusHeader() {
  return (
    <div className=' h-20 w-full flex justify-between items-start'>
        <div className='flex flex-col '>
            <h3 className='flex font-semibold'><Music  className='text-green-600'/> &nbsp; Music Library</h3>
            <span className='text-zinc-400'>Manage Your Music Tracks</span>
        </div>

        <div>
            <Button variant={"secondary"} className={"bg-green-400 text-black cursor-pointer"}><Plus />&nbsp; &nbsp; Add Songs</Button>
        </div>
    </div>
  )
}

export default StatusHeader