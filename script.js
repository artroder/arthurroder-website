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
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const subject = encodeURIComponent('📧 Contact from Website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:arthurleaoroder@gmail.com?subject=${subject}&body=${body}`;
  });
}

const discoveryForm = document.getElementById('discovery-form');
if (discoveryForm) {
  discoveryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const lines = Array.from(discoveryForm.elements)
      .filter((el) => el.name && el.type !== 'submit')
      .map((el) => {
        const label = discoveryForm.querySelector(`label[for="${el.id}"]`);
        return `${label ? label.textContent : el.name}: ${el.value}`;
      });
    const subject = encodeURIComponent(discoveryForm.dataset.subject || 'Discovery call request');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:arthurleaoroder@gmail.com?subject=${subject}&body=${body}`;
  });
}
