# WIKA TRANSLATE — Pending Manual Tasks
Generated: 2026-05-30

These tasks require real assets, manual server access, or third-party account access and cannot be automated.

---

## PRIORITY 1 — Do These Before Launch

### 1. Upload og-image.jpg
- **What:** A 1200×630px branded image for social media sharing (Facebook, LinkedIn, Twitter)
- **Where to save:** `public/images/og-image.jpg`
- **Design guidance:** Use the WIKA TRANSLATE logo on the dark gradient background (`#1a3c34` or the brand dark), with the tagline "Professional Translation & Interpretation — Kigali, Rwanda"
- **Referenced in:** All page Helmet tags at `https://www.wikatranslate.net/images/og-image.jpg`

### 2. Submit sitemap to Google Search Console
- URL: https://search.google.com/search-console
- Property: https://www.wikatranslate.net
- Sitemap URL to submit: `https://www.wikatranslate.net/sitemap.xml`
- **Also submit to Bing Webmaster Tools**

### 3. Verify schema markup
- Tool: https://validator.schema.org/
- Paste the JSON-LD from `src/App.js` and confirm zero errors
- Also test with Google Rich Results Test: https://search.google.com/test/rich-results

### 4. Set up / verify Google Business Profile
- URL: https://business.google.com
- NAP must exactly match: **WIKA TRANSLATE Ltd.**, Makuza Peace Plaza KN 84 St, Kigali, Rwanda, +250 788 933 063
- Add all service categories
- Add photos of the office and team

---

## PRIORITY 2 — Do Within 30 Days

### 5. Create real client testimonials
- Collect 3–5 written testimonials from actual clients (UN agencies, NGOs, embassies)
- Include: client name, organization, country, quote
- Add a Testimonials section to the homepage between the Stats and Partners sections

### 6. Add 8+ more blog articles
- Target one article per service keyword:
  - "How to get a certified translation in Rwanda"
  - "Simultaneous interpretation equipment rental Kigali — complete guide"
  - "Kinyarwanda translation services — what you need to know"
  - "Legal document translation in Rwanda — embassy requirements"
  - "Conference interpretation services in East Africa"
  - "Localization vs translation — what African businesses need to know"
  - "Translation for NGOs in Rwanda — working with UN agencies"
  - "Medical translation services in Rwanda"

### 7. Build dedicated service landing pages
Each should have:
- Unique H1 with keyword (e.g. "Document Translation Services in Rwanda")
- 400–600 words of unique content
- FAQ section (5 questions)
- CTA to /contact
- Internal links to other service pages

URLs to create:
- `/services/document-translation-rwanda`
- `/services/certified-translation-rwanda`
- `/services/interpretation-services-rwanda`
- `/services/interpretation-equipment-rental-rwanda`
- `/services/localization-rwanda`
- `/services/transcription-rwanda`

### 8. Add hreflang tags for FR and AR
The site already has EN/FR/AR language switching. Add hreflang to `index.html`:
```html
<link rel="alternate" hreflang="en" href="https://www.wikatranslate.net/" />
<link rel="alternate" hreflang="fr" href="https://www.wikatranslate.net/?lang=fr" />
<link rel="alternate" hreflang="ar" href="https://www.wikatranslate.net/?lang=ar" />
<link rel="alternate" hreflang="x-default" href="https://www.wikatranslate.net/" />
```
Note: URL strategy for language variants needs to be decided (query param vs subdirectory).

### 9. Add Google Maps embed to Contact page
- Embed URL for Makuza Peace Plaza, KN 84 St, Kigali, Rwanda
- Get embed code from: https://maps.google.com → Share → Embed a map

### 10. Add team/about section with real photos
- Minimum: 3–5 team member photos with names and titles
- File format: WebP, 400×400px minimum, named: `team-[firstname-lastname].webp`

---

## PRIORITY 3 — Nice to Have

### 11. Fix Montserrat font reference in footer.css
- `footer.css` line 116: `.link { font-family: 'Montserrat', sans-serif; }` — Montserrat is not loaded
- Change to `font-family: 'Poppins', sans-serif` or remove the declaration

### 12. Remove duplicate " 2" files from repository
The following files appear to be accidental duplicates and should be deleted:
- `.babelrc 2`
- `.gitattributes 2`
- `.stylelintrc 2.json`
- `README 3.md`
- `package 2.json`
- `package-lock 2.json`
- `public/favicon 2.ico`
- `public/index 2.html`
- `public/manifest 2.json`
- `public/robots 2.txt`
- `public/sitemap 3.xml`
- `scripts/generate-sitemap 2.js`
- All `src/routes/styles/[name] 2.css` files

### 13. Set up SSL/HTTPS redirect on Hostinger
- In Hostinger control panel → SSL → Enable Force HTTPS
- Verify: http://wikatranslate.net → redirects to https://www.wikatranslate.net

### 14. Add Facebook/Instagram social proof
- Update `sameAs` in schema once Facebook URL is confirmed (currently using wikatranslate handle, verify it matches the actual page URL)

### 15. Core Web Vitals — measure and optimize
- Run PageSpeed Insights: https://pagespeed.web.dev/ on https://www.wikatranslate.net
- The hero video (`videoBg5.mp4`) is the likely LCP bottleneck on mobile — consider a WebP poster image as the primary LCP element with the video loading after
- Target: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## NOTES FOR SERVER ADMIN (Hostinger)
- `.htaccess` has been updated with security headers — verify `mod_headers` is enabled on the server
- `mod_expires` must be enabled for cache headers to work
- `mod_rewrite` must be enabled (required for React Router SPA routing)
- Confirm `AllowOverride All` is set in the Apache virtual host config
