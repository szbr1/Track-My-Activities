import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useMusicStore = create((set,get)=>({
    albums: [],
    songs: [],
    isLoading: false,
    isPlaylistLoading: false,

    AlbumResult: null,

    fetchplaylist: async()=>{
        try {
            set({isLoading: true})
            const result =await axiosInstance.get('/albums')
            set({albums: result.data})

        } catch (error) {
            console.error
        }finally{
            set({isLoading: false})
        }
    },

    fetchDataPlaylist: async(playlistId)=>{
    try {
        set({isPlaylistLoading: true})
        const result = await axiosInstance.get(`/albums/${playlistId}`)
        set({AlbumResult: result.data})
        
    } catch (error) {
        console.error(error)
    }finally{
        set({isPlaylistLoading: false})
    }
    }
}))