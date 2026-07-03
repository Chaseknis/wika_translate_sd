/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import CityPageLayout from '../../components/CityPageLayout';

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WIKA TRANSLATE Ltd. — Muhanga Service Area',
  description: 'Translation and interpretation services in Muhanga, Southern Province, Rwanda.',
  url: 'https://www.wikatranslate.net/translation-services-muhanga',
  telephone: '+250788933063',
  email: 'info@wikatranslate.net',
  address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' },
  areaServed: { '@type': 'City', name: 'Muhanga' },
};

function Muhanga() {
  return (
    <CityPageLayout
      title="Translation Services in Muhanga, Rwanda | WIKA TRANSLATE"
      description="Professional translation &amp; interpretation in Muhanga, Southern Province, Rwanda. Document translation, certified translation. WIKA TRANSLATE Ltd. +250 788 933 063."
      keywords="translation services Muhanga, translation company Muhanga Rwanda, certified translation Muhanga, interpretation services Muhanga Southern Province"
      canonicalSlug="translation-services-muhanga"
      badge="Muhanga"
      h1="Translation Services in Muhanga, Rwanda | WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides professional translation and certified language services to clients in Muhanga, Rwanda's Southern Province. Muhanga serves as a regional administrative and commercial hub, with government offices, NGOs, health facilities, and businesses regularly requiring accurate language services."
      cityName="Muhanga"
      citySchema={citySchema}
    >
      <p className="sp-lead">
        Muhanga District, located in Rwanda's Southern Province, is a growing regional center with active local government, health facilities, schools, and commercial activity. The district's organizations — from local government offices to international health NGOs — regularly require translation between English, French, and Kinyarwanda. WIKA TRANSLATE serves Muhanga clients via fast remote services and on-site visits.
      </p>

      <h2>Translation Services for Muhanga<hr /></h2>
      <ul>
        <li><strong>Government and administrative documents:</strong> District reports, official policies, and administrative correspondence</li>
        <li><strong>Health sector documents:</strong> Medical records, public health campaign materials, health NGO project documents</li>
        <li><strong>Educational documents:</strong> School certificates, academic transcripts, and education program materials</li>
        <li><strong>NGO project documentation:</strong> Community development reports, beneficiary surveys, and field documentation</li>
        <li><strong>Personal certified documents:</strong> Birth certificates, marriage certificates, and official personal documents for immigration and official purposes</li>
      </ul>

      <h2>How We Serve Muhanga Clients<hr /></h2>
      <p>WIKA TRANSLATE provides remote translation services for Muhanga clients — documents can be submitted digitally via email (info@wikatranslate.net) or WhatsApp (+250 788 933 063) from anywhere in Rwanda. Translated documents are delivered electronically with fast turnaround times. For interpretation at events or meetings in Muhanga, our interpreters travel to the client's venue.</p>

      <h2>Other Cities We Serve<hr /></h2>
      <ul>
        <li><Link to="/translation-services-kigali">Kigali (HQ)</Link></li>
        <li><Link to="/translation-services-huye">Huye (Butare)</Link></li>
        <li><Link to="/translation-services-rusizi">Rusizi</Link></li>
        <li><Link to="/translation-services-nyagatare">Nyagatare</Link></li>
      </ul>
    </CityPageLayout>
  );
}

export default Muhanga;
