// responsive navigation 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// days between visits
const visitsDisplay = document.querySelector(".visits");

const ms24Hrs = 84600000; // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day

const newDate = new Date();
const today = Date.now();

// Using localStorage to store the latest visit date by the client, display one of three possible messages about the time between page visits in the sidebar content area.
let previousVisit = Number(window.localStorage.getItem("previousVisit")) || 0;

// If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
if (previousVisit == 0) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}

// If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
else if (previousVisit > today - ms24Hrs) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
}

// Otherwise, display the number of days in a message like this: "You last visited n days ago.", where n is the actual, whole number of days between visits. If the number of days is 1, then change the language to "day" not "days".
else {
    let daysBetween = ((today - previousVisit) / ms24Hrs | 0);

    if (daysBetween == 1) {
        visitsDisplay.textContent = `You last visited ${daysBetween} day ago.`
    }
    else {
        visitsDisplay.textContent = `You last visited ${daysBetween} days ago.`
    }
}

localStorage.setItem("previousVisit", today);

// footer 
// current year
document.querySelector('#year').textContent = new Date().getFullYear();
// last Modified
document.querySelector('#lastModified').textContent = Date(document.lastModified);
