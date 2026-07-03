import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteFooter from '../../components/SiteFooter';
import '../styles/landing.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Interpretation Services Sudan',
  description: 'Professional simultaneous and consecutive interpretation services in Sudan'
    + ' for UN agencies, NGOs, embassies, conferences and international organizations.'
    + ' Arabic, English and French. Equipment rental included.',
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
  serviceType: ['Simultaneous Interpretation', 'Consecutive Interpretation', 'Remote Interpretation'],
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
      name: 'What is the difference between simultaneous and consecutive interpretation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simultaneous interpretation is real-time interpretation delivered as the'
          + ' speaker talks, using booths and receivers — ideal for large conferences,'
          + ' UN meetings, and summits. Consecutive interpretation follows each speaker'
          + ' segment with a rendered interpretation — ideal for negotiations, interviews,'
          + ' field visits, and small meetings. WIKA TRANSLATE SUDAN provides both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WIKA TRANSLATE SUDAN provide interpretation equipment rental in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides full interpretation equipment rental'
          + ' in Sudan including interpretation booths, wireless receiver systems,'
          + ' microphones, and technical support. Equipment rental is available with'
          + ' or without interpreter services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can WIKA TRANSLATE SUDAN provide remote interpretation for online meetings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN provides remote interpretation for Zoom,'
          + ' Teams, WebEx, and any other virtual platform. Our interpreters work'
          + ' from professional environments to ensure audio quality and reliability'
          + ' for UN and NGO virtual meetings.',
      },
    },
  ],
};

const interpretationTypes = [
  {
    iconClass: 'uil uil-microphone',
    title: 'Simultaneous Interpretation',
    desc: 'Real-time interpretation for conferences, summits, and large multilingual events.'
      + ' Full equipment package available including booths, headsets, and receivers.',
  },
  {
    iconClass: 'uil uil-comment-alt',
    title: 'Consecutive Interpretation',
    desc: 'Sequential interpretation for negotiations, field visits, interviews, and'
      + ' small-group meetings. No equipment required.',
  },
  {
    iconClass: 'uil uil-video',
    title: 'Remote Interpretation',
    desc: 'Virtual interpretation for Zoom, Teams, WebEx, and any platform. Connect'
      + ' field teams with headquarters across time zones.',
  },
  {
    iconClass: 'uil uil-balance-scale',
    title: 'Legal & Court Interpretation',
    desc: 'Certified interpretation for court proceedings, depositions, police'
      + ' interviews, and asylum hearings in Sudan.',
  },
  {
    iconClass: 'uil uil-heartbeat',
    title: 'Medical Interpretation',
    desc: 'Specialized medical interpretation for clinical settings, patient consultations,'
      + ' and humanitarian health assessments.',
  },
  {
    iconClass: 'uil uil-globe',
    title: 'Diplomatic Interpretation',
    desc: 'High-level diplomatic interpretation for bilateral meetings, embassy events,'
      + ' and intergovernmental negotiations.',
  },
];

const events = [
  { num: '1', title: 'UN Cluster Meetings', desc: 'Simultaneous and consecutive interpretation for all UN cluster and inter-agency meetings in Sudan.' },
  { num: '2', title: 'NGO Staff Trainings', desc: 'Interpretation for capacity-building sessions, protection trainings, and community engagement workshops.' },
  { num: '3', title: 'Government Negotiations', desc: 'Interpretation for bilateral meetings between international organizations and Sudanese government counterparts.' },
  { num: '4', title: 'Donor & Funding Meetings', desc: 'Interpretation for donor roundtables, funding conferences, and pledging events.' },
  { num: '5', title: 'Field Missions & Assessments', desc: 'Consecutive interpretation for field visits, beneficiary assessments, and community consultations.' },
  { num: '6', title: 'Diplomatic Conferences', desc: 'Full-service simultaneous interpretation for high-level diplomatic events and summits hosted in Sudan.' },
];

function InterpretationServices() {
  return (
    <>
      <Helmet defer={false}>
        <title>
          Interpretation Services Sudan — Simultaneous & Consecutive | WIKA TRANSLATE
        </title>
        <meta
          name="description"
          content="Professional simultaneous & consecutive interpretation in Sudan for UN agencies, NGOs & embassies. Arabic-English-French. Equipment rental available. Free quote."
        />
        <meta
          name="keywords"
          content="interpretation services Sudan, simultaneous interpretation Sudan, consecutive interpretation Sudan, conference interpretation Sudan, Arabic interpretation Sudan, UN interpretation Sudan, NGO interpretation Sudan, remote interpretation Sudan"
        />
        <link
          rel="canonical"
          href="https://www.wikatranslate.us/services/interpretation-services-sudan"
        />
        <meta
          property="og:title"
          content="Interpretation Services Sudan — Simultaneous & Consecutive | WIKA TRANSLATE"
        />
        <meta
          property="og:description"
          content="Professional interpretation in Sudan for UN, NGOs & embassies. Simultaneous, consecutive & remote. Arabic-English-French."
        />
        <meta
          property="og:url"
          content="https://www.wikatranslate.us/services/interpretation-services-sudan"
        />
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
          <div className="lp-hero__badge">Interpretation Services Sudan</div>
          <h1 className="lp-hero__title">
            Professional Interpretation Services
            {' '}
            <br />
            <span>in Sudan</span>
            {' '}
            — Simultaneous, Consecutive & Remote
          </h1>
          <p className="lp-hero__desc">
            WIKA TRANSLATE SUDAN provides expert interpretation for UN cluster meetings,
            NGO trainings, government negotiations, conferences, and diplomatic events
            across Sudan and the Horn of Africa. Arabic, English and French.
          </p>
          <div className="lp-hero__actions">
            <Link to="/contact/quotation">
              <button type="button" className="button">
                <span>Get a Free Quote</span>
              </button>
            </Link>
            <a href="tel:+249967200938" className="lp-hero__alt-link">
              +249 967 200 938
            </a>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="lp-section">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Interpretation Services We Provide in Sudan
            <hr />
          </h2>
          <p className="lp-section__subtitle">
            From large UN conferences requiring booths and equipment to one-on-one
            field interviews — the right interpreter for every context.
          </p>
          <div className="lp-cards">
            {interpretationTypes.map((card) => (
              <div key={card.title} className="lp-card">
                <div className="lp-card__icon"><i className={card.iconClass} /></div>
                <h3 className="lp-card__title">{card.title}</h3>
                <p className="lp-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="lp-section lp-section--grey">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Events & Meetings We Interpret in Sudan
            <hr />
          </h2>
          <div className="lp-steps">
            {events.map((event) => (
              <div key={event.num} className="lp-step">
                <div className="lp-step__num">{event.num}</div>
                <div className="lp-step__body">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
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
            <h2>Why WIKA TRANSLATE SUDAN Is Sudan&apos;s Trusted Interpretation Provider</h2>
            <p>
              WIKA TRANSLATE SUDAN — based at Al Emtidad Street, Omdurman, Sudan — has
              built the largest network of professional interpreters in the country.
              Our 800+ linguists include specialists in humanitarian terminology,
              legal and judicial language, diplomatic protocol, and technical domains.
            </p>
            <p>
              For international organizations operating in Sudan, interpreter quality
              directly affects the outcome of negotiations, assessments, and community
              engagement. An interpreter who misrenders a term in a protection interview
              or a cluster meeting can have consequences that go far beyond a simple
              translation error. Our interpreters are trained in professional ethics,
              neutrality, and the specific terminology used by UN clusters, NGO programmes,
              and diplomatic missions.
            </p>
            <h3>Arabic Interpretation in Sudan</h3>
            <p>
              Arabic interpretation in Sudan requires knowledge of both Modern Standard
              Arabic and Sudanese spoken Arabic. Government officials and community members
              frequently switch between registers. Our interpreters manage this naturally —
              they are native Sudanese Arabic speakers, not interpreters parachuted in
              from other Arabic-speaking countries.
            </p>
            <h3>Remote Interpretation for UN and NGO Virtual Meetings</h3>
            <p>
              Since 2020, remote interpretation has become standard for UN and NGO
              global meetings. WIKA TRANSLATE SUDAN provides remote consecutive and
              simultaneous interpretation via Zoom, Teams, WebEx, and KUDO. Our remote
              interpreters work from professional, quiet environments with backup
              connectivity to ensure meeting continuity.
            </p>
            <h3>Interpretation Equipment Rental in Sudan</h3>
            <p>
              Planning a conference in Khartoum or Omdurman? WIKA TRANSLATE SUDAN
              provides full simultaneous interpretation equipment packages: booths,
              wireless receivers, microphones, and on-site technical support.
              See our
              {' '}
              <Link to="/services/interpretation-equipment-rental-sudan">
                interpretation equipment rental page
              </Link>
              {' '}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / NAP */}
      <section className="lp-nap">
        <div className="lp-nap__inner">
          <h2 className="lp-nap__title">
            Book an Interpreter in Sudan
          </h2>
          <p className="lp-nap__details">
            Email
            {' '}
            <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
            {' '}
            with your event date, language pair, and type of interpretation.
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
            Available 7 days a week. Serving all cities across Sudan.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default InterpretationServices;
