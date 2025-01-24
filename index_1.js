function Carousel () {
  this.container = document.querySelector('#carousel');
  this.slides = container.querySelectorAll('.slide');
  this.indicatorsContainer = container.querySelector('#indicators-container');
  this.indicatorItems = indicatorsContainer.querySelectorAll('.indicator');
  this.pauseBtn = container.querySelector('#pause-btn');
  this.nextBtn = container.querySelector('#next-btn');
  this.prevBtn = container.querySelector('#prev-btn');
}
  const carousel = new Carousel();
  console.log(carousel);


this.SLIDES_COUNT = slides.length;
const CODE_ARROW_LEFT = 'ArrowLeft';
const CODE_ARROW_RIGHT = 'ArrowRight';
const CODE_SPACE = 'Space';
const FA_PAUSE = '<i class="fas fa-pause-circle"></i>';
const FA_PLAY = '<i class="fas fa-play-circle"></i>';
const TIMER_INTERVAL = 2000;

Carousel.prototype = {
  _initIndicators()
}
  gotoNth(n) {
    this.slides[currentSlide].classList.toggle('active');
    this.indicatorItems[currentSlide].classList.toggle('active');
    this.currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT;
    this.slides[currentSlide].classList.toggle('active');
    this.indicatorItems[currentSlide].classList.toggle('active');
}


Carousel.prototype.gotoNth {

}
function gotoPrev() {
  gotoNth(currentSlide - 1);
}
function gotoNext() {
  gotoNth(currentSlide + 1);
}

function tick () {
  timerID = setInterval(gotoNext, TIMER_INTERVAL);
}
function pauseHandler() {
  if(!isPlaying) return
  clearInterval(timerID);
  pauseBtn.innerHTML = FA_PLAY;
  isPlaying = false;
}

function playHandler() {
  tick ();
  pauseBtn.innerHTML = FA_PAUSE;
  isPlaying = true;
}

function pausePlayHandler() {
  isPlaying ? pauseHandler() : playHandler();
}

function prevHandler() {
  pauseHandler();
  gotoPrev();
}

function nextHandler() {
  pauseHandler();
  gotoNext()
}

function indicateHandler(e) {
  const {target} = e;
  if(target.classList.contains('indicator')) {
    pauseHandler();
    gotoNth(+target.dataset.slideTo);
  }
}

function pressKeyHandler(e) {
  const {code} = e;
  if(code == CODE_ARROW_LEFT) prevHandler();
  if(code == CODE_ARROW_RIGHT) nextHandler();
  if (code == CODE_SPACE) {
    e.preventDefault();
    pausePlayHandler();
  }
}

function swipeStartHandler(e) {
  startPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX;
}

function swipeEndHandler(e) {
  endPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX;;
  if(endPosX - startPosX > 100) prevHandler();
  if(endPosX - startPosX < -100) nextHandler();
}

function initListeners() {
  pauseBtn.addEventListener('click', pausePlayHandler);
  prevBtn.addEventListener('click', prevHandler);
  nextBtn.addEventListener('click', nextHandler);
  indicatorsContainer.addEventListener('click', indicateHandler);
  container.addEventListener('touchstart', swipeStartHandler, {passive: true});
  container.addEventListener('mousedown', swipeStartHandler);
  container.addEventListener('touchend', swipeEndHandler);
  container.addEventListener('mouseup', swipeEndHandler);
  document.addEventListener('keydown', pressKeyHandler);
}

function init() {
  this.initListeners();
  this.tick ();
}

Carousel.prototype.constructor = Carousel;
  const carousel = new Carousel();
  console.log(carousel);

init();
