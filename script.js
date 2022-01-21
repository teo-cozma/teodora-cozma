// Scroll down to Portfolio section //
const portfolio = document.getElementById('portfolio_section');
const work = document.getElementById('work');
const cta = document.getElementById('CTA');

// window.onload = function() {
    portfolio.addEventListener('click', () => {
        work.scrollIntoView({behavior: "smooth"});
    });
    cta.addEventListener('click', () => {
        work.scrollIntoView({behavior: "smooth"});
    });
// }


// Scroll down to About section //
const about = document.getElementById('about_section');
const aboutme = document.getElementById('aboutme');

about.addEventListener('click', () => {
    aboutme.scrollIntoView({behavior: "smooth"});
});

// Scroll down to Contact section //
const contact = document.getElementById('contact_section');
const contactme = document.getElementById('contactme');

contact.addEventListener('click', () => {
    contactme.scrollIntoView({behavior: "smooth"});
});


// Scroll back to top of the page //
document.getElementById('btt')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});