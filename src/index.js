import './style.css';
import header from './header.js';
//import topNavi from './nav.js';

const content = document.body.querySelector('#content');
const backgroundHeader = document.createElement('div');
content.appendChild(backgroundHeader);

backgroundHeader.classList.add('backgroundHeader');
backgroundHeader.setAttribute('id', 'backgroundHeader');

const homeScreen = () => {

    const backgroundContent = document.createElement('div');
    backgroundHeader.appendChild(backgroundContent);
    backgroundContent.classList.add('backgroundContent');
    backgroundContent.setAttribute('id', 'backgroundContent');

    const openingTimes = document.createElement('h2');
    backgroundContent.appendChild(openingTimes);
    openingTimes.textContent = 'OPENING HOURS:';
    const times = document.createElement('h3');
    openingTimes.appendChild(times);
    times.textContent = 'All days open from 16:00 to 22:00';

    const toReserve = document.createElement('h2');
    backgroundContent.appendChild(toReserve);
    toReserve.textContent = 'TO RESERVE';
    const reserve = document.createElement('h3');
    toReserve.appendChild(reserve);
    reserve.textContent = 'Only possible with the completed reservation form';

    const visit = document.createElement('h2');
    backgroundContent.appendChild(visit);
    visit.textContent = 'COME VISIT US';
    const adress = document.createElement('h3');
    visit.appendChild(adress);
    adress.textContent = 'Barcelona, Spain';

    const reserveLink = document.createElement('a');
    toReserve.appendChild(reserveLink);
    reserveLink.setAttribute('href', '#reserve');
    reserveLink.textContent = 'Reserve';
    reserveLink.classList.add('reserveLink')


    const homeContent = document.createElement('div');
    content.appendChild(homeContent);
    homeContent.classList.add('homeContent');
    homeContent.setAttribute('id', 'homeContent');

    const homeContentLeft = document.createElement('div');
    homeContent.appendChild(homeContentLeft);
    homeContentLeft.classList.add('homeContentLeft');
    homeContentLeft.setAttribute('id', 'homeContentLeft');

    const titleLeft = document.createElement('h1');
    homeContentLeft.appendChild(titleLeft);
    titleLeft.textContent = 'Spain at it\'s best';

    const textLeft = document.createElement('h2');
    homeContentLeft.appendChild(textLeft);
    textLeft.textContent = 'finest food since 2008';

    const mainTextLeft = document.createElement('h3');
    homeContentLeft.appendChild(mainTextLeft);
    mainTextLeft.textContent = 'Restaurante has built a great reputation for strict enforcement of the high quality of their product and for the absolute dedication to serving the guests. The basis of all this is the famous food made from deliciously tender and expertly spanish meat and fish. Under no circumstances does Restaurante compromise on this quality standard. That is why Restaurante will continue to meet your high expectations in the future.';



    const homeContentRight = document.createElement('div');
    homeContent.appendChild(homeContentRight);
    homeContentRight.classList.add('homeContentRight');
    homeContentRight.setAttribute('id', 'homeContentRight');
}

homeScreen();