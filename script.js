const toggle = document.querySelector('.navbar__toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const loader = document.querySelector('.loader');
const body = document.querySelector('body');

//hamburger menu toggle
toggle.addEventListener('click', () => {
  
    if (hamburgerMenu.style.maxHeight) {
      hamburgerMenu.style.maxHeight = null;
    } else {
      hamburgerMenu.style.maxHeight = hamburgerMenu.scrollHeight + "px";
    } 
  });

  //loader
  setTimeout(() => {
    loader.classList.add('active');
    body.style.overflowY = 'visible';
}, 2000);

