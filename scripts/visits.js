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