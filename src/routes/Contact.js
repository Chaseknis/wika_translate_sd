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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>Contact WIKA TRANSLATE | +250 788 933 063 | Kigali, Rwanda</title>
        <meta name="description" content="Contact WIKA TRANSLATE Ltd. in Kigali, Rwanda. Phone/WhatsApp: +250 788 933 063. Email: info@wikatranslate.net. Free translation quote in under 10 minutes." />
        <meta name="keywords" content="contact WIKA TRANSLATE, translation quote Rwanda, free translation quote Kigali, interpretation services contact Rwanda" />
        <link rel="canonical" href="https://www.wikatranslate.net/contact" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Contact WIKA TRANSLATE | +250 788 933 063 | Kigali, Rwanda" />
        <meta property="og:description" content="Contact WIKA TRANSLATE Ltd. in Kigali, Rwanda. Phone/WhatsApp: +250 788 933 063. Email: info@wikatranslate.net. Free translation quote in under 10 minutes." />
        <meta property="og:url" content="https://www.wikatranslate.net/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact WIKA TRANSLATE | +250 788 933 063 | Kigali, Rwanda" />
        <meta name="twitter:description" content="Contact WIKA TRANSLATE Ltd. in Kigali, Rwanda. Phone/WhatsApp: +250 788 933 063. Email: info@wikatranslate.net. Free translation quote in under 10 minutes." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
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
                <input type="hidden" name="_next" value="https://www.wikatranslate.net/contact" />
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
        <SiteFooter />
      </section>
    </>
  );
}

export default Contact;
