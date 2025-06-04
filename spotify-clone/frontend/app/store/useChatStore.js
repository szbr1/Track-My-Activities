import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import { io } from 'socket.io-client';
import { useEffect } from 'react';

const baseUrl = "http://localhost:8000";

const socket = io(baseUrl, {
  autoConnect: false,
  withCredentials: true
});

export const useChatStore = create((set, get) => ({
  users: [],
  isLoading: false,
  onlineUsers: new Set(),
  userActivities: new Map(),
  isConnected: false,
  messages: [],

  // Socket initialization with auto-cleanup
  initSocket: (userId) => {
    if (get().isConnected) return;

    const setupSocket = () => {
      socket.connect();
      socket.emit("user_connected", userId);

      const handlers = {
        user_connected: (userId) => {
          set((state) => ({ 
            onlineUsers: new Set([...state.onlineUsers, userId]) 
          }));
        },
        users_online: (users) => set({ onlineUsers: new Set(users) }),
        activities: (activities) => set({ userActivities: new Map(activities) }),
        activity_updated: ({ userId, activity }) => {
          set((state) => ({
            userActivities: new Map(state.userActivities).set(userId, activity),
          }));
        },
        receive_message: (message) => {
          set((state) => ({ messages: [...state.messages, message] }));
        },
        disconnect_user: (userId) => {
          set((state) => {
            const updated = new Set(state.onlineUsers);
            updated.delete(userId);
            return { onlineUsers: updated };
          });
        },
      };

      Object.entries(handlers).forEach(([event, handler]) => {
        socket.on(event, handler);
      });

      set({ isConnected: true });

      return () => {
        Object.keys(handlers).forEach((event) => socket.off(event));
        socket.disconnect();
      };
    };

    return setupSocket();
  },

  userDisconnected: (userId) => {
    if (get().isConnected) {
      socket.emit("disconnect_user", userId);
      socket.disconnect();
      set({ isConnected: false });
    }
  },

  fetchUsers: async () => {
    try {
      set({ isLoading: true });
      const result = await axiosInstance.get('/users');
      set({ users: result.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  }
}));

// Custom hook for component usage
export const useChatSocket = (userId) => {
  const { initSocket, userDisconnected } = useChatStore();

  useEffect(() => {
    if (!userId) return;
    
    const cleanup = initSocket(userId);
    
    return () => {
      cleanup?.();
      userDisconnected(userId);
    };
  }, [userId, initSocket, userDisconnected]);
};