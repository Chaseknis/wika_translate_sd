/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

const SECTORS = [
  {
    icon: '🌐',
    title: 'United Nations & International Organizations',
    desc: 'WIKA TRANSLATE has extensive experience serving UN agencies operating in Rwanda and East Africa, including UNDP, UNICEF, WFP, WHO, UNHCR, IOM, FAO, UN Women, and UNEP. We provide certified document translation, simultaneous interpretation for UN meetings and conferences, transcription of proceedings, and localization of UN communications materials.',
    langs: 'English, French, Arabic, Swahili, Kinyarwanda',
    services: 'Conference interpretation, document translation, certified translation, transcription',
  },
  {
    icon: '💚',
    title: 'International NGOs & Humanitarian Organizations',
    desc: 'International NGOs and humanitarian organizations working in Rwanda and East Africa require language services for community engagement, beneficiary communication, project documentation, donor reporting, and field research. WIKA TRANSLATE serves NGOs of all sizes — from global organizations to smaller specialist agencies — with translation, interpretation, and transcription tailored to the humanitarian sector.',
    langs: 'Kinyarwanda, English, French, Kirundi, Swahili, Luganda, Somali, Arabic',
    services: 'Community interpretation, document translation, research transcription, localization of beneficiary materials',
  },
  {
    icon: '🏛️',
    title: 'Embassies & Diplomatic Missions in Kigali',
    desc: 'Kigali hosts embassies from over 40 countries. Embassy visa sections regularly require certified translations of applicants\' supporting documents. WIKA TRANSLATE is experienced with the documentation requirements of major diplomatic missions in Kigali, including European, North American, Middle Eastern, Asian, and African embassies. We provide fast, reliable certified translation for visa, immigration, and diplomatic purposes.',
    langs: 'All major languages of embassy-originating countries',
    services: 'Certified translation, legal translation, diplomatic document translation',
  },
  {
    icon: '🇷🇼',
    title: 'Government of Rwanda & Public Institutions',
    desc: 'Rwanda\'s government operates in English, French, and Kinyarwanda. WIKA TRANSLATE provides translation services for government ministries, public institutions, parliament, the judiciary, and local government — translating policies, laws, regulations, official notices, reports, and correspondence. We work with clients including the Ministry of Foreign Affairs, Ministry of Finance, Rwanda Development Board (RDB), Rwanda Revenue Authority (RRA), and Rwanda Education Board.',
    langs: 'English, French, Kinyarwanda',
    services: 'Legal and policy translation, certified translation, interpretation for government meetings',
  },
  {
    icon: '⚖️',
    title: 'Legal Firms & Courts',
    desc: 'Rwanda\'s legal sector requires precise translation of contracts, court documents, legal briefs, evidence, and witness statements. WIKA TRANSLATE\'s legal translators are experienced with Rwandan and international legal terminology. We provide certified translation for court submissions, legal interpretation, and translation of all legal documentation. Our services are used by law firms, Rwandan courts, arbitration panels, and international legal teams operating in Rwanda.',
    langs: 'English, French, Kinyarwanda, Arabic, and other language pairs as needed',
    services: 'Certified legal translation, court interpretation, contract translation, litigation document translation',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Medical Organizations',
    desc: 'Healthcare translation requires absolute accuracy in medical terminology to ensure patient safety and regulatory compliance. WIKA TRANSLATE serves hospitals, clinics, medical research institutions, pharmaceutical companies, and public health organizations. We translate patient records, clinical trial documentation, informed consent forms, medical device instructions, pharmaceutical documentation, and public health materials.',
    langs: 'English, French, Kinyarwanda, Arabic, Swahili',
    services: 'Medical document translation, clinical translation, public health localization, medical interpretation',
  },
  {
    icon: '🏦',
    title: 'Financial Institutions & Banks',
    desc: 'Rwanda\'s rapidly growing financial sector — including commercial banks, insurance companies, microfinance institutions, investment funds, and FinTech companies — requires professional translation for financial statements, regulatory filings, investor communications, loan documentation, and compliance materials. WIKA TRANSLATE has experience with financial terminology across all major languages.',
    langs: 'English, French, Arabic, Swahili, Kinyarwanda',
    services: 'Financial document translation, regulatory translation, banking documentation',
  },
  {
    icon: '🎓',
    title: 'Academic & Research Institutions',
    desc: 'Universities, research institutions, and academic organizations in Rwanda require translation for research publications, academic records, conference proceedings, grant applications, and research interview transcription. WIKA TRANSLATE works with the University of Rwanda, research institutes, and international academic bodies operating in the country. We provide certified translation of academic credentials for international applications.',
    langs: 'English, French, Kinyarwanda, and academic language of the specific field',
    services: 'Academic translation, research transcription, certified academic credentials, conference interpretation',
  },
  {
    icon: '📺',
    title: 'Media & Broadcasting',
    desc: 'Rwanda\'s media sector — including television broadcasters, radio stations, online media, and film production companies — requires translation and localization of content for multilingual audiences. WIKA TRANSLATE provides subtitling, voiceover preparation, script translation, news transcript translation, documentary localization, and multilingual media production support.',
    langs: 'Kinyarwanda, English, French, Swahili, and other target languages',
    services: 'Subtitling, script translation, voiceover preparation, media localization',
  },
  {
    icon: '🏢',
    title: 'Private Sector & Corporations',
    desc: 'Rwanda\'s growing private sector — spanning technology, real estate, manufacturing, retail, and professional services — requires professional translation for business development, international partnerships, regulatory compliance, and customer communication. WIKA TRANSLATE serves local and multinational companies operating in Rwanda, providing translation, interpretation, and localization services that support business growth and international expansion.',
    langs: 'English, French, Kinyarwanda, Arabic, Swahili, Chinese, German, Portuguese, and others',
    services: 'Business document translation, interpretation for meetings, marketing localization, contract translation',
  },
  {
    icon: '✈️',
    title: 'Tourism & Hospitality',
    desc: 'Rwanda\'s world-class tourism sector — centered on gorilla trekking, cultural tourism, and Kigali\'s conference industry — attracts visitors speaking dozens of languages. WIKA TRANSLATE provides tourism content localization, visitor guide translation, hotel and lodge material translation, and on-site tour interpretation for Rwanda\'s leading tourism and hospitality operators.',
    langs: 'English, French, German, Spanish, Italian, Chinese, Portuguese, Dutch, and others',
    services: 'Tourism content localization, visitor material translation, tour interpretation, hospitality website localization',
  },
];

function Sectors() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>Sectors We Serve | WIKA TRANSLATE — UN, NGO, Embassy, Legal &amp; Healthcare Rwanda</title>
        <meta name="description" content="WIKA TRANSLATE Ltd. serves UN agencies (UNDP, UNICEF, WHO), NGOs, embassies, government, legal firms, healthcare, finance, media &amp; private sector across Rwanda. Expert translation for every sector." />
        <meta name="keywords" content="translation sectors Rwanda, UN translation Rwanda, UNDP translation Rwanda, UNICEF translation Rwanda, WHO translation Rwanda, NGO translation Kigali, humanitarian translation Rwanda, embassy translation Rwanda, government translation Rwanda, legal translation Rwanda, medical translation Rwanda, healthcare translation Rwanda, financial translation Rwanda, media translation Rwanda, business translation Rwanda, conference translation Rwanda, private sector translation Rwanda" />
        <link rel="canonical" href="https://www.wikatranslate.net/sectors" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Sectors We Serve | WIKA TRANSLATE Rwanda" />
        <meta property="og:description" content="WIKA TRANSLATE Ltd. serves UN agencies, NGOs, embassies, government, legal, healthcare, finance, media, and private sector clients across Rwanda and East Africa." />
        <meta property="og:url" content="https://www.wikatranslate.net/sectors" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sectors We Serve | WIKA TRANSLATE Rwanda" />
        <meta name="twitter:description" content="WIKA TRANSLATE serves UN agencies, NGOs, embassies, government, legal, healthcare, media, finance, and corporations in Rwanda." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
      </Helmet>

      <div className="about_title_main_container">
        <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad"><h2>Industries<hr /></h2></div>
          <div className="about_main_title">
            <h1 className="title">Industries & Sectors Served by WIKA TRANSLATE Ltd.</h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              WIKA TRANSLATE Ltd. provides professional translation and interpretation services to clients across all major industries in Rwanda and East Africa — from UN agencies and embassies to law firms, hospitals, universities, and the private sector.
            </p>
          </div>
          <Link to="/quote" className="sp-hero-cta">Get a Free Quote →</Link>
        </div>
        <div className="overlay" />
      </div>

      <main className="sp-main">
        <div style={{ padding: '3rem 5%' }}>
          <p className="sp-lead">
            WIKA TRANSLATE Ltd., headquartered at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda, serves clients across every major sector of Rwanda's economy and civil society. Our 800+ professional linguists bring sector-specific terminology expertise across legal, medical, technical, financial, humanitarian, and diplomatic domains. Below is a comprehensive overview of the sectors we serve.
          </p>

          <div className="sp-sectors-grid">
            {SECTORS.map((sector) => (
              <div key={sector.title} className="sp-sector-card">
                <h3>
                  {sector.icon}
                  {' '}
                  {sector.title}
                </h3>
                <p>{sector.desc}</p>
                <p className="sp-sector-langs">
                  <strong>Key languages:</strong>
                  {' '}
                  {sector.langs}
                </p>
                <p className="sp-sector-langs">
                  <strong>Services:</strong>
                  {' '}
                  {sector.services}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 className="sp-section-title" style={{ color: '#1a3c34', fontSize: '1.1rem', fontWeight: '700' }}>
              Ready to Work Together?
              <hr style={{ width: '50px', height: '3px', background: '#b7312a', border: 'none', marginTop: '6px' }} />
            </h2>
            <p style={{ color: '#3d3d3d', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Whatever your sector or language combination, WIKA TRANSLATE delivers accurate, professional, and confidential language services. Contact us to discuss your project requirements.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/quote" className="sp-cta-btn" style={{ background: '#b7312a', color: '#fff', padding: '12px 24px', textDecoration: 'none', borderRadius: '3px', fontSize: '0.82rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', minHeight: '48px', textTransform: 'uppercase' }}>Get a Free Quote</Link>
              <Link to="/services/document-translation-rwanda" style={{ color: '#b7312a', fontSize: '0.88rem', display: 'flex', alignItems: 'center', textDecoration: 'underline' }}>View Our Services</Link>
            </div>
          </div>
        </div>

        <section className="sp-contact-block">
          <h2>Contact WIKA TRANSLATE Ltd.</h2>
          <p>Serving all sectors across Rwanda and East Africa. Free quote in 10 minutes.</p>
          <address className="sp-nap">
            <strong>WIKA TRANSLATE Ltd.</strong>
            Makuza Peace Plaza, KN 84 St, Kigali, Rwanda
            <a href="tel:+250788933063">📞 +250 788 933 063</a>
            <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
            <a href="https://maps.app.goo.gl/dqJncgiqEbH4gr8H9" target="_blank" rel="noopener noreferrer">🗺️ Google Maps</a>
          </address>
          <div className="sp-contact-actions">
            <Link to="/quote" className="sp-cta-btn">Get a Free Quote</Link>
            <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello%2C%20I%20need%20translation%20services" className="sp-whatsapp-btn" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default Sectors;
