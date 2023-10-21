const baseURL = "https://alekskahawai.github.io/wdd230/";
const linksURL = "https://alekskahawai.github.io/wdd230/data/links.json";

const links = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let li = document.createElement('li');

        li.textContent = `${week.week}:`;

        links.appendChild('li');

        week.links.forEach((link) => {
            li.textContent += ` <a href="${link.url}">${link.title}</a> | `;
        })


    })
}

getLinks();