// Abre el menú lateral en dispositivos pequeños
const menuToggle = document.querySelector('#sidebarMenu');
const menuToggleBtn = document.querySelector('.navbar-toggler');

menuToggleBtn.addEventListener('click', function () {
  menuToggle.classList.toggle('collapse');
});

// Cierra el menú lateral en dispositivos pequeños al hacer clic en un enlace
const menuLinks = document.querySelectorAll('.nav-link');

menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menuToggle.classList.add('collapse');
  });
});
