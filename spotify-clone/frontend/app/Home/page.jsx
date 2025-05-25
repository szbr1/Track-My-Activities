"use client"
import Topbar from '@/components/Navbar'
import React from 'react'
import { useFeaturedStore } from '../store/useFeaturedStore'

function page() {
  const {trendingSongs,featuredSongs,madeForYou,isLoading  ,fetchFeaturedSongs,fetchTrendingSongs,fetchMadeForYouSongs} = useFeaturedStore()
  return (
    <div><Topbar /></div>
  )
}

export default page