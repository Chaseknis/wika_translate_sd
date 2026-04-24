import React, { useRef, useEffect, useState } from 'react';
import './styles/contact.css';
import { Helmet } from 'react-helmet';
import Quotation from '../components/Quotation';
import ContactDetails from '../components/contactDetails';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

function Contact() {
  const [showContactForm, setShowContactForm] = useState(true); // Default is Contact form
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate between 0, 1, and 2
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);
  const aboutTitles = [
    ['Reach Out', ' For', ' Language Solutions'],
    ['Connect With', ' Wika Translate', ' Today'],
    ['Your Gateway to', ' Seamless', ' Communication'],
  ];

  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
      <Helmet>
        <title>Contact Us - Wika Translate | Get a Free Translation Quote in Rwanda</title>
        <meta name="description" content="Get in touch with Wika Translate for professional translation and interpretation services in Rwanda. Request a free quote in under 10 minutes. Visit us in Kigali or reach us online." />
        <meta name="keywords" content="contact Wika Translate, translation quote Rwanda, interpretation services Kigali, translation company contact Kigali, free translation quote Rwanda" />
        <link rel="canonical" href="https://www.wikatranslate.net/contact" />
        <meta property="og:title" content="Contact Wika Translate | Free Translation Quote in Rwanda" />
        <meta property="og:description" content="Contact Wika Translate for professional translation and interpretation services. Get a free quote in under 10 minutes. Based in Kigali, Rwanda." />
        <meta property="og:url" content="https://www.wikatranslate.net/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Wika Translate | Free Translation Quote in Rwanda" />
        <meta name="twitter:description" content="Contact Wika Translate for professional translation and interpretation services. Get a free quote in under 10 minutes. Based in Kigali, Rwanda." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
      </Helmet>
      <section className="contact_section" id="contact">
        <div className="contact_title_main_container">
          <video src={videoBg5} className="bgVideo" autoPlay loop muted playsInline>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                Contact us
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{aboutTitles[activeIndex][0]}</span>
                <span>{aboutTitles[activeIndex][1]}</span>
                <span>{aboutTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">
                Need assistance with translation or interpretation services? Get in touch with Wika
                Translate today! Whether you have a project inquiry, need a quote, or simply want
                more details about our services, our team is ready to help. Contact us via phone,
                email, or visit our office—we look forward to assisting you with all your language
                needs.
              </p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="toggle-buttons">
          <button type="button" onClick={() => setShowContactForm(true)} className={`toggle-btn ${showContactForm ? 'active' : ''}`}>
            {/* <i className="bx bx-mail-send contact_card_icon" /> */}
            Contact Us
          </button>
          <button type="button" onClick={() => setShowContactForm(false)} className={`toggle-btn ${!showContactForm ? 'active' : ''}`}>
            Get a Quotation
          </button>
        </div>

        <div className="form-container">
          {showContactForm ? (
            <div className="contact-form-section">
              <div className="text-section">
                <div className="text_section_wrapper">
                  <h2>
                    Contact Us
                    <hr />
                  </h2>
                  <p>
                    Wika Translate serves as a hub for language experts from across the globe,
                    boasting a network of over 800 translators and interpreters. With this extensive
                    pool of talent, we possess the expertise and capability to consistently deliver
                    high-quality services to our clients swiftly and efficiently.
                  </p>
                </div>

                <ContactDetails />

              </div>
              <form id="form" action="https://formspree.io/f/xjvdgezn" method="POST" className="contact-form">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://127.0.0.1:5555/#contact-us" />

                <div className="contact_details">
                  <input type="text" id="name" name="name" placeholder="Full Name" className="input" required />
                  <input type="text" id="phone" name="phone" placeholder="Phone Number" className="input" />
                  <input type="email" id="email" name="email" placeholder="Email Address" className="input" required />
                </div>
                <textarea id="message" name="message" placeholder="Message" rows="8" className="input" required />

                <button type="submit" className="button">Send Message</button>
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
