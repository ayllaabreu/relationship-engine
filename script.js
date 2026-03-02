const btn = document.getElementById("btnEntrar");
const conteudo = document.getElementById("conteudo");

btn.addEventListener("click", () => {
  document.querySelector(".hero").style.display = "none";
  conteudo.classList.remove("hidden");
});

function atualizarContador(dataInicial, prefixo) {
  const agora = new Date();
  const diferenca = agora - dataInicial;

  const segundos = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundos / (3600 * 24));
  const horas = Math.floor((segundos % (3600 * 24)) / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const seg = segundos % 60;

  document.getElementById("dias" + prefixo).textContent = dias;
  document.getElementById("horas" + prefixo).textContent = horas;
  document.getElementById("min" + prefixo).textContent = minutos;
  document.getElementById("seg" + prefixo).textContent = seg;
}

// Datas oficiais
const dataEla = new Date("2024-11-21T00:00:00");
const dataEle = new Date("2025-04-04T00:00:00");

setInterval(() => {
  atualizarContador(dataEla, "Ela");
  atualizarContador(dataEle, "Ele");
}, 1000);
