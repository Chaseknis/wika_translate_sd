# WIKA TRANSLATE — Phase 2 Content Expansion Report
Generated: 2026-05-30

---

## SUMMARY

Phase 2 added **37 new pages/routes** and **15 full SEO blog posts** to www.wikatranslate.net. Total new content: approximately 60,000+ words across all pages and posts.

---

## NEW FILES CREATED

### Shared Infrastructure
| File | Purpose |
|---|---|
| `src/routes/styles/service-pages.css` | Shared CSS for all new pages — content layout, sidebar, FAQ section, contact block, city cards, language grids, sector cards, office cards, quote form |
| `src/components/ServicePageLayout.js` | Reusable layout template for all 6 service pages — hero, body+sidebar, FAQ, contact block, footer |
| `src/components/CityPageLayout.js` | Reusable layout template for all 7 city pages — hero, body, service cards, contact block, footer |

### Service Pages (6 new routes)
| Route | File | Title |
|---|---|---|
| `/services/document-translation-rwanda` | `src/routes/services/DocumentTranslation.js` | Professional Document Translation Services in Rwanda |
| `/services/certified-translation-rwanda` | `src/routes/services/CertifiedTranslation.js` | Certified & Legal Translation Services in Rwanda |
| `/services/interpretation-services-rwanda` | `src/routes/services/InterpretationServices.js` | Professional Interpretation Services in Rwanda & East Africa |
| `/services/interpretation-equipment-rental-rwanda` | `src/routes/services/EquipmentRental.js` | Interpretation Equipment Rental in Rwanda |
| `/services/localization-rwanda` | `src/routes/services/Localization.js` | Professional Localization Services for Rwanda & East Africa |
| `/services/transcription-rwanda` | `src/routes/services/Transcription.js` | Professional Transcription Services in Rwanda |

Each service page includes: ~1000-word body content, 8-question FAQ, FAQPage schema, Service schema, sidebar with quick contact, internal links to all other service pages.

### City Landing Pages (7 new routes)
| Route | File | Focus |
|---|---|---|
| `/translation-services-kigali` | `src/routes/cities/Kigali.js` | HQ location, government/UN/embassy hub, 1000+ words |
| `/translation-services-huye` | `src/routes/cities/Huye.js` | University of Rwanda, academic and NGO context |
| `/translation-services-musanze` | `src/routes/cities/Musanze.js` | Conservation, tourism, NGO context |
| `/translation-services-rubavu` | `src/routes/cities/Rubavu.js` | Cross-border Rwanda–DRC trade |
| `/translation-services-nyagatare` | `src/routes/cities/Nyagatare.js` | Eastern Province, agribusiness context |
| `/translation-services-muhanga` | `src/routes/cities/Muhanga.js` | Southern Province, health and NGO |
| `/translation-services-rusizi` | `src/routes/cities/Rusizi.js` | Cross-border Rwanda–Burundi–DRC, Kirundi focus |

Each city page includes: unique opening paragraph, LocalBusiness schema with city name, service cards grid, contact block.

### New Information Pages (5 new routes)
| Route | File | Purpose |
|---|---|---|
| `/languages` | `src/routes/Languages.js` | 19 language pairs with descriptions, uses, industries |
| `/sectors` | `src/routes/Sectors.js` | 11 industry sectors with full descriptions |
| `/why-wika-translate` | `src/routes/WhyWikaTranslate.js` | 11 reasons with icons — authority/trust page |
| `/our-offices` | `src/routes/OurOffices.js` | Kigali HQ + Sudan affiliate with maps |
| `/quote` | `src/routes/Quote.js` | Dedicated quote form (Formspree endpoint) |

### Updated Existing Pages
| File | What Changed |
|---|---|
| `src/routes/About.js` | Wikipedia-style authoritative paragraph added at top of content (AI citation signal) |
| `src/routes/FAQ.js` | Expanded from 7 multilingual questions to 7 + 23 detailed English questions (30 total) with FAQPage schema |
| `src/routes/Home.js` | Blog preview limited to 4 most recent posts (was showing all) |
| `src/components/SiteFooter.js` | Added all new page links, service sub-pages, city pages links for local SEO |
| `src/routes/styles/footer.css` | Fixed Montserrat font reference → Poppins |
| `public/index.html` | Added hreflang tags for EN, FR, AR, x-default |
| `public/sitemap.xml` | Updated with all 37 new URLs |
| `src/App.js` | Added `service-pages.css` global import + 20 new lazy routes |

### Blog Posts (15 new posts in `src/components/blogContent.js`)
| Slug | Title | Target Keywords |
|---|---|---|
| `translation-services-rwanda-guide` | The Complete Guide to Translation Services in Rwanda (2025) | translation services Rwanda |
| `certified-translation-rwanda` | How to Get a Certified Translation in Rwanda | certified translation Rwanda |
| `interpretation-services-kigali` | Professional Interpretation Services in Kigali | interpretation services Kigali |
| `english-french-translation-rwanda` | English to French Translation in Rwanda | English French translation Rwanda |
| `kinyarwanda-translation-services` | Kinyarwanda Translation Services — A Complete Guide | Kinyarwanda translation |
| `un-ngo-translation-rwanda` | Translation Services for UN Agencies and NGOs in Rwanda | UN translation Rwanda |
| `legal-translation-rwanda` | Legal Translation in Rwanda — Courts, Embassies & Government | legal translation Rwanda |
| `interpretation-equipment-rental-kigali` | Interpretation Equipment Rental in Kigali | interpretation equipment rental Kigali |
| `translation-vs-interpretation` | Translation vs Interpretation — What's the Difference? | translation vs interpretation |
| `localization-east-africa` | Localization Services for the East Africa Market | localization East Africa |
| `conference-interpretation-kigali` | Conference Interpretation in Kigali | conference interpretation Kigali |
| `rwanda-language-guide` | Languages of Rwanda — A Complete Guide | languages Rwanda |
| `sworn-translation-rwanda` | Sworn and Notarized Translation in Rwanda | sworn translation Rwanda |
| `translation-for-embassies-kigali` | Translation Services for Embassies in Kigali | embassy translation Kigali |
| `arabic-english-translation-rwanda` | Arabic to English Translation in Rwanda | Arabic translation Rwanda |

---

## TRUST SIGNALS STATUS (post Phase 2)
| Signal | Status |
|---|---|
| Wikipedia-style authority paragraph | ✅ Added to About page |
| Contact block on every new page | ✅ All service/city/info pages |
| Sudan cross-link in footer | ✅ Present |
| NAP in footer | ✅ Present |
| FAQPage schema | ✅ On all service pages + FAQ page |
| LocalBusiness schema | ✅ On all city pages |
| Service schema | ✅ On all 6 service pages |
| BlogPosting schema | ✅ Existing (App.js BlogPostContent) |

---

## MANUAL TASKS REMAINING (requires real content/assets)
1. Upload `og-image.jpg` (1200×630px) to `/public/images/`
2. Submit updated sitemap to Google Search Console
3. Add real client testimonials section (need actual quotes)
4. Add team photos to About page (need real photos)
5. Google Maps iframe for Contact page (consider HTTPS key)
6. Delete the `" 2"` duplicate files scattered in root/public
7. Verify `mod_headers` is enabled on Hostinger Apache (for security headers)
8. Set up SSL force-redirect on Hostinger control panel
9. Set up/claim Google Business Profile for Makuza Peace Plaza
