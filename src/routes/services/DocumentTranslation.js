import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteFooter from '../../components/SiteFooter';
import '../styles/landing.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Document Translation Services Sudan',
  description: 'Professional document translation in Sudan for NGOs, UN agencies, embassies'
    + ' and international organizations. Arabic, English, French and 100+ languages.'
    + ' Fast turnaround with 5-step quality assurance.',
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
  serviceType: 'Document Translation',
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
      name: 'What types of documents can WIKA TRANSLATE SUDAN translate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN translates all document types including: UN SitReps,'
          + ' country programme documents, NGO reports, grant proposals, beneficiary'
          + ' registration forms, IEC materials, M&E tools, contracts, MoUs,'
          + ' court documents, birth certificates, diplomas, technical manuals,'
          + ' medical records, and government correspondence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is document translation turnaround in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard turnaround is 24-48 hours for most documents. Urgent requests'
          + ' can be expedited. A free quote is provided within 10 minutes of submitting'
          + ' your document to info@wikatranslate.us.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide certified document translation in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides signed certified translations accepted'
          + ' by Sudanese authorities, courts, embassies, and international organizations.'
          + ' Each certified translation includes a declaration of accuracy.',
      },
    },
  ],
};

const docTypes = [
  { iconClass: 'uil uil-file-check-alt', title: 'UN & NGO Documents', desc: 'SitReps, CPDs, donor reports, grant proposals, M&E tools, IEC materials, beneficiary registration forms and project evaluations.' },
  { iconClass: 'uil uil-balance-scale', title: 'Legal Documents', desc: 'Contracts, MoUs, court documents, affidavits, powers of attorney, registration papers and bilateral agreements.' },
  { iconClass: 'uil uil-heartbeat', title: 'Medical & Technical', desc: 'Medical records, clinical trial documents, engineering specs, technical manuals and scientific research papers.' },
  { iconClass: 'uil uil-graduation-cap', title: 'Academic & Personal', desc: 'Diplomas, transcripts, birth certificates, marriage certificates, passports and national IDs.' },
  { iconClass: 'uil uil-briefcase-alt', title: 'Business Documents', desc: 'Annual reports, financial statements, procurement documents, tender submissions and shareholder agreements.' },
  { iconClass: 'uil uil-building', title: 'Government Correspondence', desc: 'Official letters, ministerial decrees, regulatory filings, and any correspondence with Sudanese government bodies.' },
];

const processSteps = [
  { num: '1', title: 'Submit Your Document', desc: 'Email your document to info@wikatranslate.us or upload it via our contact form. Receive a free quote within 10 minutes.' },
  { num: '2', title: 'Expert Translator Assigned', desc: 'A subject-matter expert fluent in the source and target languages is assigned — legal docs go to legal translators, medical to medical, etc.' },
  { num: '3', title: 'Translation', desc: 'Your document is translated with full fidelity to the original meaning, register, and legal context.' },
  { num: '4', title: 'Independent Review', desc: 'A second qualified translator reviews the translation for accuracy, terminology consistency, and completeness.' },
  { num: '5', title: 'Delivery', desc: 'The final translation is delivered in your preferred format (PDF, Word, or print-ready) with a certification letter if required.' },
];

function DocumentTranslation() {
  return (
    <>
      <Helmet defer={false}>
        <title>Document Translation Sudan | Arabic, English & French | WIKA TRANSLATE</title>
        <meta
          name="description"
          content="Professional document translation in Sudan for UN agencies, NGOs & embassies. Arabic-English-French & 100+ languages. Certified. Free quote in 10 min."
        />
        <meta
          name="keywords"
          content="document translation Sudan, document translation Arabic English Sudan, NGO document translation Sudan, UN document translation Sudan, certified document translation Sudan, Arabic document translation Omdurman, translation services Khartoum"
        />
        <link rel="canonical" href="https://www.wikatranslate.us/services/document-translation-sudan" />
        <meta property="og:title" content="Document Translation Sudan | Arabic, English & French | WIKA TRANSLATE" />
        <meta
          property="og:description"
          content="Professional document translation in Sudan for UN agencies, NGOs & embassies. Arabic-English-French & 100+ languages. Free quote in 10 min."
        />
        <meta property="og:url" content="https://www.wikatranslate.us/services/document-translation-sudan" />
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
          <div className="lp-hero__badge">Translation Services Sudan</div>
          <h1 className="lp-hero__title">
            Professional Document Translation
            {' '}
            <br />
            <span>in Sudan</span>
            {' '}
            — Arabic, English & French
          </h1>
          <p className="lp-hero__desc">
            WIKA TRANSLATE SUDAN delivers accurate, confidential document translation
            for UN agencies, NGOs, embassies, law firms, and government bodies across
            Sudan and the Horn of Africa. Free quote in 10 minutes.
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

      {/* Document types */}
      <section className="lp-section">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Document Types We Translate in Sudan
            <hr />
          </h2>
          <p className="lp-section__subtitle">
            From a single birth certificate to thousands of pages of humanitarian
            programme documentation — every document type, every subject area,
            every language pair.
          </p>
          <div className="lp-cards">
            {docTypes.map((card) => (
              <div key={card.title} className="lp-card">
                <div className="lp-card__icon"><i className={card.iconClass} /></div>
                <h3 className="lp-card__title">{card.title}</h3>
                <p className="lp-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="lp-section lp-section--grey">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Our 5-Step Document Translation Process
            <hr />
          </h2>
          <p className="lp-section__subtitle">
            Every document goes through a rigorous quality process so you receive
            a translation that is accurate, consistent, and fit for official use.
          </p>
          <div className="lp-steps">
            {processSteps.map((step) => (
              <div key={step.num} className="lp-step">
                <div className="lp-step__num">{step.num}</div>
                <div className="lp-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prose authority content */}
      <section className="lp-section">
        <div className="lp-section__inner">
          <div className="lp-prose">
            <h2>Why Choose WIKA TRANSLATE SUDAN for Document Translation?</h2>
            <p>
              WIKA TRANSLATE SUDAN is headquartered at Al Emtidad Street, Omdurman, Sudan,
              and has built its reputation serving some of the most demanding clients operating
              in one of the world&apos;s most complex humanitarian environments. Our translators
              are native Sudanese Arabic speakers — not generic Modern Standard Arabic (MSA)
              translators — meaning your documents reflect the exact register and legal
              terminology understood by Sudanese authorities and communities.
            </p>
            <p>
              For international organizations, this distinction matters. A UN-commissioned
              SitRep or an NGO beneficiary registration form must communicate clearly with
              local communities and pass scrutiny from government counterparts. MSA-only
              translators frequently miss Sudanese dialectal nuances and official government
              terminology. Our translators live and work in Sudan — they know the difference.
            </p>
            <h3>Languages for Document Translation in Sudan</h3>
            <p>
              Arabic and English are the primary language pair for Sudan operations, covering
              the vast majority of UN, NGO, embassy, and government document translation needs.
              French is essential for projects linked to Chad, Djibouti, francophone donors,
              and OCHA West Africa coordination. Beyond these three, WIKA TRANSLATE SUDAN
              covers 100+ languages including Swahili, Amharic, Somali, Tigrinya, Portuguese,
              Spanish, and the major European languages.
            </p>
            <h3>Confidentiality and Data Security</h3>
            <p>
              All documents submitted to WIKA TRANSLATE SUDAN are handled under strict
              confidentiality agreements. Our translators sign NDAs and our internal systems
              are designed to ensure sensitive UN, NGO, and government documents remain private.
            </p>
            <h3>Certified Document Translation in Sudan</h3>
            <p>
              When your document requires official acceptance — by a Sudanese court, a government
              ministry, an embassy for visa processing, or an international organization — our
              certified translations are accompanied by a signed declaration of accuracy that
              meets the requirements of Sudanese authorities and most international institutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / NAP */}
      <section className="lp-nap">
        <div className="lp-nap__inner">
          <h2 className="lp-nap__title">
            Ready to Translate Your Documents?
          </h2>
          <p className="lp-nap__details">
            Send your documents to
            {' '}
            <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
            {' '}
            and receive a free, no-obligation quote within 10 minutes.
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
            Available 7 days a week. Serving Omdurman, Khartoum, Port Sudan and all of Sudan.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default DocumentTranslation;
