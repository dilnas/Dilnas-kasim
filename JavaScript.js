// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for nav links
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
});