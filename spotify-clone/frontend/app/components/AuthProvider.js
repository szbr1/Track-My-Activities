'use client'
import { axiosInstance } from "@/lib/axios"
import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { LuLoaderCircle } from "react-icons/lu";

const AuthProvider = ({children}) => {
  const setTokenAxiosHeaders = (token) => {
    return axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}` 
  }

  const {getToken, userId} = useAuth()
  const [loading, setLoading] = useState(true)
  
  // Add null checks for the store

  useEffect(() => {
    const authPi = async () => {
      try {
        const token = await getToken();
        if (!token) {
          console.log('No token found')
          return
        }
        
        setTokenAxiosHeaders(token)
        if (userId && initSocket) {
          initSocket(userId)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    
    authPi()

  
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