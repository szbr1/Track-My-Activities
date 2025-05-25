import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useChatboxStore = create((set)=>({
    users: [],
    isLoading: false,

    fetchUsers: async ()=>{
        try {
       set({isLoading: true})       
        const result = await axiosInstance.get('/users')
        console.log(result.data)
        set({users: result.data})
    } catch (error) {
            console.error(error)
    } finally {
        set({isLoading: false})
    }
    }
}))