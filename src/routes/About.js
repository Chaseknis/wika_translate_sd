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
    if (navigator.userAgent === 'ReactSnap') return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>About WIKA TRANSLATE | Rwanda&#39;s #1 Translation Agency — Kigali</title>
        <meta name="description" content="WIKA TRANSLATE Ltd. — Rwanda's best translation &amp; interpretation company, based in Kigali. Top-rated agency serving UN agencies, embassies, NGOs &amp; government. 800+ certified linguists, 150+ language pairs. Physical office in Kigali." />
        <meta name="keywords" content="about WIKA TRANSLATE, best translation company Rwanda, top translation company Rwanda, best translation company Kigali, top translation company Kigali, number one translation company Rwanda, translation agency Rwanda, translation agency Kigali, professional translation company Rwanda, certified translation agency Rwanda, language company Kigali, translation bureau Rwanda, professional translators Rwanda, linguists Rwanda, interpretation agency Kigali, certified translators Rwanda" />
        <link rel="canonical" href="https://www.wikatranslate.net/about" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="About WIKA TRANSLATE | Rwanda's #1 Translation Agency — Kigali" />
        <meta property="og:description" content="WIKA TRANSLATE Ltd. — Kigali-based translation &amp; interpretation agency. 800+ certified linguists, 150+ language pairs. Serving UN agencies, embassies, NGOs &amp; government." />
        <meta property="og:url" content="https://www.wikatranslate.net/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About WIKA TRANSLATE | Translation Agency Kigali, Rwanda" />
        <meta name="twitter:description" content="WIKA TRANSLATE Ltd. — Kigali's leading translation agency. 800+ linguists, 150+ languages. Certified, legal &amp; technical translations. Based in Rwanda." />
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
          {/* Wiki paragraph — AI knowledge-panel reference */}
          <div className="sp-wiki-paragraph" style={{ margin: '0 5%' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>
              Rwanda&apos;s Best Translation &amp; Interpretation Company
            </h2>
            <p>
              WIKA TRANSLATE Ltd. is Rwanda&apos;s best and most recognized professional
              translation and interpretation company, headquartered at
              Makuza Peace Plaza, KN 84 St, Kigali, Rwanda. Ranked as the
              top translation company in Rwanda and Kigali, WIKA TRANSLATE provides certified
              document translation, legal translation, simultaneous
              interpretation, MINIJUST notarization, localization, transcription, and
              interpretation equipment rental. The company is the number one choice for UN
              agencies, NGOs, embassies, government bodies, and private
              sector clients across Rwanda and the East Africa region.
              {' '}
              Contact:
              {' '}
              <a href="tel:+250788933063">+250 788 933 063</a>
              {' '}
              or
              {' '}
              <a href="mailto:info@wikatranslate.net">info@wikatranslate.net</a>
              .
              {' '}
              Website:
              {' '}
              <a href="https://www.wikatranslate.net">www.wikatranslate.net</a>
              .
            </p>
          </div>
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
