// Intersection Observer for Scroll Reveals
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // If it contains a counter, trigger it
            const counters = entry.target.querySelectorAll('.counter');
            if (counters) {
                counters.forEach(count => startCounter(count));
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Counter Logic
function startCounter(el) {
    const target = +el.getAttribute('data-target');
    const count = +el.innerText;
    const speed = 200;
    const inc = target / speed;

    if (count < target) {
        el.innerText = Math.ceil(count + inc);
        setTimeout(() => startCounter(el), 1);
    } else {
        el.innerText = target + "+";
    }
}