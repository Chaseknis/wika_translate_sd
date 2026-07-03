/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import CityPageLayout from '../../components/CityPageLayout';

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WIKA TRANSLATE Ltd. — Nyagatare Service Area',
  description: 'Translation and interpretation services in Nyagatare, Eastern Province, Rwanda.',
  url: 'https://www.wikatranslate.net/translation-services-nyagatare',
  telephone: '+250788933063',
  email: 'info@wikatranslate.net',
  address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' },
  areaServed: { '@type': 'City', name: 'Nyagatare' },
};

function Nyagatare() {
  return (
    <CityPageLayout
      title="Translation Services in Nyagatare, Rwanda | WIKA TRANSLATE"
      description="Professional translation &amp; interpretation in Nyagatare, Eastern Province, Rwanda. Document translation, certified translation &amp; interpretation. WIKA TRANSLATE. +250 788 933 063."
      keywords="translation services Nyagatare, translation company Nyagatare Rwanda, certified translation Nyagatare, interpretation services Nyagatare Eastern Province"
      canonicalSlug="translation-services-nyagatare"
      badge="Nyagatare"
      h1="Translation Services in Nyagatare, Rwanda | WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides professional translation and interpretation services to clients in Nyagatare, the largest district in Rwanda's Eastern Province and a growing agribusiness and commercial hub. We serve government institutions, NGOs, agribusiness enterprises, and individuals in Nyagatare with fast, reliable language services delivered remotely and on-site."
      cityName="Nyagatare"
      citySchema={citySchema}
    >
      <p className="sp-lead">
        Nyagatare is the administrative capital of Rwanda's Eastern Province and one of Rwanda's largest districts by area. The region's growing agribusiness sector, proximity to Uganda, and active local government create demand for professional translation between English, Kinyarwanda, French, and Swahili. WIKA TRANSLATE provides document translation, certified translations, and interpretation for Nyagatare's diverse professional community.
      </p>

      <h2>Translation Services for Nyagatare<hr /></h2>
      <ul>
        <li><strong>Agribusiness documentation:</strong> Farm management reports, agricultural project documents, and supply chain contracts</li>
        <li><strong>Government documents:</strong> Official notices, district policies, and administrative correspondence</li>
        <li><strong>NGO and development project materials:</strong> Community development program documents, field reports, and beneficiary communication</li>
        <li><strong>Certified personal documents:</strong> Birth certificates, academic transcripts, and official personal documents</li>
        <li><strong>Cross-border business:</strong> Documentation for Rwanda–Uganda trade and business relations</li>
      </ul>

      <h2>Remote and On-Site Service<hr /></h2>
      <p>All document translation and transcription for Nyagatare clients can be handled remotely — simply send your documents via email (info@wikatranslate.net) or WhatsApp (+250 788 933 063) and receive your translated documents digitally. For on-site interpretation at events or meetings in Nyagatare, our interpreters travel to your location.</p>

      <h2>Other Cities We Serve<hr /></h2>
      <ul>
        <li><Link to="/translation-services-kigali">Kigali (HQ)</Link></li>
        <li><Link to="/translation-services-huye">Huye</Link></li>
        <li><Link to="/translation-services-musanze">Musanze</Link></li>
        <li><Link to="/translation-services-rubavu">Rubavu</Link></li>
        <li><Link to="/translation-services-muhanga">Muhanga</Link></li>
        <li><Link to="/translation-services-rusizi">Rusizi</Link></li>
      </ul>
    </CityPageLayout>
  );
}

export default Nyagatare;
