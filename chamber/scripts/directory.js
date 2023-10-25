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

        // Build the h2 content out to show the member's full name
        companyName.textContent = `${member.name}`;

        // Build the image companyLogo by setting all the relevant attributes
        companyLogo.setAttribute('src', member.img);
        companyLogo.setAttribute('alt', member.alt);
        companyLogo.setAttribute('loading', 'lazy');
        companyLogo.setAttribute('width', '400');
        companyLogo.setAttribute('height', '100');

        // Build 2 paragraphs with birth details
        membershipLevel.textContent = `Date of Birth: ${member.membershipLevel}`;
        companyAddress.textContent = `Place of Birth: ${member.companyAddress}`;

        // Append the section(card) with the created elements
        card.appendChild(companyName);
        card.appendChild(membershipLevel);
        card.appendChild(companyAddress);
        card.appendChild(companyLogo);

        cards.appendChild(card);
    });
}

getMemberData();