const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar__nav-link');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 500) {
        navbar.classList.add('active');
        navLinks.forEach(navLink => {
            navLink.classList.add('active');
        });
    } else {
        navbar.classList.remove('active');
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
    }
});