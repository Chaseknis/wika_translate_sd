import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/services.css';
import Banner from '../components/banner';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Translation and Interpretation Services in Sudan',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Wika Translate Sudan',
    url: 'https://www.wikatranslate.us',
  },
  areaServed: [
    { '@type': 'Country', name: 'Sudan' },
    { '@type': 'Country', name: 'South Sudan' },
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Uganda' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Language Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Simultaneous Interpretation', description: 'Real-time interpretation for international conferences, UN meetings and multilingual events in Sudan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consecutive Interpretation', description: 'Sequential interpretation for negotiations, interviews and small meetings in Sudan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Certified Translation', description: 'Certified document translation for legal, technical and business purposes in Arabic, English and French' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remote Interpretation', description: 'Online and virtual interpretation services for remote meetings and conferences' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Subtitling', description: 'Video and film subtitling services in Arabic, English, French and 100+ languages' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transcription', description: 'Audio and video transcription services in any language' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Localization', description: 'Product and content localization for Sudanese and East African markets' } },
    ],
  },
};

function Services() {
  const { t } = useTranslation();
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
        <title>Language Services Sudan | Translation & Interpretation</title>
        <meta name="description" content="Expert language services in Sudan: simultaneous & consecutive interpretation, certified translation, subtitling & localization in Arabic, English, French & 100+ languages." />
        <meta name="keywords" content="interpretation services Sudan, simultaneous interpretation Sudan, consecutive interpretation Sudan, translation services Sudan, interpretation equipment rental Sudan, certified translation Sudan, subtitling Sudan, transcription Sudan, conference interpretation Sudan, Omdurman language services, NGO translation Sudan, UN interpretation Sudan" />
        <link rel="canonical" href="https://www.wikatranslate.us/services" />
        <meta property="og:title" content="Language Services Sudan | Translation & Interpretation" />
        <meta property="og:description" content="Expert language services in Sudan: simultaneous & consecutive interpretation, certified translation, subtitling & localization in Arabic, English, French & 100+ languages." />
        <meta property="og:url" content="https://www.wikatranslate.us/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Language Services Sudan | Translation & Interpretation" />
        <meta name="twitter:description" content="Expert language services in Sudan: interpretation, certified translation, subtitling & localization in Arabic, English, French & 100+ languages." />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>
      <section className="services_page_content_section" id="services">
        <div className="about_title_main_container">
          <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                {t.services.badge}
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{t.services.heroTitles[activeIndex][0]}</span>
                <span>{t.services.heroTitles[activeIndex][1]}</span>
                <span>{t.services.heroTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">{t.services.heroParagraph}</p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="services_page_content_wrapper">
          <Banner />
          <div className="header_wrapper">
            <div className="faq-header">
              <div>
                <h2 className="services-title">
                  {t.services.title}
                  <hr />
                </h2>
                <p className="services-paragraph">{t.services.p1}</p>
              </div>
              <p className="services-paragraph-two">{t.services.p2}</p>
            </div>
          </div>

          <div className="wrapper">
            <div className="services_container">
              {t.services.cards.map((card, i) => (
                <React.Fragment key={card.name}>
                  <input
                    type="radio"
                    name="slide"
                    id={`c${i + 1}`}
                    defaultChecked={i === 0}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor={`c${i + 1}`} className="services_card">
                    <div className="services_row">
                      <div className="services_icon">{i + 1}</div>
                      <div className="services_description">
                        <h3>{card.name}</h3>
                        <p>{card.desc}</p>
                      </div>
                    </div>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="services_subpages_wrapper">
            <h2 className="services_subpages_title">
              {t.services.exploreTitle}
              <hr />
            </h2>
            <div className="services_subpages_grid">
              {[
                { to: '/services/document-translation-sudan', icon: 'uil uil-file-check-alt', card: t.services.exploreCards[0] },
                { to: '/services/certified-translation-sudan', icon: 'uil uil-shield-check', card: t.services.exploreCards[1] },
                { to: '/services/interpretation-services-sudan', icon: 'uil uil-microphone', card: t.services.exploreCards[2] },
                { to: '/services/interpretation-equipment-rental-sudan', icon: 'uil uil-headphones-alt', card: t.services.exploreCards[3] },
              ].map(({ to, icon, card }) => (
                <Link key={to} to={to} className="srv_link_card">
                  <i className={icon} />
                  <strong>{card.name}</strong>
                  <p>{card.desc}</p>
                </Link>
              ))}
            </div>
            <div className="services_subpages_cta">
              <Link to="/translation-services-sudan" className="services_sudan_link">
                {t.home.cities.viewAll}
              </Link>
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </>
  );
}

export default Services;
