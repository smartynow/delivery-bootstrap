$(document).ready(() => {
    const swiper = new Swiper(".swiper", {
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
                slidesPerView: 2.5
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

});