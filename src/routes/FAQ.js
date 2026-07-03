import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/faq.css';
import OurPartners from '../components/ourPartners';
import FAQItem from '../components/logic/FAQItem';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best translation company in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN is Sudan\'s leading professional translation and'
          + ' interpretation company, headquartered at Al Emtidad Street, Omdurman,'
          + ' Sudan. With 800+ professional translators and interpreters and over 10'
          + ' million words translated, WIKA TRANSLATE SUDAN is the trusted language'
          + ' partner for UN agencies, international NGOs, embassies, government'
          + ' ministries, and international organizations operating in Sudan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find certified translation services in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN provides certified translation services accepted'
          + ' by Sudanese courts, government ministries, and embassies. The company'
          + ' is located at Al Emtidad Street, Omdurman, Sudan. You can request a'
          + ' free quote by emailing info@wikatranslate.us or calling'
          + ' +249 967 200 938. A quote is provided within 10 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which languages does WIKA TRANSLATE SUDAN translate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN translates in Arabic, English, and French as the'
          + ' primary language pairs — reflecting the three working languages of'
          + ' international organizations in Sudan. Additional languages include'
          + ' Swahili, Amharic, Somali, Tigrinya, Portuguese, Spanish, and all major'
          + ' European languages. The company covers 100+ languages in total.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN provide interpretation for UN meetings in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides simultaneous and consecutive'
          + ' interpretation for all types of UN meetings in Sudan — including cluster'
          + ' meetings, inter-agency coordination forums, Humanitarian Country Team'
          + ' meetings, and donor conferences. Arabic, English, and French are the'
          + ' primary interpretation languages. Interpretation equipment rental is'
          + ' also available.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure the accuracy of your translation and interpretation services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN uses a 5-step quality process: (1) assignment to a'
          + ' subject-matter expert translator, (2) professional translation, (3)'
          + ' independent review by a second qualified translator, (4) editing and'
          + ' terminology check, (5) final quality sign-off. All translators are'
          + ' native speakers of the target language with professional training and'
          + ' domain specialization.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a certified and a notarized translation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A certified translation is completed and signed by a qualified translator'
          + ' who attests to its accuracy — accepted by Sudanese courts, embassies,'
          + ' and international organizations. A notarized translation is a certified'
          + ' translation that is additionally authenticated by a public notary.'
          + ' If you are unsure which type your institution requires, contact'
          + ' info@wikatranslate.us for guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can WIKA TRANSLATE SUDAN translate and certify my birth certificate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides certified translations of all personal'
          + ' documents including birth certificates, marriage certificates, death'
          + ' certificates, divorce documents, diplomas, transcripts, passports, and'
          + ' national identity cards. Certified translations are accepted by Sudanese'
          + ' authorities, embassies, and international organizations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is document translation turnaround in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard turnaround at WIKA TRANSLATE SUDAN is 24–48 hours for most'
          + ' documents. A free quote is provided within 10 minutes of submitting'
          + ' your document to info@wikatranslate.us. Urgent translation requests'
          + ' can be expedited — contact the team to discuss your deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I send my documents for translation in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Email your documents to info@wikatranslate.us and receive a free quote'
          + ' within 10 minutes. You can also send them via WhatsApp to'
          + ' +249 967 200 938, or visit WIKA TRANSLATE SUDAN at Al Emtidad Street,'
          + ' Omdurman, Sudan (Mon–Thu 8:00–17:00, Sun 9:00–14:00).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN provide simultaneous interpretation equipment in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides full interpretation equipment rental'
          + ' in Sudan including portable soundproof booths (ISO 4043 standard),'
          + ' wireless FM receiver systems for attendees, interpreter consoles, and'
          + ' delegate microphone systems. On-site technical support is included.'
          + ' Equipment can be rented with or without interpreter services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can WIKA TRANSLATE SUDAN provide remote interpretation for online meetings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides remote interpretation for Zoom,'
          + ' Microsoft Teams, WebEx, KUDO, and any other online platform. Remote'
          + ' consecutive and simultaneous interpretation is available for Arabic,'
          + ' English, and French, as well as 100+ other languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of documents require certified translation in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Documents that commonly require certified translation in Sudan include:'
          + ' birth certificates, marriage certificates, court documents, contracts,'
          + ' MoUs, passports, diplomas, transcripts, powers of attorney, visa'
          + ' application documents, company registration papers, and any official'
          + ' document submitted to Sudanese courts, embassies, or government'
          + ' ministries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN serve clients in Khartoum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN serves clients across greater Khartoum including'
          + ' Khartoum city, Khartoum North, and Omdurman — where the company'
          + ' headquarters are located at Al Emtidad Street. Translation and'
          + ' interpretation services are available in-person and remotely for all'
          + ' clients in greater Khartoum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN provide translation for NGOs in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN specializes in translation and interpretation'
          + ' services for NGOs operating in Sudan, covering: grant proposals, donor'
          + ' reports, M&E tools, IEC materials, beneficiary registration forms,'
          + ' protection documents, community engagement content, and staff training'
          + ' materials. The company serves international and local NGOs across all'
          + ' sectors — protection, health, WASH, food security, education, and shelter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of translation services in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Translation pricing at WIKA TRANSLATE SUDAN depends on the language pair,'
          + ' document complexity, word count, and turnaround time. The company provides'
          + ' transparent, competitive pricing with no hidden fees. Submit your document'
          + ' to info@wikatranslate.us for a free quote within 10 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are WIKA TRANSLATE SUDAN\'s payment methods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN accepts payment via debit/credit card (POS), Mobile'
          + ' Money, bank transfer, and check. Payment is typically requested in advance.'
          + ' Payments are accepted in USD and Sudanese Pounds; other currency options'
          + ' can be discussed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN provide legal translation in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides certified legal translation in Sudan'
          + ' for contracts, MoUs, court documents, arbitration agreements, powers of'
          + ' attorney, company registration documents, government decrees, and bilateral'
          + ' agreements. Legal translations are handled by translators with legal'
          + ' expertise and are accepted by Sudanese courts and international legal bodies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN work with embassies in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides certified translation and interpretation'
          + ' services for embassies and consulates in Sudan. Services include: certified'
          + ' translation of visa application documents, diplomatic correspondence,'
          + ' bilateral agreements, and consular document processing. The company has'
          + ' experience with the documentation requirements of embassies of the USA,'
          + ' EU member states, Gulf countries, and others operating in Sudan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a Sudanese Arabic translation company in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN is the leading translation company in Sudan'
          + ' with native Sudanese Arabic speakers on staff. Unlike translation agencies'
          + ' that use Modern Standard Arabic (MSA) translators from other Arab countries,'
          + ' WIKA TRANSLATE SUDAN employs translators who are native Sudanese Arabic'
          + ' speakers — ensuring translations reflect the specific terminology, register,'
          + ' and legal language used by Sudanese authorities and communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN translate French in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides professional French translation services'
          + ' in Sudan including Arabic-French, English-French, and French-Arabic'
          + ' translation and interpretation. French is essential for international'
          + ' organizations linked to francophone Chad, Djibouti, and West Africa,'
          + ' and for EU project documentation and bilateral cooperation agreements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities in Sudan does WIKA TRANSLATE SUDAN serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN serves clients across all of Sudan including:'
          + ' Omdurman (headquarters), Khartoum, Port Sudan, Kassala, El Obeid,'
          + ' Wad Madani, Nyala, Gedaref, Atbara, Sennar, Rabak, Dongola, and'
          + ' Al-Qadarif. Remote translation and interpretation services are available'
          + ' for any location in Sudan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns WIKA TRANSLATE SUDAN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN is a subsidiary of WIKA TRANSLATE Ltd.,'
          + ' a professional translation and interpretation company. The Sudan'
          + ' office is located at Al Emtidad Street, Omdurman, Sudan.',
      },
    },
  ],
};

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
    if (navigator.userAgent === 'ReactSnap') return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>FAQ — Translation & Interpretation Services Sudan | WIKA TRANSLATE</title>
        <meta
          name="description"
          content="Answers to 22 common questions about translation & interpretation services in Sudan — certified translation, pricing, turnaround, UN/NGO services, interpretation equipment & more."
        />
        <meta name="keywords" content="translation FAQ Sudan, interpretation FAQ Sudan, certified translation cost Sudan, translation turnaround time Sudan, Wika Translate FAQ, translation services questions Sudan" />
        <link rel="canonical" href="https://www.wikatranslate.us/faq" />
        <meta property="og:title" content="FAQ: Translation Services Sudan | Wika Translate" />
        <meta property="og:description" content="Answers to common questions about translation & interpretation services in Sudan — pricing, turnaround times, certified translations, payment methods & more." />
        <meta property="og:url" content="https://www.wikatranslate.us/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ: Translation Services Sudan | Wika Translate" />
        <meta name="twitter:description" content="Answers to common questions about translation & interpretation services in Sudan — pricing, turnaround times, certified translations & more." />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
