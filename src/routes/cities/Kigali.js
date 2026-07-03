/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import CityPageLayout from '../../components/CityPageLayout';

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WIKA TRANSLATE Ltd.',
  alternateName: 'Wika Translate Kigali',
  description: 'Professional translation and interpretation services in Kigali, Rwanda. Certified document translation, simultaneous interpretation, equipment rental, localization, and transcription.',
  url: 'https://www.wikatranslate.net/translation-services-kigali',
  telephone: '+250788933063',
  email: 'info@wikatranslate.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Makuza Peace Plaza, KN 84 St',
    addressLocality: 'Kigali',
    addressCountry: 'RW',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '-1.946463734749799', longitude: '30.05945716766021' },
  areaServed: { '@type': 'City', name: 'Kigali' },
};

function Kigali() {
  return (
    <CityPageLayout
      title="Translation Services in Kigali, Rwanda | WIKA TRANSLATE"
      description="Professional translation &amp; interpretation in Kigali, Rwanda. Certified, legal &amp; document translation. WIKA TRANSLATE Ltd., Makuza Peace Plaza, Kigali. +250 788 933 063."
      keywords="translation services Kigali, translation company Kigali, certified translation Kigali, interpretation services Kigali, document translation Kigali, legal translation Kigali"
      canonicalSlug="translation-services-kigali"
      badge="Kigali"
      h1="Translation Services in Kigali, Rwanda | WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. is based in Kigali, Rwanda — East Africa's fastest-growing capital city and the continent's rising hub for international conferences, diplomacy, and global business. From our office at Makuza Peace Plaza, we provide the full spectrum of professional translation, interpretation, and language services to clients across Kigali and Rwanda."
      cityName="Kigali"
      citySchema={citySchema}
    >
      <p className="sp-lead">
        WIKA TRANSLATE Ltd. is headquartered at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda — the commercial and administrative heart of East Africa's most dynamic capital city. Kigali is home to dozens of UN agencies, the African Union Commission, hundreds of international NGOs, foreign embassies, multinational corporations, and a rapidly expanding private sector. The demand for professional translation and interpretation services in Kigali is constant and growing, and WIKA TRANSLATE is the city's leading language services provider.
      </p>

      <h2>Translation Services in Kigali, Rwanda<hr /></h2>
      <p>As Rwanda's capital, Kigali is a multilingual environment where English, French, and Kinyarwanda are all official languages of daily government, business, and social communication. Arabic, Swahili, and other international languages are also widely used in the city's diplomatic and business communities. WIKA TRANSLATE serves every language combination needed in Kigali:</p>
      <ul>
        <li><strong>Government and public sector:</strong> Rwandan government ministries, parliament, and public institutions require document translation for policies, laws, reports, and official correspondence.</li>
        <li><strong>UN agencies and international organizations:</strong> UNDP, UNICEF, WFP, WHO, UNHCR, IOM, FAO, and other UN bodies based in Kigali require certified translation, conference interpretation, and transcription services regularly.</li>
        <li><strong>Embassies and diplomatic missions:</strong> Kigali hosts embassies from over 40 countries. Embassy visa sections require certified translations of supporting documents. WIKA TRANSLATE is experienced with embassy documentation requirements across all major missions in Kigali.</li>
        <li><strong>NGOs and humanitarian organizations:</strong> International and local NGOs operating in Rwanda require translation for project documents, field reports, beneficiary communication, and training materials.</li>
        <li><strong>Private sector and corporations:</strong> Businesses in Kigali's growing financial, technology, real estate, and retail sectors need professional translation for contracts, marketing, compliance, and corporate communications.</li>
        <li><strong>Law firms and courts:</strong> Kigali's legal sector requires certified and legal translation for court proceedings, contracts, and international legal matters.</li>
      </ul>

      <h2>International Conferences in Kigali<hr /></h2>
      <p>Kigali has emerged as one of Africa's premier conference destinations, hosting major international summits, AU meetings, COMESA events, and international business conferences at the Kigali Convention Centre and other venues. WIKA TRANSLATE provides comprehensive multilingual conference services for Kigali events:</p>
      <ul>
        <li>Simultaneous interpretation with ISO-compliant booths</li>
        <li>Interpretation equipment rental (booths, receivers, transmitters)</li>
        <li>Consecutive interpretation for smaller sessions and breakout rooms</li>
        <li>Conference documentation translation</li>
        <li>Conference transcription and documentation services</li>
      </ul>

      <h2>Our Kigali Office<hr /></h2>
      <p>WIKA TRANSLATE Ltd. is physically present in Kigali at:</p>
      <address style={{ fontStyle: 'normal', lineHeight: '2', marginBottom: '1rem' }}>
        <strong>WIKA TRANSLATE Ltd.</strong><br />
        Makuza Peace Plaza, KN 84 St<br />
        Kigali, Rwanda<br />
        <a href="tel:+250788933063">📞 +250 788 933 063</a><br />
        <a href="mailto:info@wikatranslate.net">✉️ info@wikatranslate.net</a><br />
        <a href="https://maps.app.goo.gl/dqJncgiqEbH4gr8H9" target="_blank" rel="noopener noreferrer">🗺️ Find us on Google Maps</a>
      </address>
      <p>You can visit our office to drop off physical documents, discuss your project in person, or collect certified translation documents. We are open during standard business hours and available via phone and WhatsApp outside of office hours.</p>

      <h2>On-Site and Remote Services Available in Kigali<hr /></h2>
      <p><strong>On-site services:</strong> For interpretation at conferences, meetings, or events in Kigali, our interpreters and technical team attend your venue. For document submission and collection, you can visit our Makuza Peace Plaza office.</p>
      <p><strong>Remote services:</strong> We accept document submissions via email (info@wikatranslate.net) and WhatsApp (+250 788 933 063) and deliver completed translations digitally. For remote interpretation, we provide RSI (Remote Simultaneous Interpretation) for virtual and hybrid events.</p>

      <h2>Language Pairs Available in Kigali<hr /></h2>
      <div className="sp-lang-grid">
        {['English ↔ French', 'English ↔ Kinyarwanda', 'French ↔ Kinyarwanda', 'English ↔ Arabic', 'English ↔ Swahili', 'French ↔ Arabic', 'English ↔ German', 'English ↔ Spanish', 'English ↔ Kirundi', 'English ↔ Luganda', 'English ↔ Somali', 'Arabic ↔ French'].map((pair) => (
          <span key={pair} className="sp-lang-tag">{pair}</span>
        ))}
      </div>

      <h2>Other Cities We Serve in Rwanda<hr /></h2>
      <p>In addition to Kigali, WIKA TRANSLATE serves clients throughout Rwanda:</p>
      <ul>
        <li><Link to="/translation-services-huye">Translation Services in Huye (Butare)</Link></li>
        <li><Link to="/translation-services-musanze">Translation Services in Musanze</Link></li>
        <li><Link to="/translation-services-rubavu">Translation Services in Rubavu (Gisenyi)</Link></li>
        <li><Link to="/translation-services-nyagatare">Translation Services in Nyagatare</Link></li>
        <li><Link to="/translation-services-muhanga">Translation Services in Muhanga</Link></li>
        <li><Link to="/translation-services-rusizi">Translation Services in Rusizi</Link></li>
      </ul>
    </CityPageLayout>
  );
}

export default Kigali;
