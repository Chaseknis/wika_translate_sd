/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import CityPageLayout from '../../components/CityPageLayout';

const citySchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'WIKA TRANSLATE Ltd. — Rusizi Service Area',
  description: 'Translation and interpretation services in Rusizi, Western Province, Rwanda. Cross-border translation between Rwanda, Burundi, and DRC.',
  url: 'https://www.wikatranslate.net/translation-services-rusizi',
  telephone: '+250788933063',
  email: 'info@wikatranslate.net',
  address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' },
  areaServed: { '@type': 'City', name: 'Rusizi' },
};

function Rusizi() {
  return (
    <CityPageLayout
      title="Translation Services in Rusizi, Rwanda | WIKA TRANSLATE"
      description="Translation &amp; interpretation in Rusizi, Western Province, Rwanda. Cross-border Rwanda–Burundi–DRC translation. Document &amp; certified translation. WIKA TRANSLATE. +250 788 933 063."
      keywords="translation services Rusizi, translation Rusizi Rwanda, cross-border translation Rwanda Burundi, certified translation Rusizi, Kirundi translation Rwanda, interpretation Rusizi"
      canonicalSlug="translation-services-rusizi"
      badge="Rusizi"
      h1="Translation Services in Rusizi, Rwanda | WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides professional translation and interpretation services to clients in Rusizi, Rwanda's Western Province. Rusizi borders Burundi and the Democratic Republic of Congo, creating a unique multilingual environment where English, French, Kinyarwanda, Swahili, Kirundi, and Lingala are all regularly used in business, trade, and humanitarian operations."
      cityName="Rusizi"
      citySchema={citySchema}
    >
      <p className="sp-lead">
        Rusizi District occupies a strategic corner of Rwanda where the country's borders meet Burundi and the DRC. The district is a major transit and trade hub, with significant cross-border commerce, NGO operations, and humanitarian activity. The coexistence of Rwandan, Burundian, and Congolese communities and businesses creates strong demand for translation across multiple language combinations — particularly English, French, Kinyarwanda, Kirundi, and Swahili.
      </p>

      <h2>Cross-Border Translation — Rwanda, Burundi & DRC<hr /></h2>
      <p>Rusizi's position at the intersection of three countries creates unique translation needs:</p>
      <ul>
        <li><strong>Rwanda–Burundi trade documentation:</strong> Commercial contracts, import/export documents, and business correspondence in French, Kirundi, and English</li>
        <li><strong>Humanitarian and NGO translation:</strong> Community communication, beneficiary materials, and project documents across Kirundi, Kinyarwanda, French, and English</li>
        <li><strong>Legal and official documents:</strong> Cross-border legal matters requiring certified translation recognized in multiple jurisdictions</li>
        <li><strong>Kirundi translation:</strong> WIKA TRANSLATE provides specialized Kirundi translation services, essential for working with Burundian communities and organizations</li>
      </ul>

      <h2>Translation Services for NGOs and Humanitarian Organizations in Rusizi<hr /></h2>
      <ul>
        <li>Refugee and displacement documentation</li>
        <li>Community health communication in Kirundi and Kinyarwanda</li>
        <li>NGO project reports and donor documentation</li>
        <li>Field interview interpretation and transcription</li>
        <li>Training and capacity-building materials</li>
      </ul>

      <h2>Kirundi Translation Services — A Specialty<hr /></h2>
      <p>WIKA TRANSLATE provides professional Kirundi translation — a rarer language pair that is essential for organizations working with Burundian communities in Rusizi and across Rwanda. We offer English ↔ Kirundi, French ↔ Kirundi, and Kinyarwanda ↔ Kirundi translation for documents and interpretation.</p>

      <h2>Other Cities We Serve<hr /></h2>
      <ul>
        <li><Link to="/translation-services-kigali">Kigali (HQ)</Link></li>
        <li><Link to="/translation-services-rubavu">Rubavu (Gisenyi)</Link></li>
        <li><Link to="/translation-services-muhanga">Muhanga</Link></li>
        <li><Link to="/translation-services-huye">Huye (Butare)</Link></li>
      </ul>
    </CityPageLayout>
  );
}

export default Rusizi;
