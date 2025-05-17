import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { NextResponse } from "next/server";

export const useAuthPage = create((set)=>({
    authUser: null,
    SigningIn: false,
    SigningUp: false,

    Authenticating: true,

    checkAuth: async()=>{
        try {
           const result=await axiosInstance.post("/signup",)
           console.log(result.data)
           set({authUser:result.data, Authenticating:false})
        } catch (error) {
            console.error(error)
            set({Authenticating:false})
        }
    }

}))

