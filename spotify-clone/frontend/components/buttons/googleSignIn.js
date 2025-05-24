import { useSignIn } from '@clerk/nextjs'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '../ui/button'

function GoogleSignIn() {


    const {signIn,isLoaded} = useSignIn()

    const googleauthSign = ()=>{
    if(!isLoaded){
      return null
    }
            signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl : "/sso-callback",
                redirectUrlComplete : "/auth-callback"
            })
        }
  return (
     <Button variant={"outline"} onClick={googleauthSign} className=' cursor-pointer bg-black  rounded-md px-4 flex justify-center items-center '>
                     <FcGoogle className='size-5 '/><span className='text-gray-200/50  hover:text-black text-sm font-sans '> SignIn With </span> 
                </Button>
  )
}

export default GoogleSignIn