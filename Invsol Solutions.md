# NovaWave Website --- Analysis & React Conversion Brief

## 1. Project overview

The uploaded `novawave.zip` contains a five-page static website named
**NovaWave**. It is built with HTML, one shared CSS stylesheet, one
JavaScript file, and a shared image-assets folder.

The requested task is to convert this existing website into a **React
frontend only**. The conversion must preserve the current UI and
behavior as closely as possible. This document is intended to be
supplied to Anti-gravity together with the original ZIP.

### Existing pages

  Existing file     Page
  ----------------- ----------
  `index.html`      Home
  `about.html`      About
  `services.html`   Services
  `blog.html`       Blog
  `contact.html`    Contact

### Existing shared files

-   `css/styles.css` --- shared visual system and responsive styling.
-   `js/main.js` --- mobile navigation, FAQ accordion, testimonial
    slider, blog filtering/search/pager, and front-end form validation.
-   `assets/img/` --- 60 image files used throughout the pages.

## 2. Strict conversion objective

Convert the supplied HTML, CSS, and JavaScript into a clean,
maintainable React project. This is a **frontend migration**, not a
redesign.

The original HTML is the source of truth for the UI. Preserve its:

-   Page layouts and section order.
-   Content, wording, headings, labels, and button text.
-   Typography, font family, font weights, sizes, and line heights.
-   Colors, gradients, backgrounds, borders, shadows, radii, and
    spacing.
-   Element dimensions, alignment, positioning, and responsive behavior.
-   Navigation labels, active states, icons, and existing visual
    details.
-   Existing image placement, image proportions, and intended crops.

**Do not redesign, modernize, reinterpret, simplify, or creatively
improve the interface.** Do not add sections or remove existing
sections. Do not introduce new design elements.

The React output should visually match the original HTML pages. React
conversion is an implementation change, not permission to change the
design.

## 3. Non-negotiable design restrictions

1.  Do not change the existing UI.
2.  Do not change the typography or replace the Inter font.
3.  Do not add AI-generated-looking design patterns or generic AI
    website styling.
4.  Do not add neon colors, glow effects, glassmorphism, excessive
    gradients, or decorative effects.
5.  Do not add new hover effects, transitions, animations, or
    interaction effects. Preserve only behavior and styling already
    present in the source.
6.  Do not add new cards, badges, icons, floating elements, decorative
    shapes, or sections.
7.  Do not change the color palette, spacing system, border radius, or
    component proportions.
8.  Do not replace the design with a template.
9.  Do not invent content, testimonials, blog posts, team members,
    services, statistics, or contact details.
10. Do not change desktop or mobile layouts unless a correction is
    essential to reproduce the original behavior in React.

If a source detail is unclear, inspect the original HTML and CSS. Do not
guess or invent a replacement.

## 4. Image and asset requirements

The ZIP includes 60 images in `assets/img/`. Several files are
relatively small in pixel dimensions, especially hero illustrations,
avatars, brand logos, service illustrations, and technology icons. Some
images may therefore look soft or blurry when displayed at larger sizes.

### Image replacement task

-   Inspect every image in context before deciding whether it needs
    replacement.
-   Replace only images that are visibly blurry, pixelated, stretched,
    or clearly low quality.
-   Use sharp, high-resolution images (4K-quality source images where
    appropriate) that accurately match the subject and purpose of the
    relevant page or section.
-   Select images according to the actual content: Home, About,
    Services, Blog, and Contact.
-   Use professional, realistic, relevant visual assets. Avoid unrelated
    stock imagery and generic AI-looking visuals.
-   Keep the same image position, visual role, approximate composition,
    aspect ratio, dimensions, and crop as the original.
-   Do not change the layout to accommodate a new image.
-   Preserve brand logos and technology logos accurately. Do not replace
    them with unrelated photographs or inaccurate logo recreations.
-   Do not upscale a low-resolution image and describe it as 4K. Use a
    genuinely high-resolution replacement when needed.
-   Keep filenames and asset references organized and update paths
    correctly in React.

### Important limitation

A 4K image is not automatically better if it does not match the original
content or composition. Visual relevance and fidelity are mandatory.
Image quality may improve; the UI must not change.

## 5. Existing JavaScript functionality to preserve

The original `js/main.js` implements the following behaviors. Rebuild
these behaviors in React using state, props, and event handlers. Do not
simply copy DOM-manipulation code into React components.

### A. Mobile navigation

-   The burger button opens and closes the mobile navigation.
-   The `aria-expanded` value updates with the menu state.
-   Preserve the original menu layout and responsive breakpoint
    behavior.

### B. FAQ accordion

-   FAQ items open and close when their buttons are clicked.
-   Opening one item closes the other open item(s), matching the
    original single-open behavior.
-   Keep `aria-expanded` synchronized with the visible state.

### C. Testimonial slider

-   Previous/next controls change the visible testimonial.
-   Navigation wraps around from the last slide to the first and vice
    versa.
-   The current slide indicator updates in the existing `01 / 04` style.
-   Preserve the original slide content and order.

### D. Blog category filter

-   The category chips filter posts using each post's existing
    `data-cat` value.
-   The active category styling updates as in the original.
-   The "All" category displays all posts.

### E. Blog search

-   The search field filters posts by matching their visible text,
    case-insensitively.
-   Search and category filtering must work together.
-   Preserve the original search placement and appearance.

### F. Blog pager

-   Preserve the existing pager buttons and active-button visual state.
-   The current source JavaScript only updates the active pager button;
    it does not implement actual page-by-page content pagination. Do not
    invent pagination behavior unless explicitly requested.

### G. Front-end forms

The source contains: - A contact form in `contact.html`. - Newsletter
forms in `about.html` and `blog.html`.

The original JavaScript performs front-end validation only: - Required
fields cannot be empty. - Email fields are checked using a basic
email-format validation. - Invalid fields receive the existing error
class. - The existing feedback message is displayed. - A valid form is
reset after the success message.

**Do not connect these forms to a backend.** Keep them frontend-only and
clearly ready for later backend integration.

## 6. React implementation requirements

-   Use React with functional components and hooks.
-   Use standard client-side rendering only.
-   Do not use server-side rendering (SSR).
-   Do not use Next.js, server components, or a server-rendering
    framework for this task.
-   Do not add PHP or MySQL code.
-   Do not create API endpoints, database schemas, authentication, admin
    panels, or backend services.
-   Keep the code modular and readable.
-   Create reusable components only where they reflect existing repeated
    UI. Reusability must not alter the appearance.
-   Keep page-specific content and behavior in the appropriate
    page/component.
-   Preserve semantic HTML and accessibility attributes.
-   Avoid unnecessary dependencies and avoid adding libraries for
    effects or animations.

### Suggested project structure

``` text
novawave-react/
├── public/
│   └── assets/
│       └── img/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── TestimonialSlider.jsx
│   │   ├── BlogFilters.jsx
│   │   └── NewsletterForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── styles.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

This is a suggested structure, not a reason to split every small HTML
element into a separate component. Keep the implementation practical.

## 7. Routing and Hostinger compatibility

The website is intended to be hosted on **Hostinger shared hosting**.

-   Build a static React frontend that produces HTML/CSS/JavaScript
    assets for deployment.
-   Use client-side routing only if needed.
-   Ensure direct navigation and browser refresh work for all five pages
    on the final hosting setup.
-   Configure the production build for static hosting.
-   Do not require a Node.js server to render pages at runtime.
-   Do not use SSR.
-   Do not add backend code.

If using React Router, configure the deployment fallback/rewrite
behavior appropriately. Also provide a practical alternative using
separate static page entry points if that better preserves the original
five-page URL behavior on Hostinger shared hosting.

The final build should be deployable to Hostinger's `public_html`
directory. Include clear deployment instructions and explain any
required `.htaccess` rewrite rules. Do not assume that a development
server is available in production.

## 8. Future backend integration boundary

A separate backend developer will handle the PHP/MySQL backend later.

For this phase:

-   Build frontend UI only.
-   Keep contact and newsletter forms as frontend-only interactions.
-   Do not use mock API calls that pretend to submit data to a server.
-   Do not add PHP, MySQL, database connection files, or server-side
    logic.
-   Keep form fields and submit handlers organized so a backend
    developer can connect them later.
-   Do not decide or invent API URLs, request formats, authentication,
    or database fields.
-   Where backend integration will eventually be needed, leave a clear
    TODO comment rather than implementing a speculative solution.

## 9. Responsive behavior

The existing stylesheet contains responsive breakpoints at:

-   `1024px`
-   `720px`

Inspect and preserve the original responsive rules. Verify each page at
desktop, tablet, and mobile widths. Do not create a new responsive
design; reproduce the current one.

Also preserve the existing `prefers-reduced-motion` handling.

## 10. Recommended migration workflow

1.  Extract and inspect the complete ZIP before editing.
2.  Read all five HTML pages, the full CSS file, and the full JavaScript
    file.
3.  Identify shared header/footer elements and repeated sections.
4.  Map each original page to its React page component.
5.  Convert the HTML structure carefully without changing content or
    hierarchy.
6.  Port the original CSS with minimal changes. Do not rewrite the
    design system.
7.  Rebuild each JavaScript interaction using React state and event
    handlers.
8.  Review all 60 existing assets and identify only the images that
    genuinely need replacement.
9.  Replace unsuitable images with relevant, high-resolution
    alternatives while preserving their visual role and proportions.
10. Test every page and every interaction.
11. Compare the React pages against the original HTML pages at matching
    viewport sizes.
12. Fix any visual or functional differences before declaring the
    conversion complete.
13. Create and test the production static build.
14. Provide Hostinger deployment instructions.

Do not stop after converting only the Home page. All five pages must be
completed.

## 11. Quality assurance checklist

### Visual comparison

-   [ ] Home page matches the original.
-   [ ] About page matches the original.
-   [ ] Services page matches the original.
-   [ ] Blog page matches the original.
-   [ ] Contact page matches the original.
-   [ ] Typography and font loading match.
-   [ ] Colors, gradients, spacing, borders, and radii match.
-   [ ] Section order and content match.
-   [ ] Navigation and footer match.
-   [ ] Responsive behavior matches at desktop, tablet, and mobile
    widths.
-   [ ] No unrequested effects, sections, or visual elements have been
    added.
-   [ ] Only genuinely poor-quality images have been replaced.

### Functionality

-   [ ] Mobile menu opens and closes.
-   [ ] FAQ accordion behaves like the original.
-   [ ] Testimonial slider controls work and wrap around.
-   [ ] Blog category filters work.
-   [ ] Blog search works with category filters.
-   [ ] Blog pager active state works as in the source.
-   [ ] Contact form validation and feedback work.
-   [ ] Newsletter form validation and feedback work.
-   [ ] All navigation links point to the correct pages/sections.
-   [ ] No console errors or broken asset paths.

### Build and hosting

-   [ ] Production build completes successfully.
-   [ ] Build output is static and does not require SSR.
-   [ ] No PHP/MySQL/backend code has been added.
-   [ ] Direct page URLs and refresh behavior are tested.
-   [ ] Hostinger deployment steps are documented.

## 12. Required final deliverables

Provide:

1.  The complete React frontend project.
2.  All five converted pages.
3.  All required CSS and assets, including any approved image
    replacements.
4.  All preserved JavaScript functionality implemented in React.
5.  A working production build.
6.  A concise list of files/components created or changed.
7.  A list of images replaced, with their original and replacement
    filenames and reasons.
8.  A list of any source issues or ambiguities found. Do not silently
    make assumptions.
9.  Step-by-step Hostinger shared-hosting deployment instructions.
10. A clear note confirming that PHP/MySQL backend integration has not
    been implemented.

## 13. Final instruction to Anti-gravity

Treat the uploaded NovaWave website as the exact visual and functional
reference. Your job is to migrate its existing implementation to React,
not to redesign it.

**No creative interpretation. No extra UI. No AI-style redesign. No new
effects. No typography changes. No content changes. No backend. No
SSR.**

Preserve the existing website as faithfully as possible, improve only
the genuinely poor image assets as described, and verify every page and
interaction before completing the task.
