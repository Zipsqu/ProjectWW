// script.js

// Dark Mode Toggle
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        if (name && message) {
            formResponse.textContent = `Thank you for your message, ${name}! We will get back to you shortly.`;
        } else {
            formResponse.textContent = "Please fill in all fields.";
        }
    });
}
