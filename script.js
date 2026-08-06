// ==========================
// CINEMATIC I'M SORRY WEBSITE
// PART 2
// ==========================

const text =
"Some feelings are easier to write than to say... ❤️";

const typing = document.getElementById("typing");
const button = document.getElementById("beginBtn");
const intro = document.getElementById("intro");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

window.onload = () => {

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.transition = "1.5s";
        intro.style.opacity = "1";
    }, 200);

    setTimeout(typeWriter, 1200);

};

button.addEventListener("click", () => {

    button.innerHTML = "Opening... 💌";

    intro.style.transition = "1s";
    intro.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "envelope.html";

    }, 1000);

});
