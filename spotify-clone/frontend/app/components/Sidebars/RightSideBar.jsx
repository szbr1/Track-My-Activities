'use client'
import { CiMusicNote1 } from "react-icons/ci";
import { useSignIn } from '@clerk/nextjs';
import React, { useEffect } from 'react'
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { Avatar, AvatarFallback } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { ScrollArea } from "../ui/scroll-area";
import { useChatStore } from "@/app/store/useChatStore";

function RightSideBar() {
const {fetchUsers, users}= useChatStore();
const {signIn} =useSignIn
const isPlaying = true
const tempUsers = [
  {
    id: 1,
    fullName: "Alex Johnson",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    isPlaying: false
  },
  {
    id: 2,
    fullName: "Sarah Williams",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    isPlaying: true
  },
  {
    id: 3,
    fullName: "Michael Brown",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    isPlaying: false
  },
  {
    id: 4,
    fullName: "Emily Davis",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    isPlaying: true
  },
  {
    id: 5,
    fullName: "David Miller",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    isPlaying: false
  },
  {
    id: 6,
    fullName: "Jessica Wilson",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    isPlaying: true
  },
  {
    id: 7,
    fullName: "Daniel Moore",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    isPlaying: false
  },
  {
    id: 8,
    fullName: "Olivia Taylor",
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    isPlaying: true
  },
  {
    id: 9,
    fullName: "James Anderson",
    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    isPlaying: false
  },
  {
    id: 10,
    fullName: "Sophia Thomas",
    imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    isPlaying: true
  },
  {
    id: 11,
    fullName: "Robert Jackson",
    imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    isPlaying: false
  },
  {
    id: 12,
    fullName: "Emma White",
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    isPlaying: true
  },
  {
    id: 13,
    fullName: "William Harris",
    imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
    isPlaying: false
  },
  {
    id: 14,
    fullName: "Ava Martin",
    imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
    isPlaying: true
  },
  {
    id: 15,
    fullName: "Christopher Garcia",
    imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    isPlaying: false
  }
];
useEffect(()=>{
    fetchUsers()
     console.log("frontendData",fetchUsers())
},[])

  return (
    <div className='h-full w-full bg-zinc-900 rounded-md'>
      {
        isPlaying ? <div className='p-3 text-white/80 flex items-center justify-start gap-1 border-b border-gray-800'>
     
        <BsPeopleFill className='size-5'/> <span>What they're listening to</span>
       </div> : <div className='p-3 text-white/80 flex items-center justify-start gap-1 border-b border-gray-800'>
     
     <IoChatbubblesSharp className='size-5'/> <span>Chat With Friends</span>
    </div>
      }
     

     <div className=" p-3  flex flex-col  h-full gap-4 min-h-0 ">
      <ScrollArea className={"h-[87%]  "}>

      {!signIn ? (
        users.map((user, index)=>{
         return (
          <div key={ index + 1} className=' flex items-center gap-3 mt-4 cursor-pointer hover:bg-gray-800 px-2 rounded-md'>
          <Avatar className={"size-9"}>
           <AvatarImage src={user.imageUrl}/>
           <AvatarFallback>{user.fullName[0]}</AvatarFallback>
          </Avatar>

          <div className="text-white">
            <h3 className="font-bold flex items-center gap-2">{user.fullName} {isPlaying? <CiMusicNote1 className="text-green-600 size-4" /> : null}</h3>
          {isPlaying? <div className="flex  flex-col "><span className="">Kabi Ma Kabi Tum</span> <span className="text-gray-500 text-sm font-stretch-50%">Robin hood</span></div>  : <div className=" text-sm text-gray-300">Idle</div>}
          </div> 

        </div>
         )
        })
       
      ): (<div>Hello</div>)}
      </ScrollArea>

     </div>



    </div>
  )
}

export default RightSideBar