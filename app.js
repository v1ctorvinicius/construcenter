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

// Função para animar os números
function animateNumber(stat) {
  const target = +stat.getAttribute("data-target");
  let count = 0;
  const duration = 2000;
  const step = target / (duration / 16); // Aproximadamente 60 FPS
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (count < target) {
        count += step;
        stat.textContent = Math.floor(count);
      } else {
        stat.textContent = target;
        clearInterval(interval);
        resolve();
      }
    }, 16);
  });
}

// Configuração do ScrollReveal para as seções
window.addEventListener("DOMContentLoaded", () => {
  playNextVideo();

  // Inicializa ScrollReveal
  const sr = ScrollReveal({
    delay: 200,
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    origin: "bottom",
    interval: 200,
    once: true,
  });

  // Aplica ScrollReveal e animação dos números
  sr.reveal(".sobre .sobre-left", { delay: 200 });
  sr.reveal(".sobre .sobre-right", { delay: 400 });
  sr.reveal(".sobre .stats .stat-item", {
    delay: 600,
    interval: 200,
    beforeReveal: (el) => {
      const stat = el.querySelector(".stat-number");
      animateNumber(stat).then(() => {
        console.log(
          `Animação de ${stat.getAttribute("data-target")} concluída!`
        );
      });
    },
  });

  // Animação para os cards de departamentos
  sr.reveal(".departamento-card", {
    delay: 200,
    interval: 150,
    origin: "bottom",
    distance: "30px",
  });

  // Animação para os itens de diferenciais
  sr.reveal(".diferencial-item", {
    delay: 200,
    interval: 150,
    origin: "bottom",
    distance: "30px",
  });

  // Animação para os depoimentos e equipe
  sr.reveal(".testemunho-item", {
    delay: 200,
    interval: 150,
    origin: "left",
    distance: "30px",
  });
  sr.reveal(".equipe-container", {
    delay: 200,
    origin: "right",
    distance: "30px",
  });

  // Animação para o CTA final
  sr.reveal(".cta-content", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
  });

  // Animação do contato
  sr.reveal(".contato-container", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
  });

  // Animação do mapa
  sr.reveal(".mapa-container", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
  });
});
