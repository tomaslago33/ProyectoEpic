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