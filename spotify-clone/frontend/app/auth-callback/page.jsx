'use client'
import {  useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import {
    Card,
    CardContent,
    CardDescription,
  } from "@/app/components/ui/card"
import { Loader } from "lucide-react";
import { LuLoaderCircle } from "react-icons/lu";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useRef } from "react";
  


export default function Page() {
  const router = useRouter()
  const {user , isLoaded} = useUser()
  
  const currentUserSignedIn = useRef(false)
  useEffect(() => {
    if (!isLoaded) return; // wait until Clerk loads user info
  
    if (user && !currentUserSignedIn.current) {
      currentUserSignedIn.current = true;
  
      axiosInstance.post('/auth/callback', {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl
      })
        .catch(console.error)
        .finally(() => {
          router.push('/Home');
        });
    }
  }, [user, isLoaded, router]);
  

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center">
     <Card  className="w-3/4 h-[20rem] outline-lime-800 outline-2 shadow-md shadow-green-800 lg:w-3/8 flex justify-center bg-gray-800 items-center" >
        <CardDescription className=" text-black text-2xl font-medium ">
           <LuLoaderCircle className="size-8 animate-spin text-green-800"/>
        </CardDescription>
        <CardContent>
           Loading
        </CardContent>
     </Card>
    </div>
  );
}
