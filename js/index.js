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
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 4000,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
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
