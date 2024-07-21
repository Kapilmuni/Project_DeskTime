const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.opacity = index === slideIndex ? 1 : 0;
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);

prev.addEventListener('click', () => {
  prevSlide();
});

next.addEventListener('click', () => {
  nextSlide();
});

setInterval(() => {
  nextSlide();
}, 5000);