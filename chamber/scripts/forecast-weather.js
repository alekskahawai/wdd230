const forecast1 = document.querySelector('#forecast-1');
const forecast2 = document.querySelector('#forecast-2');
const forecast3 = document.querySelector('#forecast-3');

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=56.97&lon=24.10&appid=bd5c2931011c54c7ccaf7bdace44278d&units=metric'

async function forecastApiFetch() {
    const response = await fetch(forecastURL);
    const data = await response.json();
    displayForecastResults(data);

}

function displayForecastResults(data) {

    forecast1.innerHTML = `${data.list[4].dt_txt.slice(0, 10)}:   ${data.list[4].main.temp | 0}&deg;C`;
    forecast2.innerHTML = `${data.list[12].dt_txt.slice(0, 10)}:   ${data.list[12].main.temp | 0}&deg;C`;
    forecast3.innerHTML = `${data.list[20].dt_txt.slice(0, 10)}:   ${data.list[20].main.temp | 0}&deg;C`;
}
/* function displayForecastResults(data) {
    currentTemp.innerHTML = `${data.main.temp | 0}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
} */

forecastApiFetch();