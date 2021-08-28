document.addEventListener('DOMContentLoaded', ()=> {
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header__burger_menu');
    const btnElem = burgerBtn.querySelectorAll('span');


    const toggleBurger = ()=> {
        burgerBtn.addEventListener('click', ()=> {
            burgerMenu.classList.toggle('burger-menu-active');
            btnElem.forEach((item, num)=> {
                if(num == 0) {
                    item.classList.toggle('one-active');
                }
                if(num == 1) {
                    item.classList.toggle('two-active');
                }
                if(num == 2) {
                    item.classList.toggle('three-active');
                }
            });
            document.documentElement.classList.toggle('scroll');
        });
        
    };

    toggleBurger();








});