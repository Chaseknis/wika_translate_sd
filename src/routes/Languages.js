/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';

const LANGUAGE_PAIRS = [
  { pair: 'English ↔ French', flag: '🇷🇼🇫🇷', desc: 'The primary language pair in Rwanda. English and French are both official languages, required for all government, legal, and business communication. Essential for visa applications, court submissions, and international business.', docs: 'Government documents, legal contracts, academic transcripts, business reports, UN reports.', industries: 'Government, legal, NGO, education, finance, UN agencies.' },
  { pair: 'English ↔ Kinyarwanda', flag: '🇷🇼', desc: 'Critical for reaching Rwandan communities in their primary language. Most community-level communication, local government interaction, and public health messaging requires Kinyarwanda.', docs: 'Community surveys, health materials, local government documents, radio scripts, community development reports.', industries: 'NGO, healthcare, government, agriculture, media.' },
  { pair: 'French ↔ Kinyarwanda', flag: '🇫🇷🇷🇼', desc: 'Required for communicating with Kinyarwanda-speaking communities in French-language administrative contexts, and for translating legacy French government documents into the community language.', docs: 'Government policies, court documents, NGO materials, community communication.', industries: 'Government, legal, NGO, healthcare.' },
  { pair: 'English ↔ Arabic', flag: '🇺🇸🇸🇦', desc: 'Essential for communication with Arabic-speaking diplomatic missions, Middle Eastern investors, and Arab-origin communities in Rwanda. Also critical for international Islamic finance and trade.', docs: 'Diplomatic correspondence, trade contracts, visa documents, academic records, business agreements.', industries: 'Diplomacy, finance, trade, legal, education.' },
  { pair: 'French ↔ Arabic', flag: '🇫🇷🇸🇦', desc: 'Key for communication with Francophone North Africa and the Arab diplomatic community in Rwanda. France and Arabic-speaking countries have active diplomatic and trade relationships.', docs: 'Diplomatic documents, trade agreements, immigration documents, business correspondence.', industries: 'Diplomacy, trade, legal, finance.' },
  { pair: 'English ↔ Swahili', flag: '🌍', desc: 'Swahili is the dominant trade and communication language across East Africa — Tanzania, Kenya, Uganda, and DRC. Essential for East African regional business, NGO work, and cross-border trade.', docs: 'Trade documents, NGO reports, business correspondence, community materials.', industries: 'Trade, NGO, finance, government, media.' },
  { pair: 'French ↔ Swahili', flag: '🇫🇷🌍', desc: 'Required for French-speaking organizations working with Swahili-speaking communities in DRC, Tanzania, and other Francophone East African contexts.', docs: 'DRC business documents, NGO field reports, community communication, development reports.', industries: 'NGO, DRC business, trade, humanitarian.' },
  { pair: 'English ↔ Kirundi', flag: '🇧🇮', desc: 'Kirundi is the national language of Burundi, spoken by Burundian refugees and communities in Rwanda. Essential for organizations working with Burundian populations.', docs: 'Refugee documentation, NGO community materials, legal documents, health information.', industries: 'Humanitarian, NGO, healthcare, legal.' },
  { pair: 'English ↔ Luganda', flag: '🇺🇬', desc: 'Luganda is the most widely spoken language in Uganda, used in business and community communication. Important for Rwanda–Uganda cross-border trade and regional development programs.', docs: 'Business documents, community materials, NGO reports, educational content.', industries: 'NGO, trade, education, media.' },
  { pair: 'English ↔ Somali', flag: '🇸🇴', desc: 'Somali is spoken by Somali refugee and diaspora communities in Rwanda and East Africa. Required for humanitarian organizations working with Somali communities.', docs: 'Refugee documentation, humanitarian materials, community health information, legal documents.', industries: 'Humanitarian, NGO, healthcare, legal.' },
  { pair: 'English ↔ Amharic', flag: '🇪🇹', desc: 'Amharic is the official language of Ethiopia, East Africa\'s most populous country. Required for Ethiopia-Rwanda business, diplomatic communication, and regional development programs.', docs: 'Business agreements, diplomatic correspondence, development reports, academic documents.', industries: 'Diplomacy, trade, NGO, education.' },
  { pair: 'English ↔ Spanish', flag: '🇪🇸', desc: 'Spanish is an international language of diplomacy, development, and global business. Required for communication with Spanish-speaking international organizations and investors.', docs: 'Business contracts, NGO reports, academic documents, legal correspondence.', industries: 'NGO, legal, finance, education, international organizations.' },
  { pair: 'English ↔ German', flag: '🇩🇪', desc: 'German is required for communication with German development organizations (GIZ, KfW), German diplomatic missions, and German-language academic institutions.', docs: 'Development project reports, diplomatic documents, academic papers, technical manuals.', industries: 'Development, diplomacy, education, technology.' },
  { pair: 'English ↔ Chinese (Mandarin)', flag: '🇨🇳', desc: 'China is Rwanda\'s largest infrastructure investor. Mandarin translation is increasingly essential for Chinese construction companies, investors, and diplomatic communication in Rwanda.', docs: 'Business contracts, infrastructure project documents, trade agreements, technical documentation.', industries: 'Construction, trade, diplomacy, finance.' },
  { pair: 'English ↔ Portuguese', flag: '🇵🇹', desc: 'Portuguese is required for communication with Portuguese-speaking PALOP countries (Angola, Mozambique), Brazilian organizations, and Portuguese diplomatic missions.', docs: 'Business documents, diplomatic correspondence, legal documents, academic records.', industries: 'Diplomacy, trade, legal, NGO.' },
  { pair: 'English ↔ Italian', flag: '🇮🇹', desc: 'Italian is required for communication with Italian diplomatic missions, development organizations, and Italian-language academic and cultural institutions.', docs: 'Diplomatic documents, academic papers, legal correspondence, business contracts.', industries: 'Diplomacy, NGO, education, legal.' },
  { pair: 'English ↔ Dutch', flag: '🇳🇱', desc: 'Dutch is required for communication with the Netherlands Embassy in Kigali, Dutch development organizations (SNV, Hivos), and Dutch-language academic institutions.', docs: 'Development project reports, academic documents, business contracts, NGO reports.', industries: 'Development, NGO, diplomacy, education.' },
  { pair: 'Arabic ↔ Swahili', flag: '🇸🇦🌍', desc: 'Required for East African communities with both Arabic and Swahili needs — including coastal East Africa, Tanzania, and Muslim communities across the region.', docs: 'Religious texts, community materials, trade documents, NGO materials.', industries: 'Religious organizations, NGO, trade, humanitarian.' },
];

function Languages() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>Languages We Translate | 150+ Language Pairs — WIKA TRANSLATE Rwanda</title>
        <meta name="description" content="WIKA TRANSLATE Ltd. covers 150+ language pairs: English, French, Kinyarwanda, Arabic, Swahili, Kirundi, Luganda, Somali, German, Chinese &amp; more. Rwanda's leading translation agency." />
        <meta name="keywords" content="languages translation Rwanda, language pairs Rwanda, English French translation Rwanda, Kinyarwanda translation Rwanda, English Kinyarwanda translation, French Kinyarwanda translation, Arabic English translation Rwanda, Swahili English translation Rwanda, Kirundi translation Rwanda, Luganda translation Rwanda, Somali translation Rwanda, Amharic translation Rwanda, Chinese translation Rwanda, German translation Rwanda, Portuguese translation Rwanda, Spanish translation Rwanda, Dutch translation Rwanda, Italian translation Rwanda, 150 languages Rwanda, translation languages Kigali" />
        <link rel="canonical" href="https://www.wikatranslate.net/languages" />
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Languages We Translate | 150+ Language Pairs — WIKA TRANSLATE Rwanda" />
        <meta property="og:description" content="WIKA TRANSLATE covers 150+ language pairs: English, French, Kinyarwanda, Arabic, Swahili, Kirundi, Luganda, Somali, German, Chinese &amp; more. Rwanda's leading translation agency." />
        <meta property="og:url" content="https://www.wikatranslate.net/languages" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Languages We Translate | WIKA TRANSLATE Rwanda" />
        <meta name="twitter:description" content="150+ language pairs including English, French, Kinyarwanda, Arabic, Swahili, Kirundi and more. WIKA TRANSLATE Ltd., Kigali, Rwanda." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
      </Helmet>

      <div className="about_title_main_container">
        <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad"><h2>Languages<hr /></h2></div>
          <div className="about_main_title">
            <h1 className="title">Translation Language Pairs — WIKA TRANSLATE Ltd.</h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              WIKA TRANSLATE Ltd. translates between 150+ language pairs, with deep expertise in the languages of Rwanda, East Africa, and the international community. Our professional linguists are native speakers and subject-matter experts in their language combinations.
            </p>
          </div>
          <Link to="/quote" className="sp-hero-cta">Request a Translation Quote →</Link>
        </div>
        <div className="overlay" />
      </div>

      <main className="sp-main">
        <div style={{ padding: '3rem 5%' }}>
          <p className="sp-lead">
            WIKA TRANSLATE Ltd., headquartered at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda, provides professional translation in all major language pairs relevant to Rwanda and East Africa. Below is a comprehensive overview of the language pairs we specialize in. For language combinations not listed, contact us — we work with translators covering virtually every language in the world.
          </p>

          <h2 className="sp-section-title" style={{ color: '#1a3c34', fontSize: '1.2rem', fontWeight: '700', marginBottom: '2rem' }}>
            Our Language Pairs
            <hr style={{ width: '60px', height: '3px', background: '#b7312a', border: 'none', marginTop: '8px' }} />
          </h2>

          <div className="sp-lang-pairs">
            {LANGUAGE_PAIRS.map((lp) => (
              <div key={lp.pair} className="sp-lang-card">
                <h3>
                  {lp.flag}
                  {' '}
                  {lp.pair}
                </h3>
                <p>{lp.desc}</p>
                <p className="sp-lang-uses">
                  <strong>Common documents:</strong>
                  {' '}
                  {lp.docs}
                </p>
                <p className="sp-lang-uses">
                  <strong>Industries:</strong>
                  {' '}
                  {lp.industries}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 className="sp-section-title" style={{ color: '#1a3c34', fontSize: '1.1rem', fontWeight: '700' }}>
              Don&apos;t See Your Language Pair?
              <hr style={{ width: '50px', height: '3px', background: '#b7312a', border: 'none', marginTop: '6px' }} />
            </h2>
            <p style={{ color: '#3d3d3d', fontSize: '0.9rem', lineHeight: '1.8' }}>
              WIKA TRANSLATE works with linguists covering virtually every language combination. Contact us for any language pair not listed above — including regional languages, minority languages, and rare combinations. Our network of 800+ translators and interpreters gives us coverage across the full spectrum of world languages.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/quote" className="sp-cta-btn" style={{ background: '#b7312a', color: '#fff', padding: '12px 24px', textDecoration: 'none', borderRadius: '3px', fontSize: '0.82rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', minHeight: '48px', textTransform: 'uppercase' }}>Get a Free Quote</Link>
              <Link to="/services/document-translation-rwanda" style={{ color: '#b7312a', fontSize: '0.88rem', display: 'flex', alignItems: 'center', textDecoration: 'underline' }}>View Document Translation Services</Link>
            </div>
          </div>
        </div>

        <section className="sp-contact-block">
          <h2>Contact WIKA TRANSLATE Ltd.</h2>
          <p>Ready to start your translation? We respond within 10 minutes.</p>
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

export default Languages;
