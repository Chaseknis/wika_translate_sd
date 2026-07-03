import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteFooter from '../components/SiteFooter';
import './styles/landing.css';
import './styles/sudanLanding.css';

const sudanLandingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Translation Services in Sudan',
  description: 'Professional translation and interpretation services in Sudan for UN agencies, NGOs, embassies and international organizations. Arabic, English, French and 100+ languages.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Wika Translate Sudan',
    url: 'https://www.wikatranslate.us',
    telephone: '+249967200938',
    email: 'info@wikatranslate.us',
  },
  serviceType: ['Translation', 'Interpretation', 'Certified Translation', 'Legal Translation'],
  areaServed: [
    { '@type': 'Country', name: 'Sudan' },
    { '@type': 'Country', name: 'South Sudan' },
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Uganda' },
    { '@type': 'Country', name: 'Chad' },
    { '@type': 'Country', name: 'Eritrea' },
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'UN agencies, NGOs, embassies, international organizations, government bodies',
  },
};

const serviceCards = [
  {
    iconClass: 'uil uil-file-check-alt',
    title: 'UN Agency Documents',
    desc: 'SitReps, country programme documents, MoUs, Host-Country Agreements, procurement'
      + ' contracts — all translated and certified in Arabic, English and French.',
  },
  {
    iconClass: 'uil uil-heartbeat',
    title: 'NGO Field Operations',
    desc: 'Surveys, beneficiary registration forms, IEC materials, M&E tools, grant proposals,'
      + ' and donor reports translated for field-level humanitarian response.',
  },
  {
    iconClass: 'uil uil-balance-scale',
    title: 'Legal & Official Documents',
    desc: 'Certified translations of contracts, court documents, registration papers, birth'
      + ' certificates, and government correspondence accepted by Sudanese authorities.',
  },
  {
    iconClass: 'uil uil-microphone',
    title: 'Conference Interpretation',
    desc: 'Simultaneous and consecutive interpretation for cluster meetings, inter-agency'
      + ' forums, government negotiations, and high-level diplomatic events.',
  },
  {
    iconClass: 'uil uil-globe',
    title: 'Embassy & Diplomatic Services',
    desc: 'Translation for visa applications, diplomatic correspondence, bilateral agreements,'
      + ' and consular document processing.',
  },
  {
    iconClass: 'uil uil-video',
    title: 'Remote Interpretation',
    desc: 'Online and virtual interpretation for remote UN and NGO meetings, connecting field'
      + ' teams with headquarters across time zones.',
  },
];

const langPairs = [
  {
    pair: 'Arabic ↔ English',
    use: 'Primary working pair for UN & NGO documents, government correspondence, legal filings',
  },
  {
    pair: 'Arabic ↔ French',
    use: 'Essential for francophone partners, Chad operations, Djibouti-based agencies,'
      + ' OCHA West Africa coordination',
  },
  {
    pair: 'English ↔ French',
    use: 'Donor reports, EU project documentation, bilateral cooperation agreements',
  },
  {
    pair: '+ 100 Languages',
    use: 'Swahili, Amharic, Somali, Tigrinya, Portuguese, Spanish — full regional coverage',
  },
];

const serviceItems = [
  {
    num: '01',
    name: 'Simultaneous Interpretation',
    desc: 'Real-time interpretation for conferences, summits, and large multilingual events.'
      + ' Equipment rental included.',
    link: '/services',
  },
  {
    num: '02',
    name: 'Consecutive Interpretation',
    desc: 'Sequential interpretation for negotiations, interviews, field visits,'
      + ' and small-group meetings.',
    link: '/services',
  },
  {
    num: '03',
    name: 'Certified Translation',
    desc: 'Signed certified translations for legal, official, and institutional documents.'
      + ' Accepted by Sudanese authorities.',
    link: '/translation',
  },
  {
    num: '04',
    name: 'Legal Translation',
    desc: 'Contracts, MoUs, court documents, registration papers, and bilateral agreements'
      + ' translated with legal precision.',
    link: '/translation',
  },
  {
    num: '05',
    name: 'Remote Interpretation',
    desc: 'Virtual interpretation for online meetings, webinars, and remote coordination'
      + ' calls via any platform.',
    link: '/services',
  },
  {
    num: '06',
    name: 'Document Translation',
    desc: 'Reports, proposals, surveys, IEC materials, technical manuals, and any other'
      + ' documents in 100+ languages.',
    link: '/translation',
  },
];

const stats = [
  {
    stat: '800+',
    label: 'Professional Translators & Interpreters',
    desc: 'Native-language experts covering Arabic, English, French and 100+ languages.',
  },
  {
    stat: '10M+',
    label: 'Words Translated',
    desc: 'A proven track record across legal, technical, humanitarian, and diplomatic domains.',
  },
  {
    stat: '10 min',
    label: 'Free Quote Turnaround',
    desc: 'Send your documents to info@wikatranslate.us and receive a free, no-obligation quote.',
  },
  {
    stat: '24–48 hrs',
    label: 'Standard Delivery',
    desc: 'Fast turnaround on most documents without compromising our rigorous 5-step quality process.',
  },
];

const clientTypes = [
  'UN Agencies', 'International NGOs', 'Embassies & Consulates',
  'Development Banks', 'Government Ministries', 'Humanitarian Organizations',
  'International Law Firms', 'Bilateral Cooperation Agencies',
];

function SudanLanding() {
  return (
    <>
      <Helmet defer={false}>
        <title>
          Translation Services Sudan | NGO, UN & Embassy Support
        </title>
        <meta
          name="description"
          content="Professional translation & interpretation services in Sudan for UN agencies, NGOs, embassies & international organizations. Arabic-English-French. Free quote in 10 min."
        />
        <meta
          name="keywords"
          content="translation services Sudan, interpretation services Sudan, UN translation Sudan, NGO translation Sudan, embassy translation Sudan, certified translation Sudan, Arabic English translation Sudan, Arabic French translation Sudan, document translation Sudan, legal translation Sudan, conference interpretation Sudan, simultaneous interpretation Sudan, Horn of Africa translation"
        />
        <link rel="canonical" href="https://www.wikatranslate.us/translation-services-sudan" />
        <meta property="og:title" content="Translation Services Sudan | NGO, UN & Embassy Support" />
        <meta
          property="og:description"
          content="Professional translation & interpretation in Sudan for UN agencies, NGOs, embassies & international organizations. Arabic-English-French. Free quote in 10 min."
        />
        <meta property="og:url" content="https://www.wikatranslate.us/translation-services-sudan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Translation Services Sudan | NGO, UN & Embassy Support" />
        <meta
          property="twitter:description"
          content="Professional translation & interpretation in Sudan for UN agencies, NGOs & embassies. Arabic-English-French. Free quote in 10 min."
        />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(sudanLandingSchema)}
        </script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="sl-hero">
        <div className="sl-hero__inner">
          <div className="sl-hero__badge">Sudan & East Africa</div>
          <h1 className="sl-hero__title">
            Professional Translation Services
            {' '}
            <br />
            <span>in Sudan</span>
            {' '}
            for NGOs, UN Agencies
            {' '}
            <br />
            & International Organizations
          </h1>
          <p className="sl-hero__desc">
            Wika Translate Sudan is the region&apos;s trusted language partner for international
            organizations operating in Sudan and across the Horn of Africa. We deliver certified
            translation and professional interpretation in Arabic, English, French and 100+
            languages — fast, accurate, and confidential.
          </p>
          <div className="sl-hero__actions">
            <Link to="/contact/quotation">
              <button type="button" className="button">
                <span>Get a Free Quote in 10 Min</span>
              </button>
            </Link>
            <a href="mailto:info@wikatranslate.us" className="sl-hero__email-link">
              info@wikatranslate.us
            </a>
          </div>
        </div>
      </section>

      {/* ── Certified Translation for UN/NGOs ── */}
      <section className="sl-section">
        <div className="sl-section__inner">
          <h2 className="sl-section__title">
            Certified Translation for UN Agencies & NGOs in Sudan
            <hr />
          </h2>
          <p className="sl-section__subtitle">
            International organizations operating in Sudan face a unique linguistic environment.
            Our translators combine deep Sudanese Arabic expertise with specialist knowledge
            across humanitarian, legal, technical, and diplomatic domains.
          </p>
          <div className="sl-cards">
            {serviceCards.map((card) => (
              <div key={card.title} className="sl-card">
                <div className="sl-card__icon"><i className={card.iconClass} /></div>
                <h3 className="sl-card__title">{card.title}</h3>
                <p className="sl-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Arabic-English-French ── */}
      <section className="sl-section sl-section--dark">
        <div className="sl-section__inner">
          <div className="sl-lang-grid">
            <div>
              <h2 className="sl-lang-grid__heading">
                Arabic-English-French: The Core Language Triangle for Sudan Operations
                <hr />
              </h2>
              <p className="sl-lang-grid__text">
                Arabic is Sudan&apos;s official language and the language of government, courts,
                and local communities. English is the working language of most international
                organizations. French bridges operations with francophone partners in Chad,
                Djibouti, and West Africa. We deliver certified, accurate translation across
                all three.
              </p>
              <p className="sl-lang-grid__text">
                Our translators are native Sudanese Arabic speakers — not MSA-only translators
                — giving you translations that reflect the actual register and legal context
                used by Sudanese authorities and communities.
              </p>
            </div>
            <div className="sl-lang-pairs">
              {langPairs.map((item) => (
                <div key={item.pair} className="sl-lang-pair">
                  <div className="sl-lang-pair__label">{item.pair}</div>
                  <div className="sl-lang-pair__use">{item.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="sl-section">
        <div className="sl-section__inner">
          <h2 className="sl-services-title">
            Our Translation & Interpretation Services in Sudan
            <hr />
          </h2>
          <p className="sl-services-desc">
            A complete suite of language services for every operational need — from a single
            certified document to full conference interpretation with equipment rental.
          </p>
          <div className="sl-services-grid">
            {serviceItems.map((svc) => (
              <Link key={svc.num} to={svc.link} className="sl-service-link">
                <div className="sl-service-item">
                  <div className="sl-service-item__num">{svc.num}</div>
                  <h3 className="sl-service-item__name">{svc.name}</h3>
                  <p className="sl-service-item__desc">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="sl-services-cta">
            <Link to="/services">
              <button type="button" className="button">
                <span>View All Services</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Wika Translate ── */}
      <section className="sl-section sl-section--light">
        <div className="sl-section__inner">
          <h2 className="sl-section__title">
            Why International Organizations Choose Wika Translate Sudan
            <hr />
          </h2>
          <div className="sl-stats">
            {stats.map((item) => (
              <div key={item.stat} className="sl-stat">
                <div className="sl-stat__number">{item.stat}</div>
                <div className="sl-stat__label">{item.label}</div>
                <p className="sl-stat__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="sl-clients">
        <div className="sl-clients__inner">
          <h2 className="sl-clients__heading">
            Trusted by International Organizations Operating in Sudan & the Horn of Africa
          </h2>
          <div className="sl-clients__tags">
            {clientTypes.map((client) => (
              <span key={client} className="sl-clients__tag">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sl-cta">
        <div className="sl-cta__inner">
          <h2 className="sl-cta__title">
            Ready to Work with a Trusted Translation Partner in Sudan?
          </h2>
          <p className="sl-cta__desc">
            Send your documents to
            {' '}
            <strong className="sl-cta__highlight">info@wikatranslate.us</strong>
            {' '}
            and receive a free, no-obligation quote within 10 minutes. Or call us at
            {' '}
            <strong className="sl-cta__highlight">+249 967 200 938</strong>
            . We are available 7 days a week.
          </p>
          <div className="sl-cta__actions">
            <Link to="/contact/quotation">
              <button type="button" className="button">
                <span>Get a Free Quote</span>
              </button>
            </Link>
            <Link to="/contact" className="sl-cta__contact-link">
              Contact Us
            </Link>
          </div>
          <p className="sl-cta__note">
            Based in Omdurman, Sudan. Serving the entire Horn of Africa region.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default SudanLanding;
