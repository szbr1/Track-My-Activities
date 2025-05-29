import { create } from "zustand";

export const usePlayerStore = create((set, get) => ({
  isPlaying: false,
  currentSong: null,
  currentIndex: -1,
  queue: [],
  duration: null,
  currentTime: null,

  initializaAlbum: (songs) => {
    try {
      if (!songs) return;
      const { currentIndex, currentSong } = get();
      set({
        queue: songs,
        currentIndex: currentIndex === -1 ? 0 : currentIndex,
        currentSong: currentSong || 0,
      });
    } catch (error) {
      console.error({
        ErrorMessage: "Error while initializing Album into queue:",
        error,
      });
    }
  },

  PlayAlbum: (songs, currentNumber = 0) => {
    try {
      if (!songs) return;
      const current = songs[currentNumber];
      set({
        queue: songs,
        currentIndex: currentNumber,
        currentSong: current,
        isPlaying: true,
      });
    } catch (error) {
      console.error({ ErrorMessage: "Error while Playing Album:", error });
    }
  },

  setcurrentSong: (song) => {
    try {
      const { currentIndex, queue } = get();
      const currentNum = queue.findIndex((s) => s._id === song._id);
      set({
        currentSong: song,
        currentIndex: currentNum === -1 ? currentIndex : currentNum,
        isPlaying: true,
      });
    } catch (error) {
      console.error({ ErrorAtStore: error });
    }
  },

  playNext: () => {
    try {
      const { queue, currentIndex } = get();
      if (queue.length === 0) return;

      const nextIndex = currentIndex + 1;
      if (nextIndex >= queue.length) return;

      const nextSong = queue[nextIndex];
      set({
        currentIndex: nextIndex,
        currentSong: nextSong,
        isPlaying: true,
      });
    } catch (error) {
      console.error("Error in playNext:", error);
    }
  },

  playPrev: () => {
    try {
      const { queue, currentIndex } = get();
      if (queue.length === 0) return;

      const prev = currentIndex - 1;
      if (prev >= 0) {
        const newSong = queue[prev];
        set({
          currentIndex: prev,
          currentSong: newSong,
          isPlaying: true,
        });
      }
    } catch (error) {
      console.error("Error in playPrev:", error);
    }
  },

  togglePlay: () => {
    try {
      const toggleIt = get().isPlaying;
      set({ isPlaying: !toggleIt });
    } catch (error) {
      console.error("Error in togglePlay:", error);
    }
  },
  
  setDuration : (sduration)=>{
    try {
        set({duration: sduration})
    } catch (error) {
      console.error({setDuration: error})
    }
  },

  setCurrentTime: (stime) =>{
    try {

     set({currentTime: stime})

    } catch (error) {
      console.error({setCurrentTime: stime})
    }
  }


}));
