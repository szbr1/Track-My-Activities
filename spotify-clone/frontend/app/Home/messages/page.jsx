'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { useChatStore } from '@/app/store/useChatStore';
import { useEffect, useState } from 'react';

function page() {
  // Recommended approach - separate selectors
  const users = useChatStore((state) => state.users);
  const onlineUsers = useChatStore((state) => state.onlineUsers);

  // Alternative if you need derived state
  const [onlineStatus, setOnlineStatus] = useState(new Map());
  
  useEffect(() => {
    setOnlineStatus(new Map(
      users.map(user => [user._id, onlineUsers.has(user._id)])
    ));
  }, [users, onlineUsers]);

  return (
    <div className="min-h-screen w-full bg-zinc-800 rounded-md flex justify-center">
      <div className="h-full w-[20%] md:w-[35%] p-4 border-r flex flex-col gap-3 text-white border-zinc-600">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex gap-3 p-3 bg-zinc-800 border items-center justify-start rounded-full border-zinc-600"
          >
            <Avatar>
              <AvatarFallback>{user.fullName?.[0]?.toUpperCase() || 'U'}</AvatarFallback>
              <AvatarImage src={user.imageUrl} />
            </Avatar>
            <div className="text-md hidden md:block">
              <h3>{user.fullName}</h3>
              <span className="text-sm text-gray-400">
                {onlineUsers.has(user._id) ? (
                  <span className="text-green-400">Online</span>
                ) : (
                  <span className="text-red-400">Offline</span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="h-full w-full bg-amber-700"></div>
    </div>
  );
}

export default page;