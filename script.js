const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function() {
  mobileMenu.classList.add('visible');
  closeBtn.classList.add('visable');
});

closeBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('visible');
  closeBtn.classList.remove('visable');
});