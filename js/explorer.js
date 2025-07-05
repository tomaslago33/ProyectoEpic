
function scrollCarousel(direction) {
    const carousel = document.getElementById('carrusel');
    const itemWidth = carousel.querySelector('.categoria-1').offsetWidth;
    carousel.scrollBy({
      left: direction * itemWidth * 4,
      behavior: 'smooth'
    });
}

