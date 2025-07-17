function toggleExtra() {
    const extra = document.querySelector('.extra-buttons');
    const btn = document.getElementById('toggleBtn');

    if (extra.classList.contains('show')) {
        extra.classList.remove('show');
        btn.textContent = 'Mostrar más';
    } else {
        extra.classList.add('show');
        btn.textContent = 'Mostrar menos';
    }
}