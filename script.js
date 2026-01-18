// Smooth scrolling for nav links (optional enhancement)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form handling (static: shows alert)
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Thank you for your message! (This is a static site; no email sent.)');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
