/* CONTADOR */
const start1 = new Date("2024-11-21T00:00:00");
const start2 = new Date("2025-04-04T00:00:00");

function updateCounter(){
    const now = new Date();
    const diff1 = now - start1;
    const diff2 = now - start2;

    const days1 = Math.floor(diff1/(1000*60*60*24));
    const days2 = Math.floor(diff2/(1000*60*60*24));

    document.getElementById("counter").innerHTML =
    `Desde 21/11/2024: ${days1} dias juntos 💕<br>
         Desde 04/04/2025: ${days2} dias oficiais 💍`;
}

setInterval(updateCounter,1000);
updateCounter();

/* MÚSICA */
const music = document.getElementById("bgMusic");
let started = false;

function startMusic(){
    if(!started){
        music.volume = 0;
        music.play().catch(()=>{});
        let vol = 0;
        const fade = setInterval(()=>{
            if(vol < 0.6){
                vol += 0.02;
                music.volume = vol;
            }else{
                clearInterval(fade);
            }
        },200);
        started = true;
    }
}
document.addEventListener("click", startMusic);

/* FOREVER */
const overlay = document.getElementById("foreverOverlay");
const foreverText = document.getElementById("foreverText");

function typeWriter(text, speed = 35){
    let i = 0;
    foreverText.innerHTML = "";
    function typing(){
        if(i < text.length){
            foreverText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function forever(){
    overlay.classList.add("active");

    const scriptText = `
> Executando forever.exe...
> Inicializando AmorInfinito.dll
> Verificando compatibilidade...
> 100% Alma Gêmea detectada
> Sincronizando batimentos...
> Conexão permanente estabelecida ❤️
> Status: Eternidade ativada
`;

    typeWriter(scriptText);
}

function closeForever(){
    overlay.classList.remove("active");
}
