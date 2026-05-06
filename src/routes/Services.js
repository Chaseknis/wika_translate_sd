import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/services.css';
import Banner from '../components/banner';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Services - Translation, Interpretation &amp; Equipment Rental | Wika Translate Rwanda
        </title>
        <meta name="description" content="Explore Wika Translate's professional language services: certified translation, simultaneous interpretation, equipment rental, subtitling, transcription, and localization in 150+ languages. Based in Kigali, Rwanda." />
        <meta name="keywords" content="translation services Rwanda, simultaneous interpretation Kigali, interpretation equipment rental Rwanda, certified translation Rwanda, subtitling services, transcription services Rwanda, localization Rwanda" />
        <link rel="canonical" href="https://www.wikatranslate.net/services" />
        <meta property="og:title" content="Services | Translation, Interpretation &amp; Equipment Rental - Wika Translate" />
        <meta property="og:description" content="Professional translation, simultaneous interpretation, equipment rental, subtitling, transcription, and localization services in 150+ languages. Based in Kigali, Rwanda." />
        <meta property="og:url" content="https://www.wikatranslate.net/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Translation, Interpretation &amp; Equipment Rental - Wika Translate" />
        <meta name="twitter:description" content="Professional translation, simultaneous interpretation, equipment rental, subtitling, transcription, and localization services in 150+ languages. Based in Kigali, Rwanda." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
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
        </div>
        <SiteFooter />
      </section>
    </>
  );
}

export default Services;
