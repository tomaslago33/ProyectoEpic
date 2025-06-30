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




document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel2');
    const btnNext = document.getElementById('next');
    const btnPrev = document.getElementById('prev');

    const itemsPerPage = 5;
    let currentPage = 0;

    function getCardWidth() {
        const card = carousel.querySelector('.game-card2');
        const style = window.getComputedStyle(card);
        const gap = 20;
        return card.offsetWidth + gap;
    }

    function updateCarousel() {
        const cardWidth = getCardWidth();
        const scrollX = currentPage * (cardWidth * itemsPerPage);
        carousel.style.transform = `translateX(-${scrollX}px)`;

    }

    btnNext.addEventListener('click', () => {
        const maxPage = Math.ceil(carousel.children.length / itemsPerPage) - 1;
        if (currentPage < maxPage) {
            currentPage++;
            updateCarousel();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateCarousel();
        }
    });


    // Establecer ancho total del carrusel
    function setCarouselWidth() {
        const cardWidth = getCardWidth();
        const totalCards = carousel.children.length;
    }

    setCarouselWidth();
    updateCarousel();


    // Inicializar correctamente
    updateCarousel();
});