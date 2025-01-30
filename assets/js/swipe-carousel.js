import { Slider } from "./carousel.js";

export class SwipeSlider extends Slider {
  constructor(container, config = {}) {
    super(container, config);
    this.initSwipe();
    this.initMouseSwipe();
  }

  initSwipe() {
    let startX = 0;
    let isSwiping = false;

    this.container.addEventListener("touchstart", (e) => {
      e.preventDefault();
      startX = e.touches[0].clientX;
      isSwiping = true;
      this.stop();
    });

    this.container.addEventListener("touchmove", (e) => {
      if (!isSwiping) return;
      e.preventDefault();
    });

    this.container.addEventListener("touchend", (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) this.gotoPrev();
      if (endX - startX < -50) this.gotoNext();
      if (this.isPlaying) this.start();
    });
  }

  initMouseSwipe() {
    let startX = 0;
    let isDragging = false;

    this.container.addEventListener("mousedown", (e) => {
      e.preventDefault();
      startX = e.clientX;
      isDragging = true;
      this.stop();
    });

    this.container.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });

    this.container.addEventListener("mouseup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.clientX;
      if (endX - startX > 50) this.gotoPrev();
      if (endX - startX < -50) this.gotoNext();
      if (this.isPlaying) this.start();
    });

    this.container.addEventListener("mouseleave", () => {
      isDragging = false;
    });
  }
}

