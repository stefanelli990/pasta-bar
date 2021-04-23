const toggle = document.querySelector('.navbar__toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');


//hamburger menu toggle
toggle.addEventListener('click', () => {
  
    if (hamburgerMenu.style.maxHeight) {
      hamburgerMenu.style.maxHeight = null;
    } else {
      hamburgerMenu.style.maxHeight = hamburgerMenu.scrollHeight + "px";
    } 
  });