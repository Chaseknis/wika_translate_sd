import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteFooter from '../../components/SiteFooter';
import citiesData from '../../data/citiesData';
import '../styles/landing.css';

const services = [
  {
    iconClass: 'uil uil-file-check-alt',
    name: 'Document Translation',
    link: '/services/document-translation-sudan',
    desc: 'All document types in Arabic, English, French and 100+ languages.',
  },
  {
    iconClass: 'uil uil-shield-check',
    name: 'Certified Translation',
    link: '/services/certified-translation-sudan',
    desc: 'Accepted by courts, embassies and government ministries.',
  },
  {
    iconClass: 'uil uil-microphone',
    name: 'Simultaneous Interpretation',
    link: '/services/interpretation-services-sudan',
    desc: 'Real-time interpretation for conferences and large events.',
  },
  {
    iconClass: 'uil uil-comment-alt',
    name: 'Consecutive Interpretation',
    link: '/services/interpretation-services-sudan',
    desc: 'Sequential interpretation for meetings and field visits.',
  },
  {
    iconClass: 'uil uil-video',
    name: 'Remote Interpretation',
    link: '/services/interpretation-services-sudan',
    desc: 'Virtual interpretation for online and hybrid meetings.',
  },
  {
    iconClass: 'uil uil-headphones-alt',
    name: 'Equipment Rental',
    link: '/services/interpretation-equipment-rental-sudan',
    desc: 'Booths, receivers and full technical support.',
  },
];

function CityLanding({ city }) {
  const data = citiesData[city];

  if (!data) return <p style={{ padding: '120px 5%' }}>Page not found.</p>;

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Translation Services ${data.name}`,
    description: `Professional translation and interpretation services in ${data.name}, Sudan.`
      + ' Arabic, English, French and 100+ languages. Certified translation, simultaneous'
      + ' and consecutive interpretation for UN agencies, NGOs, embassies and international organizations.',
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
    serviceType: ['Translation', 'Interpretation', 'Certified Translation'],
    areaServed: [
      { '@type': 'City', name: data.name },
      { '@type': 'Country', name: 'Sudan' },
    ],
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDesc} />
        <meta name="keywords" content={data.keywords} />
        <link rel="canonical" href={data.canonical} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.metaDesc} />
        <meta property="og:url" content={data.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(citySchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-hero__inner">
          <div className="lp-hero__badge">{data.badge}</div>
          <h1 className="lp-hero__title">
            {data.heroTitle}
            {' '}
            <br />
            <span>{data.heroTitleSpan}</span>
          </h1>
          <p className="lp-hero__desc">{data.heroDesc}</p>
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

      {/* Services */}
      <section className="lp-section">
        <div className="lp-section__inner">
          <h2 className="lp-section__title">
            Translation & Interpretation Services in
            {' '}
            {data.name}
            <hr />
          </h2>
          <p className="lp-section__subtitle">
            A complete suite of language services for every operational need —
            delivered from our Omdurman headquarters to
            {' '}
            {data.name}
            {' '}
            and all of
            {' '}
            {data.region}
            .
          </p>
          <div className="lp-cards">
            {services.map((svc) => (
              <Link key={svc.name} to={svc.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="lp-card" style={{ height: '100%', cursor: 'pointer' }}>
                  <div className="lp-card__icon"><i className={svc.iconClass} /></div>
                  <h3 className="lp-card__title">{svc.name}</h3>
                  <p className="lp-card__desc">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific content */}
      <section className="lp-section lp-section--grey">
        <div className="lp-section__inner">
          <div className="lp-prose">
            <h2>
              About WIKA TRANSLATE SUDAN in
              {' '}
              {data.name}
            </h2>
            <p>{data.about}</p>
            <h3>
              Who We Serve in
              {' '}
              {data.name}
            </h3>
            <p>{data.clientFocus}</p>
            <h3>
              Languages Available in
              {' '}
              {data.name}
            </h3>
            <p>
              Arabic and English are the primary language pair for all operations
              in
              {' '}
              {data.name}
              {'. '}
              French is available for projects linked to francophone donors and partners.
              WIKA TRANSLATE SUDAN also covers 100+ additional languages including Swahili,
              Amharic, Somali, Tigrinya, Portuguese, Spanish, and the major European languages —
              ensuring full regional coverage for any programme need.
            </p>
            <h3>
              How to Order Translation Services in
              {' '}
              {data.name}
            </h3>
            <p>
              Send your document or interpretation request to
              {' '}
              <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
              {' '}
              and receive a free, no-obligation quote within 10 minutes. You can also
              reach us by phone or WhatsApp at
              {' '}
              <a href="tel:+249967200938">+249 967 200 938</a>
              {'. '}
              WIKA TRANSLATE SUDAN is based at Al Emtidad Street, Omdurman, Sudan,
              and serves clients across all of Sudan — including
              {' '}
              {data.name}
              {' '}
              — remotely and in-person.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / NAP */}
      <section className="lp-nap">
        <div className="lp-nap__inner">
          <h2 className="lp-nap__title">
            Ready to Work with a Trusted Translation Partner in
            {' '}
            {data.name}
            ?
          </h2>
          <p className="lp-nap__details">
            Email:
            {' '}
            <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
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
            <Link to="/translation-services-sudan" className="lp-nap__contact-link">
              All Sudan Services
            </Link>
          </div>
          <p className="lp-nap__note">
            Mon–Thu 8:00–17:00 | Sun 9:00–14:00 | Available 7 days for urgent requests.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

CityLanding.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CityLanding;
