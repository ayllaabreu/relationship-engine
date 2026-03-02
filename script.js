const sections = document.querySelectorAll("section");
let current = 0;

function startStory() {
    document.getElementById("bgMusic").play();
    showSection(1);
}

function showSection(index) {
    sections.forEach(sec => sec.classList.remove("active"));
    sections[index].classList.add("active");
    current = index;
}

function nextChapter() {
    if (current < sections.length - 1) {
        showSection(current + 1);
    }
}

function prevChapter() {
    if (current > 0) {
        showSection(current - 1);
    }
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    music.paused ? music.play() : music.pause();
}

/* CONTADORES */
function updateCounter(id, date) {
    const element = document.getElementById(id);
    setInterval(() => {
        const now = new Date();
        const diff = now - new Date(date);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        element.innerHTML = `${days} dias • ${hours}h • ${minutes}m • ${seconds}s`;
    }, 1000);
}

updateCounter("counter1", "2024-11-21");
updateCounter("counter2", "2025-04-04");

/* SWIPE MOBILE */
let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 60) nextChapter();
    if (endX - startX > 60) prevChapter();
});
