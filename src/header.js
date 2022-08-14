
const header = () => {
    const content = document.querySelector('#content');
    // page header
    const header = document.createElement('div');
    content.appendChild(header);
    header.classList.add('header');
    header.setAttribute('id', 'header');

    // title restaurant
    const title = document.createElement('h2');
    header.appendChild(title);
    title.textContent = 'Restaurante';

    // unordered list
    const ul = document.createElement('ul');
    header.appendChild(ul);
    ul.setAttribute('id', 'ul');

    // list home
    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#home');
    ul.appendChild(home);
    homeLink.textContent = 'Home';
    home.appendChild(homeLink);
    homeLink.classList.add('homeLink');

    //  list menu
    const menu = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#menu');
    menu.appendChild(menuLink);
    ul.appendChild(menu);
    menuLink.textContent = 'Menu';
    menuLink.classList.add('menuLink');

    // list contact
    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', '#contact');
    ul.appendChild(contact);
    contactLink.textContent = 'Contact';
    contact.appendChild(contactLink);
    contactLink.classList.add('contactLink');
}

export default header();