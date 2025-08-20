const videoElement = document.getElementById("bg-video");

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

  // Efeito Typewriter com JS (suporta wrap e cursor inline)
  const typewriter = document.querySelector(".typewriter");
  if (typewriter) {
    const text = typewriter.getAttribute("data-text");
    typewriter.textContent = ""; // Limpa o texto inicial

    const textSpan = document.createElement("span");
    textSpan.classList.add("typewriter-text");
    typewriter.appendChild(textSpan);

    const cursorSpan = document.createElement("span");
    cursorSpan.classList.add("typewriter-cursor");
    cursorSpan.textContent = ""; // Vazio para não adicionar espaço extra
    typewriter.appendChild(cursorSpan);

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        textSpan.textContent += text.charAt(index); // Adiciona letra por letra no span de texto
        index++;
      } else {
        clearInterval(typingInterval);
        // Opcional: remover o cursor após terminar
        // cursorSpan.style.display = 'none';
      }
    }, 100); // Velocidade: 100ms por letra (~4s para 40 caracteres)
  }

  // Slideshow da equipe
  const equipeImgs = document.querySelectorAll(".equipe-slideshow .equipe-image");
  let equipeIndex = 0;

  function showNextEquipe() {
    equipeImgs[equipeIndex].classList.remove("active");
    equipeIndex = (equipeIndex + 1) % equipeImgs.length;
    equipeImgs[equipeIndex].classList.add("active");
  }

  setInterval(showNextEquipe, 4000); // Troca a cada 4s
});