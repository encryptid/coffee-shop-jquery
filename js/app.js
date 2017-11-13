let coffee = require('./coffee');

window.addEventListener('load', function () {
    console.log('tied together!');

    // I'm leaving in the vanilla JS for a side-by-side comparison.
    // It's bulky, but useful.
    
    // let menu = document.querySelector('.menu');
    let $menu = $('#menuContent');
    // let addItem = document.querySelector('.addItem');
    let $addItem = $('#addContent');
    // let menadd = document.querySelector('#menuTab');
    //let $menuTab = $('#menuTab');
    // let addTab = document.querySelector('#addTab');
    //let $addTab = $('#addTab');
    // let btn = document.querySelector('button');
    let $btn = $('.submit');
    let counter = 0;

    function addItems() {
        for (let i = counter; i < coffee.length; i++) {
            //let menuItem = document.createElement('ul');
            let $menuItem = $('<ul></ul>');
            //let name = document.createElement('li');
            let $name = $('<li></li>');
            //let title = document.createElement('h2');
            let $title = $('<h2></h2>');
            //let desc = document.createElement('li');
            let $desc = $('<li></li>');
            // let price = document.createElement('li');
            let $price = $('<li></li>');
            // desc.classList.add('desc');
            let $tags = $('<li></li>');
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
            let current = coffee[i];
            for (let i = 0; i < current.tags.length; i++) {
                console.log(current.tags);
                let $tag = $('<p></p>')
                let $close = $('<span>x</span>')
                $menuItem.append($tags);
                $tag.append($close);
                $tags.append($tag);
                $tag.text(current.tags);
                }
            counter++
        };
    };

    addItems();

    // $menuTab.on('click', function() {
    // //     // if (menu.classList.contains('hidden')) {
    //         $menu.removeClass('hidden');
    //         $addItem.addClass('hidden');
    // //     // }
    //      console.log('candy');
    //  });

    // $addTab.on('click', function() {
    //     // if ($addItem.classList.contains('hidden')) {
    //         $addItem.removeClass('hidden');
    //         $menu.addClass('hidden');
    //     // };
    //     console.log('unicorns');
    // });

    // btn.addEventListener('click', function() {
    $btn.on('click', function() {
    //     let name = document.querySelector('#name');
        let $name = $('#name');
    //     let desc = document.querySelector('#desc');
        let $desc = $('#desc');
    //     let price = document.querySelector('#price');
        let $price = $('#price');
    //     let newCoffee = { name: name.value, description: desc.value, price: `$` + price.value };
        let $newCoffee = { name: $name.val(), description: $desc.val(), price: `$` + $price.val() };
    //     coffee.push(newCoffee);
        coffee.push($newCoffee);
        addItems();
        $name.val("");
        $desc.val("");
        $price.val("");
        console.log('kittens!');
    });

    $('#tabs').tabs({active: '#menuContent'});

});