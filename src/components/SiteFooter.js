import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/new_logo.png';
import '../routes/styles/footer.css';

function SiteFooter() {
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
            <p className="brand-description">
              Wika Translate Ltd offers one-stop solutions to your translation needs.
            </p>
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
            <h3 className="links-title">Useful Links</h3>
            <div className="links-container">
              <ul className="links-list">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/contact" className="link">Contact Us</Link></li>
                <li><Link to="/about" className="link">About Us</Link></li>
                <li><Link to="/Services" className="link">Services</Link></li>
              </ul>
              <ul className="links-list">
                <li><Link to="/blog" className="link">Blog</Link></li>
                <li><Link to="/FAQ" className="link">FAQ</Link></li>
                <li><Link to="/Translation" className="link">Translation</Link></li>
              </ul>
            </div>
          </div>

          <div className="newsletter-section">
            <h3 className="newsletter-title">Subscribe To Our Newsletter</h3>
            <div className="newsletter-form">
              <form name="submit-to-google-sheet" className="form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="email-input"
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                  <i className="uil uil-message send-icon" />
                </button>
              </form>
              <span id="msg" className="message" />
            </div>
            <p className="newsletter-description">
              Wika Translate Ltd constantly reaches out to
              translators and interpreters to find the very best.
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <hr className="divider-line" />
          <div className="footer-bottom-content">
            <span className="terms-text">Terms of use | Privacy Environmental Policy</span>
            <span className="copyrights">
              {'© '}
              {new Date().getFullYear()}
              {' Wika Translate Ltd. All rights reserved'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
