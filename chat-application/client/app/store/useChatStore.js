import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
  selectedUser: null,
  users: [],
  myId: null,
  isUserLoading: false,
  isMessagesLoading: false,
  messages: [],

  getUsers: async () => {
    try {
      set({ isUserLoading: true });
      const result = await axiosInstance.post('/messages/users');
      console.log(result.data);
      set({ users: result.data, isUserLoading: false });
    } catch (error) {
      console.error(error);
      set({ isUserLoading: false });
      toast.error("Server error — no user found");
    }
  },

  getMessages: async (userId) => {
    try {
      set({ isMessagesLoading: true });
      console.log('id:', userId);
      set({myId: userId})
      const result = await axiosInstance.get(`/messages/${userId}`);
      console.log(result.data);
      set({ messages: result.data, isMessagesLoading: false });
    } catch (error) {
      console.error(error);
      set({ isMessagesLoading: false });
      toast.error("Failed to fetch messages");
    }
  },

  sendMessage: async (data) => {
    try {
      const { selectedUser, messages } = get();
      set({ isMessagesLoading: true });
      const result = await axiosInstance.post(`/messages/send/${selectedUser._id}`, data);
  
      // Append new message to existing messages
      set({
        messages: [...messages, result.data],
        isMessagesLoading: false
      });
    } catch (error) {
      console.error(error);
      set({ isMessagesLoading: false });
      toast.error("Failed to send message");
    }
  },
  

  setSelectedUser: (selectedUser) => set({ selectedUser }),

}));
