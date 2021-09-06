const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'coverflow',
    grabCursor:true,
    centerSlides:true,
    slidesPerView:1,
    speed:1000,
    breakpoints: {
        800: {
            slidesPerView:3,
        }
    },
    autoplay:{
        delay:4000,
        disableOnInteraction:false
    },
});