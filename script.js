const dataAylla = new Date("2024-11-21");
const dataOficial = new Date("2025-04-04");

let modo = "aylla";

function calcularDias(data) {
const hoje = new Date();
const diff = hoje - data;
return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function atualizarContadores() {
const diasAylla = calcularDias(dataAylla);
const diasOficial = calcularDias(dataOficial);

document.getElementById("contadorAylla").innerText =
"🩷 Versão Aylla: " + diasAylla + " dias de namoro";

document.getElementById("contadorOficial").innerText =
"💙 Versão Oficial dele: " + diasOficial + " dias de namoro";
}

function alternarVersao() {

const card = document.getElementById("card");
const mensagem = document.getElementById("mensagemHumor");

card.classList.remove("aylla","oficial");

if(modo === "aylla"){
modo = "oficial";
card.classList.add("oficial");
mensagem.innerText =
"Sistema redefinido para versão oficial do programador. Compilando argumentos... 😂";
}else{
modo = "aylla";
card.classList.add("aylla");
mensagem.innerText =
"Rollback aplicado com sucesso. Versão original restaurada por Aylla. 😌💅";
}

}

atualizarContadores();