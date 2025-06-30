function toggleDropdown(element) {
  const dropdown = element.nextElementSibling;
  const allDropdowns = document.querySelectorAll('.dropdown-content');

  // Cierra otros menús abiertos
  allDropdowns.forEach(d => {
    if (d !== dropdown) d.style.display = 'none';
  });

  // Alternar visibilidad
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
