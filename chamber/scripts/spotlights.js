const urlJSON = 'https://alekskahawai.github.io/wdd230/chamber/data/members.json';

const membersAdds = document.querySelector('#members-adds');

async function getMemberData() {
    const response = await fetch(urlJSON);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let companyLogo = document.createElement('img');
        let companyName = document.createElement('h3');
        let membershipLevel = document.createElement('p');
        let companyAddress = document.createElement('p');
        let companyTelephone = document.createElement('p');
        let companyWebsite = document.createElement('p');

        companyLogo.setAttribute('src', member.img);
        companyLogo.setAttribute('alt', member.alt);
        companyLogo.setAttribute('loading', 'lazy');
        companyLogo.setAttribute('width', '250');
        companyLogo.setAttribute('height', '300');

        companyName.textContent = `${member.name}`;

        membershipLevel.textContent = `Membership level: ${member.membership}`;
        companyAddress.textContent = member.address;
        companyTelephone.textContent = member.phone;
        companyWebsite.textContent = member.url;

        // Append the section(card) with the created elements
        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(companyAddress);
        card.appendChild(companyTelephone);
        card.appendChild(companyWebsite);
        card.appendChild(membershipLevel);

        membersAdds.appendChild(card);
    });
}

getMemberData();