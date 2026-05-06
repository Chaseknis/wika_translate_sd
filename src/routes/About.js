import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/about.css';
import LazyLoad from 'react-lazyload';
import image3 from '../assets/image3.webp';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

function About() {
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
        <title>About Us - Wika Translate | Professional Translation Agency in Rwanda</title>
        <meta name="description" content="Learn about Wika Translate — a leading professional translation and interpretation agency based in Kigali, Rwanda. With 800+ expert linguists, we serve businesses and individuals worldwide in 150+ languages." />
        <meta name="keywords" content="about Wika Translate, translation agency Kigali, translation company Rwanda, professional translators Rwanda, interpretation agency Kigali" />
        <link rel="canonical" href="https://www.wikatranslate.net/about" />
        <meta property="og:title" content="About Us | Wika Translate - Professional Translation Agency in Rwanda" />
        <meta property="og:description" content="Wika Translate is a trusted translation and interpretation agency in Kigali, Rwanda. Our network of 800+ professional linguists delivers certified, legal, and technical translations in 150+ languages." />
        <meta property="og:url" content="https://www.wikatranslate.net/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Wika Translate - Professional Translation Agency in Rwanda" />
        <meta name="twitter:description" content="Wika Translate is a trusted translation and interpretation agency in Kigali, Rwanda. Our network of 800+ professional linguists delivers certified, legal, and technical translations in 150+ languages." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
      </Helmet>
      <section className="about" id="about">
        <div className="about_title_main_container">
          <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                {t.about.badge}
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{t.about.heroTitles[activeIndex][0]}</span>
                <span>{t.about.heroTitles[activeIndex][1]}</span>
                <span>{t.about.heroTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">{t.about.heroParagraph}</p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="about_main_title_content_container">
          <div className="about_wrapper">
            <div className="about_title_container">
              <div className="about_page_title">
                <h2>
                  {t.about.title}
                  <hr />
                </h2>
                <p>{t.about.p1}</p>
              </div>
              <p className="second_paragraph">{t.about.p2}</p>
              <div className="about_banner_wrapper">
                <div className="about_banner_card_wrapper">
                  <span>10,000,000+</span>
                  <p>{t.about.wordsTranslated}</p>
                </div>
                <div className="about_banner_card_wrapper">
                  <span>10,000+</span>
                  <p>{t.about.clientsServed}</p>
                </div>
                <div>
                  <a target="_blank" href="https://www.goodfirms.co/company/wika-translate" rel="noreferrer">
                    <img
                      className="goodFirms"
                      src="https://assets.goodfirms.co/badges/color-badge/translation-services-companies.svg"
                      title="Top Translation Services Company"
                      alt="Top Translation Services Company on GoodFirms"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="about_image_container">
              <div className="about_image_wrapper">
                <LazyLoad height={200} offset={100} placeholder={<div>Loading...</div>}>
                  <img src={image3} alt="Wika Translate" style={{ width: '100%', height: 'auto' }} />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </>
  );
}

export default About;
