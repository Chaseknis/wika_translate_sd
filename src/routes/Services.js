import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/services.css';
import Banner from '../components/banner';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

function Services() {
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
    ['Simultaneous', ' Interpretation', ' Solutions'],
    ['Interpretation', ' Equipment', ' Rentals'],
  ];

  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
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
          <video src={videoBg5} className="bgVideo" autoPlay loop muted playsInline>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                Our Services
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
                At Wika Translate, we offer a comprehensive range of language services designed
                to meet the diverse needs of our clients. From certified translations and
                simultaneous interpretation to interpretation equipment rentals, our solutions
                are tailored to ensure seamless communication in any setting. Whether you’re
                organizing an international conference, need accurate document translations,
                or require professional interpreters, our team of experts is dedicated to
                delivering precision, professionalism, and cultural fluency to help you connect
                with the world effortlessly.
              </p>
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
                  Our Services
                  <hr />
                </h2>
                <p className="services-paragraph">
                  At Wika Translate Ltd, we specialize in bridging language barriers and enhancing
                  communication for businesses and individuals alike. Our diverse range of services
                  is designed to meet all your linguistic needs. From precise Translation that
                  resonates with your target audience to expert Interpretation services, including
                  simultaneous interpretation for conferences and events, we ensure your message
                  is conveyed clearly. We also provide rental of advanced tour guide system
                  equipment for seamless multilingual experiences. Our Subtitling and
                  Transcription services cater to media production and documentation,
                  ensuring clarity and accessibility for all.
                </p>
              </div>
              <p className="services-paragraph-two">
                Additionally, our Localization services transform your products and services to
                align with local cultures, making them more relevant and appealing. With a
                dedicated team of professionals and the latest technology at our disposal,
                Wika Translate Ltd is your trusted partner for effective communication in
                today’s global landscape. Let us help you connect with your audience like
                never before!
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div className="services_container">
              <input type="radio" name="slide" id="c1" checked />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="c1" className="services_card">
                <div className="services_row">
                  <div className="services_icon">1</div>
                  <div className="services_description">
                    <h3>Translation</h3>
                    <p>
                      We offer professional translation services in 100+ languages in Legal,
                      Technical, Science, Agriculture, and Business Fields, etc.
                    </p>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c2" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="c2" className="services_card">
                <div className="services_row">
                  <div className="services_icon">2</div>
                  <div className="services_description">
                    <h3>Interpretation</h3>
                    <p>
                      Simultaneous and Consecutive interpreting, Hiring interpretation equipment
                      and Escorting Interpretation.
                    </p>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c3" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="c3" className="services_card">
                <div className="services_row">
                  <div className="services_icon">3</div>
                  <div className="services_description">
                    <h3>Subtitling</h3>
                    <p>
                      Translating spoken dialogue From Transcripts, screenplay,
                      commentary in films and television programs, Video games into written text
                      on the screen.
                    </p>
                  </div>
                </div>
              </label>

              <input type="radio" name="slide" id="c4" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="c4" className="services_card">
                <div className="services_row">
                  <div className="services_icon">4</div>
                  <div className="services_description">
                    <h3>Transcription</h3>
                    <p>
                      We provide transcription services for videos or audio-recordings of
                      any length or any language.
                    </p>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c5" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="c5" className="services_card">
                <div className="services_row">
                  <div className="services_icon">5</div>
                  <div className="services_description">
                    <h3>Localization</h3>
                    <p>
                      We address cultural and non-textual components as well as linguistic
                      issues when adapting a product or service for another country or locale.
                    </p>
                  </div>
                </div>
              </label>

            </div>
          </div>
        </div>
        <SiteFooter />

      </section>
    </>
  );
}

export default Services;
