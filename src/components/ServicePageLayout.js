import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import FAQItem from './logic/FAQItem';
import SiteFooter from './SiteFooter';

const SERVICE_LINKS = [
  { path: '/services/document-translation-rwanda', label: 'Document Translation' },
  { path: '/services/certified-translation-rwanda', label: 'Certified Translation' },
  { path: '/services/interpretation-services-rwanda', label: 'Interpretation Services' },
  { path: '/services/interpretation-equipment-rental-rwanda', label: 'Equipment Rental' },
  { path: '/services/localization-rwanda', label: 'Localization Services' },
  { path: '/services/transcription-rwanda', label: 'Transcription Services' },
];

function ServicePageLayout({
  title,
  description,
  keywords,
  canonicalSlug,
  badge,
  h1,
  lead,
  children,
  faqs,
  serviceSchema,
  faqSchema,
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
        {serviceSchema && (
          <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        )}
        {faqSchema && faqs && faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            })}
          </script>
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
          <Link to="/quote" className="sp-hero-cta">Get a Free Quote →</Link>
        </div>
        <div className="overlay" />
      </div>

      {/* Page body */}
      <main className="sp-main">
        <div className="sp-content-wrapper">
          <article className="sp-body">
            {children}
          </article>
          <aside className="sp-sidebar">
            <div className="sp-sidebar-box">
              <h3>Our Services</h3>
              <ul>
                {SERVICE_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sp-sidebar-contact">
              <h3>Quick Contact</h3>
              <a href="tel:+250788933063">📞 +250 788 933 063</a>
              <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
              <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
              <Link to="/quote" className="sp-sidebar-cta">Get a Free Quote</Link>
            </div>
          </aside>
        </div>

      </main>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="sp-faq-section">
          <div className="sp-faq-inner">
            <h2 className="sp-section-title">
              Frequently Asked Questions
              <hr />
            </h2>
            <div className="sp-faq-list">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact block */}
      <section className="sp-contact-block">
        <h2>Contact WIKA TRANSLATE Ltd.</h2>
        <p>Ready to get started? We provide free quotes within 10 minutes.</p>
        <address className="sp-nap">
          <strong>WIKA TRANSLATE Ltd.</strong>
          Makuza Peace Plaza, KN 84 St, Kigali, Rwanda
          <a href="tel:+250788933063">📞 +250 788 933 063</a>
          <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
          <a href="https://www.wikatranslate.net">🌐 www.wikatranslate.net</a>
          <a href="https://maps.app.goo.gl/dqJncgiqEbH4gr8H9" target="_blank" rel="noopener noreferrer">🗺️ Find us on Google Maps</a>
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

      <SiteFooter />
    </>
  );
}

ServicePageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  canonicalSlug: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      q: PropTypes.string.isRequired,
      a: PropTypes.string.isRequired,
    }),
  ),
  serviceSchema: PropTypes.shape({}),
  faqSchema: PropTypes.bool,
};

ServicePageLayout.defaultProps = {
  faqs: [],
  serviceSchema: null,
  faqSchema: false,
};

export default ServicePageLayout;
