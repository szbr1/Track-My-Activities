import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import Statuses from "../admin/components/Layout/Statuses";

export const useMusicStore = create((set,get)=>({
    albums: [],
    songs: [],
    allAlbums: [],
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
    deleteSong: async (songId) => {
        try {
          set({ isLoading: true });
          await axiosInstance.delete(`/admins/songs/${songId}`);
          
          // After deletion, refetch updated list
          const result = await axiosInstance.get("/songs");
          const statuse = await axiosInstance.get("/status")

          set({ songs: result.data, status: statuse.data });
      
        } catch (error) {
          console.error({ deleteSongError: error });
        } finally {
          set({ isLoading: false });
        }
    },
    fetchAlbums: async ()=>{
        try {
         set({isLoading:true})   
           

        const result = await  axiosInstance.get("/albums")
        console.log({allAlbums: result.data})
        set({allAlbums: result.data})
          } catch (error) {
            console.error("AllAlbumError",error)
    }finally{
        set({isLoading: false})
    }
    },
    deleteAlbum : async (id) => {
        try {
          set({ isLoading: true });
          await axiosInstance.delete(`/admins/album/${id}`);
          
          // After deletion, refetch updated list
          const result = await axiosInstance.get("/albums");
          const songsResult = await axiosInstance.get("/songs");
          const statuse = await axiosInstance.get("/status")

          set({ allAlbums: result.data, status: statuse.data, songs: songsResult });
      
        } catch (error) {
          console.error({ deleteSongError: error });
        } finally {
          set({ isLoading: false });
        }
    },

    
      

    

}))