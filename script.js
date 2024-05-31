const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const intervalTime = 10000;
let slideInterval;

let currentIndex = 0;

function startSlide() {
  slideInterval = setInterval(() => {
    moveRight();
  }, intervalTime);
}

function moveRight() {
  currentIndex++;
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function moveLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselTrack.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  moveLeft();
  clearInterval(slideInterval);
  startSlide();
});

nextBtn.addEventListener('click', () => {
  moveRight();
  clearInterval(slideInterval);
  startSlide();
});

startSlide();