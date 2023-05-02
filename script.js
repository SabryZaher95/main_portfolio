var typed = new Typed(".multiple-text", {
    strings: ["Front End Developer ", "Software Developer "],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');
const header = document.querySelector('header');
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.header .navbar');

/*====================== Toggle Icon Navbar ==================*/ 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*====================== Scroll Sections Active Link ==================*/ 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    });

    /*====================== Sticky Navbar ==================*/ 
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========= Remove Toggle Icon and Navbar when click navbar link (scroll) =============*/ 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*====================== Scroll Reveal ==================*/ 
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
