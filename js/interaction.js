// Navbar Scroll Transition
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'shadow-lg');
    } else {
        nav.classList.remove('py-2', 'shadow-lg');
    }
};

// Enquiry Button logic
document.getElementById('enquiryBtn').addEventListener('click', () => {
    const contactSection = document.querySelector('#curriculum');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    alert("Enquiry Form Initialized for Point Pikker Groups.");
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});