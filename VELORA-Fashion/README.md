# VELORA — Fashion & Lifestyle

> *"Style That Speaks."*

VELORA is a modern, premium, fully responsive luxury fashion and lifestyle e-commerce web application crafted with vanilla **HTML5**, **CSS3**, and **JavaScript**. Designed with high-fashion editorial aesthetics, it embodies the restrained elegance of contemporary European and Indian luxury maisons.

<!-- Version: Updated VELORA website collections and design -->

---

## ✦ Brand Aesthetics & Palette

The design language draws inspiration from quiet luxury, architectural silhouettes, and editorial typography:

- **Onyx Black** (`#111111` / `#181716`): Grounded authority, high contrast.
- **Warm Alabaster Cream** (`#F9F6F0`): Warm editorial canvas.
- **Ivory Beige** (`#F1ECE3` / `#E4DCD0`): Soft tactile backgrounds and card surfaces.
- **Refined Champagne Gold** (`#C5A880` / `#DFCCA9`): Subtle accents, active states, and badges.
- **Soft Taupe Brown** (`#7A624A`): Surtitles, composition notes, and category labels.
- **Typography**:
  - Headings: `Playfair Display` (High-contrast editorial serif)
  - Body & UI: `DM Sans` (Clean, geometric, contemporary sans-serif)

---

## ✦ Core Features & Modules

### 1. Interactive Fixed Navigation
- **Dynamic Scroll State**: Starts with an elegant translucent gradient over the hero and smoothly transitions to a frosted dark luxury navbar on scroll (`scrolled` state with `backdrop-filter`).
- **ScrollSpy Highlighting**: Real-time section detection using `IntersectionObserver` that highlights active nav links (`Home`, `Collections`, `New Arrivals`, `Lookbook`, `About`, `Contact`).
- **Animated Hover Effects**: Subtle underline expanding smoothly from the center.
- **Live Action Badges**: Real-time counter badges on the Wishlist and Shopping Bag icons that dynamically update with a bounce animation upon user interaction.
- **Mobile Hamburger Navigation**: Animated 3-line hamburger morphing into an 'X', revealing a slide-in navigation drawer with backdrop blur.

### 2. Full-Screen Editorial Hero
- High-resolution luxury editorial background image with dark gradient overlay.
- Seasonal collection tag: `AUTUMN / WINTER 2026-27 COLLECTION`.
- Main headline: *"Wear Your Own Story."*
- Subtitle: *"Thoughtful Pieces. Effortless Silhouettes."*
- Quick action buttons linking to Collections and Lookbook.
- Animated mouse scroll indicator.

### 3. Brand Philosophy & Introduction
- Centered quote layout: *"Style is not about having more. It's about choosing well."*
- Three foundational pillars:
  1. **Artisanal Craft**: Hand-finished seams & Italian wool blends.
  2. **Considered Simplicity**: Architectural cuts that transcend trends.
  3. **Conscious Longevity**: 100% traceable cashmere, silk, and virgin wool.

### 4. Interactive Signature Collections & 24 Sub-Departments
- **Three Main Category Cards**:
  - **Women's Collection**: Refined silhouettes, architectural drapery, and contemporary essentials.
  - **Men's Collection**: Modern cuts, relaxed luxury cashmere knits, and full-canvassed suiting.
  - **Accessories Collection**: Sculptural Italian leather handbags, minimalist watches, and 18k jewelry.
  - Features high-fashion imagery, category titles, short descriptions, and "Explore Collection" buttons.
- **Dynamic Sub-Collections Explorer**:
  - **Women's Collection (8 departments)**: Dresses, Tops & Shirts, Jeans & Trousers, Ethnic Wear, Co-ord Sets, Skirts, Jackets & Outerwear, Women's Footwear.
  - **Men's Collection (8 departments)**: T-Shirts & Polos, Shirts, Jeans & Trousers, Casual Wear, Formal Wear, Jackets & Hoodies, Ethnic Wear, Men's Footwear.
  - **Accessories Collection (8 departments)**: Handbags, Watches, Sunglasses, Jewellery, Belts, Wallets, Caps & Hats, Shoes & Sandals.
- **Interactive Multi-Level Filtering**:
  - Clicking any main card smoothly scrolls to its dedicated sub-collections grid and highlights the active category.
  - **Filter Tabs**: *All Collections (24)*, *Women's (8)*, *Men's (8)*, *Accessories (8)*.
  - **Responsive Magazine Grid**: 3 columns on desktop, 2 on tablets, and 1 on mobile.
  - **"Shop Now" Links**: Every sub-collection card has an active "Shop Now" button that filters the product catalog and smoothly navigates the user to the products section.

### 5. New Arrivals & Dynamic Product Catalog
- **10 Realistic Luxury Fashion Products** with prices in Indian Rupees (₹):
  - *The Oversized Wool Trench Coat* (Women, ₹14,999 — New Arrival)
  - *Structured Double-Breasted Blazer* (Men, ₹12,499 — Bestseller)
  - *Pure Mulberry Silk Slip Dress* (Women, ₹9,899 — Bestseller)
  - *Cashmere Roll-Neck Knit* (Men, ₹8,799 — New Arrival)
  - *Sculpted Italian Leather Tote* (Accessories, ₹11,200 — Bestseller)
  - *Relaxed Pleated Wool Trousers* (Women, ₹6,499 — New Arrival)
  - *Minimalist Leather Chelsea Boots* (Men, ₹13,500 — New Arrival)
  - *Gold-Plated Cuff & Signet Ring Set* (Accessories, ₹4,299 — Bestseller)
  - *Tailored Linen Blend Safari Jacket* (Men, ₹9,499 — New Arrival)
  - *Asymmetric Draped Evening Gown* (Women, ₹16,800 — Bestseller)
- **Interactive Category Filtering**: Tabs for *All Pieces*, *Women*, *Men*, and *Accessories*.
- **Real-Time Live Search**: Instant filtering by product title, category, or fabric description with clear button.
- **Sorting Options**: Sort by Featured, Price (Low to High), Price (High to Low), or Name (A to Z).
- **Wishlist Heart Toggle**: Instant toggle with heart icon fill, toast alert, and `localStorage` persistence.
- **Quick View Button**: Hover-revealed button opening a detailed product modal.
- **Add to Bag Button**: Immediate cart addition with animated confirmation feedback.

### 6. Quick View Modal
- High-res product photography showcase.
- Fabric composition and tailoring details.
- Interactive **Size Selector** (`XS`, `S`, `M`, `L`, `XL` or numeric sizes).
- **Quantity Adjuster** with minus and plus controls.
- Quick add-to-bag with price recalculation.

### 7. Slide-Out Shopping Bag (Cart Drawer)
- Slides in smoothly from the right with frosted backdrop.
- **Complimentary Shipping Meter**: Dynamic progress bar calculating remaining amount to qualify for free shipping (threshold: ₹5,000).
- Product item cards with thumbnail, title, selected size, price, and item removal.
- Quantity increment / decrement buttons updating order totals immediately.
- **Promo Code Box**: Enter `VELORA10` for an instant 10% privilege discount.
- Order subtotal, discount row, complimentary shipping badge, and total in ₹.
- **Empty State**: Minimalist shopping bag illustration with direct CTA to explore arrivals.
- **`localStorage` Persistence**: Cart items survive browser restarts and refreshes.

### 8. Slide-Out Wishlist Drawer
- Slide-out drawer displaying saved pieces.
- "Move to Bag" action and single-click removal.
- Live badge sync with the top navigation bar.
- `localStorage` persistence.

### 9. Demo Checkout Flow
- Accessible directly from the Cart Drawer.
- Full address and customer detail inputs (Name, Phone, Address, City, PIN).
- Payment method selector (UPI / QR, Credit/Debit Card, Cash on Delivery).
- Demo Notice clearly indicating simulated transactions.
- Simulated order processing with loading state, generating a unique Order ID (`VEL-XXXXXX`), clearing the cart, and triggering celebration alerts.

### 10. Campaign Section
- Full-bleed cinematic spread: *"Made to Be Lived In."*
- Story narrative and direct access to brand history.

### 11. Editorial Lookbook & Lightbox Modal
- 6-photograph asymmetric magazine layout.
- Hover overlay with look index (`Look 01` – `Look 06`), captions, and zoom buttons.
- Full-screen **Lightbox Modal** with high-resolution images, descriptions, next/prev navigation, and keyboard controls (Esc, Left Arrow, Right Arrow).

### 12. About Maison & Brand Story
- Dual-column atelier layout featuring moodboard photography and floating heritage badge.
- Story text on sustainable slow fashion, Italian wools, and Mongolian cashmere.
- Three ethical commitments with icons: Traceable Fibers, Fair Living Wages, Lifetime Seam Repairs.

### 13. Customer Testimonials Carousel
- 4 verified customer reviews from patrons across Mumbai, Delhi, Bengaluru, and Hyderabad.
- Star ratings, customer quotes, author names, professional titles, and editorial avatars.
- Interactive previous and next buttons, pagination dots, and auto-rotation (6s interval) with pause-on-hover.

### 14. Newsletter Subscription
- Editorial card with dark luxury styling.
- RFC-compliant email regex validation.
- Success feedback displaying the discount code `VELORA10` upon valid submission.

### 15. Atelier Concierge Contact
- Physical flagship atelier address in Fort, Mumbai.
- Direct phone line and VIP fitting booking option.
- Interactive contact form with input validation and automated response toasts.

### 16. Luxury Footer & Floating Back-to-Top
- Brand summary and social icons (Instagram, Pinterest, LinkedIn).
- Organized link columns (Explore, Client Care, The Maison).
- Accepted payment badges (Visa, Mastercard, RuPay, UPI, Apple Pay).
- Floating circular back-to-top button appearing after 400px of scroll.

---

## ✦ File Structure

```
VELORA-Fashion/
├── index.html            # Semantic HTML5 markup for all sections & modals
├── style.css             # Modular, custom CSS3 styling with variables & responsive queries
├── script.js             # Vanilla JS application logic & localStorage management
├── README.md             # Comprehensive project documentation
└── assets/
    └── images/
        └── favicon.svg   # Custom gold & black monogram SVG favicon
```

---

## ✦ Getting Started

No Node.js build steps or package installations are required!

1. **Option 1: Open Directly**
   - Double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Safari, Firefox).

2. **Option 2: Live Server in VS Code**
   - Open the project directory in VS Code.
   - Right-click `index.html` and select **"Open with Live Server"**.

3. **Option 3: Any Static Server**
   ```bash
   # Using Node's npx http-server
   npx http-server . -p 8080 -o

   # Or using Python 3
   python -m http.server 8080
   ```

---

## ✦ Responsive Breakpoints

The layout has been meticulously engineered and tested across all major viewport categories:

- **Desktop (1440px and above)**: Full-width editorial spreads, 4-column product grid, 12-column asymmetric lookbook grid.
- **Laptop (1024px – 1366px)**: 3-column product grid, refined padding and responsive clamp typography.
- **Tablet (768px – 1023px)**: 2-column product grid, 3-column collection cards, collapsible mobile drawer.
- **Mobile (320px – 767px)**: Single-column product feed, horizontally scrollable filter tabs, touch-friendly hit areas (minimum 44px), zero horizontal overflow.

---

## ✦ Performance & Quality Highlights

- **Zero Heavy Frameworks**: 100% lightweight vanilla JavaScript and native CSS.
- **Native Image Lazy Loading**: Uses `loading="lazy"` on all below-the-fold imagery.
- **Accessible Design**: Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA attributes (`aria-label`, `aria-modal`, `aria-expanded`, `role="tab"`), and accessible color contrast.
- **Reduced Motion Support**: Respects `@media (prefers-reduced-motion: reduce)` preferences.
- **Persistent State**: Shopping bag and wishlist seamlessly persist via browser `localStorage`.
