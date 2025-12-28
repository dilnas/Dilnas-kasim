// Initialize Animate On Scroll
AOS.init({
    duration: 1000,
    once: true
});

// Typing Effect for Hero Section
var typed = new Typed(".typing", {
    strings: [
        "Electrical Technician [cite: 7]",
        "Calibration Specialist [cite: 7]",
        "SCADA Programmer [cite: 8]",
        "Automation Expert [cite: 58]"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#0f172a';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
});
