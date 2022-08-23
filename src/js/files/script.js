// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let burger = document.querySelector('.header__burger')
burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
})
