import { Card, CardContent } from '@/app/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Album } from 'lucide-react'
import { Music } from 'lucide-react'
import React from 'react'
import StatusHeader from './StatusHeader'
import GridSongsLayout from './GridSongsLayout'
import AlbumHeader from './AlbumHeader'
import GridAlbumLayout from './GridAlbumLayout'

function MainLayout() {
  return (
    <div className='h-full w-full my-3 py-3 '>
  <Tabs defaultValue="songs" className="space-y-3">
  <TabsList className={" bg-zinc-800  "}>
    <TabsTrigger value="songs" className={"cursor-pointer data-[state=active]:bg-zinc-400 data-[state=active]:text-black text-white"}><Music className='size-4 ' />songs</TabsTrigger>
    <TabsTrigger value="albums" className={"cursor-pointer  data-[state=active]:bg-zinc-400 data-[state=active]:text-black text-white"} ><Album className='size-4'  />albums</TabsTrigger>
  </TabsList>


  <TabsContent value='songs'>

    <Card className={"bg-zinc-800 text-white border border-zinc-600"} >
        
    <CardContent >
      {/* Header of Songs  */}
        <StatusHeader />

      {/* Grid Details  */}
      <GridSongsLayout />
        

         

    </CardContent>
    
    </Card>
 </TabsContent>




  <TabsContent value='albums'>
  <Card className={"bg-zinc-800 text-white"} >
    <CardContent >
      <AlbumHeader />
      <GridAlbumLayout />
    </CardContent>
    </Card>
  </TabsContent>

  
</Tabs>

    </div>
  )
}

export default MainLayout