/* TERMINAL TYPING */

const textLines=[
"> initializing love protocol...",
"> connecting two hearts...",
"> compiling memories...",
"> no errors found.",
"> launching forever.exe"
];

let lineIndex=0;
let charIndex=0;

function typeTerminal(){

    const terminal=document.getElementById("terminal-text");

    if(lineIndex<textLines.length){

        if(charIndex<textLines[lineIndex].length){
            terminal.innerHTML+=textLines[lineIndex].charAt(charIndex);
            charIndex++;

            setTimeout(typeTerminal,40);

        }else{
            terminal.innerHTML+="<br>";
            charIndex=0;
            lineIndex++;

            setTimeout(typeTerminal,600);
        }
    }else{
        setTimeout(()=>{
            document.getElementById("loader").style.display="none";
        },1000);
    }
}

window.onload=typeTerminal;

/* MUSIC FADE IN */

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

    document.getElementById(id).innerHTML=
        `${days} dias, ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(()=>{

    updateCounter("counter-aylla","2024-11-21T00:00:00");
    updateCounter("counter-bruno","2025-04-04T00:00:00");

},1000);

/* SCROLL REVEAL */

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    observer.observe(sec);
});

/* FOREVER.EXE EASTER EGG */

document.getElementById("forever-btn").addEventListener("click",()=>{

    document.body.style.transition="2s";
    document.body.style.filter="brightness(1.4) blur(2px)";

    setTimeout(()=>{
        alert("💖 Processo iniciado...\nCompilando futuro ao seu lado...\nAmor executado com sucesso.");
    },800);

    setTimeout(()=>{
        document.body.style.filter="none";
    },2000);

});
/* ===============================
   MENU NAVIGATION ACTIONS
=============================== */

function scrollToSection(selector){
    const el = document.querySelector(selector);

    if(el){
        el.scrollIntoView({
            behavior:"smooth"
        });
    }
}

/* HOME */

document.getElementById("menu-home").addEventListener("click",()=>{
    scrollToSection(".hero");
});

/* HISTÓRIA */

document.getElementById("menu-historia").addEventListener("click",()=>{
    alert("💌 História de nós dois — página em construção.");
});

/* MEMÓRIAS */

document.getElementById("menu-memorias").addEventListener("click",()=>{
    alert("📸 Galeria de memórias ainda não vinculada.");
});

/* MOTIVOS */

document.getElementById("menu-motivos").addEventListener("click",()=>{
    alert("❤️ 10 razões para amar você.");
});
