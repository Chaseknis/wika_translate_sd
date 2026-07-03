/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import CityPageLayout from '../../components/CityPageLayout';

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WIKA TRANSLATE Ltd. — Rubavu Service Area',
  description: 'Translation and interpretation services in Rubavu (Gisenyi), Rwanda. Cross-border trade translation between Rwanda and DRC, document translation, certified translation.',
  url: 'https://www.wikatranslate.net/translation-services-rubavu',
  telephone: '+250788933063',
  email: 'info@wikatranslate.net',
  address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' },
  areaServed: { '@type': 'City', name: 'Rubavu' },
};

function Rubavu() {
  return (
    <CityPageLayout
      title="Translation Services in Rubavu (Gisenyi), Rwanda | WIKA TRANSLATE"
      description="Translation &amp; interpretation in Rubavu (Gisenyi), Rwanda. Cross-border trade translation, DRC business, certified translation. WIKA TRANSLATE. +250 788 933 063."
      keywords="translation services Rubavu, translation services Gisenyi, translation Rubavu Rwanda, certified translation Rubavu, cross-border trade translation Rwanda DRC, interpretation Rubavu"
      canonicalSlug="translation-services-rubavu"
      badge="Rubavu — Gisenyi"
      h1="Translation Services in Rubavu (Gisenyi), Rwanda | WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides professional translation and interpretation services in Rubavu (Gisenyi), Rwanda's Western Province. Rubavu borders Goma in the DRC and is a major center for cross-border trade, business, and NGO activity — creating strong demand for French, English, Kinyarwanda, and Swahili translation services."
      cityName="Rubavu"
      citySchema={citySchema}
    >
      <p className="sp-lead">
        Rubavu (formerly Gisenyi) sits on the shores of Lake Kivu at the Rwanda–DRC border, directly across from Goma, DRC. This strategic location makes Rubavu a busy commercial and transit hub where businesses, traders, NGOs, and government officials regularly need translation between English, French, Kinyarwanda, Swahili, and Lingala. WIKA TRANSLATE serves Rubavu's diverse language community with professional document translation, certified translation, and interpretation services.
      </p>

      <h2>Cross-Border Trade Translation — Rwanda and DRC<hr /></h2>
      <p>The Rwanda–DRC border at Rubavu/Goma is one of East Africa's busiest cross-border trade corridors. Businesses engaged in cross-border trade between Rwanda and DRC require translation of:</p>
      <ul>
        <li>Import and export documentation</li>
        <li>Commercial contracts and trade agreements</li>
        <li>Customs and clearing documentation</li>
        <li>Business correspondence in French, English, and Swahili</li>
        <li>Bank and financial documentation</li>
      </ul>

      <h2>Translation for NGOs and Humanitarian Organizations in Rubavu<hr /></h2>
      <p>Rubavu hosts numerous NGOs and humanitarian organizations operating on both sides of the Rwanda–DRC border. WIKA TRANSLATE provides:</p>
      <ul>
        <li>Field interview interpretation and transcription</li>
        <li>Community communication materials in Kinyarwanda, Swahili, and French</li>
        <li>Project reports and donor documentation</li>
        <li>Training and capacity-building materials translation</li>
      </ul>

      <h2>Other Cities We Serve<hr /></h2>
      <ul>
        <li><Link to="/translation-services-kigali">Kigali (HQ)</Link></li>
        <li><Link to="/translation-services-musanze">Musanze</Link></li>
        <li><Link to="/translation-services-rusizi">Rusizi</Link></li>
        <li><Link to="/translation-services-huye">Huye (Butare)</Link></li>
      </ul>
    </CityPageLayout>
  );
}

export default Rubavu;
