import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './styles/translation.css';
import getStepIcon from '../components/logic/getStepIcon';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

const translationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Certified Translation Services in Sudan',
  description: 'Professional certified translation services for legal, technical and business documents in Arabic, English, French, Swahili and 100+ languages. 5-step quality assurance process.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Wika Translate Sudan',
    url: 'https://www.wikatranslate.us',
  },
  serviceType: 'Certified Translation',
  areaServed: [
    { '@type': 'Country', name: 'Sudan' },
    { '@type': 'Country', name: 'South Sudan' },
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'Country', name: 'Kenya' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Translation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Translation Sudan', description: 'Certified legal document translation for courts, contracts and official proceedings' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical Translation Sudan', description: 'Precision translation of technical manuals, specifications and engineering documents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Translation Sudan', description: 'Professional business document translation including contracts, reports and proposals' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Arabic-English Translation Sudan', description: 'Expert Arabic to English and English to Arabic translation services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'French-Arabic Translation Sudan', description: 'Professional French to Arabic and Arabic to French translation services' } },
    ],
  },
};

function Translation() {
  const { t } = useTranslation();
  const [openSteps, setOpenSteps] = useState([false, false, false, false, false]);
  const contentRefs = useRef([]);

  const toggleContent = (index) => {
    const newOpenSteps = [...openSteps];
    newOpenSteps[index] = !newOpenSteps[index];
    setOpenSteps(newOpenSteps);
  };

  useEffect(() => {
    openSteps.forEach((isOpen, index) => {
      if (isOpen && contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
      } else if (contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = '0px';
      }
    });
  }, [openSteps]);

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
        <title>Certified Translation Sudan | Arabic, Legal & Technical</title>
        <meta name="description" content="Certified translation in Sudan for legal, technical & business documents. Arabic-English-French. 5-step quality process. Fast turnaround. Trusted by NGOs & embassies." />
        <meta name="keywords" content="certified translation Sudan, legal translation Sudan, technical translation Sudan, Arabic translation Sudan, Arabic English translation Sudan, document translation Omdurman, French translation Sudan, translation services Khartoum, NGO document translation Sudan, embassy document translation Sudan" />
        <link rel="canonical" href="https://www.wikatranslate.us/translation" />
        <meta property="og:title" content="Certified Translation Sudan | Arabic, Legal & Technical" />
        <meta property="og:description" content="Certified translation in Sudan for legal, technical & business documents. Arabic-English-French. 5-step quality process. Fast turnaround. Trusted by NGOs & embassies." />
        <meta property="og:url" content="https://www.wikatranslate.us/translation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certified Translation Sudan | Arabic, Legal & Technical" />
        <meta name="twitter:description" content="Certified translation in Sudan for legal, technical & business documents. Arabic-English-French. Fast turnaround. Trusted by NGOs & embassies." />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(translationSchema)}
        </script>
      </Helmet>
      <section className="translation" id="translation">
        <div className="about_title_main_container">
          <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                {t.translation.badge}
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{t.translation.heroTitles[activeIndex][0]}</span>
                <span>{t.translation.heroTitles[activeIndex][1]}</span>
                <span>{t.translation.heroTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">{t.translation.heroParagraph}</p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="translation_section-container">
          <div className="translation_one">
            <div className="heading-container">
              <div className="translation_page_title">
                <h2>
                  {t.translation.title}
                  <hr />
                </h2>
                <p>{t.translation.p1}</p>
              </div>
              <p className="translation_second_paragraph">{t.translation.p2}</p>
            </div>
          </div>
          <div className="translation_two">
            <div className="steps-container">
              {t.translation.steps.map((step, index) => (
                <div className="step-item" key={step.key}>
                  <div className="icon-container">
                    <div className="icon_and_title_container">
                      {getStepIcon(step.key)}
                      <h3 className="step-title">{step.name}</h3>
                    </div>
                    <div className="expand_icons">
                      {!openSteps[index] ? (
                        <button type="button" aria-label="expand" className="expand_icons_button expand" onClick={() => toggleContent(index)}>
                          <i className="uil uil-plus" />
                        </button>
                      ) : (
                        <button type="button" aria-label="close" className="expand_icons_button close" onClick={() => toggleContent(index)}>
                          <i className="uil uil-minus" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className={`step-content ${openSteps[index] ? 'open' : ''}`}
                  >
                    <p className="step-description">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </>
  );
}

export default Translation;
