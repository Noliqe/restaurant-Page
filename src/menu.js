const menuScreen = () => {

    let menu = () => {
        //background div
        const background = document.createElement('div');
        content.appendChild(background);
        background.classList.add('backgroundMenu');
        background.setAttribute('id', 'background');
        //background image
        const backgroundImage = document.createElement('div');
        background.appendChild(backgroundImage);
        backgroundImage.classList.add('backgroundImage');
        // content div for menu
        const menuContent = document.createElement('div');
        background.appendChild(menuContent);
        menuContent.classList.add('menuContent');
        // title menu
        const menuTitle = document.createElement('h1');
        menuContent.appendChild(menuTitle);
        menuTitle.classList.add('menuTitle');
        menuTitle.textContent = 'Our menu';
        // under title menu
        const underTitle = document.createElement('p');
        menuTitle.appendChild(underTitle);
        underTitle.textContent = 'We use only fresh and carefully chosen ingredients to prepare all our authentic, Spanish dishes.';

        // starters
        const titleStarter = document.createElement('h2');
        menuContent.appendChild(titleStarter);
        titleStarter.classList.add('titleStarter');
        titleStarter.textContent = 'Starters';

        const starters = document.createElement('div');
        menuContent.appendChild(starters);
        starters.classList.add('starters');

        const starter = document.createElement('h3');
        starters.appendChild(starter);
        starter.textContent = 'Lorem ipsum dolor sit amet';
        const ingredients = document.createElement('p');
        starters.appendChild(ingredients);
        ingredients.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing';

        const starter2 = document.createElement('h3');
        starters.appendChild(starter2);
        starter2.textContent = 'Aliquam malesuada molestie mattis';
        const ingredients2 = document.createElement('p');
        starters.appendChild(ingredients2);
        ingredients2.textContent = 'Maecenas molestie arcu quis neque convallis luctus';

        const starter3 = document.createElement('h3');
        starters.appendChild(starter3);
        starter3.textContent = 'Fusce orci ligula, pharetra sed tortor quis';
        const ingredients3 = document.createElement('p');
        starters.appendChild(ingredients3);
        ingredients3.textContent = 'Class aptent taciti sociosqu ad litora torquent per conubia nostra';

        // main dish
        const titleMain = document.createElement('h2');
        menuContent.appendChild(titleMain);
        titleMain.classList.add('titleStarter');
        titleMain.textContent = 'Main Course';

        const mainDishes = document.createElement('div');
        menuContent.appendChild(mainDishes);
        mainDishes.classList.add('starters');

        const main = document.createElement('h3');
        mainDishes.appendChild(main);
        main.textContent = 'Lorem ipsum dolor sit amet';
        const mainIngredients = document.createElement('p');
        mainDishes.appendChild(mainIngredients);
        mainIngredients.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing';

        const main2 = document.createElement('h3');
        mainDishes.appendChild(main2);
        main2.textContent = 'Aliquam malesuada molestie mattis';
        const mainIngredients2 = document.createElement('p');
        mainDishes.appendChild(mainIngredients2);
        mainIngredients2.textContent = 'Maecenas molestie arcu quis neque convallis luctus';

        const main3 = document.createElement('h3');
        mainDishes.appendChild(main3);
        main3.textContent = 'Fusce orci ligula, pharetra sed tortor quis';
        const mainIngredients3 = document.createElement('p');
        mainDishes.appendChild(mainIngredients3);
        mainIngredients3.textContent = 'Class aptent taciti sociosqu ad litora torquent per conubia nostra';

        // desserts
        const titleDessert = document.createElement('h2');
        menuContent.appendChild(titleDessert);
        titleDessert.classList.add('titleStarter');
        titleDessert.textContent = 'Desserts';

        const dessertsContent = document.createElement('div');
        menuContent.appendChild(dessertsContent);
        dessertsContent.classList.add('starters');

        const dessert = document.createElement('h3');
        dessertsContent.appendChild(dessert);
        dessert.textContent = 'Lorem ipsum dolor sit amet';
        const dessertIngredients = document.createElement('p');
        dessertsContent.appendChild(dessertIngredients);
        dessertIngredients.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing';

        const dessert2 = document.createElement('h3');
        dessertsContent.appendChild(dessert2);
        dessert2.textContent = 'Aliquam malesuada molestie mattis';
        const dessertIngredients2 = document.createElement('p');
        dessertsContent.appendChild(dessertIngredients2);
        dessertIngredients2.textContent = 'Maecenas molestie arcu quis neque convallis luctus';

        const dessert3 = document.createElement('h3');
        dessertsContent.appendChild(dessert3);
        dessert3.textContent = 'Fusce orci ligula, pharetra sed tortor quis';
        const dessertIngredients3 = document.createElement('p');
        dessertsContent.appendChild(dessertIngredients3);
        dessertIngredients3.textContent = 'Class aptent taciti sociosqu ad litora torquent per conubia nostra';
    }
    return {menu}

};

export default menuScreen();