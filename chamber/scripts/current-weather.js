const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const captionDesc = document.querySelector('.weather-desc');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=56.97&lon=24.10&appid=bd5c2931011c54c7ccaf7bdace44278d&units=metric'

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp | 0}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();