import handleNavigation from "./navigation";
import { handleAnimationsInView } from "./animations";
import Swiper from "swiper";

handleNavigation();
handleAnimationsInView();

window.addEventListener("load", () => {
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
        autoplay: false,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            // when window width is <= 320px
            600: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 18,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
});
