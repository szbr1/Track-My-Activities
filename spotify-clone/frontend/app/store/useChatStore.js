import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import {io} from 'socket.io-client'

const baseUrl = "http://localhost:8000"

const socket = io(baseUrl,{
    autoConnect: false,
    withCredentials: true
})

export const useChatStore = create((set,get)=>({
    users: [],
    isLoading: false,

    //socket -> bakend
    onlineUsers: new Set(),
    userActivities: new Map(),
    isConnected: false,
    messages: [],


    initSocket: (userId)=>{
       if(get().isConnected) return ;
 
       //connection of user
       socket.connect()
       socket.emit("user_connected", userId)

       //here i provide connected user to Users 
       socket.on("user_connected", (userId)=>{
        set((state)=>({
            onlineUsers: [...state.onlineUsers, userId]
        }))
       })


       //here we show all users those are online to new connected users
       socket.on("users_online", (users)=>{
       set({onlineUsers: new Set(users)})
       })

       //here we have to provide activies of other users to connected user
       socket.on("activities", (activies)=>{
        set({usersActivities: new Map(activies)})
       })

       //here we provide connected user activites to users
       socket.on("update_activity", ({userId, activity})=>{
        set((state)=>{
            const usersActivities = new Map(state.userActivities)
            usersActivities.set(userId, activity)
            return {userActivities: usersActivities}

        
        })
       })

       //here i will recieve msg 
       socket.on("recieve_message", (message)=>{
        set((state)=> ({
            messages: [...state.messages, message]
        }))
       })
       
       //here i send msgs

       socket.on("send_message", (message)=>{
        set((state)=> ({
            messages: [...state.messages, message]
        }))
       })

       socket.on("disconnect_user", (userId)=>{
        set(state => {
            const allUsers = new Set(state.onlineUsers)
            allUsers.delete(userId)
            return {onlineUsers: allUsers}
        })
    })

    set({isConnected: true})
       

       
    },

    userDisconneted: ()=>{
        try {
            if(get().isConnected){
                socket.disconnect()
                set({isConnected:false})
            }
        } catch (error) {
            console.error("Dis -->",error)
        }
    }
    



  

    

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