/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

const REASONS = [
  { icon: '📍', title: 'Physical Office in Kigali', desc: 'WIKA TRANSLATE is physically present at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda. You can visit our office to discuss your project, drop off documents, or collect certified translations in person. A local presence means accountability, trust, and direct communication.' },
  { icon: '🎓', title: 'Native-Speaking Certified Translators', desc: 'Every translation at WIKA TRANSLATE is performed by a native-speaking professional translator with formal qualifications in translation, linguistics, or their subject-matter domain. We do not use non-native translators for certified work. Our 800+ translator network covers 150+ language pairs.' },
  { icon: '🎙️', title: 'ISO-Compliant Interpretation Equipment', desc: 'Our simultaneous interpretation equipment meets ISO 4043 and ISO 2603 international standards. We provide interpretation booths, wireless delegate receivers, transmitter systems, microphones, and headsets for events of any size — from 20 to 2,000+ participants.' },
  { icon: '🌍', title: 'International Standards — UN & EU Experience', desc: 'WIKA TRANSLATE has extensive experience working with United Nations agencies, the African Union, European Union, and other international organizations operating in Rwanda. We are familiar with UN and EU style guides, terminology databases, and documentation requirements.' },
  { icon: '🤝', title: 'Trusted by International Organizations', desc: 'We serve UN agencies (UNDP, UNICEF, WFP, WHO, UNHCR, IOM, FAO), international NGOs, embassies, and government bodies. Our client portfolio demonstrates a consistent record of reliable, accurate, and professional service delivery at the highest level.' },
  { icon: '⚡', title: 'Fast Turnaround Times', desc: 'WIKA TRANSLATE provides free quotes within 10 minutes of receiving your document. Standard translations are completed in 24–48 hours. Urgent translations can be delivered same-day. We understand that deadlines are critical and we consistently deliver on time.' },
  { icon: '🔒', title: 'Strict Confidentiality Policy', desc: 'All client documents, audio files, and project information are handled with strict professional confidentiality. Our translators and interpreters sign confidentiality agreements on every project. We never share, copy, or retain client materials beyond the project scope.' },
  { icon: '🗺️', title: 'Full Rwanda Coverage + East Africa Reach', desc: 'From our base in Kigali, WIKA TRANSLATE serves clients across all of Rwanda\'s provinces and districts. We also serve clients throughout East Africa — Uganda, Kenya, Tanzania, Burundi, DRC, and beyond. Remote digital services mean we can serve any location.' },
  { icon: '🌐', title: 'Sister Company in Sudan', desc: 'WIKA TRANSLATE has a sister company, WIKA TRANSLATE SUDAN, based in Omdurman, Sudan — serving clients across North Africa and the Arab world. This cross-regional presence gives us additional Arabic language capacity and regional coverage that few translation companies in East Africa can match.' },
  { icon: '💻', title: 'Technology-Enhanced Workflow', desc: 'WIKA TRANSLATE uses professional translation management systems, terminology databases, and quality assurance tools to ensure consistency, speed, and accuracy. For localization projects, we integrate with standard developer workflows and file formats.' },
  { icon: '✅', title: 'Client Satisfaction Guarantee', desc: 'We stand behind the quality of every translation and interpretation service. If you are not satisfied with the accuracy or quality of our work, we will revise it at no additional cost. Our commitment to client satisfaction is the foundation of our reputation in Rwanda.' },
];

function WhyWikaTranslate() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Why Choose WIKA TRANSLATE — Rwanda\'s #1 Translation Company',
    url: 'https://www.wikatranslate.net/why-wika-translate',
    description: 'Reasons to choose WIKA TRANSLATE Ltd. for professional translation and interpretation services in Rwanda and East Africa.',
    publisher: { '@type': 'LocalBusiness', name: 'WIKA TRANSLATE Ltd.', url: 'https://www.wikatranslate.net', telephone: '+250788933063', email: 'info@wikatranslate.net' },
  };

  return (
    <>
      <Helmet defer={false}>
        <title>Why Choose WIKA TRANSLATE | Rwanda's #1 Translation &amp; Interpretation Company</title>
        <meta name="description" content="Why WIKA TRANSLATE Ltd. is Rwanda's #1 translation company — physical office in Kigali, 800+ certified translators, ISO interpretation equipment, UN agency experience, 10-min quotes." />
        <meta name="keywords" content="why choose WIKA TRANSLATE, best translation company Rwanda, top translation company Rwanda, number one translation company Rwanda, professional translation Kigali, certified translators Rwanda, reliable translation company Rwanda, translation company with office Kigali, ISO interpretation company Rwanda, UN translation company Rwanda, experienced translation agency Rwanda, translation company East Africa" />
        <link rel="canonical" href="https://www.wikatranslate.net/why-wika-translate" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Why Choose WIKA TRANSLATE | Rwanda's #1 Translation Company" />
        <meta property="og:description" content="Why WIKA TRANSLATE Ltd. is Rwanda's leading translation company — physical office in Kigali, 800+ certified translators, UN experience, ISO equipment, and quality guarantee." />
        <meta property="og:url" content="https://www.wikatranslate.net/why-wika-translate" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Choose WIKA TRANSLATE | Rwanda's #1 Translation Company" />
        <meta name="twitter:description" content="Physical office in Kigali, 800+ certified translators, ISO equipment, UN experience, fast turnaround." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="about_title_main_container">
        <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad"><h2>Why Choose Us<hr /></h2></div>
          <div className="about_main_title">
            <h1 className="title">Why WIKA TRANSLATE Ltd. is Rwanda's Leading Translation Company</h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              11 reasons why UN agencies, NGOs, embassies, law firms, and businesses across Rwanda and East Africa choose WIKA TRANSLATE Ltd. for their professional translation and interpretation needs.
            </p>
          </div>
          <Link to="/quote" className="sp-hero-cta">Get a Free Quote →</Link>
        </div>
        <div className="overlay" />
      </div>

      <main className="sp-main">
        <div style={{ padding: '3rem 5%' }}>
          <p className="sp-lead">
            Choosing a translation company in Rwanda is a decision that directly affects the accuracy of your legal documents, the credibility of your certified translations, and the success of your multilingual events. WIKA TRANSLATE Ltd., headquartered at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda, has built its reputation on consistently delivering the highest quality language services across Rwanda and East Africa. Here is why.
          </p>

          <div className="sp-why-grid">
            {REASONS.map((reason) => (
              <div key={reason.title} className="sp-why-item">
                <div className="sp-why-icon">{reason.icon}</div>
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(53, 44, 20, 0.12)', borderRadius: '4px', borderLeft: '4px solid #1a3c34' }}>
            <h2 style={{ color: '#1a3c34', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem' }}>Our Sister Company — WIKA TRANSLATE SUDAN</h2>
            <p style={{ color: '#3d3d3d', fontSize: '0.88rem', lineHeight: '1.8' }}>
              WIKA TRANSLATE Ltd. is the parent company of WIKA TRANSLATE SUDAN, based at Al Emtidad Street, Omdurman, Sudan. Our sister company serves North Africa and the Arab world, providing translation, interpretation, and language services with the same standards of quality and professionalism. This regional presence gives us additional Arabic language capacity and cross-regional coverage across Africa.
            </p>
            <a href="https://www.wikatranslate.us" target="_blank" rel="noopener noreferrer" style={{ color: '#b7312a', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'underline', display: 'inline-block', marginTop: '0.5rem' }}>
              Visit WIKA TRANSLATE SUDAN →
            </a>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/quote" className="sp-cta-btn" style={{ background: '#b7312a', color: '#fff', padding: '12px 24px', textDecoration: 'none', borderRadius: '3px', fontSize: '0.82rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', minHeight: '48px', textTransform: 'uppercase' }}>Get a Free Quote</Link>
            <Link to="/sectors" style={{ color: '#b7312a', fontSize: '0.88rem', display: 'flex', alignItems: 'center', textDecoration: 'underline' }}>View Industries We Serve</Link>
            <Link to="/languages" style={{ color: '#b7312a', fontSize: '0.88rem', display: 'flex', alignItems: 'center', textDecoration: 'underline' }}>View Language Pairs</Link>
          </div>
        </div>

        <section className="sp-contact-block">
          <h2>Contact WIKA TRANSLATE Ltd.</h2>
          <p>Ready to experience Rwanda's best translation services? Free quote in 10 minutes.</p>
          <address className="sp-nap">
            <strong>WIKA TRANSLATE Ltd.</strong>
            Makuza Peace Plaza, KN 84 St, Kigali, Rwanda
            <a href="tel:+250788933063">📞 +250 788 933 063</a>
            <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a>
            <a href="https://www.wikatranslate.net">🌐 www.wikatranslate.net</a>
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

export default WhyWikaTranslate;
