const dataAylla = new Date("2024-11-21T00:00:00");
const dataOficial = new Date("2025-04-04T00:00:00");

let modo = "aylla";

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

function atualizar(){
document.getElementById("contadorAylla").innerText =
calcularTempo(dataAylla);

document.getElementById("contadorOficial").innerText =
calcularTempo(dataOficial);
}

setInterval(atualizar,1000);
atualizar();

function alternarVersao(){
const card = document.getElementById("card");
const msg = document.getElementById("mensagemHumor");

card.classList.remove("aylla","oficial");

if(modo==="aylla"){
modo="oficial";
card.classList.add("oficial");
msg.innerText="Sistema atualizado para versão oficial do programador.";
}else{
modo="aylla";
card.classList.add("aylla");
msg.innerText="Rollback aplicado com sucesso. Versão original restaurada.";
}
}

/* Partículas */

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
update(){
this.x+=this.speedX;
this.y+=this.speedY;
}
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
particlesArray.forEach(p=>{
p.update();
p.draw();
});
requestAnimationFrame(animate);
}

animate();

/* Música (inicia ao primeiro clique) */

document.body.addEventListener("click",()=>{
document.getElementById("bgMusic").play();
},{once:true});
