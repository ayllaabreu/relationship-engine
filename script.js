// DATA DE INÍCIO (ano, mês-1, dia)
const dataInicio = new Date(2025, 2, 2);

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos 💖`;
}

setInterval(atualizarContador, 1000);
atualizarContador();


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
