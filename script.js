// Typing Effect
const text = `
> relationship init
> loading data...
> partner: Bruno
> requested_by: Aylla
> request_date: 04/04/2025
> merge_status: accepted
> status: STABLE
`;

let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 40);
  }
}
typingEffect();


// Counter
const startDate = new Date("2025-04-04T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timeTogether").innerHTML =
    `${days} days ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCounter, 1000);
updateCounter();


// Lightbox
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


// Fade-in on Scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(el => observer.observe(el));


// Music Control
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

music.volume = 0.2;

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "Pause Music 🎵";
  } else {
    music.pause();
    toggleBtn.textContent = "Play Music 🎵";
  }
});


// Console Easter Egg
console.log("Se você abriu o console...");
console.log("Você já sabe que eu amo você.");
console.log("Mas oficialmente:");
console.log("Eu escolheria você em todas as versões da minha vida ❤️");