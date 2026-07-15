/* ===========================
   TYPING EFFECT
=========================== */

const text = "You are special ❤️ Happy Birthday!";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

/* ===========================
   MUSIC TOGGLE
=========================== */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Music";
    }
});

/* ===========================
   SURPRISE POPUP
=========================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.querySelector(".popup");
const closeBtn = document.getElementById("close");

surpriseBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

/* ===========================
   SIMPLE CONFETTI EFFECT
=========================== */

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "20px";
    confetti.style.zIndex = "9999";
    confetti.style.animation = "fall 3s linear forwards";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

setInterval(createConfetti, 300);

/* ===========================
   CONFETTI ANIMATION STYLE
=========================== */

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

/* ===========================
   CAKE CLICK EFFECT
=========================== */

const cake = document.querySelector(".cake-body");

cake.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        createConfetti();
    }
    alert("🎂 Make a wish! 🎂");
});

/* ===========================
   BACKGROUND HEARTS SPAWN
=========================== */

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "18px";
    heart.style.opacity = "0.7";
    heart.style.animation = "rise 6s linear forwards";
    heart.style.zIndex = "1";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

/* ===========================
   HEART ANIMATION STYLE
=========================== */

const style2 = document.createElement("style");
style2.innerHTML = `
@keyframes rise {
    to {
        transform: translateY(-110vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style2);

/* ===========================
   AUTO OPEN SURPRISE AFTER TIME
=========================== */

setTimeout(() => {
    popup.style.display = "flex";
}, 10000);

// ===========================
// REVEAL MEMORY ON CLICK
// ===========================

function reveal(card){
    card.classList.toggle("active");
}