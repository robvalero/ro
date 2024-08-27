let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Optional: Add autoplay functionality
let autoplayInterval = setInterval(() => moveSlide(1), 3000);

// Optional: Pause autoplay on hover
document.querySelector('.carousel').addEventListener('mouseover', () => clearInterval(autoplayInterval));
document.querySelector('.carousel').addEventListener('mouseout', () => autoplayInterval = setInterval(() => moveSlide(1), 3000));
