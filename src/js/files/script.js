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

// function isHidden(element){
//     const elementRect = element.getBoundingClientRect();
//     const elementHidesUp = elementRect.top < 0;
//     const elementHidesLeft = elementRect.left < 0;
//     const elementHidesDown = elementRect.bottom > window.innerHeight;
//     const elementHidesRight = elementRect.right > window.innerWidth;
//     const elementHides = elementHidesUp || elementHidesLeft || elementHidesDown || elementHidesRight;
//     console.log(elementHides);
//     return elementHides;
// }

    // isHidden(scrollBg) 
    function countHidden(element){
        const elementRect = element.getBoundingClientRect();
        const elementHides = { 
            up: Math.max(0,0 - elementRect.top),
            left: Math.max(0,0 - elementRect.left),
            down: Math.max(0,elementRect.bottom - window.innerHeight),
            right: Math.max(0,elementRect.right - window.innerWidth)
        };
        // console.log(elementHides.up);
        return elementHides;
    }


let scrollBg = document.querySelector('.scroll-bg');
    // scrollBg.querySelectorAll('.')
    if (scrollBg.classList.contains('._watcher-view')) {
        console.log(scrollBg);
    }



var observeObject = function () {
    var _class = {
      init: function (selector, callback) {
        var element = document.querySelector(selector);
  
        try {
          var observer = new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                callback(mutation.target, mutation.attributeName, mutation.oldValue);
              });		
            });
  
          observer.observe(element, {
            attributes: true,
            subtree: true,
            attributeOldValue: true
          });
        } catch (z) {
          element.addEventListener('DOMAttrModified', function (e) {
            callback(e.target, e.attrName, e.prevValue);
          }, false);
        }
      }
    };
  
    return _class;
}();

var observeTest = function () {
    observeObject.init('.scroll-bg', function (target, name, oldValue) {

        console.log(target);

      if (target.classList.contains('_watcher-view')) {
        
        window.addEventListener('scroll', () => {
            let value = window.scrollY / window.scrollY
            let value2 = window.scrollY
            let value3 = value / value2 * 10000
            
            let upScroll = countHidden(scrollBg)

            // console.log(upScroll.up);

            let item3 = target.querySelector('[data-scroll="3"]')
            let item4 = target.querySelector('[data-scroll="4"]')
            let item5 = target.querySelector('[data-scroll="5"]')
            let item6 = target.querySelector('[data-scroll="6"]')
            let item7 = target.querySelector('[data-scroll="7"]')
            let item8 = target.querySelector('[data-scroll="8"]')
            let item9 = target.querySelector('[data-scroll="9"]')
            let item10 = target.querySelector('[data-scroll="10"]')
            let item11 = target.querySelector('[data-scroll="11"]')
            let item12 = target.querySelector('[data-scroll="12"]')


            item3.style.transform = `translate(0, -${value3 * 12 + 'px'})`
            item4.style.transform = `translate(0, -${value3 * 24 + 'px'})`
            item5.style.transform = `translate(0, -${value3 * 36 + 'px'})`
            item6.style.transform = `translate(0, -${value3 * 41 + 'px'})`
            item7.style.transform = `translate(0, -${value3 * 50 + 'px'})`
            item8.style.transform = `translate(0, -${value3 * 12 + 'px'})`
            item9.style.transform = `translate(0, -${value3 * -27 * 0.2 + 'px'})`
            item10.style.transform = `translate(0, -${value3 * -36 * 0.4 + 'px'})`
            item11.style.transform = `translate(0, -${value3 * -41 * 0.6 + 'px'})`
            item12.style.transform = `translate(0, -${value3 * -50 * 0.8 + 'px'})`

        })

      } else {
        false
      }
    });
  } ();
