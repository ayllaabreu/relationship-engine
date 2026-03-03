// ===== CONTADORES =====

const dataConhecemos = new Date(2024, 10, 21); // 21/11/2024
const dataOficial = new Date(2025, 3, 4);      // 04/04/2025

function calcularTempo(data) {
  const agora = new Date();
  const diff = agora - data;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  return `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

function atualizarContadores() {
  const contador1 = document.getElementById("contadorConhecemos");
  const contador2 = document.getElementById("contadorOficial");

  if (contador1 && contador2) {
    contador1.innerHTML = calcularTempo(dataConhecemos) + " juntos 💫";
    contador2.innerHTML = calcularTempo(dataOficial) + " oficialmente 🛎";
  }
}

setInterval(atualizarContadores, 1000);
atualizarContadores();


// Fade in ao rolar
const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});


// Botão Forever.exe
const overlay = document.getElementById("terminalOverlay");
const terminalText = document.getElementById("terminalText");
const finalMessage = document.getElementById("finalMessage");

const lines = [
  "Inicializando Forever.exe...",
  "Verificando compatibilidade emocional...",
  "Conexão estabelecida.",
  "Sincronizando sonhos...",
  "Upload de planos futuros...",
  "Removendo inseguranças...",
  "Instalando cumplicidade...",
  "Aplicando patches de carinho...",
  "Processo iniciado...",
  "Carregando futuro ao seu lado..."
];

function typeLine(text, callback) {
  let i = 0;
  const interval = setInterval(() => {
    terminalText.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      terminalText.textContent += "\n";
      setTimeout(callback, 600);
    }
  }, 40);
}

function runTerminal(index = 0) {
  if (index < lines.length) {
    typeLine(lines[index], () => runTerminal(index + 1));
  } else {
    setTimeout(() => {
      finalMessage.classList.remove("hidden");
      finalMessage.classList.add("show");
    }, 1000);
  }
}

document.getElementById("foreverBtn").addEventListener("click", () => {
  overlay.classList.add("active");
  terminalText.textContent = "";
  finalMessage.classList.add("hidden");
  finalMessage.classList.remove("show");
  runTerminal();
});

document.getElementById("closeTerminal").addEventListener("click", () => {
  overlay.classList.remove("active");
});
