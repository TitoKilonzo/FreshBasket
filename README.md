# FreshBasket — Farm-Fresh Grocery Website
To test click : https://fresh-basket-inky.vercel.app/

A fully responsive, multi-page static grocery store website for Nairobi, Kenya.

## File Structure
```
freshbasket/
├── index.html       → Home page (hero, featured products, why us preview, CTA)
├── shop.html        → Full product catalogue (filter, search, sort, cart)
├── why-us.html      → About/Why Us page (features, story, testimonials, process)
├── contact.html     → Contact page (call, WhatsApp, email form, delivery zones)
├── css/
│   └── style.css    → Shared styles for all pages
├── js/
│   └── main.js      → Shared cart logic, nav, product data
└── README.md
```

## How to Run
1. **Double-click `index.html`** — opens in your browser directly (no server needed)
2. Navigate between pages using the top navigation bar
3. The cart persists across all pages using browser localStorage

## Requirements
- A modern browser (Chrome, Firefox, Edge, Safari)
- **Internet connection** — required for:
  - Google Fonts (Playfair Display, DM Sans)
  - Font Awesome icons
  - Unsplash product images

## Features
- **4 linked pages**: Home, Shop, Why Us, Contact
- **23 products** across 5 categories with real photos
- **Shopping cart** (persists across pages via localStorage)
- **Order via WhatsApp**: Cart items are auto-formatted into a WhatsApp message
- **Contact form** with Email & WhatsApp submit options
- **Animated backgrounds**: Each page has a unique CSS animated background
- **Fully responsive**: Mobile, tablet, and desktop layouts with hamburger menu
- **Search & filter**: Products searchable by name/category with price range filter
- **Scroll reveal animations** on all pages

## Customization
1. **Phone number**: Change `+254743336009` in `js/main.js` (line 4) and in each HTML file
2. **Products**: Edit the `PRODUCTS` array in `js/main.js`
3. **Business hours**: Update in `contact.html`
4. **Store name**: Find and replace "FreshBasket" across all HTML files
5. **Colors**: Edit CSS variables at the top of `css/style.css`

## Contact / Order Methods
- **Call**: +254 743 336 009
- **WhatsApp**: +254 743 336 009
- **Email**: hello@freshbasket.co.ke

---
Built with HTML5, CSS3, Vanilla JavaScript · Font Awesome 6 · Google Fonts
