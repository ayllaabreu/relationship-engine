let chapters = document.querySelectorAll("section");
let current = 0;

function startStory() {
    document.getElementById("bgMusic").play();
    showChapter(1);
}

function showChapter(index) {
    chapters.forEach(sec => sec.classList.remove("active"));
    chapters[index].classList.add("active");
    current = index;
}

function nextChapter() {
    if (current < chapters.length - 1) {
        showChapter(current + 1);
    }
}

function prevChapter() {
    if (current > 0) {
        showChapter(current - 1);
    }
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

/* CONTADORES */
function updateCounter(id, startDate) {
    const element = document.getElementById(id);
    setInterval(() => {
        const now = new Date();
        const diff = now - new Date(startDate);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        element.innerHTML = `${days} dias ${hours}h ${minutes}m ${seconds}s`;
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
    if (startX - endX > 50) nextChapter();
    if (endX - startX > 50) prevChapter();
});
