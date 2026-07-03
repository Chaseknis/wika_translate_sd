/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import CityPageLayout from '../../components/CityPageLayout';

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WIKA TRANSLATE Ltd. — Huye Service Area',
  description: 'Professional translation and interpretation services in Huye (Butare), Rwanda. Document translation, certified translation, and interpretation for academic, NGO, and business clients.',
  url: 'https://www.wikatranslate.net/translation-services-huye',
  telephone: '+250788933063',
  email: 'info@wikatranslate.net',
  address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressRegion: 'Kigali', addressCountry: 'RW' },
  areaServed: { '@type': 'City', name: 'Huye' },
};

function Huye() {
  return (
    <CityPageLayout
      title="Translation Services in Huye (Butare) Rwanda | WIKA TRANSLATE"
      description="Professional translation &amp; interpretation in Huye (Butare), Rwanda. Document &amp; certified translation for University of Rwanda, NGOs &amp; researchers. WIKA TRANSLATE. +250 788 933 063."
      keywords="translation services Huye, translation services Butare, translation company Huye Rwanda, certified translation Huye, interpretation services Huye"
      canonicalSlug="translation-services-huye"
      badge="Huye — Butare"
      h1="Translation Services in Huye (Butare), Rwanda | WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides professional translation, interpretation, and certified language services to clients in Huye (formerly Butare), Rwanda's Southern Province. Huye is home to the University of Rwanda, multiple research institutions, and a significant international NGO and academic community — all with regular translation and interpretation needs."
      cityName="Huye"
      citySchema={citySchema}
    >
      <p className="sp-lead">
        Huye, formerly known as Butare, is Rwanda's intellectual and academic center. Home to the University of Rwanda's College of Education and other faculties, the National Museum of Rwanda, and a significant community of international researchers, academics, and NGO professionals, Huye generates consistent demand for professional translation and academic language services. WIKA TRANSLATE Ltd. serves Huye clients via on-site visits and remote digital services from our headquarters in Kigali.
      </p>

      <h2>Translation Services for Huye's Academic Community<hr /></h2>
      <p>Huye's academic institutions require a wide range of language services:</p>
      <ul>
        <li><strong>Academic document translation:</strong> Research papers, theses, journal articles, and academic reports translated between English, French, and Kinyarwanda</li>
        <li><strong>Certified academic credentials:</strong> University transcripts, diplomas, and degree certificates certified for international applications</li>
        <li><strong>Research interview transcription:</strong> Qualitative research interviews and focus groups transcribed in English, Kinyarwanda, French, or other languages</li>
        <li><strong>Grant and funding applications:</strong> Research proposals and grant applications translated for international funders</li>
        <li><strong>Conference interpretation:</strong> Academic symposiums and university conferences at Huye requiring simultaneous or consecutive interpretation</li>
      </ul>

      <h2>Translation Services for NGOs in Huye<hr /></h2>
      <p>International NGOs and humanitarian organizations operating in Huye and the Southern Province require professional translation for field activities, beneficiary communication, program documentation, and reporting:</p>
      <ul>
        <li>Community survey and assessment translation (English/French ↔ Kinyarwanda)</li>
        <li>Field interview interpretation and transcription</li>
        <li>Project reports and donor documentation translation</li>
        <li>Beneficiary-facing material localization for Kinyarwanda-speaking communities</li>
        <li>Training workshop materials translation</li>
      </ul>

      <h2>On-Site and Remote Services for Huye Clients<hr /></h2>
      <p>WIKA TRANSLATE offers both on-site visits to Huye for interpretation assignments and remote services for document translation and transcription. Documents can be submitted digitally via email (info@wikatranslate.net) or WhatsApp (+250 788 933 063) and delivered electronically with fast turnaround times.</p>
      <p>For conference interpretation and larger events at the University of Rwanda or other Huye venues, our interpreters travel to your location with all necessary equipment.</p>

      <h2>Other Cities We Serve<hr /></h2>
      <ul>
        <li><Link to="/translation-services-kigali">Translation Services in Kigali (HQ)</Link></li>
        <li><Link to="/translation-services-musanze">Translation Services in Musanze</Link></li>
        <li><Link to="/translation-services-rubavu">Translation Services in Rubavu</Link></li>
        <li><Link to="/translation-services-rusizi">Translation Services in Rusizi</Link></li>
      </ul>
    </CityPageLayout>
  );
}

export default Huye;
