# Total Range Fascia Stretch — Website

Static marketing site for **Total Range Fascia Stretch**, a certified fascia stretch practitioner offering one-on-one assisted stretching in a home-based studio and as a mobile service.

**Live URL:** https://www.totalrangefst.com

---

## Tech Stack

- Plain HTML, CSS, vanilla JavaScript — no build step required
- Hosted on Vercel with `cleanUrls: true`
- Bookings via Square Appointments embed
- Contact form via Formspree

---

## Folder Structure

```
/
├── index.html              ← Home
├── about/index.html        ← About
├── appointments/index.html ← Book Appointment
├── contact/index.html      ← Contact
├── 404.html
├── css/styles.css          ← Single shared stylesheet
├── js/main.js              ← Single shared script
├── assets/images/          ← WebP + original images
├── sitemap.xml
├── robots.txt
└── vercel.json
```

---

## Before Going Live — Fill in Placeholders

Search the codebase for `[PLACEHOLDER]` tags (or see HANDOFF.md). The ones you need:

| Placeholder | Where | What to put |
|---|---|---|
| `[PRICE]` | index.html | Session prices |
| `[PHONE]` | index.html, contact/index.html, footer | Phone number |
| `[EMAIL]` | contact/index.html, footer | Email address |
| `[SERVICE AREA]` | index.html, contact/index.html, footer | City/region |
| `[SQUARE_BOOKING_URL]` | appointments/index.html | Square booking link |
| `[FORMSPREE_ID]` | contact/index.html | Formspree form ID |
| `[CANCELLATION POLICY]` | appointments/index.html | Cancellation text |
| Square embed code | appointments/index.html | Paste from Square dashboard |

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com → **New Project** → Import your GitHub repo.
3. Framework Preset: **Other** (no build command, no output directory needed).
4. Click **Deploy**.
5. In Vercel project settings → **Domains**, add `totalrangefst.com` and `www.totalrangefst.com`.
6. Update your DNS registrar's nameservers to point to Vercel (they'll show you the values).

---

## Local Preview

Open `index.html` directly in a browser, or use a simple local server:

```bash
npx serve .
```
