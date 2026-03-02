
/* INTRO TERMINAL STYLE */

const intro=document.getElementById("cinematic-intro");

setTimeout(()=>{
if(intro) intro.style.display="none";
},4000);

/* MUSIC FADE */

function smoothMusicStart(){

const music=document.getElementById("bg-music");

music.volume=0;

music.play().catch(()=>{});

let vol=0;

const fade=setInterval(()=>{

if(vol<0.4){
vol+=0.02;
music.volume=vol;
}else clearInterval(fade);

},150);
}

window.addEventListener("load",()=>setTimeout(smoothMusicStart,2000));

/* MENU ULTRA PROFISSIONAL */

document.querySelectorAll(".menu-romantico li[data-target]")
.forEach(item=>{

item.addEventListener("click",()=>{

const target=item.dataset.target;
const section=document.getElementById(target);

if(section){
section.scrollIntoView({
behavior:"smooth",
block:"start"
});
}

});

});

/* FOREVER EASTER EGG */

document.getElementById("forever-btn").addEventListener("click",()=>{

document.body.style.transition="2s";
document.body.style.filter="brightness(1.3) blur(2px)";

setTimeout(()=>{
alert("💖 Compilando futuro ao seu lado...");
},800);

setTimeout(()=>{
document.body.style.filter="none";
},2000);

});

/* SCROLL REVEAL */

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
});

document.querySelectorAll(".section-fade").forEach(sec=>{
observer.observe(sec);
});

/* PARALLAX MOUSE */

document.addEventListener("mousemove",e=>{

const moveX=(e.clientX-window.innerWidth/2)*0.002;
const moveY=(e.clientY-window.innerHeight/2)*0.002;

const layer2=document.querySelector(".layer2");
const layer3=document.querySelector(".layer3");

if(layer2 && layer3){

layer2.style.transform=`translate(${moveX*40}px,${moveY*40}px)`;
layer3.style.transform=`translate(${moveX*80}px,${moveY*80}px)`;

}

});

/* COUNTERS */

function updateCounter(id,startDate){

const start=new Date(startDate);
const now=new Date();

const diff=now-start;

const days=Math.floor(diff/(1000*60*60*24));
const hours=Math.floor(diff/(1000*60*60)%24);
const minutes=Math.floor(diff/(1000*60)%60);
const seconds=Math.floor(diff/1000%60);

const el=document.getElementById(id);

if(el){
el.innerHTML=`${days} dias, ${hours}h ${minutes}m ${seconds}s`;
}

}

setInterval(()=>{

updateCounter("counter-aylla","2024-11-21T00:00:00");
updateCounter("counter-bruno","2025-04-04T00:00:00");

},1000);
