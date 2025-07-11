const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const seekBar = document.getElementById("seekBar");
const volumeControl = document.getElementById("volumeControl");
const fullscreenBtn = document.getElementById("fullscreenBtn");

// Play/Pause toggle
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// Update seek bar as video plays
video.addEventListener("timeupdate", () => {
  const value = (100 / video.duration) * video.currentTime;
  seekBar.value = value;
});

// Seek when seek bar changes
seekBar.addEventListener("input", () => {
  const time = video.duration * (seekBar.value / 100);
  video.currentTime = time;
});

// Volume control
volumeControl.addEventListener("input", () => {
  video.volume = volumeControl.value;
});

// Fullscreen toggle
fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
});
