/* ==========================
   Love Letter Text
========================== */

const letter = `Hiii babyyy koo,there's something I want to tell you po. I've been thinking about this for a while now. Like, gusto po kitang ligawan, pero paano po babyy? How po? Hindi po ako marunong kapag online ligaw. Marunong po ako kapag personal po, hindi po dahil may experience na po ako. Dahil po sa mga tropa ko. Nagtanong po ako sa kanila, just in case na may ligawan ako. Gusto po kitang ligawan kasi gusto kong maging official na po tayo. And I also want to say that I am so lucky to have you. Like, sobrang swerte po, kasi ikaw lang po ang hindi sumuko sakin. Ikaw lang babyyy, as in. Thank you for loving me kahit sobrang dami kong flaw and red flags na kailangang ayusin. Don't worry po aayusin ko po yung mga red flags ko para sayo po. Tinatanong mo po kung anong red flags yun. Yung mga ano po, like iniiwan ka agad kapag may problems and misunderstanding, nagpapadala po ako sa emotions ko. Alam ko pong marami pa na napapansin mo po and don't be scared na sabihin mo po yun sakin. Sobrang swerte ko sayo babyyy, thank you kasi pinagkakatiwalaan mo pa rin ako kahit ilang beses ko ng nasira ang tiwala mo. Thank you for accepting and loving me for who I am. And thank you for staying kahit sobrang dami na nating pinag-aawayan and sobrang seloso ko babyy. And I want to love you din po in a genuine way. I want to give you flowers, surprise you with gifts, take you out on dates, and write you handwritten letters. Pero ngayon babyyy, ito po muna ha. Tsaka na po yan kapag nagkita na po tayo and may money na po ako, ok pooo babyyy? I love you soooo muchhhh babyyyy kooo mwaaaaa mwaaaaa mwaaaaa ❤️`;

/* ==========================
   Elements
========================== */

const envelope = document.getElementById("envelope");
const letterPage = document.getElementById("letterPage");
const typingText = document.getElementById("typingText");
const closeBtn = document.getElementById("closeBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let index = 0;
let started = false;

/* ==========================
   Music Button
========================== */

musicBtn.onclick = () => {

    if (music.paused) {

        music.play().catch(() => {});
        musicBtn.textContent = "🔊";

    } else {

        music.pause();
        musicBtn.textContent = "🎵";

    }

};
/* ==========================
   Envelope Opening
========================== */

envelope.addEventListener("click", () => {

    if (started) return;

    started = true;

    // Start music after first interaction
    music.play().catch(() => {});
    musicBtn.textContent = "🔊";

    // Hide envelope
    envelope.style.transform = "scale(0)";
    envelope.style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".container").style.display = "none";

        letterPage.classList.add("show");

        typeLetter();

    }, 700);

});

/* ==========================
   Typewriter Effect
========================== */

function typeLetter() {

    if (index < letter.length) {

        typingText.textContent += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 25);

    }

}

/* ==========================
   Close Button
========================== */

closeBtn.addEventListener("click", () => {

    letterPage.classList.remove("show");

    document.querySelector(".container").style.display = "flex";

    envelope.style.opacity = "1";
    envelope.style.transform = "scale(1)";

    typingText.textContent = "";
    index = 0;
    started = false;


  /* ==========================
   Floating Hearts
========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 500);

/* ==========================
   Music Starts After First Tap
========================== */

document.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(() => {});

        musicBtn.textContent = "🔊";

    }

}, { once: true });

/* ==========================
   Keyboard Support
========================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (letterPage.classList.contains("show")) {

            closeBtn.click();

        }

    }

});

/* ==========================
   Prevent Text Selection
========================== */

document.addEventListener("dragstart", e => {

    e.preventDefault();

});

document.addEventListener("selectstart", e => {

    e.preventDefault();

});

/* ==========================
   Finished ❤️
========================== */

console.log("Love Letter Website Loaded ❤️");

});
