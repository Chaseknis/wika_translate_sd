/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

const INDUSTRIES = [
  {
    icon: '⚖️',
    title: 'Legal & Courts',
    desc: 'Legal translation demands absolute precision — a single mistranslated term can alter the meaning of a contract, court ruling, or sworn statement. WIKA TRANSLATE provides certified legal translation, court interpretation, and notarized document services for law firms, courts, arbitration panels, and international legal teams operating in Rwanda and East Africa. Our legal translators hold formal qualifications in law or legal translation and are experienced with Rwandan, civil-law, and common-law legal terminology.',
    services: 'Certified legal translation, court interpretation, contract translation, sworn statement translation, notarized translation, litigation document translation',
    langs: 'English, French, Kinyarwanda, Arabic, and other language pairs on request',
  },
  {
    icon: '🏛️',
    title: 'Government & Public Sector',
    desc: 'Rwanda\'s government operates across English, French, and Kinyarwanda. WIKA TRANSLATE provides translation and interpretation for government ministries, public institutions, parliament, the judiciary, local government, and regulatory bodies. We have translated policies, laws, regulations, official notices, government reports, public communications, and ministerial correspondence for clients including the Ministry of Foreign Affairs, Ministry of Finance, Rwanda Development Board (RDB), Rwanda Revenue Authority (RRA), and Rwanda Education Board.',
    services: 'Policy and legislation translation, government report translation, official notice translation, interpretation for government meetings, certified translation of public documents',
    langs: 'English, French, Kinyarwanda, Arabic, Swahili',
  },
  {
    icon: '🌐',
    title: 'United Nations & International Organizations',
    desc: 'WIKA TRANSLATE has extensive experience serving UN agencies and international organizations operating in Rwanda and East Africa, including UNDP, UNICEF, WFP, WHO, UNHCR, IOM, FAO, UN Women, and UNEP. We provide simultaneous interpretation for UN meetings and conferences, certified document translation, transcription of proceedings, and localization of UN communications materials — all in accordance with UN and international organization style guides and terminology standards.',
    services: 'Simultaneous interpretation, conference interpretation, certified document translation, transcription, localization of communications materials',
    langs: 'English, French, Arabic, Swahili, Kinyarwanda, and UN official languages',
  },
  {
    icon: '💚',
    title: 'NGOs & Humanitarian Organizations',
    desc: 'International NGOs and humanitarian organizations working in Rwanda and East Africa require language services for community engagement, beneficiary communication, project documentation, donor reporting, grant applications, and field research. WIKA TRANSLATE serves NGOs of all sizes — from global organizations to smaller specialist agencies — providing translation, interpretation, transcription, and localization tailored to the humanitarian sector and its beneficiary communities.',
    services: 'Community interpretation, beneficiary communication translation, donor report translation, field research transcription, localization of community materials',
    langs: 'Kinyarwanda, English, French, Kirundi, Swahili, Luganda, Somali, Arabic',
  },
  {
    icon: '🤝',
    title: 'Embassies & Diplomatic Missions',
    desc: 'Kigali hosts embassies from over 40 countries, each with visa sections that regularly require certified translations of applicant documents. WIKA TRANSLATE is experienced with the documentation requirements of major diplomatic missions in Kigali, including European, North American, Middle Eastern, Asian, and African embassies. We provide fast, reliable certified translation for visa, immigration, and diplomatic purposes — with the correct certification format for each specific embassy.',
    services: 'Certified translation for visa applications, diplomatic document translation, immigration document translation, official correspondence translation',
    langs: 'All major languages of embassy-originating countries',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Medical',
    desc: 'Healthcare translation requires absolute accuracy in medical terminology to protect patient safety and ensure regulatory compliance. WIKA TRANSLATE serves hospitals, clinics, medical research institutions, pharmaceutical companies, and public health organizations. We translate patient records, clinical trial documentation, informed consent forms, medical device instructions, pharmaceutical product documentation, clinical protocols, and public health campaigns.',
    services: 'Medical document translation, clinical trial translation, pharmaceutical translation, public health localization, medical interpretation, patient communication translation',
    langs: 'English, French, Kinyarwanda, Arabic, Swahili, and other target languages',
  },
  {
    icon: '🏦',
    title: 'Financial Services & Banking',
    desc: 'Rwanda\'s rapidly growing financial sector — including commercial banks, insurance companies, microfinance institutions, investment funds, development finance institutions, and FinTech companies — requires professional translation for financial statements, regulatory filings, investor communications, annual reports, loan documentation, and compliance materials. WIKA TRANSLATE has deep experience with financial and accounting terminology across all major languages.',
    services: 'Financial statement translation, regulatory document translation, banking documentation, investment document translation, insurance translation, compliance translation',
    langs: 'English, French, Arabic, Swahili, Kinyarwanda, Chinese, German',
  },
  {
    icon: '🎓',
    title: 'Academic & Research Institutions',
    desc: 'Universities, research institutions, think tanks, and academic organizations require translation for research publications, academic credentials, conference proceedings, grant applications, and qualitative research transcription. WIKA TRANSLATE works with the University of Rwanda, research institutes, and international academic bodies. We provide certified translation of academic credentials for international applications, research interview transcription, and translation of academic and scientific publications.',
    services: 'Academic credentials translation, research publication translation, qualitative research transcription, conference interpretation, grant application translation',
    langs: 'English, French, Kinyarwanda, Arabic, and the academic language of the specific field',
  },
  {
    icon: '📺',
    title: 'Media & Broadcasting',
    desc: 'Rwanda\'s media sector — including television broadcasters, radio stations, online media platforms, and film production companies — requires translation and localization of content for multilingual audiences. WIKA TRANSLATE provides subtitling, voiceover script preparation, news transcript translation, documentary localization, and multilingual media production support. We work with both national and international media organizations producing content for Rwandan and East African audiences.',
    services: 'Subtitling, voiceover script translation, news translation, documentary localization, media content translation, broadcast script translation',
    langs: 'Kinyarwanda, English, French, Swahili, Arabic, and other target languages',
  },
  {
    icon: '💻',
    title: 'Technology & Information Technology',
    desc: 'Rwanda\'s growing technology sector requires localization of software interfaces, websites, mobile applications, technical documentation, user manuals, API documentation, and IT security policies. WIKA TRANSLATE provides software localization, website localization, app localization, and technical documentation translation for technology companies, SaaS providers, and IT organizations operating in Rwanda and expanding into East African markets.',
    services: 'Software localization, website localization, app localization, technical documentation translation, IT policy translation, user manual translation',
    langs: 'English, French, Kinyarwanda, Swahili, Arabic, and other target markets',
  },
  {
    icon: '⚡',
    title: 'Energy & Natural Resources',
    desc: 'Rwanda\'s energy sector — including hydroelectric power, solar energy, mining, and natural resource management — requires specialized translation for technical reports, environmental impact assessments, regulatory submissions, engineering documentation, and stakeholder communications. WIKA TRANSLATE provides technical translation for energy companies, mining firms, environmental agencies, and development partners working in Rwanda\'s extractive and energy sectors.',
    services: 'Technical report translation, environmental impact assessment translation, regulatory document translation, engineering documentation translation, stakeholder communication translation',
    langs: 'English, French, Kinyarwanda, Arabic, Chinese, and other project languages',
  },
  {
    icon: '✈️',
    title: 'Tourism & Hospitality',
    desc: 'Rwanda\'s world-class tourism sector — centered on gorilla trekking, cultural tourism, and Kigali\'s conference industry — attracts visitors speaking dozens of languages. WIKA TRANSLATE provides tourism content localization, visitor guide translation, hotel and lodge material translation, tour interpretation, and multilingual conference support for Rwanda\'s leading tourism and hospitality operators, Rwanda Development Board (RDB), and Rwanda Convention Bureau.',
    services: 'Tourism content localization, visitor guide translation, hotel material translation, tour interpretation, conference multilingual support',
    langs: 'English, French, German, Spanish, Italian, Chinese, Portuguese, Dutch, Japanese, and others',
  },
  {
    icon: '🌾',
    title: 'Agriculture & Food Security',
    desc: 'Agriculture remains a cornerstone of Rwanda\'s economy and a focus of major international development programmes. WIKA TRANSLATE supports agricultural development organizations, research institutions, government extension services, and development partners with translation of agricultural reports, field extension materials, farmer training content, food security assessments, and rural development project documentation.',
    services: 'Agricultural report translation, field extension material translation, food security document translation, farmer training content localization, rural development documentation',
    langs: 'Kinyarwanda, English, French, Swahili, and other target languages',
  },
  {
    icon: '🏗️',
    title: 'Real Estate & Construction',
    desc: 'Rwanda\'s booming construction and real estate sector requires professional translation for construction contracts, architectural specifications, project management documentation, property purchase agreements, regulatory submissions, and investment prospectuses. WIKA TRANSLATE provides accurate translation for real estate developers, construction companies, architects, project managers, and international investors operating in Rwanda\'s rapidly developing property market.',
    services: 'Construction contract translation, architectural document translation, property agreement translation, investment prospectus translation, regulatory submission translation',
    langs: 'English, French, Kinyarwanda, Arabic, Chinese, and other investor languages',
  },
  {
    icon: '📡',
    title: 'Telecommunications',
    desc: 'Rwanda\'s telecommunications sector — led by MTN Rwanda, Airtel Rwanda, and the Rwanda Utilities Regulatory Authority (RURA) — requires translation of regulatory filings, licensing documentation, consumer communications, technical specifications, and corporate documentation. WIKA TRANSLATE provides technical and regulatory translation for telecom operators, internet service providers, and the regulatory bodies that govern Rwanda\'s communications infrastructure.',
    services: 'Regulatory document translation, licensing documentation translation, consumer communication translation, technical specification translation, corporate communication translation',
    langs: 'English, French, Kinyarwanda, and other regional languages',
  },
  {
    icon: '📚',
    title: 'Education & Training',
    desc: 'Rwanda\'s education sector — spanning primary, secondary, higher education, and vocational training — requires translation of curricula, learning materials, training manuals, examination papers, accreditation documents, and e-learning content. WIKA TRANSLATE works with the Rwanda Education Board (REB), universities, international schools, and training organizations to provide accurate, accessible translation and localization of educational content for multilingual learners.',
    services: 'Curriculum translation, learning material translation, e-learning localization, training manual translation, examination translation, accreditation document translation',
    langs: 'Kinyarwanda, English, French, and other target languages',
  },
];

function Industries() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industries We Serve | WIKA TRANSLATE Rwanda',
    url: 'https://www.wikatranslate.net/industries',
    description: 'WIKA TRANSLATE Ltd. provides professional translation and interpretation services across all major industries in Rwanda and East Africa — legal, government, healthcare, finance, NGOs, media, technology, and more.',
    publisher: { '@type': 'LocalBusiness', name: 'WIKA TRANSLATE Ltd.', url: 'https://www.wikatranslate.net', telephone: '+250788933063', email: 'info@wikatranslate.net', address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' } },
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Industries We Serve | WIKA TRANSLATE Rwanda — Legal, Medical, UN, NGO &amp; More</title>
        <meta name="description" content="WIKA TRANSLATE Ltd. provides expert translation &amp; interpretation across 16 industries in Rwanda — legal, government, UN agencies, NGOs, embassies, healthcare, finance, media, technology &amp; more." />
        <meta name="keywords" content="translation industries Rwanda, legal translation Rwanda, court translation Rwanda, government translation Rwanda, UN agencies translation Rwanda, UNDP translation Rwanda, UNICEF translation Rwanda, NGO translation Rwanda, humanitarian translation Rwanda, embassy translation Rwanda, healthcare translation Rwanda, medical translation Kigali, financial translation Rwanda, academic translation Rwanda, media translation Rwanda, technology translation Rwanda, education translation Rwanda, energy translation Rwanda, tourism translation Rwanda, agriculture translation Rwanda, industry-specific translation Rwanda" />
        <link rel="canonical" href="https://www.wikatranslate.net/industries" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Industries We Serve | WIKA TRANSLATE Rwanda" />
        <meta property="og:description" content="WIKA TRANSLATE Ltd. delivers professional translation and interpretation services to clients across all major industries in Rwanda and East Africa." />
        <meta property="og:url" content="https://www.wikatranslate.net/industries" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | WIKA TRANSLATE Rwanda" />
        <meta name="twitter:description" content="WIKA TRANSLATE serves legal, government, healthcare, UN, NGOs, finance, media, and technology clients across Rwanda and East Africa." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="about_title_main_container">
        <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad"><h2>Industries<hr /></h2></div>
          <div className="about_main_title">
            <h1 className="title">Industries We Serve Across Rwanda &amp; East Africa</h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              WIKA TRANSLATE Ltd. delivers accurate, professional translation and interpretation services to clients across all major industries — from legal and government to healthcare, finance, technology, and beyond.
            </p>
          </div>
          <Link to="/quote" className="sp-hero-cta">Get a Free Quote →</Link>
        </div>
        <div className="overlay" />
      </div>

      <main className="sp-main">
        <div style={{ padding: '3rem 5%' }}>
          <p className="sp-lead">
            WIKA TRANSLATE Ltd., headquartered at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda, serves clients across every major industry in Rwanda\'s economy and civil society. Our network of 800+ professional linguists brings deep sector-specific terminology expertise — ensuring every translation is not only linguistically accurate but contextually precise for your field. Below is a comprehensive overview of the industries we serve.
          </p>

          <div className="sp-sectors-grid">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="sp-sector-card">
                <h3>
                  {industry.icon}
                  {' '}
                  {industry.title}
                </h3>
                <p>{industry.desc}</p>
                <p className="sp-sector-langs">
                  <strong>Services:</strong>
                  {' '}
                  {industry.services}
                </p>
                <p className="sp-sector-langs">
                  <strong>Key languages:</strong>
                  {' '}
                  {industry.langs}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 className="sp-section-title" style={{ color: '#1a3c34', fontSize: '1.1rem', fontWeight: '700' }}>
              Don\'t See Your Industry?
              <hr style={{ width: '50px', height: '3px', background: '#b7312a', border: 'none', marginTop: '6px' }} />
            </h2>
            <p style={{ color: '#3d3d3d', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              WIKA TRANSLATE works across all sectors. Whatever your industry or language combination, contact us to discuss your specific requirements — we provide free quotes within 10 minutes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/quote" className="sp-cta-btn" style={{ background: '#b7312a', color: '#fff', padding: '12px 24px', textDecoration: 'none', borderRadius: '3px', fontSize: '0.82rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', minHeight: '48px', textTransform: 'uppercase' }}>Get a Free Quote</Link>
              <Link to="/sectors" style={{ color: '#b7312a', fontSize: '0.88rem', display: 'flex', alignItems: 'center', textDecoration: 'underline' }}>View Sectors We Serve</Link>
            </div>
          </div>
        </div>

        <section className="sp-contact-block">
          <h2>Contact WIKA TRANSLATE Ltd.</h2>
          <p>Serving all industries across Rwanda and East Africa. Free quote in 10 minutes.</p>
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

export default Industries;
