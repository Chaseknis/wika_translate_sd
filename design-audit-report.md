# WIKA TRANSLATE — Design Audit Report
Generated: 2026-05-30

---

## ISSUES FOUND

### 1. CRITICAL — Route case mismatch (404 bug)
| Location | Issue | Fix Applied |
|---|---|---|
| `src/App.js` | Routes used `/Services`, `/Translation`, `/FAQ` (uppercase) | Changed to `/services`, `/translation`, `/faq` |
| `src/components/SiteFooter.js` | Links used `/Services`, `/FAQ`, `/Translation` | Updated to lowercase |
| `src/components/Header.js` | Links already used lowercase — was inconsistent with routes | Routes now match |

**Impact:** Every nav click on Services, Translation, FAQ resulted in a client-side 404. Fixed.

---

### 2. HIGH — Contact form `_next` pointing to localhost
| Location | Issue | Fix Applied |
|---|---|---|
| `src/routes/Contact.js` | `_next` value was `http://127.0.0.1:5555/#contact-us` | Changed to `https://www.wikatranslate.net/contact` |
| `src/routes/Home.js` | Same issue in the home page contact form | Fixed |

---

### 3. HIGH — Footer missing NAP, Sudan cross-link, WhatsApp, CTA
| Issue | Fix Applied |
|---|---|
| No phone/email/address in footer | Added `<address>` NAP block with WIKA TRANSLATE Ltd., Makuza Peace Plaza, +250 788 933 063, info@wikatranslate.net |
| No WIKA TRANSLATE SUDAN cross-link | Added affiliate section with link to www.wikatranslate.us |
| No WhatsApp button | Added green WhatsApp CTA button |
| No "Get a Quote" CTA | Added red CTA button linking to /contact |
| Industries page missing from footer links | Added link to /industries |

---

### 4. MEDIUM — Industries page existed but was not routed
| Location | Issue | Fix Applied |
|---|---|---|
| `src/App.js` | `Industries.js` file existed but had no route | Added `<Route path="/industries" element={<Industries />} />` with lazy loading |
| `public/sitemap.xml` | `/industries` missing | Added |

---

### 5. MEDIUM — Partner logo alt texts were generic/SEO-empty
| Image | Old Alt | New Alt |
|---|---|---|
| PaxforPeace | "Translation Agency in Kigali" | "Pax voor Vrede — client of WIKA TRANSLATE interpretation services" |
| mPharma | "Interpretation Company in Kigali" | "mPharma — client of WIKA TRANSLATE translation services in Rwanda" |
| care | "Interpretation Company in Rwanda" | "CARE International — client of WIKA TRANSLATE interpretation services Rwanda" |
| BurkinaFaso | "Translation Company in Kigali" | "Government of Burkina Faso — client of WIKA TRANSLATE official translation" |
| Rwanda | "Translation Company in Rwanda" | "Government of Rwanda — client of WIKA TRANSLATE certified translation services" |
| (all others) | Generic | Updated to use real names + service context |

---

### 6. LOW — Design inconsistencies noted (not modified — preserved existing visual identity)
- `h1` and `h2` global rules in `about.css` and `home.css` set `width: 100%` — these are global overrides that could affect unexpected elements
- Button min-height is 44px in some places, 48px in others — standardized to 48px in variables.css
- `font-family: 'Montserrat'` referenced in `footer.css` `.link` rule but Montserrat is not loaded — falls back to system font; Poppins should be used consistently

---

## DESIGN SYSTEM CREATED
- File: `src/styles/variables.css`
- Imported in: `src/app.css`
- Documents: all brand colours, typography scale, spacing scale, border radius, shadows, transitions, breakpoints, button minimum sizes

---

## WHAT WAS PRESERVED
- All existing colours (`#ffca7a`, `#b7312a`, `#1a3c34`, dark gradients)
- All animations and motion effects (framer-motion, AnimateOnScroll)
- All layout structures and grid systems
- Google Tag Manager ID: GTM-WNX3JCH4 (untouched)
- All existing component styles
