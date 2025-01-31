import { Slider } from "./carousel.js";

export class SwipeSlider extends Slider {
  constructor(container, config) {
    super(container, config);
    this.isSwiping = false;
    this.isClickOnPause = false;
    this.startX = 0;
    this.initSwipe();
  }

  initSwipe() {
    let startX = 0;
    this.isSwiping = false;
    this.isClickOnPause = false;


    this.container.addEventListener("mousedown", (e) => {
      if (e.target.closest("#pause-btn")) {
        this.isClickOnPause = true;
        return;
      }
      this.isSwiping = false;

      this.startX = e.clientX;
      this.isSwiping = true;
      this.stop();
      this.container.style.cursor = "grabbing";
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (!this.isSwiping || this.isClickOnPause) return;
      e.preventDefault();
    });

    document.addEventListener("mouseup", (e) => {
      if (this.isClickOnPause) {
        this.isClickOnPause = false;
        return;
      }

      this.handleSwipeEnd(e.clientX);
    });

    this.container.addEventListener("mouseleave", () => {
      this.isSwiping = false;
      this.container.style.cursor = "grab";
    });

    this.container.addEventListener("touchstart", (e) => {
      if (e.target.closest("#pause-btn")) {
        this.isClickOnPause = true;
        return;
      }
      this.isSwiping = false;

      this.startX = e.touches[0].clientX;
      this.isSwiping = true;
      this.stop();
    });

    this.container.addEventListener("touchmove", (e) => {
      if (!this.isSwiping || this.isClickOnPause) return;
      e.preventDefault();
    });

    this.container.addEventListener("touchend", (e) => {
      if (this.isClickOnPause) {
        this.isClickOnPause = false;
        return;
      }

      this.handleSwipeEnd(e.changedTouches[0].clientX);
    });
  }

  handleSwipeEnd(endX) {
    this.isSwiping = false;
    const deltaX = endX - this.startX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.gotoPrev();
      } else {
        this.gotoNext();
      }
    } else {
      console.log("No swipe interval");
    }

    this.container.style.cursor = "grab";

    if (!this.isPausedByHover && !this.isPausedByUser) this.start();
  }
}
