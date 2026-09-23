# Singh Beans Coffee — website

A plain HTML/CSS/JavaScript site. There's no build step, nothing to install and no framework.

## See it

Double-click `index.html` to open it in your browser. That's it.

## What's where

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `cafe.html` | Café landing page |
| `css/styles.css` | All the styling. Brand colours are at the top. |
| `js/main.js` | Mobile menu, newsletter form check, demo cart counter |
| `assets/` | Logo and photos |
| `Singh Beans Coffee website mockup.zip` | The original design handoff, kept for reference |

## Still to fill in (search the files for `TBC`)

- **Café details**: street address, phone number and hours. Update them in *both* `cafe.html` (the page text *and* the `application/ld+json` block at the top, which Google reads) and the orange "Now open" band in `index.html`.
- **City**: if the café ends up in Vancouver, search both HTML files for `Surrey` and change the café mentions. The stockist addresses are real Surrey addresses, so leave those alone.
- **Menu items and prices** in `cafe.html` are placeholders.
- **Google Map**: in `cafe.html`, replace the `map-placeholder` div with the embed `<iframe>` from Google Maps.
- **Newsletter**: the form checks the email and shows a thank-you message, but it **doesn't save the email anywhere yet**. It needs to be connected to an email service (Mailchimp, Klaviyo, etc.).
- **"Order Indus" button**: it's a demo that only bumps the cart number. It should point at the real Indus product page.
- **Logo**: ask for an SVG version for sharper display.

## Publishing

Any static host works. GitHub Pages is the easiest: repo **Settings → Pages → Deploy from branch**.
