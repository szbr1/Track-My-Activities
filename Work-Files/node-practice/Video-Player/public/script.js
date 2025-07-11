const mainvideo = document.querySelector(".m-video");
const playvideo = document.querySelector(".playbtn");
const pausevideo = document.querySelector(".pausebtn");
const speedicon = document.querySelector(".speedicon");
const speeder = document.querySelector(".speeder");
const player = document.querySelector(".player")
const FullScreen = document.querySelector(".fullscreen")
const exitFullScreen = document.querySelector(".exitFullscreen")
const volumeRange = document.querySelector(".volumeRange")
const VideoSeek = document.getElementById("seekRange")
const totalduration = document.querySelector(".totalduration")
const currentduration = document.querySelector(".currentduration")

volumeRange.addEventListener('input', () => {
  mainvideo.volume = volumeRange.value;
});
setTimeout(() => {
  
  const totalvalue = mainvideo.duration / 60
  let result = totalvalue.toFixed(2);
  console.log(totalduration,"  |", totalvalue, "|", result)
 totalduration.textContent = result
 console.log("lldjlf:", mainvideo.currentTime)
}, 2000);

mainvideo.addEventListener("loadedmetadata",()=>{
  console.log("j",mainvideo.duration)
  VideoSeek.max = mainvideo.duration;
})

mainvideo.addEventListener("timeupdate",()=>{
  VideoSeek.value = mainvideo.currentTime;
  const h = mainvideo.currentTime.toString().split(".")[0]
  const b = 
  if(number < 60){
    currentduration.textContent = h 
    
  }
  const number = Number(h)
  if(number > 60 ){
    
    currentduration.textContent = h 
      }

  
})

VideoSeek.addEventListener("input",()=>{
  mainvideo.currentTime = VideoSeek.value;
})


  function playme() {
    mainvideo.play();
    playvideo.classList.add("hidden");
  pausevideo.classList.remove("hidden");

}

function stopsme() {
  mainvideo.pause();
  playvideo.classList.remove("hidden");
  pausevideo.classList.add("hidden");
}

function SpeedList(){
    speedicon.classList.add("hidden");
    speeder.classList.remove("hidden")
}

function speed05x() {
    mainvideo.playbackRate = 0.5;
    speeder.classList.add("hidden");
    speedicon.classList.remove("hidden");
  }

function speed1x() {
  mainvideo.playbackRate = 1;
  speeder.classList.add("hidden");
  speedicon.classList.remove("hidden");
}

function speed105x() {
  mainvideo.playbackRate = 1.5;
  speeder.classList.add("hidden");
  speedicon.classList.remove("hidden");
}

function speed2x() {
  mainvideo.playbackRate = 2;
  speeder.classList.add("hidden");
  speedicon.classList.remove("hidden");
}



    // picture in picture

    function PicInPic(){
        if(document.pictureInPictureEnabled){
            mainvideo.requestPictureInPicture()
        }
    }

    // full screen 
    function Fullscreen(){
      
        console.log("fullscreen")
        player.requestFullscreen()
        // setTimeout(()=>{
          FullScreen.classList.add("hidden")
          exitFullScreen.classList.remove("hidden")
        // },500)
        



    }


 // exit fullscreen
    function exitFullscreen(){
      FullScreen.classList.remove("hidden")
      exitFullScreen.classList.add("hidden")
      player.exitFullscreen()
    }

   
   

    function parent(){
      
      if(player.classList.contains("play")){
        mainvideo.play()
        playvideo.classList.add("hidden")
        pausevideo.classList.remove("hidden")
        player.classList.remove("play")
        console.log("called")
        
      
      }else{
        mainvideo.pause()
        playvideo.classList.remove("hidden")
        pausevideo.classList.add("hidden")
        player.classList.add("play")
        
      }
    }
