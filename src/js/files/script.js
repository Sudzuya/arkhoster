// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import '../files/forms/customRange.js';

import '../libs/simpleParallax.min.js';

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

    let filterBtn = document.querySelectorAll('.filter .filter__btn');

    filterBtn.forEach((el)=> {
        el.addEventListener('click', (event)=> {
            
            filterBtn.forEach((e)=> {
                e.classList.remove('._tab-active')
            })
            el.classList.add('._tab-active')
            
            let filterData = event.target.getAttribute('data-filter');
            grid.arrange({
                filter: filterData
            });
        })
    })
}


let tabs = document.querySelector('.filter');
let selector = document.querySelectorAll('.filter__btn');

let activeItem = tabs.querySelector('._tab-active');
let activeWidth = activeItem.scrollWidth;

tabs.querySelector('.filter__gilder').style.left = activeItem.clientLeft+10+'px'
tabs.querySelector('.filter__gilder').style.width = activeWidth+'px'

selector.forEach((e)=> {
    e.addEventListener('click', ()=> {
        let itemPos = e.offsetLeft
        activeWidth = e.scrollWidth;

        tabs.querySelector('.filter__gilder').style.left = itemPos+'px'
        tabs.querySelector('.filter__gilder').style.width = activeWidth+'px'
    })



})

let bgTheme = document.querySelector('.bg-theme')
bgTheme.addEventListener('click', () => 
    document.querySelector('html').classList.add('light'))


const image = document.getElementsByClassName('all-game__bg');
new simpleParallax(image, {
    delay: 0,
    orientation: 'down',
    scale: 1.5,
});
    