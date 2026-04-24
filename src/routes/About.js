import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/about.css';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import image3 from '../assets/image3.webp';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

function About() {
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
    ['Global', ' Communication', ' Made Easy'],
    ['Precision in', ' Multilingual', ' Services'],
    ['Dedicated to', ' Bridging', ' Language Gaps'],
  ];

  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
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
          <video src={videoBg5} className="bgVideo" autoPlay loop muted playsInline>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                About Us
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
                Wika Translate is your gateway to seamless communication in a multilingual world.
                Based in Kigali, we specialize in certified translation, simultaneous
                interpretation, and language solutions tailored to your needs. Our team of
                seasoned language experts is committed to bridging cultural and linguistic
                gaps with precision and professionalism. Whether it’s legal documents,
                international conferences, or everyday communication, Wika Translate ensures
                clarity, accuracy, and excellence in every service we provide.
              </p>
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
                  About Us
                  <hr />
                </h2>
                <p>
                  Wika Translate is a fast-growing, professional translation agency offering expert
                  language solutions for businesses and individuals worldwide. Specializing in
                  legal, technical, and certified translations, we deliver fast, accurate,
                  and culturally relevant services in over 150 languages, including Kinyarwanda,
                  English, French, Swahili, Arabic, and German. Trusted by global companies
                  and organizations, we also provide conference interpreting, business translation,
                  interpretation equipment rental, and multilingual support,
                  ensuring clear communication across diverse industries in Rwanda, Africa,
                  and globally.
                </p>
              </div>
              <p className="second_paragraph">
                Wika Translate serves as a hub for language experts from across the globe,
                boasting a network of over 800 translators and interpreters. With this extensive
                pool of talent, we possess the expertise and capability to consistently
                deliver high-quality services to our clients swiftly and efficiently.
              </p>
              <div className="about_banner_wrapper">
                <div className="about_banner_card_wrapper">
                  <span>10,000,000+</span>
                  <p>Words Translated</p>
                </div>
                <div className="about_banner_card_wrapper">
                  <span>10,000+</span>
                  <p>Clients Served</p>
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
