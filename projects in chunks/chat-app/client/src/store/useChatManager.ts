import toast from "react-hot-toast";
import { create } from "zustand";
import { chatAxios } from "../../lib/axios";


interface ChatUserProps {
    messages    : {message?: [{message: string}]}
    getMessages : (recieverId:string)=> void;
    sendMessages: (message:object, recieverId:string) => void;

}

export const useChatManager = create<ChatUserProps>((set,get)=>({
    messages: {},
   getMessages: async(recieverId)=>{
    try {
        const result = await chatAxios.get(`/fetch-messages/${recieverId}`)
        console.log(result.data)
        set({messages: result.data})
        console.log("|||||-", get().messages)

    } catch (error) {
        console.error(error)
        toast.error("Network Error")
    }
   }

   ,

   sendMessages: async(message, recieverId)=>{
      try {
        const result = await chatAxios.post(`/send-message/${recieverId}`, message)
        console.log(result.data)
      } catch (error) {
        console.error(error);
        toast.error("Network Error")
      }
   }
}))