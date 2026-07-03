import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/new_logo.png';
import '../routes/styles/footer.css';
import { useTranslation } from '../contexts/LanguageContext';

function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">

          {/* Brand + NAP */}
          <div className="brand-section">
            <Link to="/">
              <img
                src={favicon}
                alt="WIKA TRANSLATE Ltd. — Professional Translation and Interpretation Services, Kigali Rwanda"
                className="footer_logo"
                loading="lazy"
              />
            </Link>
            <p className="brand-description">{t.footer.brand}</p>

            {/* NAP — consistent on every page for local SEO */}
            <address className="footer-nap">
              <strong>WIKA TRANSLATE Ltd.</strong>
              <br />
              Makuza Peace Plaza, KN 84 St, Kigali, Rwanda
              <br />
              <a href="tel:+250788933063" className="footer-nap-link">+250 788 933 063</a>
              <br />
              <a href="mailto:info@wikatranslate.net" className="footer-nap-link">info@wikatranslate.net</a>
            </address>

            {/* WhatsApp CTA */}
            <a
              href="https://api.whatsapp.com/send?phone=250788933063&text=Hello%2C%20I%20need%20translation%20services"
              className="footer-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with WIKA TRANSLATE on WhatsApp"
            >
              <i className="bx bxl-whatsapp" />
              {' '}
              WhatsApp Us
            </a>

            <div className="social-links">
              <div className="footer_socials_wrapper">
                <a href="https://www.linkedin.com/company/81655771" className="socials_icon" target="_blank" aria-label="LinkedIn" rel="noreferrer">
                  <i className="uil uil-linkedin" />
                </a>
                <a href="https://www.twitter.com/wikatranslate" className="socials_icon" target="_blank" aria-label="Twitter / X" rel="noreferrer">
                  <i className="uil uil-twitter" />
                </a>
                <a target="_blank" href="https://www.goodfirms.co/company/wika-translate" className="socials_icon" rel="noreferrer" aria-label="GoodFirms">
                  <img
                    className="goodFirmsLogo"
                    src="https://assets.goodfirms.co/badges/icon/white-goodfirms-icon.svg"
                    title="Top Translation Services Company"
                    alt="Top Translation Services Company on GoodFirms"
                  />
                </a>
                <a href="https://www.instagram.com/wikatranslate" className="socials_icon" target="_blank" aria-label="Instagram" rel="noreferrer">
                  <i className="uil uil-instagram-alt" />
                </a>
                <a href="https://www.facebook.com/wikatranslate" className="socials_icon" target="_blank" aria-label="Facebook" rel="noreferrer">
                  <i className="uil uil-facebook" />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="links-section">
            <h3 className="links-title">{t.footer.usefulLinks}</h3>
            <div className="links-container">
              <ul className="links-list">
                <li><Link to="/" className="link">{t.footer.links.home}</Link></li>
                <li><Link to="/about" className="link">{t.footer.links.about}</Link></li>
                <li><Link to="/services" className="link">{t.footer.links.services}</Link></li>
                <li><Link to="/translation" className="link">{t.footer.links.translation}</Link></li>
                <li><Link to="/industries" className="link">Industries</Link></li>
                <li><Link to="/languages" className="link">Languages</Link></li>
                <li><Link to="/sectors" className="link">Sectors</Link></li>
              </ul>
              <ul className="links-list">
                <li><Link to="/blog" className="link">{t.footer.links.blog}</Link></li>
                <li><Link to="/faq" className="link">{t.footer.links.faq}</Link></li>
                <li><Link to="/contact" className="link">{t.footer.links.contact}</Link></li>
                <li><Link to="/why-wika-translate" className="link">Why Choose Us</Link></li>
                <li><Link to="/our-offices" className="link">Our Offices</Link></li>
                <li><Link to="/quote" className="link">Get a Quote</Link></li>
              </ul>
            </div>

            {/* Service sub-pages — 2-column grid */}
            <div style={{ marginTop: '1.5rem' }}>
              <p className="links-title" style={{ paddingBottom: '0.75rem' }}>Our Services</p>
              <ul className="footer-services-grid">
                <li><Link to="/services/document-translation-rwanda" className="link">Document Translation</Link></li>
                <li><Link to="/services/certified-translation-rwanda" className="link">Certified Translation</Link></li>
                <li><Link to="/services/interpretation-services-rwanda" className="link">Interpretation Services</Link></li>
                <li><Link to="/services/interpretation-equipment-rental-rwanda" className="link">Equipment Rental</Link></li>
                <li><Link to="/services/localization-rwanda" className="link">Localization</Link></li>
                <li><Link to="/services/transcription-rwanda" className="link">Transcription</Link></li>
              </ul>
            </div>

            {/* Sudan cross-link */}
            <div className="footer-sudan-link">
              <p className="footer-sudan-title">Our Affiliate</p>
              <a href="https://www.wikatranslate.us" className="footer-sudan-anchor" target="_blank" rel="noopener noreferrer">
                WIKA TRANSLATE SUDAN
              </a>
              <p className="footer-sudan-address">Al Emtidad Street, Omdurman, Sudan</p>
              <a href="https://www.wikatranslate.us" className="footer-sudan-url" target="_blank" rel="noopener noreferrer">
                www.wikatranslate.us
              </a>
            </div>
          </div>

          {/* Newsletter + CTA */}
          <div className="newsletter-section">
            <h3 className="newsletter-title">{t.footer.newsletter}</h3>
            <div className="newsletter-form">
              <form name="submit-to-google-sheet" className="form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.footer.emailPlaceholder}
                  className="email-input"
                />
                <button type="submit" className="subscribe-button">
                  {t.footer.subscribe}
                  <i className="uil uil-message send-icon" />
                </button>
              </form>
              <span id="msg" className="message" />
            </div>
            <p className="newsletter-description">{t.footer.newsletterDesc}</p>

            {/* Get a Quote CTA */}
            <div className="footer-cta">
              <Link to="/quote" className="footer-cta-btn">Get a Free Quote</Link>
              <p className="footer-cta-sub">Response within 10 minutes</p>
            </div>

            {/* City links for local SEO — compact grid */}
            <div style={{ marginTop: '2rem' }}>
              <p className="links-title" style={{ paddingBottom: '0.75rem' }}>Cities We Serve</p>
              <ul className="footer-cities-grid">
                <li><Link to="/translation-services-kigali" className="link">Kigali</Link></li>
                <li><Link to="/translation-services-huye" className="link">Huye</Link></li>
                <li><Link to="/translation-services-musanze" className="link">Musanze</Link></li>
                <li><Link to="/translation-services-rubavu" className="link">Rubavu</Link></li>
                <li><Link to="/translation-services-nyagatare" className="link">Nyagatare</Link></li>
                <li><Link to="/translation-services-muhanga" className="link">Muhanga</Link></li>
                <li><Link to="/translation-services-rusizi" className="link">Rusizi</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <hr className="divider-line" />
          <div className="footer-bottom-content">
            <span className="terms-text">{t.footer.terms}</span>
            <span className="copyrights">
              {'© '}
              {new Date().getFullYear()}
              {' '}
              {t.footer.rights}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
