import React, { useRef, useEffect, useState } from 'react';
import './styles/contact.css';
import { Helmet } from 'react-helmet';
import Quotation from '../components/Quotation';
import ContactDetails from '../components/contactDetails';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

function Contact() {
  const { t } = useTranslation();
  const [showContactForm, setShowContactForm] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [t]);

  useEffect(() => {
    if (navigator.userAgent === 'ReactSnap') return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>Contact Wika Translate Sudan | Get a Free Quote</title>
        <meta name="description" content="Contact Wika Translate Sudan for professional translation & interpretation services. Get a free quote in under 10 minutes. Email info@wikatranslate.us or visit Omdurman." />
        <meta name="keywords" content="contact Wika Translate Sudan, translation quote Sudan, interpretation quote Sudan, free quote translation Sudan, translation services contact Omdurman, language company Sudan contact" />
        <link rel="canonical" href="https://www.wikatranslate.us/contact" />
        <meta property="og:title" content="Contact Wika Translate Sudan | Get a Free Quote" />
        <meta property="og:description" content="Contact Wika Translate Sudan for professional translation & interpretation services. Get a free quote in under 10 minutes. Email info@wikatranslate.us." />
        <meta property="og:url" content="https://www.wikatranslate.us/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Wika Translate Sudan | Get a Free Quote" />
        <meta name="twitter:description" content="Contact Wika Translate Sudan for professional translation & interpretation services. Get a free quote in under 10 minutes." />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/office.jpg" />
      </Helmet>
      <section className="contact_section" id="contact">
        <div className="contact_title_main_container">
          <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                {t.contact.badge}
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{t.contact.heroTitles[activeIndex][0]}</span>
                <span>{t.contact.heroTitles[activeIndex][1]}</span>
                <span>{t.contact.heroTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">{t.contact.heroParagraph}</p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="toggle-buttons">
          <button
            type="button"
            onClick={() => setShowContactForm(true)}
            className={`toggle-btn ${showContactForm ? 'active' : ''}`}
          >
            {t.contact.toggleContact}
          </button>
          <button
            type="button"
            onClick={() => setShowContactForm(false)}
            className={`toggle-btn ${!showContactForm ? 'active' : ''}`}
          >
            {t.contact.toggleQuotation}
          </button>
        </div>

        <div className="form-container">
          {showContactForm ? (
            <div className="contact-form-section">
              <div className="text-section">
                <div className="text_section_wrapper">
                  <h2>
                    {t.contact.title}
                    <hr />
                  </h2>
                  <p>{t.contact.p1}</p>
                </div>
                <ContactDetails />
              </div>
              <form id="form" action="https://formspree.io/f/xjvdgezn" method="POST" className="contact-form">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.wikatranslate.us/contact" />
                <div className="contact_details">
                  <input type="text" id="name" name="name" placeholder={t.contact.fullName} className="input" required />
                  <input type="text" id="phone" name="phone" placeholder={t.contact.phone} className="input" />
                  <input type="email" id="email" name="email" placeholder={t.contact.email} className="input" required />
                </div>
                <textarea id="message" name="message" placeholder={t.contact.message} rows="8" className="input" required />
                <button type="submit" className="button"><span>{t.contact.send}</span></button>
              </form>
            </div>
          ) : (
            <Quotation />
          )}
        </div>

        {/* ── NAP + Google Maps ── */}
        <div className="contact_nap_section">
          <div className="contact_nap_inner">
            <div className="contact_nap_details">
              <h2 className="contact_nap_title">
                {t.contact.findUs}
                <hr />
              </h2>
              <address className="contact_nap_address">
                <strong>WIKA TRANSLATE SUDAN</strong>
                <br />
                Al Emtidad Street, Omdurman, Sudan
                <br />
                <a href="tel:+249967200938">+249 967 200 938</a>
                <br />
                <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
                <br />
                <br />
                <span>Mon–Thu: 8:00–17:00</span>
                <br />
                <span>Sun: 9:00–14:00</span>
              </address>
              <a
                href="https://maps.app.goo.gl/T8cyvyZxPMcMXBRh9"
                target="_blank"
                rel="noopener noreferrer"
                className="contact_nap_map_link"
              >
                {t.contact.openInMaps}
              </a>
            </div>
            <div className="contact_map_wrapper">
              <iframe
                title="WIKA TRANSLATE SUDAN location — Al Emtidad Street, Omdurman"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.0!2d32.4777!3d15.6445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM4JzQwLjIiTiAzMsKwMjgnMzkuNyJF!5e0!3m2!1sen!2ssd!4v1680000000000!5m2!1sen!2ssd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ── Our Other Offices ── */}
        <div className="contact_offices_section">
          <div className="contact_offices_inner">
            <h2 className="contact_offices_title">
              Our Other Offices
              <hr />
            </h2>
            <div className="contact_offices_grid">
              <div className="office_card">
                <h3>Wika Translate Kentucky</h3>
                <address>
                  1048 Fisk Court, Lexington, Kentucky, USA
                  <br />
                  <a href="tel:+18594578542">+1 (859) 457-8542</a>
                  <br />
                  <a href="mailto:info@wikatranslate.com">info@wikatranslate.com</a>
                  <br />
                  <a href="https://www.wikatranslate.com" target="_blank" rel="noopener noreferrer">
                    wikatranslate.com
                  </a>
                </address>
              </div>
              <div className="office_card">
                <h3>Wika Translate Kigali</h3>
                <address>
                  Makuza Peace Plaza, KN 84 St, Kigali, Rwanda
                  <br />
                  <a href="tel:+250788933063">+250 788 933 063</a>
                  <br />
                  <a href="mailto:info@wikatranslate.net">info@wikatranslate.net</a>
                  <br />
                  <a href="https://www.wikatranslate.net" target="_blank" rel="noopener noreferrer">
                    wikatranslate.net
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </>
  );
}

export default Contact;
