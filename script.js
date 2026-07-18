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
    const get = (id) => document.getElementById(id).value;
    const subject = encodeURIComponent('🌍 Discovery call request — International SEO');
    const body = encodeURIComponent(
      `Name: ${get('discovery-name')}\n` +
      `Email: ${get('discovery-email')}\n` +
      `Company: ${get('discovery-company')}\n` +
      `Website: ${get('discovery-website')}\n` +
      `Current markets: ${get('discovery-current-markets')}\n` +
      `Target markets: ${get('discovery-target-markets')}\n` +
      `Timeline: ${get('discovery-timeline')}\n\n` +
      `${get('discovery-challenge')}`
    );
    window.location.href = `mailto:arthurleaoroder@gmail.com?subject=${subject}&body=${body}`;
  });
}
