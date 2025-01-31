export class Slider {
  constructor(container, config = {}) {
    this.container = document.querySelector(container);
    if (!this.container) {
      console.error("Error: Container not found");
      return;
    }

    this.slidesContainer = this.container.querySelector("#slides-container");
    this.slides = [...this.slidesContainer.querySelectorAll(".slide")];
    this.currentSlide = 0;
    this.isPlaying = config.autoplay ?? true;
    this.interval = config.interval || 2000;
    this.timerID = null;
    this.isPausedByHover = false;
    this.isPausedByUser = false;

    this.createControls();
    this.createIndicators();
    this.createPreviewTooltip();

    this.initListeners();
    this.updatePreviewImages();
    if (this.isPlaying) this.start();
  }

  createControls() {
    const oldControls = this.container.querySelector(".controls");
    if (oldControls) oldControls.remove();

    this.controlsContainer = document.createElement("div");
    this.controlsContainer.classList.add("controls");

    this.pauseBtn = document.createElement("div");
    this.pauseBtn.id = "pause-btn";
    this.pauseBtn.classList.add("control", "control-pause", "hidden");
    this.pauseBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';

    this.prevBtn = document.createElement("div");
    this.prevBtn.id = "prev-btn";
    this.prevBtn.classList.add("control", "control-prev");
    this.prevBtn.innerHTML = `
                <div class="preview">
                    <div class="preview_img"></div>
                </div>
                <div><i class="fas fa-chevron-left"></i></div>
            `;

    this.nextBtn = document.createElement("div");
    this.nextBtn.id = "next-btn";
    this.nextBtn.classList.add("control", "control-next");
    this.nextBtn.innerHTML = `
                <div class="preview">
                    <div class="preview_img"></div>
                </div>
                <div><i class="fas fa-chevron-right"></i></div>
            `;

    this.controlsContainer.appendChild(this.pauseBtn);
    this.controlsContainer.appendChild(this.prevBtn);
    this.controlsContainer.appendChild(this.nextBtn);

    this.container.appendChild(this.controlsContainer);

    this.prevPreview = this.prevBtn.querySelector(".preview_img");
    this.nextPreview = this.nextBtn.querySelector(".preview_img");
  }

  createIndicators() {

    const oldIndicators = this.container.querySelector(".indicators");
    if (oldIndicators) oldIndicators.remove();

    this.indicatorsContainer = document.createElement("div");
    this.indicatorsContainer.classList.add("indicators");

    this.indicators = [];
    this.slides.forEach((_, index) => {
      let indicator = document.createElement("div");
      indicator.classList.add("indicator");
      if (index === 0) indicator.classList.add("active");
      indicator.dataset.slideTo = index;
      this.indicators.push(indicator);
      this.indicatorsContainer.appendChild(indicator);
    });

    this.container.appendChild(this.indicatorsContainer);
  }

  createPreviewTooltip() {
    const oldTooltip = this.container.querySelector("#preview-tooltip");
    if (oldTooltip) oldTooltip.remove();

    this.previewTooltip = document.createElement("div");
    this.previewTooltip.id = "preview-tooltip";
    this.previewTooltip.classList.add("preview-tooltip");
    this.previewTooltip.style.display = "none";

    this.container.appendChild(this.previewTooltip);
  }

  showPreviewTooltip(e) {
    const slideIndex = Number(e.target.dataset.slideTo);
    const slide = this.slides[slideIndex];
    const imgElement = slide ? slide.querySelector("img") : null;
    const previewImage = imgElement ? imgElement.src : "";

    if (previewImage) {
      this.previewTooltip.style.backgroundImage = `url("${previewImage}")`;
      this.previewTooltip.style.display = "block";

      const rect = e.target.getBoundingClientRect();
      this.previewTooltip.style.left = `${rect.left + rect.width / 2}px`;
      this.previewTooltip.style.top = `${rect.top - 50}px`;
    }
  }

  hidePreviewTooltip() {
    this.previewTooltip.style.display = "none";
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

  gotoNth(n) {
    this.slides[this.currentSlide]?.classList.remove("active");
    this.indicators[this.currentSlide]?.classList.remove("active");

    this.currentSlide = (n + this.slides.length) % this.slides.length;

    this.slides[this.currentSlide]?.classList.add("active");
    this.indicators[this.currentSlide]?.classList.add("active");
    this.updatePreviewImages();
  }

  gotoPrev() {
    this.gotoNth(this.currentSlide - 1);
  }

  gotoNext() {
    this.gotoNth(this.currentSlide + 1);
  }

  start() {
    if (!this.isPausedByHover && !this.isPausedByUser) {
      this.stop();
      this.isPlaying = true;
      this.timerID = setInterval(() => this.gotoNext(), this.interval);
      this.pauseBtn.innerHTML = '<i class="fa fa-pause-circle"></i>';
    }
  }

  stop() {
    this.isPlaying = false;
    clearInterval(this.timerID);
    this.timerID = null;
    this.pauseBtn.innerHTML = '<i class="fa fa-play-circle"></i>';
  }

  togglePlay() {
    if (this.isPlaying) {
      this.isPausedByUser = true;
      this.stop();
    } else {
      this.isPausedByUser = false;
      this.start();
    }
  }

  pauseOnHover() {
    if (!this.isPausedByUser) {
      this.isPausedByHover = true;
      this.stop();
    }
  }

  resumeOnLeave() {
    this.isPausedByHover = false;
    setTimeout(() => {
      if (!this.isPausedByHover && !this.isPausedByUser) {
        this.start();
      }
    }, 50);
  }

  initListeners() {
    this.indicators.forEach(indicator => {
      indicator.addEventListener("mouseenter", (e) => this.showPreviewTooltip(e));
      indicator.addEventListener("mouseleave", () => this.hidePreviewTooltip());
    });
    this.prevBtn.addEventListener("click", () => this.gotoPrev());
    this.nextBtn.addEventListener("click", () => this.gotoNext());
    this.pauseBtn.addEventListener("click", () => this.togglePlay());

    this.container.addEventListener("mouseenter", () => this.pauseOnHover());
    this.container.addEventListener("mouseleave", () => this.resumeOnLeave());

    this.prevBtn.addEventListener("mouseenter", () => this.pauseOnHover());
    this.nextBtn.addEventListener("mouseenter", () => this.pauseOnHover());

    this.prevBtn.addEventListener("mouseleave", () => this.resumeOnLeave());
    this.nextBtn.addEventListener("mouseleave", () => this.resumeOnLeave());

    this.container.addEventListener("mouseenter", () => {
      this.pauseBtn.classList.remove("hidden");
    });

    this.container.addEventListener("mouseleave", () => {
      this.pauseBtn.classList.add("hidden");
    });

    this.indicatorsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("indicator")) {
        this.gotoNth(+e.target.dataset.slideTo);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") this.gotoPrev();
      if (e.code === "ArrowRight") this.gotoNext();
      if (e.code === "Space") {
        e.preventDefault();
        this.togglePlay();
      }
    });
  }
}

