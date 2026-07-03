import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import videoBg5 from '../assets/videoBg5.mp4';
import Socials from '../components/socials';
import PriceCalculator from '../components/priceCalculator';
import ScrollDown from '../components/scrollDown';
import image3 from '../assets/image3.webp';
import image3Poster from '../assets/image3_poster.jpg';
import Carousel from '../components/cardItem';
import Banner from '../components/banner';
import getStepIcon from '../components/logic/getStepIcon';
import OurPartners from '../components/ourPartners';
import FAQItem from '../components/logic/FAQItem';
import Quotation from '../components/Quotation';
import ContactDetails from '../components/contactDetails';
import blogContent from '../components/blogContent';
import SiteFooter from '../components/SiteFooter';
import AnimateOnScroll from '../components/AnimateOnScroll';
import AnimatedCounter from '../components/AnimatedCounter';
import { useTranslation } from '../contexts/LanguageContext';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Home() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const transition = { type: 'spring', duration: 3 };

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

  const [openSteps, setOpenSteps] = useState([false, false, false, false, false]);

  const toggleContent = (index) => {
    setOpenSteps((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const [showContactForm, setShowContactForm] = useState(true);

  return (
    <main className="page_container">
      <video
        ref={videoRef}
        src={videoBg5}
        className="bgVideo"
        autoPlay
        loop
        muted
        playsInline
        poster={image3Poster}
        preload="none"
        onError={(e) => { e.target.style.display = 'none'; }}
      >
        <track kind="captions" srcLang="en" label="English" />
      </video>
      <div className="video-fallback" aria-hidden="true" />
      <section id="home" className="home">
        <div className="overlay" />
        <div className="home_container">
          <div className="home_wrapper">
            <div className="half_one_wrapper">
              <div className="best_ad">
                <motion.div
                  initial={{ left: '238px' }}
                  whileInView={{ left: '8px' }}
                  transition={{ ...transition, type: 'tween' }}
                />
                <span>Wika</span>
                <span>Translate</span>
              </div>
              <h2 className="home_subtitle">
                {t.hero.subtitle}
              </h2>
              <div className="home_title">
                <h1 className="title">
                  <span className="stroke_text">{t.hero.titles[activeIndex][0]}</span>
                  <span>{t.hero.titles[activeIndex][1]}</span>
                  <span>{t.hero.titles[activeIndex][2]}</span>
                </h1>
              </div>
              <div>
                <p className="home_paragraph">
                  {t.hero.paragraph}
                </p>
                <Link to="/contact/quotation">
                  <button className="quotation_button button" type="button">
                    <span>{t.hero.cta}</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="half_two_wrapper">
              <PriceCalculator />
            </div>
          </div>

          <div className="socials_and_scroll">
            <ScrollDown />
            <Socials />
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <Carousel />
        <div className="about_container">
          <div className="about_wrapper">
            <AnimateOnScroll variant="fadeLeft" className="about_title_container">
              <div className="about_page_title">
                <h2>
                  {t.about.title}
                  <hr />
                </h2>
                <p>{t.about.p1}</p>
              </div>
              <p className="second_paragraph">{t.about.p2}</p>
              <motion.div
                className="about_banner_wrapper"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div className="about_banner_card_wrapper" variants={staggerItem}>
                  <AnimatedCounter target={10000000} suffix="+" />
                  <p>{t.about.wordsTranslated}</p>
                </motion.div>
                <motion.div className="about_banner_card_wrapper" variants={staggerItem}>
                  <AnimatedCounter target={10000} suffix="+" />
                  <p>{t.about.clientsServed}</p>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <a target="_blank" href="https://www.goodfirms.co/company/wika-translate" rel="noreferrer">
                    <img
                      className="goodFirms"
                      src="https://assets.goodfirms.co/badges/color-badge/translation-services-companies.svg"
                      title="Top Translation Services Company"
                      alt="Top Translation Services Company on GoodFirms"
                    />
                  </a>
                </motion.div>
              </motion.div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeRight" className="about_image_container">
              <div className="about_image_wrapper">
                <img
                  src={image3}
                  alt="Professional interpretation and translation team at Wika Translate Sudan, Omdurman"
                  loading="lazy"
                  width="600"
                  height="400"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <Banner />
        <AnimateOnScroll variant="fadeUp" className="header_wrapper">
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
        </AnimateOnScroll>

        <AnimateOnScroll variant="scaleIn" delay={0.1} className="wrapper">
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
        </AnimateOnScroll>
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
      </section>
      <section className="translation" id="translation">
        <div className="translation_section-container">
          <AnimateOnScroll variant="fadeLeft" className="translation_one">
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
          </AnimateOnScroll>
          <div className="translation_two">
            <motion.div
              className="steps-container"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {t.translation.steps.map((step, index) => (
                <motion.div className="step-item" key={step.key} variants={staggerItem}>
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
                  <div className={`step-content ${openSteps[index] ? 'open' : ''}`}>
                    <p className="step-description">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="cities-section">
        <div className="cities-inner">
          <h2 className="cities-title">
            {t.home.cities.title}
            <hr />
          </h2>
          <p className="cities-subtitle">
            {t.home.cities.subtitle}
          </p>
          <div className="cities-grid">
            <Link to="/translation-services-khartoum" className="city-chip">Khartoum</Link>
            <Link to="/translation-services-omdurman" className="city-chip">Omdurman</Link>
            <Link to="/translation-services-port-sudan" className="city-chip">Port Sudan</Link>
            <Link to="/translation-services-kassala" className="city-chip">Kassala</Link>
            <Link to="/translation-services-el-obeid" className="city-chip">El Obeid</Link>
            <Link to="/translation-services-wad-madani" className="city-chip">Wad Madani</Link>
            <Link to="/translation-services-nyala" className="city-chip">Nyala</Link>
            <Link to="/translation-services-gedaref" className="city-chip">Gedaref</Link>
            <Link to="/translation-services-atbara" className="city-chip">Atbara</Link>
          </div>
          <div className="cities-cta">
            <Link to="/translation-services-sudan" className="cities-view-all">
              {t.home.cities.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-container">
          <AnimateOnScroll variant="fadeUp" className="faq-header">
            <div>
              <h2 className="faq-title">
                {t.faq.title}
                <hr />
              </h2>
              <p className="faq-paragraph">{t.faq.p1}</p>
            </div>
            <p className="faq-paragraph-two">{t.faq.p2}</p>
          </AnimateOnScroll>

          <div className="faq-content-wrapper">
            <motion.div
              className="faq-list-container"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {t.faq.items.map(({ q, a }) => (
                <motion.div key={q} variants={staggerItem}>
                  <FAQItem question={q} answer={a} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <OurPartners />
        <div className="home-blog-section">
          <div className="home-blog-header">
            <h2>
              {t.faq.latestArticles}
              <hr />
            </h2>
            <Link to="/blog" className="home-blog-view-all">{t.faq.viewAll}</Link>
          </div>
          <motion.div
            className="blog-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {Object.keys(blogContent).slice(0, 4).map((id) => (
              <motion.div key={id} className="blog-preview" variants={staggerItem}>
                <h3>{blogContent[id].title}</h3>
                <p>{blogContent[id].metaDescription}</p>
                <Link to={`/blog/${id}`}>{blogContent[id].anchorText}</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="contact" id="contact">
        <AnimateOnScroll variant="fadeUp" className="toggle-buttons">
          <button
            type="button"
            onClick={() => setShowContactForm(true)}
            className={`toggle-btn ${showContactForm ? 'active' : ''}`}
          >
            {t.contact.toggleContact}
          </button>
          <button
            type="button"
            onClick={() => setShowContactForm(false)}
            className={`toggle-btn ${!showContactForm ? 'active' : ''}`}
          >
            {t.contact.toggleQuotation}
          </button>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.1} className="form-container">
          {showContactForm ? (
            <div className="contact-form-section">
              <div className="text-section">
                <div className="text_section_wrapper">
                  <h2>
                    {t.contact.title}
                    <hr />
                  </h2>
                  <p>{t.contact.p1}</p>
                </div>
                <ContactDetails />
              </div>
              <form id="form" action="https://formspree.io/f/xjvdgezn" method="POST" className="contact-form">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.wikatranslate.us/contact" />
                <div className="contact_details">
                  <input type="text" id="name" name="name" placeholder={t.contact.fullName} className="input" required />
                  <input type="text" id="phone" name="phone" placeholder={t.contact.phone} className="input" />
                  <input type="email" id="email" name="email" placeholder={t.contact.email} className="input" required />
                </div>
                <textarea id="message" name="message" placeholder={t.contact.message} rows="8" className="input" required />
                <button type="submit" className="button"><span>{t.contact.send}</span></button>
              </form>
            </div>
          ) : (
            <Quotation />
          )}
        </AnimateOnScroll>
      </section>
      <SiteFooter />
    </main>
  );
}

export default Home;
