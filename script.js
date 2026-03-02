// PROGRESSO GLOBAL
window.addEventListener("scroll",()=>{
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    document.querySelector(".progress-bar").style.width =
        (scrollTop/height)*100 + "%";
});

// CAPÍTULOS STREAMING
let current = 0;
const chapters = document.querySelectorAll(".chapter");
const transition = document.querySelector(".page-transition");
const chapterBar = document.querySelector(".chapter-bar");

function showChapter(index){
    transition.classList.add("active");

    setTimeout(()=>{
        chapters[current].classList.remove("active");
        current = index;
        chapters[current].classList.add("active");
        chapterBar.style.width = ((current+1)/chapters.length)*100 + "%";
        transition.classList.remove("active");
    },600);
}

document.getElementById("next").onclick = ()=>{
    if(current < chapters.length-1){
        showChapter(current+1);
    }
};

document.getElementById("prev").onclick = ()=>{
    if(current > 0){
        showChapter(current-1);
    }
};

// LIGHTBOX CINEMA
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

document.querySelectorAll(".lightbox-trigger").forEach(img=>{
    img.addEventListener("click",()=>{
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

document.querySelector(".close-lightbox").onclick = ()=>{
    lightbox.classList.remove("active");
};

// FOREVER DARK IMMERSIVE
document.getElementById("foreverBtn").addEventListener("click",()=>{
    document.body.classList.toggle("dark-romantic");
});
