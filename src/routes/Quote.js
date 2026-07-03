/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

const LANGUAGES = ['English', 'French', 'Kinyarwanda', 'Arabic', 'Swahili', 'Kirundi', 'Luganda', 'Somali', 'Amharic', 'Spanish', 'German', 'Chinese (Mandarin)', 'Portuguese', 'Italian', 'Dutch', 'Other'];

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Get a Free Quote — WIKA TRANSLATE Ltd.',
  url: 'https://www.wikatranslate.net/quote',
  description: 'Request a free translation or interpretation quote from WIKA TRANSLATE Ltd., Rwanda\'s leading professional translation company based in Kigali.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'WIKA TRANSLATE Ltd.',
    telephone: '+250788933063',
    email: 'info@wikatranslate.net',
    address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' },
  },
};

function Quote() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>Get a Free Quote | WIKA TRANSLATE Rwanda — +250 788 933 063</title>
        <meta name="description" content="Request a free translation or interpretation quote from WIKA TRANSLATE Ltd. in Kigali, Rwanda. Response within 10 minutes. +250 788 933 063 | info@wikatranslate.net." />
        <meta name="keywords" content="free translation quote Rwanda, translation quote Kigali, get a quote WIKA TRANSLATE, interpretation quote Rwanda, certified translation quote Kigali" />
        <link rel="canonical" href="https://www.wikatranslate.net/quote" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Get a Free Quote | WIKA TRANSLATE Rwanda" />
        <meta property="og:description" content="Request a free translation or interpretation quote from WIKA TRANSLATE Ltd. Response within 10 minutes." />
        <meta property="og:url" content="https://www.wikatranslate.net/quote" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get a Free Quote | WIKA TRANSLATE Rwanda" />
        <meta name="twitter:description" content="Free translation quote from Rwanda's leading translation company. Response in 10 minutes." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
      </Helmet>

      <div className="about_title_main_container">
        <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad"><h2>Free Quote<hr /></h2></div>
          <div className="about_main_title">
            <h1 className="title">Request a Free Translation Quote</h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              Fill in the form below and a WIKA TRANSLATE specialist will respond with your free quote within 10 minutes during business hours. You can also reach us directly via phone, WhatsApp, or email.
            </p>
          </div>
        </div>
        <div className="overlay" />
      </div>

      <main className="sp-main">
        <div className="sp-quote-wrapper">
          {/* Quote form */}
          <div>
            <form
              action="https://formspree.io/f/xjvdgezn"
              method="POST"
              className="sp-quote-form"
            >
              <input type="text" name="_honey" style={{ display: 'none' }} aria-hidden="true" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.wikatranslate.net/quote" />
              <input type="hidden" name="_subject" value="New Quote Request — WIKA TRANSLATE" />

              <div className="sp-form-row">
                <div className="sp-form-group">
                  <label className="sp-form-label" htmlFor="q-name">
                    Full Name
                    {' '}
                    <span className="sp-required">*</span>
                  </label>
                  <input type="text" id="q-name" name="name" className="sp-form-input" required placeholder="Your full name" />
                </div>
                <div className="sp-form-group">
                  <label className="sp-form-label" htmlFor="q-org">Organization</label>
                  <input type="text" id="q-org" name="organization" className="sp-form-input" placeholder="Company / NGO / Institution" />
                </div>
              </div>

              <div className="sp-form-row">
                <div className="sp-form-group">
                  <label className="sp-form-label" htmlFor="q-email">
                    Email Address
                    {' '}
                    <span className="sp-required">*</span>
                  </label>
                  <input type="email" id="q-email" name="email" className="sp-form-input" required placeholder="your@email.com" />
                </div>
                <div className="sp-form-group">
                  <label className="sp-form-label" htmlFor="q-phone">Phone / WhatsApp</label>
                  <input type="tel" id="q-phone" name="phone" className="sp-form-input" placeholder="+250 ..." />
                </div>
              </div>

              <div className="sp-form-group">
                <label className="sp-form-label" htmlFor="q-service">
                  Service Needed
                  {' '}
                  <span className="sp-required">*</span>
                </label>
                <select id="q-service" name="service" className="sp-form-select" required>
                  <option value="">Select a service...</option>
                  <option value="Document Translation">Document Translation</option>
                  <option value="Certified Translation">Certified Translation</option>
                  <option value="Interpretation Services">Interpretation Services</option>
                  <option value="Interpretation Equipment Rental">Interpretation Equipment Rental</option>
                  <option value="Localization">Localization</option>
                  <option value="Transcription">Transcription</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sp-form-row">
                <div className="sp-form-group">
                  <label className="sp-form-label" htmlFor="q-source">Source Language</label>
                  <select id="q-source" name="source_language" className="sp-form-select">
                    <option value="">Select source language...</option>
                    {LANGUAGES.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                  </select>
                </div>
                <div className="sp-form-group">
                  <label className="sp-form-label" htmlFor="q-target">Target Language</label>
                  <select id="q-target" name="target_language" className="sp-form-select">
                    <option value="">Select target language...</option>
                    {LANGUAGES.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                  </select>
                </div>
              </div>

              <div className="sp-form-group">
                <label className="sp-form-label" htmlFor="q-deadline">
                  Deadline / Required Date
                </label>
                <input type="date" id="q-deadline" name="deadline" className="sp-form-input" />
              </div>

              <div className="sp-form-group">
                <label className="sp-form-label" htmlFor="q-message">
                  Project Description
                  {' '}
                  <span className="sp-required">*</span>
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  className="sp-form-textarea"
                  required
                  rows="6"
                  placeholder="Describe your project — document type, number of pages, event details, languages, any special requirements..."
                />
              </div>

              <button type="submit" className="sp-form-submit">
                Send Quote Request — Free &amp; No Obligation
              </button>
              <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.75rem', textAlign: 'center' }}>
                We respond within 10 minutes during business hours.
              </p>
            </form>
          </div>

          {/* Contact sidebar */}
          <div className="sp-quote-info">
            <h3>Other Ways to Reach Us</h3>
            <p>Prefer to contact us directly? Reach us via:</p>
            <address>
              <a href="tel:+250788933063">📞 +250 788 933 063</a>
              <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello%2C%20I%20need%20a%20quote" target="_blank" rel="noopener noreferrer">💬 WhatsApp: +250 788 933 063</a>
              <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
              <a href="https://www.wikatranslate.net">🌐 www.wikatranslate.net</a>
              <a href="https://maps.app.goo.gl/dqJncgiqEbH4gr8H9" target="_blank" rel="noopener noreferrer">📍 Makuza Peace Plaza, KN 84 St, Kigali, Rwanda</a>
            </address>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,202,122,0.15)' }}>
              <h3>What Happens Next?</h3>
              <ol style={{ paddingLeft: '1.25rem', fontSize: '0.8rem', lineHeight: '2', color: '#d2c79f' }}>
                <li>We receive your request</li>
                <li>Our team reviews your requirements</li>
                <li>We send you a free, detailed quote</li>
                <li>You confirm and we start immediately</li>
              </ol>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,202,122,0.15)' }}>
              <h3>For Sudanese / North Africa Enquiries</h3>
              <p style={{ fontSize: '0.78rem' }}>
                Contact our sister company:
              </p>
              <address>
                <strong style={{ color: '#ffca7a', display: 'block', marginBottom: '0.25rem' }}>WIKA TRANSLATE SUDAN</strong>
                <a href="tel:+249967200938">📞 +249 967 200 938</a>
                <a href="mailto:info@wikatranslate.us">✉️ info@wikatranslate.us</a>
                <a href="https://www.wikatranslate.us" target="_blank" rel="noopener noreferrer">🌐 www.wikatranslate.us</a>
              </address>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default Quote;
