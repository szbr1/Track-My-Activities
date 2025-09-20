import toast from 'react-hot-toast';
import { roomAxios, userAxios } from './../../lib/axios';
import { create } from "zustand";



interface AppInstanceProps {
    signedIn: boolean,
    InsideRoom: boolean,
    RoomDetails: {
        roomId?: string,
        roomUsers?: [{_id: string, username:string}]
        _id?: string
    },
    signup: (formData: object) => void,
    signin: (formData: object) => void,
    roomIn: (formData: object) => void,
    roomUp: (formData: object) => void,
    getRoom: ()=> void;
    

}


export const useAppManager = create<AppInstanceProps>((set,get)=>({
    signedIn: false,
    InsideRoom: false,
    RoomDetails: {},
    signup: async(formData)=>{
        try {
            const result = await userAxios.post("/new-user",formData)
            console.log(result.data)
            toast.success("Welcome ")
            set({signedIn: true})
           console.log( get().signedIn)
            
        } catch (error) {
            console.error(error)
            toast.error("Please Try again later")
            set({signedIn: false})
        }
    },
    signin: async(formData)=>{
        try {
            const result = await userAxios.post("/user-verify",formData)
            console.log(result.data)
            toast.success("You logged in successfully")
            set({signedIn: true})

        } catch (error) {
            console.error(error)
            toast.error("try agian later")
            set({signedIn: false})
        }
    },
    roomIn: async (formData)=>{
       try {
        const result = await roomAxios.post("/verify-roomId",formData)
        console.log(result.data)
        toast.success("You logged in successfully")
        set({InsideRoom: true})
       } catch (error) {
        console.error(error)
        toast.error("try agian later")
        set({InsideRoom: false})
       }
    },
    roomUp: async (formData)=>{
        try {
            console.log("o99trigger", formData)
         const result = await roomAxios.post("/new-roomId",formData)
         console.log(result.data)
         toast.success("You Joined in successfully")
         set({InsideRoom: true})
    } catch (error) {
         console.error(error)
         toast.error("try agian later")
         set({InsideRoom: false})
    }
    },
    getRoom: async ()=>{
        try {
            const result = await roomAxios.get("/fetch-room");
            console.log(result.data)
            set({RoomDetails: result.data})
        } catch (error) {
            toast.error("data fetching error")
            console.error(error)
        }
        
    }
}))