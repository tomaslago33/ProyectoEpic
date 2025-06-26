const slides = document.querySelectorAll(".slide");
const items = document.querySelectorAll(".item");
let current = 0;
let interval;

function showSlide(index) {
    slides[current].classList.remove("active");
    items[current].classList.remove("active");

    current = index;
    slides[current].classList.add("active");
    items[current].classList.add("active");
}

function startAutoSlide() {
    interval = setInterval(() => {
        let next = (current + 1) % slides.length;
        showSlide(next);
    }, 5000);
}

function resetAutoSlide(index) {
    clearInterval(interval);
    showSlide(index);
    startAutoSlide();
}

showSlide(0);
startAutoSlide();

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const index = parseInt(item.getAttribute("data-index"));
        resetAutoSlide(index);
    });
});


const carousel = document.getElementById('carousel');
const btnLeft = document.querySelector('.nav-btn.left');
const btnRight = document.querySelector('.nav-btn.right');

const scrollAmount = 300; 

btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


const carousel = document.getElementById('carousel');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

const cardWidth = carousel.querySelector('.game-card').offsetWidth + 20; // ancho + gap
const itemsPerPage = 5;
let currentPage = 0;

btnNext.addEventListener('click', () => {
    const maxPage = Math.floor(carousel.children.length / itemsPerPage) - 1;
    if (currentPage < maxPage) currentPage++;
    updateCarousel();
});

btnPrev.addEventListener('click', () => {
    if (currentPage > 0) currentPage--;
    updateCarousel();
});

function updateCarousel() {
    const scrollX = currentPage * (cardWidth * itemsPerPage);
    carousel.style.transform = `translateX(-${scrollX}px)`;
}