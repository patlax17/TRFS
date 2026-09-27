# HANDOFF — Total Range Fascia Stretch Website

## TASK CHECKLIST
- [x] 1. Initialize repo: folder structure, README.md, .gitignore, HANDOFF.md, vercel.json
- [x] 2. Download and optimize images
- [x] 3. Global CSS (colors, fonts, spacing, buttons) + header, mobile nav, footer
- [x] 4. Home page
- [x] 5. About page
- [x] 6. Appointments page with Square embed slot + fallback
- [x] 7. Contact page with Formspree form
- [x] 8. 404 page
- [x] 9. SEO: meta tags, OG, favicon, sitemap, robots, schema
- [ ] 10. QA: check every page at 375/768/1280px, fix broken links, check keyboard navigation and contrast
- [ ] 11. Final HANDOFF.md: list every remaining [PLACEHOLDER] and deployment steps for Vercel + DNS

---

## DECISIONS MADE

### Brand Colors
| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FDFAF6` | Page background (warm off-white) |
| `--color-surface` | `#F5EFE6` | Cards, sections |
| `--color-surface-alt` | `#EDE5D8` | Alternate cards, input bg |
| `--color-accent` | `#3D5A52` | Deep sage-green — primary accent |
| `--color-accent-dark` | `#2C4238` | Hover state for accent |
| `--color-accent-light` | `#D4E6DF` | Subtle highlights |
| `--color-text` | `#1E1E1E` | Body text |
| `--color-text-muted` | `#6B6560` | Secondary/muted text |
| `--color-border` | `#DDD5C8` | Borders, dividers |

**Palette rationale:** Warm neutrals (cream, linen) anchor the calm wellness feel. Deep sage (#3D5A52) provides a grounded, premium accent that pairs with the neutrals without being clinical.

### Typography
| Role | Font | Weight |
|---|---|---|
| Headings | Playfair Display (serif) | 400, 700 |
| Body | Inter (sans-serif) | 400, 500, 600 |

Google Fonts URL: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap`

### File Structure
```
/
├── index.html            ← Home page
├── 404.html
├── vercel.json
├── sitemap.xml
├── robots.txt
├── .gitignore
├── .env.example
├── README.md
├── HANDOFF.md
├── about/index.html
├── appointments/index.html
├── contact/index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── images/
    │   ├── IMG_0314.jpeg / .webp   ← Hero image
    │   ├── IMG_0315.jpeg / .webp   ← Why We Care section
    │   └── IMG_0310.png  / .webp   ← About page
    └── icons/
        └── favicon.svg
```

---

## PLACEHOLDERS STILL NEEDING REAL INFO
- `[PRICE]` — 60-min, 30-min, and Mobile session prices
- `[PHONE]` — Business phone number
- `[EMAIL]` — Business email address
- `[SERVICE AREA]` — City/region served
- `[SQUARE_BOOKING_URL]` — Square appointments booking page URL
- `[FORMSPREE_ID]` — Formspree form ID (replace in `/contact/index.html` action attribute)
- `[CANCELLATION POLICY]` — Policy text for appointments page
- `[LOGO FILE]` — If a logo image is provided, replace the text wordmark in header

---

## IMAGES
All images successfully downloaded and converted to WebP:
- `assets/images/IMG_0314.jpeg` + `.webp` — Hero image (woman being stretched)
- `assets/images/IMG_0315.jpeg` + `.webp` — Why We Care section
- `assets/images/IMG_0310.png` + `.webp` — About page portrait

---

## FILES CHANGED IN THIS SESSION
- `HANDOFF.md` (this file)
- `README.md`
- `.gitignore`
- `.env.example`
- `vercel.json`
- `css/styles.css`
- `js/main.js`
- `index.html`
- `about/index.html`
- `appointments/index.html`
- `contact/index.html`
- `404.html`
- `sitemap.xml`
- `robots.txt`
- `assets/images/*` (downloaded + WebP conversions)

---

## NEXT STEP:
**Task 10 — QA pass.** Open each page in a browser and verify:
1. Layout at 375px, 768px, 1280px
2. All internal links work
3. Hamburger menu opens/closes on mobile
4. Scroll fade-in animations trigger
5. Contact form validates and shows success state
6. Keyboard navigation (Tab through all interactive elements, visible focus rings)
7. Color contrast (WCAG AA minimum)
8. Replace all `[PLACEHOLDER]` values with real business info when available
9. Then deploy to Vercel (see README.md for steps)
