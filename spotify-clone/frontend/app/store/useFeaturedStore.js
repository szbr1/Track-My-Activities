import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useFeaturedStore = create((set)=>({
    trendingSongs: [],
    featuredSongs: [],
    trending: [],
    madeForYou: [],
    isLoading: false,


    //functions 
    fetchFeaturedSongs: async()=>{
        try {
            set({isLoading: true})
            const result = await axiosInstance.get("/songs/featured")
            console.log("FEATURED",result.data)
            set({featuredSongs:result.data})
        } catch (error) {
            console.error(error)
        }finally{
            set({isLoading: false})
        }
    },
    fetchTrendingSongs: async()=>{
        try {
            set({isLoading: true})
            const result = await axiosInstance.get("/songs/trending")
            console.log("TRENDING",result.data)
            set({trendingSongs:result.data})
        } catch (error) {
            console.error(error)
        }finally{
            set({isLoading: false})
        }
    },
    fetchMadeForYouSongs: async()=>{
        try {
            set({isLoading: true})
            const result = await axiosInstance.get("/songs/made-for-you")
            console.log("MADE FOR YOU",result.data)
            set({madeForYou:result.data})
        } catch (error) {
            console.error(error)
        }finally{
            set({isLoading: false})
        }
    },
}))