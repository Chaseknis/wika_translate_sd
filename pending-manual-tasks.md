# Pending Manual Tasks — WIKA TRANSLATE SUDAN SEO

These tasks cannot be completed in code and require manual action by the team.

---

## Priority 1: Search Console & Indexing

### 1. Google Search Console
- Verify ownership of https://www.wikatranslate.us (HTML file or DNS TXT method)
- Submit the updated sitemap: https://www.wikatranslate.us/sitemap.xml
- Request indexing for all new pages (use the URL Inspection tool):
  - /translation-services-sudan
  - /services/document-translation-sudan
  - /services/certified-translation-sudan
  - /services/interpretation-services-sudan
  - /services/interpretation-equipment-rental-sudan
  - /translation-services-khartoum through /translation-services-atbara (9 city pages)
  - /blog/5 through /blog/9 (5 new blog posts)
- Monitor Core Web Vitals in the "Experience" section
- Monitor coverage errors weekly

### 2. Bing Webmaster Tools
- Register at https://www.bing.com/webmasters
- Verify ownership of https://www.wikatranslate.us
- Submit sitemap: https://www.wikatranslate.us/sitemap.xml
- Submit to Bing Places for Business (local listing equivalent of GBP)

---

## Priority 2: Local Listings

### 3. Apple Maps Connect
- Register at https://mapsconnect.apple.com
- Create a business listing for WIKA TRANSLATE SUDAN
- NAP: WIKA TRANSLATE SUDAN | Al Emtidad Street, Omdurman, Sudan | +249 967 200 938

### 4. Yandex Webmaster
- Register at https://webmaster.yandex.com
- Add and verify https://www.wikatranslate.us
- Submit sitemap

### 5. Wikidata / Knowledge Graph
- Create a Wikidata entry for WIKA TRANSLATE SUDAN (Q-identifier)
  - Name: WIKA TRANSLATE SUDAN
  - Instance of: translation agency (Q2166722)
  - Country: Sudan (Q1049)
  - Location: Omdurman (Q213492)
  - Website: https://www.wikatranslate.us
  - Parent organization: WIKA TRANSLATE Ltd.
- This helps Google Knowledge Graph recognize the entity

---

## Priority 3: Analytics & Monitoring

### 6. Google Analytics 4
- Ensure GA4 tag is firing correctly on all new pages
- Set up conversions: contact form submission, quotation form submission, WhatsApp click, email click
- Create audiences: UN/NGO visitors, embassy visitors, Khartoum visitors

### 7. Google Tag Manager
- GTM container GTM-WNX3JCH4 is already installed
- Add click-tracking tags for: WhatsApp button, email link, phone link, "Get a Free Quote" buttons
- Add scroll-depth tracking on long pages (blog posts, service sub-pages)

---

## Priority 4: Image & Technical

### 8. OG Image
- Current OG image: /images/office.jpg — ensure dimensions are at least 1200×630px
- Create a branded OG image with WIKA TRANSLATE SUDAN logo + tagline for better social sharing

### 9. WebP Image Conversion
- Convert remaining JPG/PNG assets in /public/images/ to WebP format for better Core Web Vitals
- Update all img src references accordingly

### 10. HTTPS Certificate
- Confirm SSL certificate auto-renewal is configured (Let's Encrypt recommended)
- Test with: https://www.ssllabs.com/ssltest/

---

## Priority 5: Backlink & Authority

### 11. Backlink Outreach
- Target: NGO directories, UN partner directories, Sudan business directories
- Priority domains:
  - OCHA Sudan (https://www.unocha.org/sudan)
  - Reliefweb.int Sudan pages
  - Devex.com — submit company profile
  - ReliefSudan forums / humanitarian networks
  - Sudan embassies abroad — request listing as translation partner

### 12. GoodFirms Profile
- Already listed on GoodFirms — request reviews from past clients
- Ensure profile NAP matches exactly: WIKA TRANSLATE SUDAN | Al Emtidad Street, Omdurman

### 13. Clutch.co Profile
- Create or claim profile at https://clutch.co
- Same NAP consistency requirement

---

## Priority 6: Arabic SEO (Future Sprint)

### 14. /ar/ URL Structure
- Current implementation: language switcher via JS (same URL, no /ar/ path)
- For true Arabic SEO: implement proper /ar/ routing with SSR or pre-rendering
- Requires significant technical work (Next.js migration or React SSR setup)
- Short-term workaround: ensure Arabic translations/index.js has keyword-rich Arabic text

### 15. Arabic Blog Posts
- Create 3-5 Arabic-language blog posts:
  - أفضل شركة ترجمة في السودان (Best translation company in Sudan)
  - كيف تحصل على ترجمة معتمدة في السودان (How to get certified translation in Sudan)
  - خدمات الترجمة للأمم المتحدة والمنظمات غير الحكومية في السودان (Translation for UN/NGOs in Sudan)
- Submit these to Arabic-language directories and news sites

---

## Notes
- All NAP must remain 100% consistent across all platforms:
  - Name: WIKA TRANSLATE SUDAN
  - Address: Al Emtidad Street, Omdurman, Sudan
  - Phone: +249 967 200 938
  - Email: info@wikatranslate.us
- Never vary the company name format (avoid "Wika Translate" alone without "Sudan" on external sites)
