// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Enquiry Button Click Simulation
document.getElementById('open-enquiry').addEventListener('click', () => {
    // In a production environment, this would open a Modal or scroll to a form
    alert("Enquiry Portal Opening... Redirecting to Secure Form.");
});

// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});