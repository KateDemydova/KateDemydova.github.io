import { SwipeSlider } from "./swipe-carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    new SwipeSlider("#carousel", { autoplay: true, interval: 3000 });
  }, 50);
});
