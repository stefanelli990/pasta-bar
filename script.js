const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 500) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});