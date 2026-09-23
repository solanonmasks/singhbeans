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

// ---------- Cart counter (DEMO ONLY) ----------
// The real shop/cart still lives on Squarespace. This just shows the
// intended behaviour: "Order Indus" bumps the badge in the header.
// Replace with a real add-to-cart link/API when the shop is connected.
const cartBadge = document.querySelector('.cart-badge');
const orderIndusButton = document.querySelector('#order-indus');
let cartCount = 0;

if (cartBadge && orderIndusButton) {
  orderIndusButton.addEventListener('click', () => {
    cartCount += 1;
    cartBadge.textContent = cartCount;
    orderIndusButton.textContent = 'Added — order another';
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
