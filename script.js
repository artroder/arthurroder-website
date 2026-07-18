const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
  });
});

const emailForm = document.getElementById('email-form');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(document.getElementById('contact-subject').value);
    const body = encodeURIComponent(document.getElementById('contact-message').value);
    window.location.href = `mailto:arthurleaoroder@gmail.com?subject=${subject}&body=${body}`;
  });
}
