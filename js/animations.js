import { elements } from "./base";

export function handleAnimationsInView() {
  const { animatedElements } = elements;

  const config = {
    rootMargin: "-15%"
  };

  const animationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animated-in-view--active");
      }
    });
  }, config);

  animatedElements.forEach(image => {
    animationObserver.observe(image);
  });
}
