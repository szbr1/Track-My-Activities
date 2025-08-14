
import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";
import {io} from "socket.io-client"
import { persist } from "zustand/middleware";


export const useAuthPage = create(persist(
    (set,get)=>({
    authUser: {},
    SigningIn: false,
    SigningUp: false,
    isUpdatingProfile: false,
    socket: null,
    onlineUsers: [],
    Authenticating: false,

    checkAuth: async(data,router)=>{
        try {
            set({Authenticating: true})
            const result=await axiosInstance.post("/signup", data)
            set({authUser:result.data, Authenticating:false})
            toast.success("Signup successfully")
            router.push('/Home')
            get().LiveConnection()
        } catch (error) {
            console.error(error)
            set({Authenticating:false})
            toast.error('Server Error try again latter')
        }
    },
    login: async(data,router)=>{
        try {
           set({Authenticating: true})
           const result=await axiosInstance.post("/signin", data)
           set({authUser:result.data.data, Authenticating:false})
           const authUser = get().authUser
           toast.success("Login successfully")
           get().LiveConnection()
           router.push('/Home')
        } catch (error) {
            console.error(error)
            set({Authenticating:false})
            toast.error("Server error try again latter")
        }
    },
    logout: async(router)=>{
        try {
           set({Authenticating: true})
           await axiosInstance.post("/signout", )
           set({authUser:{}, Authenticating:false})
           toast.error("Logut successfully")
           router.push('/signin')
           get().disconnectUser()
        } catch (error) {

            console.error(error)
            set({Authenticating:false})
            toast.error("Server error try again latter")
        }
    },
    updateProfile: async(data)=>{
        try {
           set({isUpdatingProfile: true})
           const result=await axiosInstance.post("/profile", data)
           set({ authUser:result.data , isUpdatingProfile:false})
           const authUser = get().authUser
           toast.success("profile updated successfully")
           
        } catch (error) {
            console.error(error)
            set({isUpdatingProfile:false})
            toast.error("Server error try again latter")
        }
    },


    LiveConnection: ()=>{
        const {authUser} = get()
        let socket;
        if (!get().socket) {
            socket = io("https://track-my-activities-1.onrender.com",{
                query: {
                    userId: authUser._id,
                  },
            });
            socket.connect()

            socket.on("getOnlineUser", (users) => {
                set({ onlineUsers: users });
            });
            
            
            set({socket: socket});
        }
    },

    

    disconnectUser: () => {
        const socket = get().socket;
        if (socket) {
            socket.on("disconnect", (reason) => {
                console.log(`Socket disconnected: ${reason}`);
            });
    
            console.log("Disconnecting socket:", socket.id);
            socket.disconnect();
        }
        set({ socket: null });
    },

  
    
    
    

}),{
    name: "auth-User", // this will store in the localstorage
    partialize: (state) => ({authUser: state.authUser})
    }))

