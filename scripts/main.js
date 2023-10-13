// dark mode button
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    main.classList.toggle('dark');
    if (modeButton.textContent.includes("🌗")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "☀️";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🌗";
    }
});

// responsive navigation 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

/* number of visits: https://codepen.io/blazzard-jason/pen/RwyePNj */
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-localStorage")) || 0;
if (numVisits == 0) {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
} else {
    visitsDisplay.textContent = numVisits;
}
numVisits++;
localStorage.setItem("numVisits-localStorage", numVisits);


// footer 
// current year
document.querySelector('#year').textContent = new Date().getFullYear();
// last Modified
document.querySelector('#lastModified').textContent = Date(document.lastModified);
