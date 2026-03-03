// PROGRESS BAR
window.addEventListener("scroll",()=>{
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    document.querySelector(".progress-bar").style.width =
        (scrollTop/height)*100 + "%";
});

// CURSOR GLOW
const cursor = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// CONTADOR (defina a data de início aqui)
const startDate = new Date("2023-01-01");

function updateCounter(){
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
}

setInterval(updateCounter,1000);
updateCounter();

// FOREVER MODE
document.getElementById("foreverBtn").addEventListener("click",()=>{
    document.body.classList.toggle("dark-romantic");
});
