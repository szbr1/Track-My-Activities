'use client'
import React from 'react'
import { useAuthPage } from '../store/useAuthPage'
import { ImSpinner9 } from "react-icons/im";


function page() {
    const {checkAuth, Authenticating } = useAuthPage()


    // useEffect(()=>{

    // //  if(!authUser){
    // //     router.push("/signin")
    // // }
    // },[])
   
    if(!checkAuth && Authenticating){
        return(
            <div className='h-screen w-full flex justify-center items-center bg-slate-800'>
            <ImSpinner9 className='size-20 animate-spin '/> 
            </div>
        )
    }
  return (
    <div>
        Home page
    </div>
  )
}

export default page