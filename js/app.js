let coffee = require('./coffee');

window.addEventListener('load', function () {
    console.log('tied together!');
    
    // let menu = document.querySelector('.menu');
    let $menu = $('.menu');
    // let addItem = document.querySelector('.addItem');
    // let menadd = document.querySelector('#menuTab');
    // let addTab = document.querySelector('#addTab');
    // let btn = document.querySelector('button');
    let $btn = $('button');
    let counter = 0;

    function addItems() {
        for (let i = counter; i < coffee.length; i++) {
            //let menuItem = document.createElement('ul');
            let $menuItem = $('ul');
            //let name = document.createElement('li');
            let $name = $('li');
            //let title = document.createElement('h2');
            let $title = $('h2');
            //let desc = document.createElement('li');
            let $desc = $('li');
            // let price = document.createElement('li');
            let $price = $('li');
            // desc.classList.add('desc');
            $desc.addClass('desc');
            // title.textContent = coffee[i].name;
            $title.text(coffee[i].name);
            // desc.textContent = coffee[i].description;
            $desc.text(coffee[i].description);
            // price.textContent = coffee[i].price;
            $price.text(coffee[i].price);
            // menu.appendChild(menuItem);
            $menu.append($menuItem);
            // name.appendChild(title);
            $name.append($title);
            // menuItem.appendChild(name);
            $menuItem.append($name);
            // menuItem.appendChild(desc);
            $menuItem.append($desc);
            // menuItem.appendChild(price);
            $menuItem.append($price);
            counter++
        };
    };

    addItems();

    menuTab.addEventListener('click',function() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            addItem.classList.add('hidden');
        }
    });

    addTab.addEventListener('click',function() {
        if (addItem.classList.contains('hidden')) {
            addItem.classList.remove('hidden');
            menu.classList.add('hidden');
        };
    });

    // btn.addEventListener('click', function() {
    //     let name = document.querySelector('#name');
    //     let desc = document.querySelector('#desc');
    //     let price = document.querySelector('#price');
    //     let newCoffee = { name: name.value, description: desc.value, price: `$` + price.value };
    //     coffee.push(newCoffee);
    //     addItems();
    //     name.value = "";
    //     desc.value = "";
    //     price.value = "";
    // });

    $btn.on('click', function() {
        console.log('kittens!');
    });

});