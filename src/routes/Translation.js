import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './styles/translation.css';
import getDescription from '../components/logic/getDescription';
import getStepIcon from '../components/logic/getStepIcon';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

function Translation() {
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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate between 0, 1, and 2
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);
  const aboutTitles = [
    ['Certified', ' Translation', ' Services'],
    ['Accurate', ' Legal', ' Translations'],
    ['Precision in', ' Technical', ' Translations'],
  ];

  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
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
          <video src={videoBg5} className="bgVideo" autoPlay loop muted playsInline>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                Translation
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{aboutTitles[activeIndex][0]}</span>
                <span>{aboutTitles[activeIndex][1]}</span>
                <span>{aboutTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">
                Wika Translate provides high-quality translation services designed to ensure
                accuracy, cultural relevance, and professionalism. Whether you need certified
                translations for legal documents, business contracts, technical manuals, or personal
                records, our expert linguists deliver precise and reliable results. With a
                commitment to linguistic excellence and industry expertise, we help businesses and
                individuals navigate multilingual communication effortlessly.
              </p>
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
                  Translation
                  <hr />
                </h2>

                <p>
                  Our document processing undergoes a meticulous five-step procedure, ensuring
                  precision, reliability, and timely delivery to clients. The process begins with a
                  professional translation, followed by thorough proofreading to eliminate any
                  errors. Next, meticulous editing is conducted to enhance clarity and flow,
                  ensuring the document is polished. This is followed by a final comprehensive
                  review to certify it&apos;s readiness for dissemination.
                </p>
              </div>
              <p className="translation_second_paragraph">
                Once approved, the document is securely delivered to the client. This approach
                guarantees that every document meets our strict quality standards, accurately
                conveying the intended message and instilling confidence in our clients&apos;
                communications.
              </p>
            </div>

          </div>
          <div className="translation_two">
            <div className="steps-container">
              {['Translation', 'Proofreading', 'Editing', 'Final Review', 'Delivery'].map((stepTitle, index) => (
                <div className="step-item" key={stepTitle}>
                  <div className="icon-container">
                    <div className="icon_and_title_container">
                      {getStepIcon(stepTitle)}
                      {' '}
                      {/* Dynamically assign icon */}
                      <h3 className="step-title">{stepTitle}</h3>
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
                    <p className="step-description">
                      {getDescription(stepTitle)}
                    </p>
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
