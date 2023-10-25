const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=46.18&lon=7.02&appid=bd5c2931011c54c7ccaf7bdace44278d&units=metric'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // currentTemp.innerHTML = `${data.main.temp.toString().substring(0, 2)}&deg;C`;
    currentTemp.innerHTML = `${data.main.temp | 0}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();