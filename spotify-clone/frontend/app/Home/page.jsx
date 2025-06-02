"use client"
import Topbar from "../components/Topbar"
import Featured from "../components/Layout/Featured"
import MadeForYou from "../components/Layout/Made-For-You"
import { useIsAdmin } from "../store/useAuthStore"
import { useFeaturedStore } from "../store/useFeaturedStore"
import { useEffect } from "react"
import { ScrollArea } from "../components/ui/scroll-area"
import { useChatStore } from "../store/useChatStore"




function page() {
  const isAdmin = useIsAdmin()

  const {trendingSongs,featuredSongs,madeForYou,isLoading  ,fetchFeaturedSongs,fetchTrendingSongs,fetchMadeForYouSongs} = useFeaturedStore()


  useEffect(()=>{
    fetchFeaturedSongs()
    fetchMadeForYouSongs()
    fetchTrendingSongs()


  },[])


  
  return (
    <div className='h-full rounded-md overflow-hidden w-full  ' >
      <Topbar />
        
        <div className='h-full w-full '>
          <ScrollArea className='h-full '>

         <div className='bg-gradient-to-b from-zinc-950 to-zinc-800 px-5 py-2 relative z-10'>

        {/* featured songs  */}

        <div className='text-4xl text-white py-6 font-bold'>Good Afternoon</div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          { featuredSongs.map((song,index)=>{
            return(
              <Featured key={index+1} song={song} />
            )
          })}
        </div>

        {/* made for you songs  */}
          <div className='text-3xl text-white py-8 font-bold'>Made For You</div>
        <div className='flex flex-wrap gap-3  justify-center md:justify-between'>
          {
            madeForYou.map((song , index)=>{
              return(
                <MadeForYou  song={song}/>
              )
            })
          }
        </div>


        {/* trending songs  */}
        <div className='text-3xl text-white py-8 font-bold'>Trending</div>
        <div className='flex flex-wrap gap-3  justify-center md:justify-between'>
          {
            trendingSongs.map((song , index)=>{
              return(
                <MadeForYou  song={song}/>
              )
            })
          }
        </div>
        <div className='h-[8rem] relative w-full text-white'></div>
            
          </div>
          </ScrollArea>
        </div>
      </div>
  )
}

export default page