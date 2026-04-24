import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/faq.css';
import OurPartners from '../components/ourPartners';
import FAQItem from '../components/logic/FAQItem';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

function FAQ() {
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
    ['Frequently', ' Asked', ' Questions'],
    ['Need Help?', ' Find', ' Your Answers Here'],
    ['Simplifying', ' Language', ' Solutions for You'],
  ];
  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
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
          <video src={videoBg5} className="bgVideo" autoPlay loop muted playsInline>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                FAQ
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
                Have questions about our services? Our FAQ section provides clear answers to common
                inquiries about translation, interpretation, pricing, turnaround times, and more.
                Whether you’re curious about certified translations, simultaneous interpretation, or
                document requirements, we’ve got you covered. Explore our frequently asked questions
                to learn more about how Wika Translate can assist you.
              </p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="faq-content-main-container">
          <div className="faq-header">
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
          </div>

          <div className="faq-content-wrapper">
            <div className="faq-list-container">
              <FAQItem
                question="How do you ensure the accuracy of your translation services?"
                answer="At Wika Translate, we prioritize quality and uphold a strong commitment to our reputation. Each project is assigned to a team of experienced translators specializing in the relevant field, ensuring we deliver the highest standard of service in the industry."
              />
              <FAQItem
                question="What is the difference between a certified and a notarized translation?"
                answer="A certified translation is completed, signed, and sealed by a professional translator, ensuring its accuracy. A notarized translation involves translating official documents that are then authenticated by a public notary. If you're unsure which type of translation you need, feel free to contact us at any time for guidance."
              />
              <FAQItem
                question="Can you translate and certify my birth certificate?"
                answer="Yes, Wika Translate offers certified translations for a wide range of official documents, including birth certificates, degrees, transcripts, police clearances, death certificates, divorce documents, marriage and celibacy certificates, among others."
              />
              <FAQItem
                question="How can I send my documents for translation?"
                answer="You can email your documents to info@wikatranslate.net. We’ll review them and provide you with a FREE quote in less than 10 minutes."
              />
              <FAQItem
                question="How long does it take to translate my documents?"
                answer="The turnaround time depends on the size, complexity, and languages required for your project. We invite you to contact us to discuss your specific needs, and we’ll always strive to exceed your expectations within any deadline."
              />
              <FAQItem
                question="What are your payment methods and terms?"
                answer="We accept payments via Debit/Credit card (POS), Mobile Money, WorldRemit, checks, and bank transfers. Payment is typically requested in advance."
              />
              <FAQItem
                question="What currencies do you accept?"
                answer="We accept payments in USD and Rwandan Francs. However, we are flexible and open to discussing other currency options based on your needs."
              />
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
