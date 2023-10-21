const baseURL = "https://alekskahawai.github.io/wdd230/";
const linksURL = "https://alekskahawai.github.io/wdd230/data/links.json";

const links = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data);
}

const displayLinks = (weeks) => {
    // loop through the array of weeks
    weeks.forEach((week) => {
        const listItem = document.createElement("li");
        links.appendChild(listItem);
        listItem.innerHTML = `${week.week}:`;

        // loop through each link section
        week.links.forEach((link) => {
            console.log(link.title); console.log(link.url);
            listItem.innerHTML += ` <a href="${link.url}">${link.title}</a> | `;
        })
    })
}

/* const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let li = document.createElement('li');

        li.textContent = `${week.week}:`;

        links.appendChild('li');

        week.links.forEach((link) => {
            li.textContent += ` <a href="${link.url}">${link.title}</a> | `;
        })


    })
} */

getLinks();