// High-end entrance for cards using GSAP
gsap.from(".service-card", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power4.out"
});

// Scroll-triggered animations for content
window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.hover-up');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});