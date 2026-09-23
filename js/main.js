// Singh Beans Coffee — small bits of page behaviour.
// Every section checks the element exists first, so this one
// file can be shared by all pages.

// ---------- Mobile menu (hamburger) ----------
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');

if (header && menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu after tapping a link inside it
  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Newsletter sign-up ----------
// NOTE: this only checks the email looks valid and shows a thank-you
// message. It does NOT save the email anywhere yet — connect it to your
// email provider (Mailchimp, Klaviyo, etc.) before launch.
const newsletterForm = document.querySelector('#newsletter-form');

if (newsletterForm) {
  const emailInput = document.querySelector('#nl-email');
  const errorMessage = document.querySelector('#nl-error');
  const successMessage = document.querySelector('#nl-success');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailPattern.test(emailInput.value.trim())) {
      newsletterForm.hidden = true;
      errorMessage.hidden = true;
      successMessage.hidden = false;
    } else {
      errorMessage.hidden = false;
      emailInput.setAttribute('aria-invalid', 'true');
    }
  });

  // Hide the error again as soon as they start fixing it
  emailInput.addEventListener('input', () => {
    errorMessage.hidden = true;
    emailInput.removeAttribute('aria-invalid');
  });
}
