import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useChatboxStore = create((set)=>({
    users: [],
    isLoading: false,
    userOnline: false,
    isConnected: false,
    



    fetchUsers: async ()=>{
        try {
       set({isLoading: true})       
        const result = await axiosInstance.get('/users')
        set({users: result.data})
    } catch (error) {
            console.error(error)
    } finally {
        set({isLoading: false})
    }
    }




}))