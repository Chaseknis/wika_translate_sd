import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import videoBg5 from '../assets/videoBg5.mp4';
import './styles/home.css';
import './styles/about.css';
import './styles/services.css';
import './styles/translation.css';
import './styles/faq.css';
import './styles/contact.css';
import './styles/footer.css';
import Socials from '../components/socials';
import PriceCalculator from '../components/priceCalculator';
import ScrollDown from '../components/scrollDown';
import image3 from '../assets/image3.webp';
import Carousel from '../components/cardItem';
import Banner from '../components/banner';
import getDescription from '../components/logic/getDescription';
import getStepIcon from '../components/logic/getStepIcon';
import OurPartners from '../components/ourPartners';
import FAQItem from '../components/logic/FAQItem';
import Quotation from '../components/Quotation';
import ContactDetails from '../components/contactDetails';
import blogContent from '../components/blogContent';
import SiteFooter from '../components/SiteFooter';
import AnimateOnScroll from '../components/AnimateOnScroll';
import AnimatedCounter from '../components/AnimatedCounter';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const faqItems = [
  {
    q: 'How do you ensure the accuracy of your translation services?',
    a: 'At Wika Translate, we prioritize quality and uphold a strong commitment to our reputation. Each project is assigned to a team of experienced translators specializing in the relevant field, ensuring we deliver the highest standard of service in the industry.',
  },
  {
    q: 'What is the difference between a certified and a notarized translation?',
    a: "A certified translation is completed, signed, and sealed by a professional translator, ensuring its accuracy. A notarized translation involves translating official documents that are then authenticated by a public notary. If you're unsure which type of translation you need, feel free to contact us at any time for guidance.",
  },
  {
    q: 'Can you translate and certify my birth certificate?',
    a: 'Yes, Wika Translate offers certified translations for a wide range of official documents, including birth certificates, degrees, transcripts, police clearances, death certificates, divorce documents, marriage and celibacy certificates, among others.',
  },
  {
    q: 'How can I send my documents for translation?',
    a: "You can email your documents to info@wikatranslate.net. We'll review them and provide you with a FREE quote in less than 10 minutes.",
  },
  {
    q: 'How long does it take to translate my documents?',
    a: "The turnaround time depends on the size, complexity, and languages required for your project. We invite you to contact us to discuss your specific needs, and we'll always strive to exceed your expectations within any deadline.",
  },
  {
    q: 'What are your payment methods and terms?',
    a: 'We accept payments via Debit/Credit card (POS), Mobile Money, WorldRemit, checks, and bank transfers. Payment is typically requested in advance.',
  },
  {
    q: 'What currencies do you accept?',
    a: 'We accept payments in USD and Rwandan Francs. However, we are flexible and open to discussing other currency options based on your needs.',
  },
];

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const transition = { type: 'spring', duration: 3 };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate between 0, 1, and 2
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const titles = [
    ['A Home', ' to Professional', ' Language Experts'],
    ['Certified', ' Translation', ' Services in Kigali'],
    ['Simultaneous', ' Interpretation', ' Services in Kigali'],
  ];

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

  const [showContactForm, setShowContactForm] = useState(true); // Default is Contact form

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
        poster={image3}
        preload="auto"
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
                <span>
                  Wika
                </span>
                <span>
                  Translate
                </span>
              </div>
              <h2 className="home_subtitle">
                Rwanda&apos;s Most Trusted Translation & Interpretation Services Provider.
              </h2>
              {/* ✅ Optimized SEO-friendly <h1> */}
              <div className="home_title">
                <h1 className="title">
                  <span className="stroke_text">{titles[activeIndex][0]}</span>
                  <span>{titles[activeIndex][1]}</span>
                  <span>{titles[activeIndex][2]}</span>
                </h1>
              </div>
              <div>
                <p className="home_paragraph">
                  Wika Translate is East Africa’s top language service provider, delivering fast,
                  accurate translation and interpretation solutions through advanced technology
                  and expert linguists.
                </p>
                <Link to="/contact/quotation">
                  <button className="quotation_button button" type="button">
                    <span>Get a quick Quotation</span>
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
                  About Us
                  <hr />
                </h2>
                <p>
                  Wika Translate is a fast-growing, professional translation agency offering
                  expert language solutions for businesses and individuals worldwide.
                  Specializing in legal, technical, and certified translations, we deliver fast,
                  accurate, and culturally relevant services in over 150 languages,
                  including Kinyarwanda, English, French, Swahili, Arabic, and German.
                  Trusted by global companies and organizations,
                  we also provide conference interpreting, business translation,
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
              <motion.div
                className="about_banner_wrapper"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div className="about_banner_card_wrapper" variants={staggerItem}>
                  <AnimatedCounter target={10000000} suffix="+" />
                  <p>Words Translated</p>
                </motion.div>
                <motion.div className="about_banner_card_wrapper" variants={staggerItem}>
                  <AnimatedCounter target={10000} suffix="+" />
                  <p>Clients Served</p>
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
                  alt="Professional translation and interpretation team at Wika Translate, Kigali"
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
                Our Services
                <hr />
              </h2>
              <p className="services-paragraph">
                At Wika Translate Ltd, we specialize in bridging language barriers and enhancing
                communication for businesses and individuals alike. Our diverse range of services
                is designed to meet all your linguistic needs. From precise Translation that
                resonates with your target audience to expert Interpretation services, including
                simultaneous interpretation for conferences and events, we ensure your message
                is conveyed clearly. We also provide rental of advanced tour guide system equipment
                for seamless multilingual experiences. Our Subtitling and Transcription services
                cater to media production and documentation, ensuring clarity and accessibility
                for all.
              </p>
            </div>
            <p className="services-paragraph-two">
              Additionally, our Localization services transform your products and services to align
              with local cultures, making them more relevant and appealing. With a dedicated team of
              professionals and the latest technology at our disposal, Wika Translate Ltd is your
              trusted partner for effective communication in today’s global landscape. Let us help
              you connect with your audience like never before!
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="scaleIn" delay={0.1} className="wrapper">
          <div className="services_container">
            <input type="radio" name="slide" id="c1" defaultChecked />
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
        </AnimateOnScroll>

      </section>
      <section className="translation" id="translation">
        <div className="translation_section-container">
          <AnimateOnScroll variant="fadeLeft" className="translation_one">
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
          </AnimateOnScroll>
          <div className="translation_two">
            <motion.div
              className="steps-container"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {['Translation', 'Proofreading', 'Editing', 'Final Review', 'Delivery'].map((stepTitle, index) => (
                <motion.div className="step-item" key={stepTitle} variants={staggerItem}>
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="faq" id="faq">
        <div className="faq-container">
          <AnimateOnScroll variant="fadeUp" className="faq-header">
            <div>
              <h2 className="faq-title">
                FAQ
                <hr />
              </h2>
              <p className="faq-paragraph">
                At Wika Translate Ltd, our clients are at the heart of everything we do.
                We pride ourselves on delivering tailored language solutions that not only meet
                but exceed expectations, with an unwavering commitment to professionalism and
                integrity. Our diverse clientele ranges from multinational corporations to
                individuals, each benefiting from our customized services designed to address
                their unique needs.
              </p>
            </div>
            <p className="faq-paragraph-two">
              By fostering trust and cultivating long-term partnerships, we ensure seamless
              communication across languages and cultures. Our focus is on delivering outstanding
              results, ensuring successful communication outcomes for every client and strengthening
              relationships that endure over time.
            </p>
          </AnimateOnScroll>

          <div className="faq-content-wrapper">
            <motion.div
              className="faq-list-container"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {faqItems.map(({ q, a }) => (
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
              Latest Articles
              <hr />
            </h2>
            <Link to="/blog" className="home-blog-view-all">View All Articles →</Link>
          </div>
          <motion.div
            className="blog-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {Object.keys(blogContent).map((id) => (
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
          <button type="button" onClick={() => setShowContactForm(true)} className={`toggle-btn ${showContactForm ? 'active' : ''}`}>
            Contact Us
          </button>
          <button type="button" onClick={() => setShowContactForm(false)} className={`toggle-btn ${!showContactForm ? 'active' : ''}`}>
            Get a Quotation
          </button>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.1} className="form-container">
          {showContactForm ? (
            <div className="contact-form-section">
              <div className="text-section">
                <div className="text_section_wrapper">
                  <h2>
                    Contact Us
                    <hr />
                  </h2>
                  <p>
                    Wika Translate serves as a hub for language experts from across the globe,
                    boasting a network of over 800 translators and interpreters. With this extensive
                    pool of talent, we possess the expertise and capability to consistently deliver
                    high-quality services to our clients swiftly and efficiently.
                  </p>
                </div>

                <ContactDetails />

              </div>
              <form id="form" action="https://formspree.io/f/xjvdgezn" method="POST" className="contact-form">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://127.0.0.1:5555/#contact-us" />

                <div className="contact_details">
                  <input type="text" id="name" name="name" placeholder="Full Name" className="input" required />
                  <input type="text" id="phone" name="phone" placeholder="Phone Number" className="input" />
                  <input type="email" id="email" name="email" placeholder="Email Address" className="input" required />
                </div>
                <textarea id="message" name="message" placeholder="Message" rows="8" className="input" required />

                <button type="submit" className="button"><span>Send Message</span></button>
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
