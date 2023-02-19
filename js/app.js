$(function(){

    $('.banner_slider').slick({
        dots:true,
        dotsClass:'dots_slide',
        prevArrow:'<i  class="banner_slider_arrow fa-solid fa-arrow-right"></i>',
        nextArrow:'<i  class=" banner_slider_arrow fa-solid fa-arrow-left"></i>'
    })

    $('.counter_slide').counterUp({
        delay:20,
        time:2000,

    })
})