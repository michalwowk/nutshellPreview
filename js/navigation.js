import { debounce } from "underscore";
import { breakpoint } from "./config";
import { elements } from "./base";

const { bodyElement, navToggler } = elements;

let isNavOpen = false;

const closeMobileNav = () => {
  bodyElement.classList.remove("menu-active");
  isNavOpen = false;
  navToggler.setAttribute("aria-expanded", "false");
  navToggler.setAttribute("aria-label", "Pokaż nawigację");
};

const openMobileNav = () => {
  bodyElement.classList.add("menu-active");
  navToggler.setAttribute("aria-expanded", "true");
  navToggler.setAttribute("aria-label", "Zamknij nawigację");
  isNavOpen = true;
};

const handleNavbarTogglerClick = () => {
  if (navToggler) {
    navToggler.addEventListener("click", () => {
      if (isNavOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }
};

const handleNavbarCloseOnHashChange = () => {
  window.addEventListener("hashchange", function() {
    closeMobileNav();
  });
};

const handleMenuOnWindowResize = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= breakpoint) {
    closeMobileNav();
  }
};

const handleMenuColorChangeOnScroll = () => {
  if (window.pageYOffset > 0) {
    bodyElement.classList.add("sticky-menu");
  } else {
    bodyElement.classList.remove("sticky-menu");
  }
};

const handleNavigation = () => {
  handleNavbarTogglerClick();
  const debouncedHandleMenuOnWindowResize = debounce(
    handleMenuOnWindowResize,
    50
  );

  const debouncedHandleMenuColorChangeOnScroll = debounce(
    handleMenuColorChangeOnScroll,
    50
  );
  window.addEventListener("resize", debouncedHandleMenuOnWindowResize);
  window.addEventListener("scroll", debouncedHandleMenuColorChangeOnScroll);
  window.addEventListener("load", () => {
    debouncedHandleMenuOnWindowResize();
    debouncedHandleMenuColorChangeOnScroll();
    handleNavbarCloseOnHashChange();
  });
};

export default handleNavigation;
