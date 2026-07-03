import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteFooter from '../../components/SiteFooter';
import '../styles/landing.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Interpretation Equipment Rental Sudan',
  description: 'Professional interpretation equipment rental in Sudan for conferences,'
    + ' UN meetings, and international events. Booths, wireless receivers, microphones'
    + ' and technical support. Khartoum and Omdurman.',
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
  serviceType: 'Interpretation Equipment Rental',
  areaServed: [
    { '@type': 'City', name: 'Omdurman' },
    { '@type': 'City', name: 'Khartoum' },
    { '@type': 'City', name: 'Port Sudan' },
    { '@type': 'Country', name: 'Sudan' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What interpretation equipment does WIKA TRANSLATE SUDAN rent in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN rents portable interpretation booths, wireless FM'
          + ' receiver systems (up to 200 channels), delegate microphone units,'
          + ' interpreter consoles, and all necessary cabling and power equipment.'
          + ' Technical setup and on-site support is included.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rent interpretation equipment without interpreter services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WIKA TRANSLATE SUDAN rents interpretation equipment independently'
          + ' of interpreter services. You can rent equipment alone, or combine it'
          + ' with our interpreter booking service for a complete conference solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many conference receivers can you supply for events in Sudan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WIKA TRANSLATE SUDAN can supply wireless receiver systems for events'
          + ' of any size, from small 20-person meetings to large 500+ person conferences.'
          + ' Contact info@wikatranslate.us with your event size for a custom quote.',
      },
    },
  ],
};

const equipment = [
  {
    iconClass: 'uil uil-headphones-alt',
    title: 'Wireless Receiver Systems',
    desc: 'Silent conference receivers for attendees covering all simultaneous interpretation'
      + ' channels. Available in any quantity.',
  },
  {
    iconClass: 'uil uil-cube',
    title: 'Interpretation Booths',
    desc: 'Portable soundproof interpretation booths meeting ISO 4043 standards,'
      + ' suitable for 1-2 interpreters each.',
  },
  {
    iconClass: 'uil uil-microphone',
    title: 'Delegate Microphone Systems',
    desc: 'Delegate unit systems for conferences, with chairman and delegate microphone'
      + ' units for structured meetings.',
  },
  {
    iconClass: 'uil uil-desktop',
    title: 'Interpreter Consoles',
    desc: 'Professional interpreter consoles with channel selection, handover buttons,'
      + ' and incoming audio monitoring.',
  },
  {
    iconClass: 'uil uil-wrench',
    title: 'Technical Setup & Support',
    desc: 'Full technical setup before the event and an on-site technician during'
      + ' the event to ensure smooth operation.',
  },
  {
    iconClass: 'uil uil-wifi',
    title: 'Remote Interpretation Platforms',
    desc: 'Integration with Zoom, Teams, KUDO, and other virtual platforms for'
      + ' hybrid and fully remote events.',
  },
];

const useCases = [
  { num: '1', title: 'UN & Inter-Agency Conferences', desc: 'Full equipment packages for UN cluster meetings, inter-agency coordination forums, and multi-day conferences in Sudan.' },
  { num: '2', title: 'NGO Training Workshops', desc: 'Equipment for multilingual capacity-building workshops, staff trainings, and community consultations.' },
  { num: '3', title: 'Government & Diplomatic Events', desc: 'Conference systems for official government events, bilateral meetings, and diplomatic receptions.' },
  { num: '4', title: 'Academic Conferences', desc: 'Equipment rental for academic conferences, seminars, and multilingual research events.' },
  { num: '5', title: 'Corporate Events', desc: 'Interpretation systems for shareholder meetings, product launches, and corporate training sessions.' },
];

function EquipmentRental() {
  return (
    <>
      <Helmet defer={false}>
        <title>
          Interpretation Equipment Rental Sudan — Booths & Receivers | WIKA TRANSLATE
        </title>
        <meta
          name="description"
          content="Interpretation equipment rental in Sudan: booths, wireless receivers, microphones & technical support. For UN, NGO & conference events in Khartoum & Omdurman."
        />
        <meta
          name="keywords"
          content="interpretation equipment rental Sudan, conference equipment rental Sudan, simultaneous interpretation equipment Sudan, interpretation booths Sudan, wireless receiver rental Sudan, conference microphone rental Sudan"
        />
        <link
          rel="canonical"
          href="https://www.wikatranslate.us/services/interpretation-equipment-rental-sudan"
        />
        <meta
          property="og:title"
          content="Interpretation Equipment Rental Sudan — Booths & Receivers | WIKA TRANSLATE"
        />
        <meta
          property="og:description"
          content="Interpretation equipment rental in Sudan: booths, wireless receivers & technical support for UN, NGO & conference events."
        />
        <meta
          property="og:url"
          content="https://www.wikatranslate.us/services/interpretation-equipment-rental-sudan"
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
          <div className="lp-hero__badge">Conference Equipment Sudan</div>
          <h1 className="lp-hero__title">
            Interpretation Equipment Rental
            {' '}
            <br />
            <span>in Sudan</span>
            {' '}
            — Booths, Receivers & Full Support
          </h1>
          <p className="lp-hero__desc">
            WIKA TRANSLATE SUDAN provides complete interpretation equipment packages
            for conferences, UN cluster meetings, NGO events, and diplomatic gatherings
            in Omdurman, Khartoum, Port Sudan, and across Sudan.
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

      {/* Equipment */}
      <section className="lp-section">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Interpretation Equipment Available in Sudan
            <hr />
          </h2>
          <p className="lp-section__subtitle">
            Everything you need for a professional multilingual conference or event —
            delivered, set up, and supported by our technical team.
          </p>
          <div className="lp-cards">
            {equipment.map((item) => (
              <div key={item.title} className="lp-card">
                <div className="lp-card__icon"><i className={item.iconClass} /></div>
                <h3 className="lp-card__title">{item.title}</h3>
                <p className="lp-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="lp-section lp-section--grey">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Events We Equip Across Sudan
            <hr />
          </h2>
          <div className="lp-steps">
            {useCases.map((item) => (
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
            <h2>
              Professional Interpretation Equipment in Khartoum & Omdurman
            </h2>
            <p>
              Running a multilingual conference in Sudan without professional interpretation
              equipment is a risk that most international organizations cannot afford.
              Poor audio quality, missing channels, or equipment failure during a high-stakes
              UN cluster meeting or donor conference directly impacts the quality of decisions made.
            </p>
            <p>
              WIKA TRANSLATE SUDAN — headquartered at Al Emtidad Street, Omdurman, Sudan —
              provides full-service interpretation equipment rental across Sudan. Our team
              handles delivery, installation, testing, and on-site operation. Every event
              gets a dedicated technical point-of-contact.
            </p>
            <h3>Combined Interpreter + Equipment Packages</h3>
            <p>
              For maximum convenience, WIKA TRANSLATE SUDAN offers combined packages
              covering both professional interpreters and equipment rental. This gives
              you a single point of contact for all language services at your conference,
              with coordinated setup between interpreters and the technical team.
            </p>
            <p>
              To book interpretation equipment in Sudan, email
              {' '}
              <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
              {' '}
              with your event date, location, number of attendees, and language pairs.
              We will respond with a quote within 10 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / NAP */}
      <section className="lp-nap">
        <div className="lp-nap__inner">
          <h2 className="lp-nap__title">
            Book Interpretation Equipment in Sudan
          </h2>
          <p className="lp-nap__details">
            Email
            {' '}
            <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
            {' '}
            with your event details for a custom equipment quote.
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
                <span>Request a Quote</span>
              </button>
            </Link>
            <Link to="/services/interpretation-services-sudan" className="lp-nap__contact-link">
              Interpretation Services
            </Link>
          </div>
          <p className="lp-nap__note">
            Serving Omdurman, Khartoum, Port Sudan, and all of Sudan.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default EquipmentRental;
