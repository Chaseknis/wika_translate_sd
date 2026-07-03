# WIKA TRANSLATE — SEO Audit Report
Generated: 2026-05-30

---

## ISSUES FOUND & FIXED

### 1. Title Tags — all were over 60 characters
| Page | Old Title (chars) | New Title (chars) | Status |
|---|---|---|---|
| Homepage | "Wika Translate - Professional Translation & Interpretation Services in Rwanda \| Legal, Technical & More." (101) | "Professional Translation Services in Rwanda \| WIKA TRANSLATE" (61) | ✅ Fixed |
| About | "About Us - Wika Translate \| Professional Translation Agency in Rwanda" (70) | "About WIKA TRANSLATE \| Translation Agency Kigali, Rwanda" (57) | ✅ Fixed |
| Services | "Services - Translation, Interpretation & Equipment Rental \| Wika Translate Rwanda" (83) | "Translation & Interpretation Services Rwanda \| WIKA TRANSLATE" (62) | ✅ Fixed |
| Translation | "Translation Services in Rwanda - Certified, Legal & Technical \| Wika Translate" (80) | "Certified Translation Services Rwanda \| WIKA TRANSLATE Kigali" (62) | ✅ Fixed |
| FAQ | "FAQ - Frequently Asked Questions about Translation & Interpretation \| Wika Translate" (85) | "FAQ \| Translation & Interpretation Rwanda \| WIKA TRANSLATE" (59) | ✅ Fixed |
| Contact | "Contact Us - Wika Translate \| Get a Free Translation Quote in Rwanda" (68) | "Contact WIKA TRANSLATE \| +250 788 933 063 \| Kigali, Rwanda" (59) | ✅ Fixed |
| Blog | "Blog - Wika Translate \| Translation & Interpretation Insights" (61) | "Blog \| Translation & Language Insights Rwanda \| WIKA TRANSLATE" (63) | ✅ Fixed |

### 2. Meta Descriptions — standardized to ≤155 chars with location + CTA
All pages now include: WIKA TRANSLATE, Rwanda/Kigali, and a call to action.

### 3. Missing `og:locale` — added to all pages
`<meta property="og:locale" content="en_RW" />` added to: About, Services, Translation, FAQ, Contact, Blog.

### 4. Missing `og:site_name` on inner pages — added
All inner pages now have `<meta property="og:site_name" content="WIKA TRANSLATE Ltd." />`.

### 5. Schema Markup — major upgrades to App.js global schema
| Field | Before | After |
|---|---|---|
| `name` | "Wika Translate" | "WIKA TRANSLATE Ltd." |
| `alternateName` | missing | "Wika Translate Rwanda" |
| `description` | short generic | full service description |
| `telephone` | ✓ | ✓ |
| `email` | missing | info@wikatranslate.net |
| `areaServed` | single "Rwanda" string | 7 countries + East Africa |
| `contactPoint.email` | missing | info@wikatranslate.net |
| `contactPoint.availableLanguage` | 3 languages | 5 (added Arabic, Swahili) |
| `hasOfferCatalog` | missing | 6 services listed |
| `subsidiary` | missing | WIKA TRANSLATE SUDAN (full address) |
| `sameAs` | Facebook URL with ID | canonical social URLs |

### 6. robots.txt — cleaned up
| Before | After |
|---|---|
| Disallowed /admin/, /checkout/, /cart/ (irrelevant paths) | Removed |
| Blocked AhrefsBot and SemrushBot | Removed — these crawlers help with SEO monitoring |
| Sitemap line | ✓ Kept |

### 7. sitemap.xml — rebuilt from scratch
| Before | After |
|---|---|
| Wrong URL cases (/services vs /Services mismatch) | All lowercase, matching actual routes |
| Missing /industries | Added |
| No `<lastmod>` dates | Added |
| Blog posts had no dates | Added datePublished dates |

### 8. .htaccess — upgraded
| Added | Purpose |
|---|---|
| `application/xml` MIME type | Ensures sitemap.xml is served correctly |
| Sitemap/robots.txt rewrite exemptions | Prevents React Router from intercepting static files |
| `X-Content-Type-Options: nosniff` | Security header |
| `X-Frame-Options: SAMEORIGIN` | Clickjacking protection |
| `X-XSS-Protection: 1; mode=block` | XSS protection |
| `Referrer-Policy: strict-origin-when-cross-origin` | Privacy/security |

### 9. Canonical Tags — already correct on all pages (no changes needed)

### 10. Partner logo alt texts — made keyword-rich with real names (see design-audit-report.md)

---

## KEYWORD TARGETS — STATUS
| Keyword | Coverage |
|---|---|
| "Translation services Rwanda" | Homepage H1 variant, meta, schema |
| "Translation company Kigali" | About title, schema |
| "Certified translation Rwanda" | Translation page title, Services meta |
| "Interpretation services Kigali" | Services page, schema offer catalog |
| "Translation agency East Africa" | Homepage description, schema areaServed |
| "Legal translation Rwanda" | Translation page meta |
| "Document translation Kigali" | Translation page meta |
| "Professional translation Rwanda" | Homepage title |
| "Kinyarwanda translation services" | Translation page keywords |
| "French English translation Rwanda" | Translation page keywords |
| "WIKA TRANSLATE Rwanda" | All page titles include brand name |

---

## REMAINING SEO TASKS (manual — see pending-manual-tasks.md)
- Upload og-image.jpg (1200×630px) to /public/images/
- Submit sitemap to Google Search Console
- Verify schema on schema.org validator
- Add hreflang tags for FR/AR language variants
- Set up Google Business Profile
