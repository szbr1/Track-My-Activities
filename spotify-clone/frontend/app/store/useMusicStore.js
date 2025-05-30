import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import Statuses from "../admin/components/Layout/Statuses";

export const useMusicStore = create((set,get)=>({
    albums: [],
    songs: [],
    status: {
        totalArtists: [],
        totalAlbum: 0,
        totalSongs: 0,
        totalUsers: 0
    },
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
    },

    fetchSongs: async ()=>{
        try {
         set({isLoading:true})   
           

        const result = await  axiosInstance.get("/songs")
        console.log({AllSongs: result.data})
        set({songs: result.data})
          } catch (error) {
            console.error(error)
    }finally{
        set({isLoading: false})
    }
    },

    fetchStatuses: async ()=>{
        try {
            set({isLoading:true})
            const result = await axiosInstance.get("/status")
            console.log({Statuses: result.data})
            set({status: result.data})
        } catch (error) {
            console.error({StatusError: error})
        }finally{
            {isLoading:false}
        }
    },
    deleteSong: async (song)=>{
        try {
            set({isLoading: true})
            const result = await axiosInstance.delete(`/admins/songs/${song}`)
            console.log({DeleteSong: result.data})

        } catch (error) {
            console.error({deleteSongError: error})
        }finally{
            set({isLoading:false})
        }
    }

    

}))