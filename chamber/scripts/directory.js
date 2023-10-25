const url = 'https://alekskahawai.github.io/wdd230/chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let companyName = document.createElement('h2');
        let companyLogo = document.createElement('img');
        let membershipLevel = document.createElement('p');
        let companyAddress = document.createElement('p');
        let companyTelephone = document.createElement('p');
        let companyWebsite = document.createElement('p');

        

        companyName.textContent = `${member.name}`;

        companyLogo.setAttribute('src', member.img);
        companyLogo.setAttribute('alt', member.alt);
        companyLogo.setAttribute('loading', 'lazy');
        companyLogo.setAttribute('width', '400');
        companyLogo.setAttribute('height', '100');


        membershipLevel.textContent = `Membership level: ${member.membership}`;
        companyAddress.textContent = member.address;
        companyTelephone.textContent = member.phone;
        companyWebsite.textContent = member.url;

        // Append the section(card) with the created elements
        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(membershipLevel);
        card.appendChild(companyAddress);
        card.appendChild(companyTelephone);
        card.appendChild(companyWebsite);

        cards.appendChild(card);
    });
}

getMemberData();

/* grid & list buttons */
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
