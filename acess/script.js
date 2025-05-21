let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: [
  '100+ станков на складе',
  'Доставка по всей России',
  'Официальный продавец NUMOBAMS',
  'Гарантия 1 год',
  'Промышленная точность',
  'Лучшие цены на рынке',
  'Работаем 24/7',
  'Проверка станка перед покупкой',
  'Фрезер и токарка — под ключ'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
