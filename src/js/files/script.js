// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import '../files/forms/customRange.js';

let burger = document.querySelector('.header__burger')
burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    document.body.classList.toggle('open')
})

let dataMenuBtn = document.querySelectorAll('.menu__list [data-menu');
let dataMenuResult = document.querySelectorAll('.menu-result [data-menu');

dataMenuBtn.forEach((el) => {
    dataMenuResult.forEach((result) => {
        el.addEventListener('click', () => {
            el.classList.remove('active')
            result.classList.remove('active')
            if (el.getAttribute('data-menu') === result.getAttribute('data-menu')) {
                el.classList.add('active')
                result.classList.add('active')
            }
        })
    })
})

let blogFull = document.querySelector('.blog--full .blog__content')
if (blogFull) {
    let grid = new Isotope(blogFull, {
        itemSelector: '.blog__item--filter',
        layoutMode: 'masonry',
        masonry: {
            gutter: 40,
          }
    });
}


let filterBtn = document.querySelectorAll('.filter .filter__btn');

filterBtn.forEach((el)=> {
    el.addEventListener('click', (event)=> {
        let filterData = event.target.getAttribute('data-filter');
        grid.arrange({
            filter: filterData
        });
    })
})
