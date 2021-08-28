$(function(){

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick_btn slick-next"><span class="icon-angle-right"></span></button>',
        prevArrow: '<button type="button" class="slick_btn slick-prev"><span class="icon-angle-left"></span></button>',
        infinite: false,
        
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle();
    });



});

