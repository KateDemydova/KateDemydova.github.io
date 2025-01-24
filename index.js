// Константы
const container = document.querySelector('#carousel');
const slides = container.querySelectorAll('.slide');
const indicatorsContainer = container.querySelector('#indicators-container');
const indicatorItems = indicatorsContainer.querySelectorAll('.indicator');
const pauseBtn = container.querySelector('#pause-btn');
const nextBtn = container.querySelector('#next-btn');
const prevBtn = container.querySelector('#prev-btn');
const prevPreview = document.querySelector('#prev-btn .preview .preview_img');
const nextPreview = document.querySelector('#next-btn .preview .preview_img');
const icon = pauseBtn.querySelector('i');



const SLIDES_COUNT = slides.length;
const CODE_ARROW_LEFT = 'ArrowLeft';
const CODE_ARROW_RIGHT = 'ArrowRight';
const CODE_SPACE = 'Space';
const TIMER_INTERVAL = 2000;


let currentSlide = 0;
let isPlaying = true;
let timerID = null;
let startPosX = null;
let endPosX = null;

function gotoNth(n) {
  slides[currentSlide].classList.toggle('active');
  indicatorItems[currentSlide].classList.toggle('active');
  currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT;
  slides[currentSlide].classList.toggle('active');
  indicatorItems[currentSlide].classList.toggle('active');

  updatePreviewImages();
}

function updatePreviewImages() {
  const prevIndex = (currentSlide - 1 + SLIDES_COUNT) % SLIDES_COUNT;
  const nextIndex = (currentSlide + 1) % SLIDES_COUNT;

  const prevImg = slides[prevIndex]?.querySelector('img')?.src || '';
  const nextImg = slides[nextIndex]?.querySelector('img')?.src || '';


  if (prevPreview) {
    prevPreview.style.backgroundImage = prevImg ? `url("${prevImg}")` : '';
  }

  if (nextPreview) {
    nextPreview.style.backgroundImage = nextImg ? `url("${nextImg}")` : '';
  }
}


function gotoPrev() {
  gotoNth(currentSlide - 1);
}


function gotoNext() {
  gotoNth(currentSlide + 1);
}

function tick() {
  timerID = setInterval(gotoNext, TIMER_INTERVAL);
}

function pauseHandler() {
  if (!isPlaying) return;
  clearInterval(timerID);
  icon.classList.remove('fa-pause-circle');
  icon.classList.add('fa-play-circle');
  isPlaying = false;
}

function playHandler() {
  tick();
  icon.classList.remove('fa-play-circle');
  icon.classList.add('fa-pause-circle');
  isPlaying = true;
}

function pausePlayHandler() {
  isPlaying ? pauseHandler() : playHandler();
}

function commonHandler(action) {
  pauseHandler();
  action();
}
function indicateHandler(e) {
  const { target } = e;
  if (target.classList.contains('indicator')) {
    pauseHandler();
    gotoNth(+target.dataset.slideTo);
  }
}

function pressKeyHandler(e) {
  const { code } = e;
  if (code === CODE_ARROW_LEFT) commonHandler(gotoPrev);
  if (code === CODE_ARROW_RIGHT) commonHandler(gotoNext);
  if (code === CODE_SPACE) {
    e.preventDefault();
    pausePlayHandler();
  }
}

function swipeStartHandler(e) {
  startPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX;
}

function swipeEndHandler(e) {
  endPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX;

  if (endPosX - startPosX > 50) commonHandler(gotoPrev);
  if (endPosX - startPosX < -50) commonHandler(gotoNext);
}

function mouseEnterHandler() {
  pauseHandler();
}

function mouseLeaveHandler() {
  if(!isPlaying) playHandler();
}

function showPauseButton() {
  pauseBtn.style.display = 'block';
}

function hiddenPauseButton() {
  pauseBtn.style.display = 'none';
}
function initListeners() {
  pauseBtn.addEventListener('click', pausePlayHandler);
  prevBtn.addEventListener('click', () => commonHandler(gotoPrev));
  nextBtn.addEventListener('click', () => commonHandler(gotoNext));
  indicatorsContainer.addEventListener('click', indicateHandler);
  container.addEventListener('touchstart', swipeStartHandler, { passive: true });
  container.addEventListener('mousedown', swipeStartHandler);
  container.addEventListener('touchend', swipeEndHandler);
  container.addEventListener('mouseup', swipeEndHandler);
  document.addEventListener('keydown', pressKeyHandler);

  container.addEventListener('mouseenter', mouseEnterHandler);
  container.addEventListener('mouseleave', mouseLeaveHandler);
  container.addEventListener('mouseenter', showPauseButton);
  container.addEventListener('mouseleave', hiddenPauseButton);
}

// Инициализация слайдера
function init() {
  pauseBtn.style.display = 'none';
  initListeners();
  tick();
  updatePreviewImages();
}

init();
