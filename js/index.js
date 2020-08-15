import handleNavigation from "./navigation";
import { handleAnimationsInView } from "./animations";
import Swiper from "swiper";

handleNavigation();
handleAnimationsInView();

window.addEventListener("load", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 6,
    slidesPerGroup: 3,
    loop: true,
    autoplay: {
      delay: 4500
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });
});
