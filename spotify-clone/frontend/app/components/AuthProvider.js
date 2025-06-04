'use client'
import { axiosInstance } from "@/lib/axios"
import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { LuLoaderCircle } from "react-icons/lu";
import { useChatStore } from "../store/useChatStore";

const AuthProvider = ({children}) => {
  const setTokenAxiosHeaders = (token) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}` 
  }

  const {getToken, userId} = useAuth()
  const [loading, setLoading] = useState(true)

  const {initSocket, userDisconnected }  = useChatStore()

  useEffect(() => {
    const authPi = async () => {
      try {
        const token = await getToken();

        if (!token || !userId) {
          console.log("Token or userId missing")
          return
        }

        setTokenAxiosHeaders(token)
        initSocket(userId)

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    authPi()

    // Disconnect on unmount
    return () => {
      userDisconnected()
    }
  }, [getToken, userId])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <LuLoaderCircle className="size-6 text-white animate-spin"/>
      </div>
    )
  }

  return children
}

export default AuthProvider
