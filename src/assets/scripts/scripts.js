$(document).ready(() => {
    const swiper = new Swiper(".m-menu__swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true
        },
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: ".m-menu__button-next",
            prevEl: ".m-menu__button-prev"
        },
        pagination: {
            el: '.m-menu__pagination',
        },
        keyboard: {
            enabled: true
        },
        breakpoints: {
            560: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

    const swiperComments = new Swiper(".m-comments__swiper", {
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        // Navigation arrows
        pagination: {
            el: '.m-comments__pagination',
        },
        navigation: {
            nextEl: ".m-comments__button-next",
            prevEl: ".m-comments__button-prev"
        },
        keyboard: {
            enabled: true
        },
        slidesPerView: 1
    });

    const swiperTestimonials = new Swiper(".m-testimonials__swiper", {
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: ".m-testimonials__button-next",
            prevEl: ".m-testimonials__button-prev"
        },
        keyboard: {
            enabled: true
        },
        slidesPerView: 1
    });

    $('#prev-comment').on('click', function () {
        swiperComments.slidePrev();
        console.log('click');
    });
    $('#next-comment').on('click', function () {
        swiperComments.slideNext();
    });
});