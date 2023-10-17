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

// footer 
// current year
document.querySelector('#year').textContent = new Date().getFullYear();
// last Modified
document.querySelector('#lastModified').textContent = Date(document.lastModified);
