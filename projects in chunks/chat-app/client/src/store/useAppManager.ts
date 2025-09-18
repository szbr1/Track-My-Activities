import toast from 'react-hot-toast';
import { userAxios } from './../../lib/axios';
import { create } from "zustand";



interface AppInstanceProps {
    signedIn: boolean,
    signup: (formData: object, naviate: any) => void;
    signin: (formData: object) => void;
    

}


export const useAppManager = create<AppInstanceProps>(()=>({
    signedIn: false,
    signup: async(formData, navigate)=>{
        try {
            const result = await userAxios.post("/new-user",formData)
            console.log(result.data)
            toast.success("Welcome ")
            navigate("/room")
            
        } catch (error) {
            console.error(error)
            toast.error("Please Try again later")
        }
    },
    signin: async(formData)=>{
        try {
            const result = await userAxios.post("/user-verify",formData)
            console.log(result.data)
            toast.success("You logged in successfully")
        } catch (error) {
            console.error(error)
            toast.error("try agian later")
        }
    }
}))