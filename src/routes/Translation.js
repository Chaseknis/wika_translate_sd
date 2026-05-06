import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './styles/translation.css';
import getStepIcon from '../components/logic/getStepIcon';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Translation Services in Rwanda - Certified, Legal &amp; Technical | Wika Translate
        </title>
        <meta name="description" content="Professional certified translation services for legal, technical, and business documents. Kinyarwanda, French, English, Swahili, Arabic, German, and 150+ more languages. Fast turnaround. Based in Kigali, Rwanda." />
        <meta name="keywords" content="translation services Kigali, certified translation Rwanda, legal translation Rwanda, technical translation Rwanda, Kinyarwanda translation, French translation Rwanda, document translation Kigali" />
        <link rel="canonical" href="https://www.wikatranslate.net/translation" />
        <meta property="og:title" content="Translation Services in Rwanda | Certified, Legal &amp; Technical - Wika Translate" />
        <meta property="og:description" content="Professional certified translation services for legal, technical, and business documents in 150+ languages. Fast turnaround. Based in Kigali, Rwanda." />
        <meta property="og:url" content="https://www.wikatranslate.net/translation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Translation Services in Rwanda | Certified, Legal &amp; Technical - Wika Translate" />
        <meta name="twitter:description" content="Professional certified translation services for legal, technical, and business documents in 150+ languages. Fast turnaround. Based in Kigali, Rwanda." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
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
