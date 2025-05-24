import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useMusicStore = create((set)=>({
    albums: [],
    songs: [],
    isLoading: false,
    isPlaylistLoading: false,

    AlbumResult: [],

    fetchplaylist: async()=>{
        try {
            set({isLoading: true})
            const result =await axiosInstance.get('/albums')
            console.log(result.data)
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
        console.log(result.data)
        set({AlbumResult: result.data})
    } catch (error) {
        console.error(error)
    }finally{
        set({isPlaylistLoading: false})
    }
    }
}))