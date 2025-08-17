// Lista de vídeos para o hero
const videos = [
  "img/hero-video-3.mp4",
  "img/hero-video-4.mp4",
  "img/hero-video-5.mp4",
  "img/hero-video-1.mp4",
  "img/hero-video-0.mp4",
  "img/hero-video-2.mp4",
];

const videoElement = document.getElementById("bg-video");
let currentVideo = 0;

function playNextVideo() {
  videoElement.src = videos[currentVideo];
  videoElement.play();

  videoElement.onended = function () {
    currentVideo = (currentVideo + 1) % videos.length; // volta ao início quando terminar
    playNextVideo();
  };
}

// inicia a rotação quando a página carregar
window.addEventListener("DOMContentLoaded", playNextVideo);
