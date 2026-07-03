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

          <div className="brand-section">
            <Link to="/">
              <img
                src={favicon}
                alt="Wika Translate - Professional Translation and Interpretation Services"
                className="footer_logo"
                loading="lazy"
              />
            </Link>
            <p className="brand-description">{t.footer.brand}</p>
            <div className="social-links">
              <div className="footer_socials_wrapper">
                <a href="https://www.linkedin.com/company/81655771" className="socials_icon socials-2" target="_blank" aria-label="LinkedIn" rel="noreferrer">
                  <i className="uil uil-linkedin" />
                </a>
                <a href="https://www.twitter.com/wikatranslate" className="socials_icon socials-3" target="_blank" aria-label="Twitter" rel="noreferrer">
                  <i className="uil uil-twitter" />
                </a>
                <a target="_blank" href="https://www.goodfirms.co/company/wika-translate" className="socials_icon" rel="noreferrer">
                  <img
                    className="goodFirmsLogo"
                    src="https://assets.goodfirms.co/badges/icon/white-goodfirms-icon.svg"
                    title="Top Translation Services Company"
                    alt="Top Translation Services Company on GoodFirms"
                  />
                </a>
                <a href="https://www.instagram.com/wikatranslate" className="socials_icon socials-3" target="_blank" aria-label="Instagram" rel="noreferrer">
                  <i className="uil uil-instagram-alt" />
                </a>
                <a href="https://www.facebook.com/wikatranslate" className="socials_icon socials-1" target="_blank" aria-label="Facebook" rel="noreferrer">
                  <i className="uil uil-facebook" />
                </a>
              </div>
            </div>
          </div>

          <div className="links-section">
            <h3 className="links-title">{t.footer.usefulLinks}</h3>
            <div className="links-container">
              <ul className="links-list">
                <li><Link to="/" className="link">{t.footer.links.home}</Link></li>
                <li><Link to="/contact" className="link">{t.footer.links.contact}</Link></li>
                <li><Link to="/about" className="link">{t.footer.links.about}</Link></li>
                <li><Link to="/services" className="link">{t.footer.links.services}</Link></li>
                <li><Link to="/blog" className="link">{t.footer.links.blog}</Link></li>
                <li><Link to="/faq" className="link">{t.footer.links.faq}</Link></li>
                <li><Link to="/translation" className="link">{t.footer.links.translation}</Link></li>
              </ul>
              <ul className="links-list">
                <li>
                  <Link to="/translation-services-sudan" className="link">
                    Translation Services Sudan
                  </Link>
                </li>
                <li>
                  <Link to="/services/document-translation-sudan" className="link">
                    Document Translation
                  </Link>
                </li>
                <li>
                  <Link to="/services/certified-translation-sudan" className="link">
                    Certified Translation
                  </Link>
                </li>
                <li>
                  <Link to="/services/interpretation-services-sudan" className="link">
                    Interpretation Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/interpretation-equipment-rental-sudan" className="link">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link to="/translation-services-khartoum" className="link">
                    Translation Khartoum
                  </Link>
                </li>
                <li>
                  <Link to="/translation-services-omdurman" className="link">
                    Translation Omdurman
                  </Link>
                </li>
                <li>
                  <Link to="/translation-services-port-sudan" className="link">
                    Translation Port Sudan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

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
          </div>

        </div>

        <div className="footer-offices">
          <h3 className="footer-offices-title">Our Other Offices</h3>
          <div className="footer-offices-list">
            <div className="footer-office">
              <strong>Wika Translate Kentucky</strong>
              <span>1048 Fisk Court, Lexington, Kentucky, USA</span>
              <a href="tel:+18594578542">+1 (859) 457-8542</a>
              <a href="mailto:info@wikatranslate.com">info@wikatranslate.com</a>
            </div>
            <div className="footer-office">
              <strong>Wika Translate Kigali</strong>
              <span>Makuza Peace Plaza, KN 84 St, Kigali, Rwanda</span>
              <a href="tel:+250788933063">+250 788 933 063</a>
              <a href="mailto:info@wikatranslate.net">info@wikatranslate.net</a>
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
