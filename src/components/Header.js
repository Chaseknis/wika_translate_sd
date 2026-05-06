import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/new_logo_sm.png';
import './styles/header.css';
import { useTranslation } from '../contexts/LanguageContext';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className={`header_contact_card${isScrolled ? ' hidden' : ''}`}>
        <div className="contact_card">
          <i className="bx bxl-whatsapp contact_card_icon" />
          <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello, more information!" className="header_contact_button">
            +250 788 933 063
          </a>
        </div>

        <div className="contact_card">
          <i className="bx bx-mail-send contact_card_icon" />
          <a href="mailto:info@wikatranslate.net" className="header_contact_button">
            info@wikatranslate.net
          </a>
        </div>
      </div>
      <nav>
        <Link to="/" className="logo" aria-label="logo" onClick={() => setActiveNav('#home')}>
          <img src={favicon} alt="logo" width="60" height="38" />
        </Link>
        <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-estate nav_icon" />
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-users-alt nav_icon" />
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-briefcase-alt nav_icon" />
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link
                to="/translation"
                onClick={() => setActiveNav('#translation')}
                className={activeNav === '#translation' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-language nav_icon" />
                {t.nav.translation}
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={() => setActiveNav('#faq')}
                className={activeNav === '#faq' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-question nav_icon" />
                {t.nav.faq}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-message nav_icon" />
                {t.nav.contact}
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={handleToggle}
            onKeyDown={handleToggle}
            role="button"
            tabIndex={0}
            aria-label="Close navigation"
          />
        </div>

        <div className="nav_right">
          <div className="lang_switcher">
            <button
              type="button"
              className={`lang_btn${language === 'en' ? ' lang_active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <span className="lang_divider">|</span>
            <button
              type="button"
              className={`lang_btn${language === 'fr' ? ' lang_active' : ''}`}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
            <span className="lang_divider">|</span>
            <button
              type="button"
              className={`lang_btn${language === 'ar' ? ' lang_active' : ''}`}
              onClick={() => setLanguage('ar')}
            >
              ع
            </button>
          </div>
          <div className="nav_toggle" onClick={handleToggle} onKeyDown={handleToggle} role="button" tabIndex={0} aria-label="Open navigation">
            <i className="uil uil-bars" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
