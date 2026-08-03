// =========================================
// Dreamy Birthday Countdown
// =========================================

// Set the unlock date
// Change the year if needed
const unlockDate = new Date("August 19, 2026 00:00:00").getTime();

// Countdown Elements
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Update Countdown
function updateCountdown() {

    const now = new Date().getTime();

    const distance = unlockDate - now;

    // Time reached
    if (distance <= 0) {

        clearInterval(timer);

        document.querySelector(".glass").style.animation = "none";

        document.querySelector(".glass").innerHTML = `
            <div class="heart-icon">💖</div>

            <h1>Happy Birthday!</h1>

            <p style="margin-top:20px;font-size:18px;">
                Your surprise is ready...
            </p>
        `;

        // Wait 4 seconds then open surprise page
        setTimeout(() => {

            window.location.href = "surprise/index.html";

        }, 4000);

        return;
    }

    // Calculate Time

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

// Run Immediately
updateCountdown();

// Update Every Second
const timer = setInterval(updateCountdown, 1000);

// =========================================
// Mouse Sparkles
// =========================================

const sparkleContainer = document.getElementById("sparkles");

document.addEventListener("mousemove", function (e) {

    const sparkle = document.createElement("span");

    sparkle.classList.add("sparkle");

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    sparkle.innerHTML = "✨";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 1000);

});

// =========================================
// Random Floating Hearts
// =========================================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-50px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.opacity = "0.8";

    heart.style.pointerEvents = "none";

    heart.style.transition = "all 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}, 1800);

// =========================================
// Sparkle CSS Inject
// =========================================

const style = document.createElement("style");

style.innerHTML = `

.sparkle{

position:fixed;

pointer-events:none;

font-size:18px;

animation:sparkle 1s linear forwards;

}

@keyframes sparkle{

0%{

opacity:1;
transform:scale(1);

}

100%{

opacity:0;
transform:translateY(-40px) scale(2);

}

}

`;

document.head.appendChild(style);

// =========================================
// Greeting Based On Time
// =========================================

const hour = new Date().getHours();

if (hour >= 18) {

    console.log("Good Evening 🌙");

} else if (hour >= 12) {

    console.log("Good Afternoon ☀️");

} else {

    console.log("Good Morning 🌸");

}