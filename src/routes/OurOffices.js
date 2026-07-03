/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

function OurOffices() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WIKA TRANSLATE Ltd.',
    url: 'https://www.wikatranslate.net',
    telephone: '+250788933063',
    email: 'info@wikatranslate.net',
    address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' },
    hasMap: 'https://maps.app.goo.gl/dqJncgiqEbH4gr8H9',
    subsidiary: [
      {
        '@type': 'Organization',
        name: 'Wika Translate LLC',
        url: 'https://www.wikatranslate.com',
        telephone: '+18594578542',
        email: 'info@wikatranslate.com',
        address: { '@type': 'PostalAddress', streetAddress: '1048 Fisk Ct', addressLocality: 'Lexington', addressRegion: 'KY', postalCode: '40511', addressCountry: 'US' },
      },
      {
        '@type': 'Organization',
        name: 'WIKA TRANSLATE SUDAN',
        url: 'https://www.wikatranslate.us',
        telephone: '+249967200938',
        email: 'info@wikatranslate.us',
        address: { '@type': 'PostalAddress', streetAddress: 'Al Emtidad Street', addressLocality: 'Omdurman', addressCountry: 'SD' },
      },
    ],
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Our Offices | WIKA TRANSLATE — Lexington USA, Kigali Rwanda &amp; Omdurman Sudan</title>
        <meta name="description" content="WIKA TRANSLATE Group offices: Wika Translate LLC, Lexington KY, USA (+1 859 457-8542); WIKA TRANSLATE Ltd., Kigali, Rwanda (+250 788 933 063); WIKA TRANSLATE SUDAN, Omdurman, Sudan." />
        <meta name="keywords" content="WIKA TRANSLATE office, Wika Translate LLC Kentucky, translation company Lexington USA, WIKA TRANSLATE Kigali Rwanda, WIKA TRANSLATE Sudan Omdurman, WIKA TRANSLATE location" />
        <link rel="canonical" href="https://www.wikatranslate.net/our-offices" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Our Offices | WIKA TRANSLATE — USA, Rwanda &amp; Sudan" />
        <meta property="og:description" content="WIKA TRANSLATE Group offices in Lexington USA, Kigali Rwanda, and Omdurman Sudan. Contact details and addresses." />
        <meta property="og:url" content="https://www.wikatranslate.net/our-offices" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Offices | WIKA TRANSLATE — USA, Rwanda &amp; Sudan" />
        <meta name="twitter:description" content="WIKA TRANSLATE Group offices in Lexington USA, Kigali Rwanda, and Omdurman Sudan." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="about_title_main_container">
        <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad"><h2>Our Offices<hr /></h2></div>
          <div className="about_main_title">
            <h1 className="title">WIKA TRANSLATE Offices — USA, Rwanda &amp; Sudan</h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              WIKA TRANSLATE Group operates three offices across the USA, Africa — our international headquarters in Lexington, Kentucky, our East Africa office in Kigali, Rwanda, and our North Africa affiliate WIKA TRANSLATE SUDAN in Omdurman, Sudan.
            </p>
          </div>
          <Link to="/quote" className="sp-hero-cta">Contact Us →</Link>
        </div>
        <div className="overlay" />
      </div>

      <main className="sp-main">
        <div style={{ padding: '3rem 5%' }}>
          <p className="sp-lead">
            WIKA TRANSLATE Group operates across three continents — with our international headquarters in Lexington, Kentucky (USA), our East Africa office in Kigali, Rwanda, and our North Africa affiliate in Omdurman, Sudan. Together, we deliver professional translation, interpretation, and language services to clients worldwide.
          </p>

          <div className="sp-offices-grid">
            {/* USA HQ */}
            <div className="sp-office-card">
              <h3>🇺🇸 Wika Translate LLC — Head Office (USA)</h3>
              <address>
                <strong style={{ color: '#ffca7a', display: 'block', marginBottom: '0.5rem' }}>Lexington, Kentucky, USA</strong>
                1048 Fisk Ct<br />
                Lexington, KY 40511<br />
                United States<br /><br />
                <a href="tel:+18594578542">📞 +1 (859) 457-8542</a>
                <a href="mailto:info@wikatranslate.com">✉️ info@wikatranslate.com</a>
                <a href="https://www.wikatranslate.com" target="_blank" rel="noopener noreferrer">🌐 www.wikatranslate.com</a>
              </address>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,202,122,0.08)', borderRadius: '3px' }}>
                <p style={{ color: '#d2c79f', fontSize: '0.8rem', lineHeight: '1.7', margin: 0 }}>
                  Wika Translate LLC is the international headquarters of the Wika Translate Group, coordinating global operations, strategic partnerships, quality assurance, and multilingual language services through its affiliated offices in Rwanda and Sudan. The company delivers professional translation, interpretation, localization, transcription, document certification, and language consulting to clients worldwide.
                </p>
              </div>
            </div>

            {/* Rwanda HQ */}
            <div className="sp-office-card">
              <h3>🇷🇼 WIKA TRANSLATE Ltd. — East Africa Office</h3>
              <address>
                <strong style={{ color: '#ffca7a', display: 'block', marginBottom: '0.5rem' }}>Kigali, Rwanda</strong>
                Makuza Peace Plaza, KN 84 St<br />
                Kigali, Rwanda<br /><br />
                <a href="tel:+250788933063">📞 +250 788 933 063</a>
                <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello" target="_blank" rel="noopener noreferrer">💬 WhatsApp: +250 788 933 063</a>
                <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
                <a href="https://www.wikatranslate.net">🌐 www.wikatranslate.net</a>
                <a href="https://maps.app.goo.gl/dqJncgiqEbH4gr8H9" target="_blank" rel="noopener noreferrer">🗺️ View on Google Maps</a>
              </address>
              <iframe
                title="WIKA TRANSLATE Kigali Office"
                className="sp-office-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.509!2d30.05945716766021!3d-1.946463734749799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca3a5d5f30f6f%3A0x1e2b1c5d!2sMakuza+Peace+Plaza!5e0!3m2!1sen!2srw!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Sudan */}
            <div className="sp-office-card">
              <h3>🇸🇩 WIKA TRANSLATE SUDAN — Affiliate</h3>
              <address>
                <strong style={{ color: '#ffca7a', display: 'block', marginBottom: '0.5rem' }}>Omdurman, Sudan</strong>
                Al Emtidad Street<br />
                Omdurman, Sudan<br /><br />
                <a href="tel:+249967200938">📞 +249 967 200 938</a>
                <a href="mailto:info@wikatranslate.us">✉️ info@wikatranslate.us</a>
                <a href="https://www.wikatranslate.us" target="_blank" rel="noopener noreferrer">🌐 www.wikatranslate.us</a>
              </address>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,202,122,0.08)', borderRadius: '3px' }}>
                <p style={{ color: '#d2c79f', fontSize: '0.8rem', lineHeight: '1.7', margin: 0 }}>
                  WIKA TRANSLATE SUDAN is our sister company serving North Africa and the Arab world. We specialize in Arabic translation and interpretation, serving clients across Sudan, the Middle East, and North Africa from our base in Omdurman. For Arabic language services in North Africa or Sudan, contact our Sudan office directly.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', background: 'rgba(53, 44, 20, 0.12)', borderRadius: '4px' }}>
            <h2 style={{ color: '#1a3c34', fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem' }}>Remote Services — Available Worldwide</h2>
            <p style={{ color: '#3d3d3d', fontSize: '0.88rem', lineHeight: '1.8', margin: 0 }}>
              In addition to our physical offices, WIKA TRANSLATE serves clients worldwide via remote digital services. Documents can be submitted via email (info@wikatranslate.net) or WhatsApp (+250 788 933 063) from any location, and translated documents are delivered digitally. For remote interpretation, we provide Remote Simultaneous Interpretation (RSI) for virtual and hybrid events.
            </p>
          </div>
        </div>

        <section className="sp-contact-block">
          <h2>Contact WIKA TRANSLATE Ltd.</h2>
          <p>Kigali, Rwanda headquarters — free quote in 10 minutes.</p>
          <address className="sp-nap">
            <strong>WIKA TRANSLATE Ltd.</strong>
            Makuza Peace Plaza, KN 84 St, Kigali, Rwanda
            <a href="tel:+250788933063">📞 +250 788 933 063</a>
            <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
            <a href="https://www.wikatranslate.net">🌐 www.wikatranslate.net</a>
          </address>
          <div className="sp-contact-actions">
            <Link to="/quote" className="sp-cta-btn">Get a Free Quote</Link>
            <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello%2C%20I%20need%20translation%20services" className="sp-whatsapp-btn" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default OurOffices;
