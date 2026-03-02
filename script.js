/* INTRO TYPING */

const tituloTexto = "AYLLA & BRUNO";
const elemento = document.getElementById("cinemaTitle");
let i = 0;

function escreverTitulo() {
  if (i < tituloTexto.length) {
    elemento.innerHTML += tituloTexto.charAt(i);
    i++;
    setTimeout(escreverTitulo, 120);
  }
}

escreverTitulo();

setTimeout(() => {
  document.getElementById("intro").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 1500);
}, 4500);

document.getElementById("skipIntro").addEventListener("click",()=>{
  document.getElementById("intro").style.opacity="0";
  setTimeout(()=>{
    document.getElementById("intro").style.display="none";
  },1000);
});

/* CONTADORES */

const dataAylla = new Date("2024-11-21T00:00:00");
const dataOficial = new Date("2025-04-04T00:00:00");

function calcularTempo(data){
const agora = new Date();
let diff = agora - data;

let dias = Math.floor(diff / (1000*60*60*24));
diff -= dias*(1000*60*60*24);

let horas = Math.floor(diff / (1000*60*60));
diff -= horas*(1000*60*60);

let minutos = Math.floor(diff / (1000*60));
diff -= minutos*(1000*60);

let segundos = Math.floor(diff/1000);

return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

function animarNumero(elemento, valorFinal){
  elemento.style.opacity=0;
  setTimeout(()=>{
    elemento.innerText = valorFinal;
    elemento.style.opacity=1;
  },200);
}

function atualizar(){
  animarNumero(document.getElementById("contadorAylla"), calcularTempo(dataAylla));
  animarNumero(document.getElementById("contadorOficial"), calcularTempo(dataOficial));
}

setInterval(atualizar,1000);
atualizar();

/* ALTERNAR VERSÃO */

function alternarVersao(){
const card = document.getElementById("card");
const msg = document.getElementById("mensagemHumor");

card.classList.toggle("oficial");
card.classList.toggle("aylla");

if(card.classList.contains("oficial")){
msg.innerText="Sistema atualizado para versão oficial do programador.";
}else{
msg.innerText="Rollback aplicado com sucesso. Versão original restaurada.";
}
}

/* LUZ MOUSE */

const card = document.getElementById("card");

card.addEventListener("mousemove",(e)=>{
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty('--x', x+'px');
  card.style.setProperty('--y', y+'px');
});

/* PARTÍCULAS */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{
constructor(){
this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;
this.size = Math.random()*2;
this.speedX = Math.random()*0.5-0.25;
this.speedY = Math.random()*0.5-0.25;
}
update(){ this.x+=this.speedX; this.y+=this.speedY; }
draw(){
ctx.fillStyle="rgba(255,255,255,0.3)";
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();
}
}

for(let i=0;i<100;i++){
particlesArray.push(new Particle());
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particlesArray.forEach(p=>{ p.update(); p.draw(); });
requestAnimationFrame(animate);
}
animate();

/* REVELAR GALERIA */

const imagens = document.querySelectorAll(".galeria img");

function revelarImagens(){
  const trigger = window.innerHeight * 0.85;
  imagens.forEach(img=>{
    const top = img.getBoundingClientRect().top;
    if(top < trigger){
      img.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revelarImagens);
window.addEventListener("load", revelarImagens);

/* SOM */

const tudum = new Audio("tudum.mp3");
tudum.volume = 0.4;

window.addEventListener("load",()=>{
  setTimeout(()=>{ tudum.play(); },500);
});

document.body.addEventListener("click",()=>{
const musica = document.getElementById("bgMusic");
musica.volume = 0.2;
musica.play();
},{once:true});
