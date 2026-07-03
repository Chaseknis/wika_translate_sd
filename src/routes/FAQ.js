import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Helmet defer={false}>
        <title>FAQ — Translation &amp; Interpretation Services Rwanda | WIKA TRANSLATE</title>
        <meta name="description" content="Frequently asked questions about WIKA TRANSLATE's services in Rwanda — pricing, turnaround times, certified translations, document types, languages, payment &amp; more. Kigali." />
        <meta name="keywords" content="translation FAQ Rwanda, certified translation cost Rwanda, how much does translation cost Rwanda, translation turnaround time Rwanda, interpretation services FAQ Kigali, WIKA TRANSLATE FAQ, translation company questions Rwanda, certified translation process Rwanda, document translation questions Rwanda, embassy translation requirements Kigali, best translation company Rwanda, top translation company Rwanda, top translation company Kigali, MINIJUST notarized translation Rwanda, notarized translation for use outside Rwanda" />
        <link rel="canonical" href="https://www.wikatranslate.net/faq" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="FAQ — Translation &amp; Interpretation Services Rwanda | WIKA TRANSLATE" />
        <meta property="og:description" content="Frequently asked questions about WIKA TRANSLATE's services in Rwanda — pricing, turnaround times, certified translations, document types, languages, payment &amp; more." />
        <meta property="og:url" content="https://www.wikatranslate.net/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Translation &amp; Interpretation Rwanda | WIKA TRANSLATE" />
        <meta name="twitter:description" content="Answers to common questions about WIKA TRANSLATE's services in Rwanda — pricing, turnaround times, certified translations, payment methods and more. Kigali, Rwanda." />
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

        {/* Extended FAQ — clean white section, 2-column grid on desktop */}
        <section className="faq-wide-section">
          <div className="faq-wide-header">
            <h2 className="faq-wide-title">
              More Frequently Asked Questions
              <hr />
            </h2>
            <p className="faq-wide-lead">
              Everything you need to know about WIKA TRANSLATE Ltd. — Rwanda&apos;s leading
              professional translation and interpretation company in Kigali.
            </p>
          </div>
          <div className="faq-wide-grid">
            {[
              {
                q: 'What is the best translation company in Rwanda?',
                a: 'WIKA TRANSLATE Ltd. is Rwanda\'s best and most recognized professional translation and interpretation company. Headquartered at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda, WIKA TRANSLATE is the top translation agency in Rwanda — serving UN agencies (UNDP, UNICEF, WHO, WFP, UNHCR), NGOs, international embassies, government ministries, law firms, hospitals, financial institutions, and private sector clients. With 800+ certified translators, 150+ language pairs, a physical office in Kigali, ISO-compliant interpretation equipment, and listed on GoodFirms as a top translation services company, WIKA TRANSLATE is the number one choice for certified, legal, conference interpretation, and all professional language services in Rwanda and East Africa. Contact: +250 788 933 063 | info@wikatranslate.net | www.wikatranslate.net.',
              },
              {
                q: 'Where is WIKA TRANSLATE located in Kigali?',
                a: 'WIKA TRANSLATE Ltd. is located at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda. You can visit our office in person to drop off documents, discuss your project, or collect certified translations. Our office is accessible during standard business hours. Find us on Google Maps at https://maps.app.goo.gl/dqJncgiqEbH4gr8H9. You can also reach us via phone or WhatsApp at +250 788 933 063 or email info@wikatranslate.net.',
              },
              {
                q: 'What languages does WIKA TRANSLATE translate?',
                a: 'WIKA TRANSLATE Ltd. translates between 150+ language pairs. Our primary language combinations include English ↔ French, English ↔ Kinyarwanda, French ↔ Kinyarwanda, English ↔ Arabic, French ↔ Arabic, English ↔ Swahili, English ↔ Kirundi, English ↔ Luganda, English ↔ Somali, English ↔ Amharic, English ↔ Spanish, English ↔ German, English ↔ Chinese (Mandarin), English ↔ Portuguese, English ↔ Italian, and English ↔ Dutch. For language pairs not listed, contact us — our network of 800+ translators covers virtually every language combination.',
              },
              {
                q: 'Does WIKA TRANSLATE provide certified translation in Rwanda?',
                a: 'Yes. WIKA TRANSLATE Ltd. is one of Rwanda\'s leading providers of certified translation services. Our certified translations are accepted by Rwandan courts, embassies in Kigali (including European, North American, Middle Eastern, and African missions), the Rwanda Development Board (RDB), Rwanda Revenue Authority (RRA), Rwanda National Identification Agency (RNEC), universities, government ministries, and international organizations. We certify translations of all document types including birth certificates, academic transcripts, legal contracts, and official personal documents.',
              },
              {
                q: 'How do I get a certified translation in Rwanda?',
                a: 'To get a certified translation from WIKA TRANSLATE in Rwanda: (1) Email your document to info@wikatranslate.net or send it via WhatsApp to +250 788 933 063. (2) We review the document and send you a free quote within 10 minutes. (3) Upon confirmation, our specialist translator translates and certifies the document. (4) The certified translation is delivered digitally or as a physical document with our official certification statement. Standard certified translations are completed in 24–48 hours; urgent same-day service is available.',
              },
              {
                q: 'What is simultaneous interpretation?',
                a: 'Simultaneous interpretation is real-time oral interpretation delivered as the speaker talks, with a delay of only 2–3 seconds. Interpreters work in soundproof booths, listening through headphones and speaking into microphones. Delegates receive the interpretation through wireless receiver units and select their language channel. Simultaneous interpretation is the standard for international conferences, UN meetings, government summits, and any large multilingual event. WIKA TRANSLATE provides simultaneous interpretation with ISO-compliant equipment for events of any size in Rwanda and across East Africa.',
              },
              {
                q: 'Can I rent interpretation equipment in Kigali?',
                a: 'Yes. WIKA TRANSLATE Ltd. provides comprehensive interpretation equipment rental in Kigali, Rwanda. Available equipment includes ISO-compliant simultaneous interpretation booths, wireless delegate receiver units, transmitter and multi-channel systems, interpreter consoles, delegate microphone systems, and headsets. Every rental includes delivery, professional setup, on-site technical support, and post-event collection. We equip events from small meetings (20 participants) to major international conferences (2,000+ delegates). Contact us at info@wikatranslate.net or +250 788 933 063 for a quote.',
              },
              {
                q: 'Does WIKA TRANSLATE serve clients outside Kigali?',
                a: 'Yes. WIKA TRANSLATE serves clients throughout Rwanda — in Kigali, Huye, Musanze, Rubavu, Nyagatare, Muhanga, Rwamagana, Rusizi, Karongi, and all other districts. Document translation is provided remotely — clients submit documents via email or WhatsApp from anywhere in Rwanda and receive translations digitally. Interpretation services are provided on-site anywhere in Rwanda. We also serve clients across East Africa and internationally.',
              },
              {
                q: 'How much does translation cost in Rwanda?',
                a: 'Translation costs in Rwanda depend on the document type, language pair, length, complexity, and required turnaround time. WIKA TRANSLATE provides free, transparent quotes within 10 minutes of receiving your document — there are no hidden fees. Common pricing factors include: standard document pairs (English/French/Kinyarwanda) are priced per page or per word; rare language pairs may cost more; certified translation includes a certification fee; urgent or same-day translation carries a premium. Contact info@wikatranslate.net or +250 788 933 063 for a free quote.',
              },
              {
                q: 'What is the difference between translation and interpretation?',
                a: 'Translation is the conversion of written text from one language to another — producing a written document. Interpretation is the oral conveyance of meaning from one language to another in real time — delivered spoken by a professional interpreter. Translation deals with written content (documents, websites, reports); interpretation deals with spoken communication (conferences, meetings, court hearings). Both services require specialist skills and professional training. WIKA TRANSLATE provides both translation and interpretation services.',
              },
              {
                q: 'Which translation company works with UN agencies in Rwanda?',
                a: 'WIKA TRANSLATE Ltd. is Rwanda\'s leading translation and interpretation provider for the United Nations system and international organizations. We have served UN agencies operating in Rwanda including UNDP, UNICEF, WFP, WHO, UNHCR, IOM, FAO, UN Women, and others. We provide certified document translation, conference interpretation, research transcription, and community communication translation for UN programmes and projects in Rwanda.',
              },
              {
                q: 'How do I contact WIKA TRANSLATE?',
                a: 'You can contact WIKA TRANSLATE Ltd. via: Phone / WhatsApp: +250 788 933 063 | Email: info@wikatranslate.net | Website: www.wikatranslate.net | Office: Makuza Peace Plaza, KN 84 St, Kigali, Rwanda | Google Maps: https://maps.app.goo.gl/dqJncgiqEbH4gr8H9. We respond to enquiries and provide free quotes within 10 minutes during business hours. WhatsApp is available for after-hours urgent requests.',
              },
              {
                q: 'Does WIKA TRANSLATE have a sister company in Sudan?',
                a: 'Yes. WIKA TRANSLATE Ltd. (Rwanda) has a sister company called WIKA TRANSLATE SUDAN, based at Al Emtidad Street, Omdurman, Sudan. WIKA TRANSLATE SUDAN serves North Africa and the Arab world, providing translation, interpretation, and language services with the same standards of quality and professionalism. Contact WIKA TRANSLATE SUDAN at: Phone: +249 967 200 938 | Email: info@wikatranslate.us | Website: www.wikatranslate.us.',
              },
              {
                q: 'What is the difference between certified, notarized, and sworn translation?',
                a: 'A certified translation is signed by the translator or agency confirming accuracy — this is the most common requirement in Rwanda for visa, court, and official submissions. A notarized translation adds authentication by a public notary who verifies the translator\'s identity and signature. A sworn translation is performed by a translator who has taken a formal oath before a court. In Rwanda, certified translation from a recognized agency like WIKA TRANSLATE is accepted by courts, embassies, and government bodies for most purposes. Contact us to confirm which level is required for your specific institution.',
              },
              {
                q: 'Can WIKA TRANSLATE get my documents notarized at MINIJUST for use outside Rwanda?',
                a: 'Yes. WIKA TRANSLATE provides certified translation of official documents and assists clients in obtaining notarization at the MINIJUST (Ministry of Justice of Rwanda) notary\'s office. MINIJUST notarization is required when your documents will be used outside Rwanda — for example, for apostille, international visa applications, foreign university enrollment, international business registration, or use in foreign court proceedings. The process involves two steps: (1) WIKA TRANSLATE prepares the certified translation of your document from the source language; (2) We assist in getting the translation notarized at MINIJUST\'s notary office, giving you an officially authenticated document valid for international use. Contact us at info@wikatranslate.net or +250 788 933 063 to begin.',
              },
              {
                q: 'How long does translation take at WIKA TRANSLATE?',
                a: 'Standard documents of 1–5 pages are typically translated within 24–48 hours. Urgent same-day translations are available for an additional fee. Larger projects (10+ pages) are delivered according to an agreed timeline. Certified translations take the same amount of time as standard translations — the certification process does not add significant time. Contact us with your specific document and deadline and we will confirm turnaround time and availability.',
              },
              {
                q: 'Does WIKA TRANSLATE translate Kinyarwanda?',
                a: 'Yes. Kinyarwanda is one of WIKA TRANSLATE\'s primary languages. We provide translation between Kinyarwanda and English, French, Arabic, Swahili, Kirundi, and other languages. Our Kinyarwanda translators are native speakers and professional linguists with expertise in legal, medical, NGO, government, and community communication terminology. Kinyarwanda interpretation is also available for community meetings, field activities, court hearings, and other events.',
              },
              {
                q: 'Can WIKA TRANSLATE translate for embassies in Kigali?',
                a: 'Yes. WIKA TRANSLATE regularly provides certified translation services for visa applicants submitting documents to embassies in Kigali. We are experienced with the documentation requirements of European, North American, Middle Eastern, Asian, and African diplomatic missions in Kigali. We translate and certify birth certificates, marriage certificates, police clearances, academic transcripts, and other visa supporting documents. Contact us at info@wikatranslate.net — let us know which embassy you are submitting to and we will ensure the certification format meets their requirements.',
              },
              {
                q: 'Does WIKA TRANSLATE provide Arabic translation in Rwanda?',
                a: 'Yes. WIKA TRANSLATE provides professional Arabic translation and interpretation services in Rwanda. We translate between Arabic and English, French, Kinyarwanda, Swahili, and other languages for diplomatic, business, legal, and personal document purposes. Our Arabic capabilities are enhanced by our sister company, WIKA TRANSLATE SUDAN (Omdurman), which brings deep Arabic language expertise. Arabic interpretation is also available for conferences, meetings, and events in Kigali.',
              },
              {
                q: 'Can I get a translation quote without sharing my document?',
                a: 'Yes. You can request a rough estimate without sharing the full document by providing: the document type (e.g., birth certificate, contract, report), the language pair (e.g., French to English), the approximate length (number of pages or word count), and whether certification is required. However, for an accurate quote, it is best to share the actual document — you can email it to info@wikatranslate.net or send it via WhatsApp to +250 788 933 063. All documents are handled with strict confidentiality.',
              },
              {
                q: 'Does WIKA TRANSLATE provide interpretation for NGO field missions?',
                a: 'Yes. WIKA TRANSLATE regularly provides interpretation for NGO field activities in Rwanda — including community meetings, beneficiary consultations, focus groups, field assessments, key informant interviews, and training workshops. Our field interpreters work in Kinyarwanda, English, French, Kirundi, Swahili, and other languages. We also provide transcription of field interview recordings for qualitative research and evaluation purposes.',
              },
              {
                q: 'What is localization and does WIKA TRANSLATE provide it?',
                a: 'Localization is the process of adapting content — websites, apps, marketing materials, e-learning, or any other content — for a specific cultural market. It goes beyond translation to address cultural references, date and number formats, images, user interface conventions, and local regulatory requirements. WIKA TRANSLATE provides website localization, software and app localization, marketing localization, e-learning localization, multimedia localization (subtitling and voiceover), and legal compliance localization for the Rwandan and East African market. Contact us to discuss your localization project.',
              },
              {
                q: 'Does WIKA TRANSLATE provide transcription services in Rwanda?',
                a: 'Yes. WIKA TRANSLATE provides professional audio and video transcription services in Rwanda. We transcribe interviews, focus groups, court hearings, conferences, medical consultations, and any other audio or video content in English, French, Kinyarwanda, Arabic, Swahili, and other languages. We offer both verbatim and clean-read (intelligent verbatim) transcription. Files can be submitted in all common audio and video formats. Transcripts are delivered in Word, PDF, or other formats.',
              },
              {
                q: 'How does WIKA TRANSLATE ensure translation quality?',
                a: 'WIKA TRANSLATE applies a rigorous multi-step quality assurance process to every translation: (1) The document is assigned to a professional translator specialising in the relevant subject area and language pair; (2) The translator produces an accurate, culturally appropriate translation; (3) A second linguist reviews the translation for accuracy, completeness, and terminology consistency; (4) A final quality check is performed before delivery. For certified translations, the WIKA TRANSLATE certification statement is issued only after all quality reviews are complete.',
              },
              {
                q: 'Can WIKA TRANSLATE translate legal contracts in Rwanda?',
                a: 'Yes. Legal contract translation is one of WIKA TRANSLATE\'s specialisations. We translate commercial contracts, employment agreements, lease agreements, service contracts, joint venture agreements, licensing agreements, and all other contract types between English, French, Kinyarwanda, Arabic, and other languages. Our legal translators have expertise in Rwandan and international legal terminology and the ability to navigate the differences between civil law and common law legal systems represented in Rwanda.',
              },
            ].map(({ q, a }) => (
              <FAQItem key={q} question={q} answer={a} />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="sp-contact-block">
          <h2>Still have questions?</h2>
          <p>We&apos;re happy to help — free response within 10 minutes.</p>
          <div className="sp-contact-actions">
            <Link to="/contact" className="sp-cta-btn">
              Contact Us
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=250788933063&text=Hello%2C%20I%20have%20a%20question"
              className="sp-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <OurPartners />
        <SiteFooter />
      </section>
    </>
  );
}

export default FAQ;
