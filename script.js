const loader = document.querySelector('.loader');
const body = document.querySelector('body');



  //loader
  setTimeout(() => {
    loader.classList.add('active');
    body.style.overflowY = 'visible';
}, 2000);

