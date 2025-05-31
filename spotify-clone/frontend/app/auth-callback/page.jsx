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
import { Loader2 } from "lucide-react";
  


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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 via-black to-zinc-900 px-4 text-center">
    <div className="relative mb-8">
      <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-20 animate-pulse"></div>
      <Loader2 className="relative z-10 animate-spin text-green-300 size-20 drop-shadow-lg" />
    </div>
    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
      Authenticating...
    </h1>
    <p className="text-zinc-300 text-lg md:text-xl max-w-md">
      Hang tight while we sync your vibe with Spotify. Almost there 🎶
    </p>
  </div>
  );
}
