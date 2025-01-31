export class Slider {
  constructor(container, config = {}) {
    this.container = document.querySelector(container);
    this.carousel = this.container;
    this.slides = [...this.container.querySelectorAll(".slide")];

    if (!this.carousel || !this.slides.length) {
      console.error("Not found some elements");
      return;
    }

    this.createControlsAndIndicators();

    this.indicatorsContainer = this.container.querySelector("#indicators-container");
    this.indicators = [...this.container.querySelectorAll(".indicator")];
    this.prevBtn = this.container.querySelector("#prev-btn");
    this.nextBtn = this.container.querySelector("#next-btn");
    this.pauseBtn = this.container.querySelector("#pause-btn");
    this.previewTooltip = this.container.querySelector("#preview-tooltip");
    this.prevPreview = this.prevBtn?.querySelector(".preview_img");
    this.nextPreview = this.nextBtn?.querySelector(".preview_img");

    if (!this.prevBtn || !this.nextBtn || !this.pauseBtn || !this.indicatorsContainer || !this.previewTooltip) {
      console.error("Not found controls");
      return;
    }

    this.currentSlide = 0;
    this.isPlaying = config.autoplay ?? true;
    this.wasPlayingBeforePause = false;
    this.timerID = null;
    this.interval = config.interval || 2000;
    this.config = config;
    this.isPausedByHover = false;

    this.initListeners();
    this.updatePreviewImages();
    if (this.isPlaying) this.start();
  }

  createControlsAndIndicators() {

    const controlsContainer = document.createElement("div");
    controlsContainer.id = "controls-container";
    controlsContainer.classList.add("controls");

    const pauseBtn = document.createElement("div");
    pauseBtn.id = "pause-btn";
    pauseBtn.classList.add("control", "control-pause");
    pauseBtn.innerHTML = `<i class="fas fa-pause-circle"></i>`;
    controlsContainer.appendChild(pauseBtn);

    const prevBtn = document.createElement("div");
    prevBtn.id = "prev-btn";
    prevBtn.classList.add("control", "control-prev");
    prevBtn.innerHTML = `<div class="preview"><div class="preview_img"></div></div><div><i class="fas fa-chevron-left"></i></div>`;
    controlsContainer.appendChild(prevBtn);

    const nextBtn = document.createElement("div");
    nextBtn.id = "next-btn";
    nextBtn.classList.add("control", "control-next");
    nextBtn.innerHTML = `<div class="preview"><div class="preview_img"></div></div><div><i class="fas fa-chevron-right"></i></div>`;
    controlsContainer.appendChild(nextBtn);

    this.container.appendChild(controlsContainer);


    const indicatorsContainer = document.createElement("div");
    indicatorsContainer.id = "indicators-container";
    indicatorsContainer.classList.add("indicators");

    const previewContainer = document.createElement("div");
    previewContainer.classList.add("preview-container");

    const previewTooltip = document.createElement("div");
    previewTooltip.id = "preview-tooltip";
    previewTooltip.classList.add("preview-tooltip");

    previewContainer.appendChild(previewTooltip);
    indicatorsContainer.appendChild(previewContainer);

    this.slides.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      if (index === 0) indicator.classList.add("active");
      indicator.dataset.slideTo = index;
      indicatorsContainer.appendChild(indicator);
    });

    this.container.appendChild(indicatorsContainer);
  }

  indicateHandler(e) {
    if (e.target.classList.contains("indicator")) {
      this.gotoNth(+e.target.dataset.slideTo);
    }
  }

  showPreviewTooltip(e) {
    const slideIndex = +e.target.dataset.slideTo;
    const previewImage = this.slides[slideIndex]?.querySelector("img")?.src || "";

    if (previewImage) {
      this.previewTooltip.style.backgroundImage = `url("${previewImage}")`;
      this.previewTooltip.style.display = "block";

      const indicator = e.target;
      const rect = indicator.getBoundingClientRect();
      const parentRect = this.indicatorsContainer.getBoundingClientRect();
      const tooltipWidth = this.previewTooltip.offsetWidth || 120;
      const tooltipHeight = this.previewTooltip.offsetHeight || 60;

      const leftPos =  rect.left - parentRect.left + 5;
      const topPos = rect.top - tooltipHeight - 10 - parentRect.top;

      this.previewTooltip.style.left = `${leftPos}px`;
      this.previewTooltip.style.top = `${topPos}px`;

    }
  }

  hidePreviewTooltip() {
    this.previewTooltip.style.backgroundImage = "";
    this.previewTooltip.style.display = "none";
  }

  gotoNth(n) {
    this.slides[this.currentSlide].classList.remove("active");
    this.indicators[this.currentSlide].classList.remove("active");
    this.currentSlide = (n + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].classList.add("active");
    this.indicators[this.currentSlide].classList.add("active");
    this.updatePreviewImages();
  }

  gotoPrev() {
    this.gotoNth(this.currentSlide - 1);
  }

  gotoNext() {
    this.gotoNth(this.currentSlide + 1);
  }

  start() {
    if (!this.isPausedByHover) {
      this.isPlaying = true;
      this.timerID = setInterval(() => this.gotoNext(), this.interval);
      this.pauseBtn.innerHTML = '<i class="fa fa-pause-circle"></i>';
    }
  }

  stop() {
    this.isPlaying = false;
    clearInterval(this.timerID);
    this.pauseBtn.innerHTML = '<i class="fa fa-play-circle"></i>';
  }

  togglePlay() {
    this.isPlaying ? this.stop() : this.start();
    this.isPausedByUser = !this.isPlaying;

    if (!this.isPausedByUser) {
      this.isSwiping = false;
    }
  }

  updatePreviewImages() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    const nextIndex = (this.currentSlide + 1) % this.slides.length;

    const prevImg = this.slides[prevIndex]?.querySelector("img")?.src || "";
    const nextImg = this.slides[nextIndex]?.querySelector("img")?.src || "";

    if (this.prevPreview) {
      this.prevPreview.style.backgroundImage = `url("${prevImg}")`;
    }
    if (this.nextPreview) {
      this.nextPreview.style.backgroundImage = `url("${nextImg}")`;
    }
  }

  pressKeyHandler(e) {
    if (e.code === "ArrowLeft") this.gotoPrev();
    if (e.code === "ArrowRight") this.gotoNext();
    if (e.code === "Space") {
      e.preventDefault();
      this.togglePlay();
    }
  }

  initListeners() {
    this.prevBtn.addEventListener("click", () => this.gotoPrev());
    this.nextBtn.addEventListener("click", () => this.gotoNext());
    this.pauseBtn.addEventListener("click", () => this.togglePlay());
    this.indicatorsContainer.addEventListener("click", (e) => this.indicateHandler(e));

    this.indicators.forEach((indicator) => {
      indicator.addEventListener("mouseenter", (e) => this.showPreviewTooltip(e));
      indicator.addEventListener("mouseleave", () => this.hidePreviewTooltip());
    });

    [this.prevBtn, this.nextBtn, ...this.indicators].forEach((element) => {
      element.addEventListener("mouseenter", () => {
        if (this.isPlaying) {
          this.wasPlayingBeforePause = true;
          this.stop();
        }
      });

      element.addEventListener("mouseleave", () => {
        if (this.wasPlayingBeforePause) {
          this.wasPlayingBeforePause = false;
          this.start();
        }
      });
    });

    document.addEventListener("keydown", (e) => this.pressKeyHandler(e));
  }
}
