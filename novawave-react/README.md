# INVsol Solutions - React Frontend

This project is a modern React frontend for **INVsol Solutions**, refined and updated with a clean white aesthetic, centered heroes, rich dropdown navigation, scroll animations, and professional design system.

---

## 1. Project Overview & Converted Pages

The project contains all 5 original pages:

| Route | Page | Description |
|---|---|---|
| `/` or `/index.html` | **Home** | Hero with stats, brand strip, featured work, client testimonial slider, services cards, 4-step process, interactive FAQ accordion, and CTA band. |
| `/about` or `/about.html` | **About** | Hero with stats, agency story & building photo, mission & vision, core values, team cards with socials, timeline journey, tech stack, testimonials, and CTA. |
| `/services` or `/services.html` | **Services** | Hero with stats, full services grid (`.svc.lg`), 4-stage process (`.proc.cx`), 10-technology tools grid (`.trow`), and dual-button CTA band. |
| `/blog` or `/blog.html` | **Blog** | Hero, featured article banner, recent articles list, interactive category filter chips, real-time search, interactive pagination, and newsletter subscription banner. |
| `/contact` or `/contact.html` | **Contact** | Hero with feature highlights, 2-column contact grid (interactive validated form + direct contact details & social channels), service tag chips, 4-step process, and CTA band. |

---

## 2. Implemented Components & Architecture

```
novawave-react/
├── public/
│   ├── .htaccess                # Hostinger Apache rewrite rules for SPA client routing
│   └── assets/
│       └── img/                 # All 62 original image assets
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Desktop & responsive mobile navigation, SVG logo & burger toggle
│   │   ├── Footer.jsx           # Page-variant footers, quick links, contact info, newsletter form
│   │   ├── FAQAccordion.jsx     # Single-open accordion with synchronized aria-expanded state
│   │   ├── TestimonialSlider.jsx# Wraparound slider with prev/next buttons and 0X / 0Y counter
│   │   ├── BlogFilters.jsx      # Multi-category chip filters and real-time search bar
│   │   └── NewsletterForm.jsx   # Client-side validated newsletter forms (compact & banner variants)
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── About.jsx            # About page
│   │   ├── Services.jsx         # Services page
│   │   ├── Blog.jsx             # Blog page
│   │   └── Contact.jsx          # Contact page with complete interactive form validation
│   ├── styles/
│   │   └── styles.css           # Preserved shared visual styling and responsive breakpoints
│   ├── App.jsx                  # React Router routes and smooth scroll/hash handler
│   └── main.jsx                 # React root entry point with BrowserRouter
├── index.html                   # HTML shell with Google Fonts Inter preconnect and meta tags
└── package.json
```

---

## 3. Preserved JavaScript Functionality

All original `js/main.js` behaviors have been rebuilt as idiomatic React components using state and props:

1. **Mobile Navigation**:
   - Burger button toggles the mobile drawer menu.
   - `aria-expanded` updates dynamically with menu open/close state.
   - Clicking any navigation link closes the drawer automatically.
   - Full fidelity to responsive breakpoints (`1024px` and `720px`).

2. **FAQ Accordion**:
   - Expandable/collapsible FAQ items.
   - Opening an item automatically closes any currently open item (single-open rule).
   - Synchronized `aria-expanded="true"` / `"false"` attributes.

3. **Testimonial Slider**:
   - Previous and Next controls with automatic wraparound.
   - Slide index counter in exact `01 / 03` format.
   - Active slide toggles class `.on`.

4. **Blog Filters & Real-time Search**:
   - Category chips filter posts by category (`ux`, `dev`, `ai`, `biz`, `strat`, `tips`, or `all`).
   - Search input performs case-insensitive text search matching title, description, category, and author.
   - Category filtering and search operate concurrently.

5. **Blog Pager**:
   - Numbered pager buttons (1, 2, 3) and Next arrow button update active state (`.on`).

6. **Front-End Form Validation**:
   - **Contact Form**: Validates Name, Email (RFC regex format), Service selection, and Message. Shows field-level error highlight (`.err`) and error feedback `#e5484d`. On valid submission, shows success message `#16794c` and resets the form.
   - **Newsletter Form**: Validates email format in both footer and blog banner layouts.
   - Includes clear `// TODO: Future backend integration` boundary comments.

---

## 4. Hostinger Shared Hosting Deployment Guide

### A. Production Build

Inside `novawave-react/`, generate the static production build:

```bash
npm run build
```

This compiles optimized HTML, CSS, JavaScript, and static image assets into the `dist/` directory.

### B. Uploading to Hostinger

1. Log into your **Hostinger hPanel**.
2. Navigate to **Websites** → Select your domain → Open **File Manager** (or connect via SFTP/FTP using FileZilla).
3. Open the `public_html` directory for your website.
4. Upload all contents of the `dist/` folder directly into `public_html/`:
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── favicon.svg
   ├── icons.svg
   └── assets/
       ├── img/
       │   ├── hero-home.png
       │   ├── ...
       ├── index-[hash].css
       └── index-[hash].js
   ```

### C. Hostinger `.htaccess` Configuration

The included `dist/.htaccess` ensures that direct navigation and browser page refreshes work smoothly on Hostinger Apache shared hosting:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 5. Future Backend Integration Boundary Note

- **Frontend Only**: No PHP, MySQL, or backend database code has been introduced in this phase.
- Form submissions perform client-side validation and state updates only.
- Clear `TODO` comments have been placed in `Contact.jsx` and `NewsletterForm.jsx` indicating where the PHP/MySQL backend developer can attach their API endpoint or form action handler.
