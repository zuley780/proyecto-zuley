const slider = document.querySelector('.slider');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const slideCount = indicators.length;
let autoplayInterval;

// Function to update slider position
function updateSlider(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Function to start autoplay
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider(currentIndex);
  }, 3000); // Cambiar de slide cada 3 segundos
}

// Function to stop autoplay
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Add event listeners for indicators
indicators.forEach((indicator) => {
  indicator.addEventListener('click', () => {
    stopAutoplay();
    currentIndex = parseInt(indicator.getAttribute('data-index'));
    updateSlider(currentIndex);
    startAutoplay();
  });
});

// Start autoplay on page load
startAutoplay();
