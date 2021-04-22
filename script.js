const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar__nav-link');
const toggle = document.querySelector('.navbar__toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');


//scroll navbar animation
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 500) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});

//hamburger menu toggle
toggle.addEventListener('click', () => {
  
    if (hamburgerMenu.style.maxHeight) {
      hamburgerMenu.style.maxHeight = null;
    } else {
      hamburgerMenu.style.maxHeight = hamburgerMenu.scrollHeight + "px";
    } 
  });