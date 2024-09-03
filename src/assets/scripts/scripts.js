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

});