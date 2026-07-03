import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteFooter from '../../components/SiteFooter';
import '../styles/landing.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Certified Translation Services Sudan',
  description: 'Official certified translation services in Sudan accepted by Sudanese courts,'
    + ' government ministries, embassies and international organizations. Arabic,'
    + ' English and French. Signed by qualified translators.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'WIKA TRANSLATE SUDAN',
    url: 'https://www.wikatranslate.us',
    telephone: '+249967200938',
    email: 'info@wikatranslate.us',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Emtidad Street',
      addressLocality: 'Omdurman',
      addressRegion: 'Khartoum State',
      addressCountry: 'SD',
    },
  },
  serviceType: 'Certified Translation',
  areaServed: [
    { '@type': 'Country', name: 'Sudan' },
    { '@type': 'Country', name: 'South Sudan' },
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'Country', name: 'Kenya' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a certified translation in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A certified translation in Sudan is a translation accompanied by a signed'
          + ' declaration from a qualified translator confirming that the translation is'
          + ' a true and accurate representation of the original document. WIKA TRANSLATE'
          + ' SUDAN certified translations are accepted by Sudanese courts, embassies,'
          + ' government ministries, and most international organizations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which documents require certified translation in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Documents that typically require certified translation in Sudan include:'
          + ' birth certificates, marriage certificates, diplomas, transcripts, court'
          + ' documents, contracts, MoUs, visa applications, passport pages, powers of'
          + ' attorney, and any official document submitted to Sudanese authorities or'
          + ' foreign embassies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does certified translation take in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard certified translation turnaround at WIKA TRANSLATE SUDAN is'
          + ' 24-48 hours. Urgent certified translations can be expedited. Send your'
          + ' document to info@wikatranslate.us for a free quote within 10 minutes.',
      },
    },
  ],
};

const acceptedBy = [
  { iconClass: 'uil uil-balance-scale', title: 'Sudanese Courts', desc: 'Certified translations accepted by all levels of the Sudanese judiciary for legal proceedings and document submissions.' },
  { iconClass: 'uil uil-building', title: 'Government Ministries', desc: 'Accepted by all Sudanese government ministries for registration, licensing, and official correspondence.' },
  { iconClass: 'uil uil-globe', title: 'Embassies & Consulates', desc: 'Recognized by embassies and consulates in Sudan for visa applications, immigration documents, and consular services.' },
  { iconClass: 'uil uil-users-alt', title: 'UN Agencies & NGOs', desc: 'Meets the certified translation standards required by UNDP, UNHCR, UNICEF, WFP, IOM, and major international NGOs.' },
  { iconClass: 'uil uil-graduation-cap', title: 'Universities & Schools', desc: 'Accepted for academic admissions, enrollment, and credential recognition purposes.' },
  { iconClass: 'uil uil-sitemap', title: 'International Organizations', desc: 'Recognized by development banks, bilateral cooperation agencies, and intergovernmental bodies.' },
];

const certTypes = [
  { num: '1', title: 'Personal Documents', desc: 'Birth certificates, marriage certificates, death certificates, passports, national IDs, and family records.' },
  { num: '2', title: 'Legal Documents', desc: 'Court judgments, contracts, MoUs, powers of attorney, incorporation certificates, and legal affidavits.' },
  { num: '3', title: 'Academic Documents', desc: 'Diplomas, transcripts, course descriptions, letters of recommendation, and professional certifications.' },
  { num: '4', title: 'Medical Documents', desc: 'Medical records, diagnostic reports, vaccination certificates, and disability assessments.' },
  { num: '5', title: 'Business Documents', desc: 'Company registration documents, financial statements, audit reports, and shareholder agreements.' },
  { num: '6', title: 'Government Correspondence', desc: 'Official letters from Sudanese government ministries, decrees, and regulatory notices.' },
];

function CertifiedTranslation() {
  return (
    <>
      <Helmet defer={false}>
        <title>Certified Translation Sudan — Official & Legal Documents | WIKA TRANSLATE</title>
        <meta
          name="description"
          content="Official certified translation services in Sudan accepted by Sudanese courts, embassies & government. Arabic-English-French. Free quote in 10 min. Al Emtidad Street, Omdurman."
        />
        <meta
          name="keywords"
          content="certified translation Sudan, certified translation Omdurman, certified translation Khartoum, official translation Sudan, legal translation Sudan, certified Arabic translation Sudan, embassy translation Sudan, court translation Sudan"
        />
        <link rel="canonical" href="https://www.wikatranslate.us/services/certified-translation-sudan" />
        <meta property="og:title" content="Certified Translation Sudan — Official & Legal Documents | WIKA TRANSLATE" />
        <meta
          property="og:description"
          content="Official certified translation in Sudan accepted by courts, embassies & government. Arabic-English-French. Free quote in 10 min."
        />
        <meta property="og:url" content="https://www.wikatranslate.us/services/certified-translation-sudan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-hero__inner">
          <div className="lp-hero__badge">Official & Legal Translation</div>
          <h1 className="lp-hero__title">
            Certified Translation Services
            {' '}
            <br />
            <span>in Sudan</span>
            {' '}
            — Accepted by Courts & Embassies
          </h1>
          <p className="lp-hero__desc">
            WIKA TRANSLATE SUDAN provides certified translations accepted by Sudanese
            courts, government ministries, embassies, UN agencies, and international
            organizations. Arabic, English, French and 100+ languages.
            Free quote in 10 minutes.
          </p>
          <div className="lp-hero__actions">
            <Link to="/contact/quotation">
              <button type="button" className="button">
                <span>Get a Free Quote in 10 Min</span>
              </button>
            </Link>
            <a href="mailto:info@wikatranslate.us" className="lp-hero__alt-link">
              info@wikatranslate.us
            </a>
          </div>
        </div>
      </section>

      {/* Accepted by */}
      <section className="lp-section">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Accepted By Official Institutions in Sudan & Internationally
            <hr />
          </h2>
          <p className="lp-section__subtitle">
            Our certified translations meet the requirements of Sudanese authorities
            and the documentation standards of international organizations operating in Sudan.
          </p>
          <div className="lp-cards">
            {acceptedBy.map((card) => (
              <div key={card.title} className="lp-card">
                <div className="lp-card__icon"><i className={card.iconClass} /></div>
                <h3 className="lp-card__title">{card.title}</h3>
                <p className="lp-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document types */}
      <section className="lp-section lp-section--grey">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Documents We Certify in Sudan
            <hr />
          </h2>
          <p className="lp-section__subtitle">
            From personal certificates to complex legal agreements — all translated and
            certified by qualified translators with subject-matter expertise.
          </p>
          <div className="lp-steps">
            {certTypes.map((item) => (
              <div key={item.num} className="lp-step">
                <div className="lp-step__num">{item.num}</div>
                <div className="lp-step__body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority prose */}
      <section className="lp-section">
        <div className="lp-section__inner">
          <div className="lp-prose">
            <h2>What Is Certified Translation in Sudan?</h2>
            <p>
              A certified translation in Sudan is a translated document accompanied by a
              signed statement from a qualified translator confirming that the translation
              is complete and accurate. Unlike a simple translation, a certified translation
              carries legal weight and can be submitted to Sudanese courts, government
              registries, embassies, and international bodies.
            </p>
            <p>
              WIKA TRANSLATE SUDAN — headquartered at Al Emtidad Street, Omdurman,
              Sudan — is the leading provider of certified translation in Sudan.
              Our certified translations are prepared by subject-matter experts:
              legal documents are handled by translators with legal expertise, medical
              records by translators with medical knowledge, and so on.
            </p>
            <h3>Arabic Certified Translation: Why Native Speakers Matter</h3>
            <p>
              Arabic is Sudan&apos;s official language, but the Arabic used in Sudanese
              courts, government ministries, and official correspondence has specific
              terminology and register that differ from Modern Standard Arabic (MSA).
              Our translators are native Sudanese Arabic speakers with professional
              training — giving you a certified translation that will pass scrutiny from
              Sudanese officials without requests for revision.
            </p>
            <h3>Certified Translation for Embassies and Visa Applications</h3>
            <p>
              Embassies in Khartoum — including those of the USA, EU member states, UK,
              Canada, Australia, and Gulf countries — require certified Arabic-to-English
              translations for visa applications, immigration files, and consular services.
              WIKA TRANSLATE SUDAN has extensive experience producing embassy-standard
              certified translations quickly, to meet visa appointment deadlines.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / NAP */}
      <section className="lp-nap">
        <div className="lp-nap__inner">
          <h2 className="lp-nap__title">
            Need a Certified Translation in Sudan?
          </h2>
          <p className="lp-nap__details">
            Send your document to
            {' '}
            <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
            {' '}
            and receive a free quote in 10 minutes.
            <br />
            Phone / WhatsApp:
            {' '}
            <a href="tel:+249967200938">+249 967 200 938</a>
            <br />
            <strong className="lp-nap__highlight">WIKA TRANSLATE SUDAN</strong>
            {' '}
            — Al Emtidad Street, Omdurman, Sudan
          </p>
          <div className="lp-nap__actions">
            <Link to="/contact/quotation">
              <button type="button" className="button">
                <span>Get a Free Quote</span>
              </button>
            </Link>
            <Link to="/contact" className="lp-nap__contact-link">
              Contact Us
            </Link>
          </div>
          <p className="lp-nap__note">
            Mon–Thu 8:00–17:00 | Sun 9:00–14:00 | Omdurman, Sudan
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default CertifiedTranslation;
