import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/faq.css';
import OurPartners from '../components/ourPartners';
import FAQItem from '../components/logic/FAQItem';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

function FAQ() {
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
          FAQ - Frequently Asked Questions about Translation &amp; Interpretation | Wika Translate
        </title>
        <meta name="description" content="Get answers to common questions about Wika Translate's translation and interpretation services, pricing, turnaround times, certified translations, payment methods, and more." />
        <meta name="keywords" content="translation FAQ Rwanda, interpretation services questions, certified translation cost Rwanda, translation turnaround time, Wika Translate FAQ" />
        <link rel="canonical" href="https://www.wikatranslate.net/faq" />
        <meta property="og:title" content="FAQ | Translation &amp; Interpretation Questions - Wika Translate" />
        <meta property="og:description" content="Find answers to frequently asked questions about our translation and interpretation services, pricing, turnaround times, certified translations, and payment methods." />
        <meta property="og:url" content="https://www.wikatranslate.net/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Translation &amp; Interpretation Questions - Wika Translate" />
        <meta name="twitter:description" content="Find answers to frequently asked questions about our translation and interpretation services, pricing, turnaround times, certified translations, and payment methods." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
      </Helmet>
      <section className="main_faq" id="faq">
        <div className="faq_title_main_container">
          <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                {t.faq.badge}
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{t.faq.heroTitles[activeIndex][0]}</span>
                <span>{t.faq.heroTitles[activeIndex][1]}</span>
                <span>{t.faq.heroTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">{t.faq.heroParagraph}</p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="faq-content-main-container">
          <div className="faq-header">
            <div>
              <h2 className="faq-title">
                {t.faq.title}
                <hr />
              </h2>
              <p className="faq-paragraph">{t.faq.p1}</p>
            </div>
            <p className="faq-paragraph-two">{t.faq.p2}</p>
          </div>

          <div className="faq-content-wrapper">
            <div className="faq-list-container">
              {t.faq.items.map(({ q, a }) => (
                <FAQItem key={q} question={q} answer={a} />
              ))}
            </div>
          </div>
        </div>
        <OurPartners />
        <SiteFooter />
      </section>
    </>
  );
}

export default FAQ;
