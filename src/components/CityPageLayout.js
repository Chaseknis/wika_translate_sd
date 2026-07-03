import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from './SiteFooter';

const ALL_SERVICES = [
  { path: '/services/document-translation-rwanda', label: 'Document Translation', desc: 'Legal, official, business, medical & technical document translation.' },
  { path: '/services/certified-translation-rwanda', label: 'Certified Translation', desc: 'Court-accepted & embassy-accepted certified translations.' },
  { path: '/services/interpretation-services-rwanda', label: 'Interpretation Services', desc: 'Simultaneous, consecutive & remote interpretation.' },
  { path: '/services/interpretation-equipment-rental-rwanda', label: 'Equipment Rental', desc: 'ISO-compliant interpretation booths & wireless systems.' },
  { path: '/services/localization-rwanda', label: 'Localization', desc: 'Website, software & marketing localization for East Africa.' },
  { path: '/services/transcription-rwanda', label: 'Transcription', desc: 'Audio & video transcription in any language.' },
];

function CityPageLayout({
  title,
  description,
  keywords,
  canonicalSlug,
  badge,
  h1,
  lead,
  children,
  cityName,
  citySchema,
}) {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://www.wikatranslate.net/${canonicalSlug}`} />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://www.wikatranslate.net/${canonicalSlug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        {citySchema && (
          <script type="application/ld+json">{JSON.stringify(citySchema)}</script>
        )}
      </Helmet>

      {/* Hero */}
      <div className="about_title_main_container">
        <video
          ref={videoRef}
          src={videoBg5}
          className="bgVideo"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onError={(e) => { e.target.style.display = 'none'; }}
        >
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad">
            <h2>
              {badge}
              <hr />
            </h2>
          </div>
          <div className="about_main_title">
            <h1 className="title">{h1}</h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">{lead}</p>
          </div>
          <Link to="/quote" className="sp-hero-cta">
            Get a Free Quote
            {' '}
            →
          </Link>
        </div>
        <div className="overlay" />
      </div>

      {/* Main content */}
      <main className="sp-main">
        <div className="sp-content-wrapper">
          <article className="sp-body">
            {children}

            <h2>
              {'All Services Available in '}
              {cityName}
              <hr />
            </h2>
            <div className="sp-service-cards">
              {ALL_SERVICES.map((s) => (
                <Link key={s.path} to={s.path} className="sp-service-card">
                  <h3>{s.label}</h3>
                  <p>{s.desc}</p>
                </Link>
              ))}
            </div>
          </article>

          <aside className="sp-sidebar">
            <div className="sp-sidebar-box">
              <h3>Our Services</h3>
              <ul>
                {ALL_SERVICES.map((s) => (
                  <li key={s.path}>
                    <Link to={s.path}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sp-sidebar-contact">
              <h3>Contact Us</h3>
              <a href="tel:+250788933063">
                📞 +250 788 933 063
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=250788933063&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
              <a href="mailto:info@wikatranslate.net">
                ✉️ info@wikatranslate.net
              </a>
              <Link to="/quote" className="sp-sidebar-cta">Free Quote</Link>
            </div>
          </aside>
        </div>

        {/* Contact block */}
        <section className="sp-contact-block">
          <h2>Contact WIKA TRANSLATE Ltd.</h2>
          <p>
            {'Serving '}
            {cityName}
            {' and all of Rwanda — free quote within 10 minutes.'}
          </p>
          <address className="sp-nap">
            <strong>WIKA TRANSLATE Ltd.</strong>
            {' Makuza Peace Plaza, KN 84 St, Kigali, Rwanda'}
            <a href="tel:+250788933063">📞 +250 788 933 063</a>
            <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
            <a href="https://www.wikatranslate.net">🌐 www.wikatranslate.net</a>
            <a
              href="https://maps.app.goo.gl/dqJncgiqEbH4gr8H9"
              target="_blank"
              rel="noopener noreferrer"
            >
              🗺️ Find us on Google Maps
            </a>
          </address>
          <div className="sp-contact-actions">
            <Link to="/quote" className="sp-cta-btn">Get a Free Quote</Link>
            <a
              href="https://api.whatsapp.com/send?phone=250788933063&text=Hello%2C%20I%20need%20translation%20services"
              className="sp-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

CityPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  canonicalSlug: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cityName: PropTypes.string.isRequired,
  citySchema: PropTypes.shape({}),
};

CityPageLayout.defaultProps = {
  citySchema: null,
};

export default CityPageLayout;
