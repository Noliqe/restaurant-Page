
const header = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    content.appendChild(header);
    header.classList.add('header');
    header.setAttribute('id', 'header');

    const title = document.createElement('h2');
    header.appendChild(title);
    title.textContent = 'Restaurante';

    const ul = document.createElement('ul');
    header.appendChild(ul);
    ul.setAttribute('id', 'ul');
    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#home');
    ul.appendChild(home);
    homeLink.textContent = 'Home';
    home.appendChild(homeLink);

    const about = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.setAttribute('href', '#about');
    ul.appendChild(about);
    aboutLink.textContent = 'About';
    about.appendChild(aboutLink);

    const menu = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#menu');
    menu.appendChild(menuLink);
    ul.appendChild(menu);
    menuLink.textContent = 'Menu';
    

}

export default header();