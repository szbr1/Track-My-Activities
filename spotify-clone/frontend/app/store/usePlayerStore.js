import { create } from "zustand";

export const usePlayerStore = create((set,get)=>({

    isPlaying: false,
    currentSong: null,
    currentIndex: -1,
    queue: [],


 
   initializaAlbum: (songs)=>{
    try {
        if(!songs) return;
        const {currentIndex, currentSong} = get()
        set({
            queue: songs,
            currentIndex: currentIndex === -1 ? 0 : currentIndex,
            currentSong: currentSong || 0
        })
    } catch (error) {
        console.error({ErrorMessage: "Error while initializing Album into queue:", error})
    }
   },

   PlayAlbum: (songs, currentNumber=0)=>{
    try {
        if(!songs) return;
        const {queue} = get()
        const current = queue[currentNumber]
        set({
            queue: songs,
            currentIndex: currentNumber,
            currentSong: current,
            isPlaying: true

        })
    } catch (error) {
        console.error({ErrorMessage: "Error while Playing Album:", error})
        
    }
   },


    playNext: (currentIndex) => {
        try {
            const { queue } = get();
            if (queue.length === 0) return;
            const nextIndex = currentIndex + 1;
            if (nextIndex >= queue.length) return;
            const nextSong = queue[nextIndex];
            
            // Update state
            set({ currentIndex: nextIndex });
            set({ currentSong: nextSong });
            set({isPlaying: true})
    
        } catch (error) {
            console.error('Error in playNext:', error);
        }
    },
    playPrev: (currentIndex)=>{
        const {queue} = get()
         try {
           if(queue.length === 0) return
        const prev = currentIndex - 1;
        const newSong = queue[prev]
        if(prev >= 0){
            set({currentIndex:prev, currentSong: newSong, isPlaying: true})
        }

         } catch (error) {
            console.error('Error in playNext:', error);
         }
    },

    togglePlay: ()=>{
        try {
            const toggleIt = get().isPlaying
            set({isPlaying: !toggleIt})
        } catch (error) {
            console.error('Error in playNext:', error);
        }
    }
}))

