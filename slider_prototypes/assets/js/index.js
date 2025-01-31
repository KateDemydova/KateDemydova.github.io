import { SwipeSlider } from "./swipe-carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    new SwipeSlider("#carousel", { autoplay: true, interval: 2000 });
  }, 50);
});
