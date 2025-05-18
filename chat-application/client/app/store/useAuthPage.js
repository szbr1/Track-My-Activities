import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthPage = create((set,get)=>({
    authUser: null,
    SigningIn: false,
    SigningUp: false,
    isUpdatingProfile: false,

    Authenticating: false,

    checkAuth: async(data,router)=>{
        try {
            set({Authenticating: true})
            const result=await axiosInstance.post("/signup", data)
            console.log(result.data)
            set({authUser:result.data, Authenticating:false})
            toast.success("Signup successfully")
            router.push('/Home')
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
           console.log(authUser)
           toast.success("Login successfully")
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
           const result=await axiosInstance.post("/signout", )
           console.log(result.data)
           set({authUser:null, Authenticating:false})
           toast.error("Logut successfully")
           router.push('/signin')
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
           console.log(result.data)
           set({authUser:result.data, isUpdatingProfile:false})
           toast.error("profile updated successfully")
           router.push('/signin')
        } catch (error) {
            console.error(error)
            set({isUpdatingProfile:false})
            toast.error("Server error try again latter")
        }
    },

}))

