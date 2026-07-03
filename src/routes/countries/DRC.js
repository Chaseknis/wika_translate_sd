/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/ServicePageLayout';

const faqs = [
  { q: 'Does WIKA TRANSLATE provide French translation for DRC clients?', a: 'Yes. French is the DRC\'s official language, and WIKA TRANSLATE Ltd. provides professional French–English, French–Swahili, French–Arabic, and French–other language translation for Congolese government bodies, international organisations, humanitarian sector, mining companies, and private clients. Our French translators are experienced with Central African French usage as well as international standard French.' },
  { q: 'Can WIKA TRANSLATE serve clients in Goma, eastern DRC?', a: 'Yes. Goma, the capital of North Kivu province, is directly adjacent to Rubavu (Gisenyi), Rwanda — separated only by the Rwandan-Congolese border. WIKA TRANSLATE\'s Kigali headquarters is approximately 4–5 hours from Goma by road via Rubavu. This proximity makes WIKA TRANSLATE particularly well-suited to serve humanitarian organisations, UN agencies, and NGOs operating in eastern DRC, where Goma is the major operational hub.' },
  { q: 'What languages does WIKA TRANSLATE translate for DRC?', a: 'For DRC clients, WIKA TRANSLATE provides translation between: French ↔ English (primary), French ↔ Swahili, English ↔ Lingala, French ↔ Lingala, English ↔ Swahili, French ↔ Arabic, and other language combinations. Lingala is one of the DRC\'s four national languages widely spoken in Kinshasa and western DRC. Swahili is the dominant language in eastern DRC.' },
  { q: 'Does WIKA TRANSLATE serve the humanitarian sector in DRC?', a: 'Yes. The DRC has one of the world\'s largest humanitarian crises, with significant presence of OCHA, MSF, WFP, UNHCR, IRC, and hundreds of other organisations. WIKA TRANSLATE provides translation of humanitarian programme documents, community communication materials, protection case files, situation reports, and beneficiary-facing content in French, Lingala, Swahili, and English for humanitarian actors in the DRC.' },
  { q: 'Does WIKA TRANSLATE provide interpretation equipment for DRC events?', a: 'Yes. WIKA TRANSLATE provides interpretation equipment rental for events in eastern DRC accessible from Rwanda, including Goma, Bukavu, and the South Kivu region. For events in Kinshasa and western DRC, we coordinate equipment and interpreter deployment on a project basis. Contact us at info@wikatranslate.net to discuss your event requirements.' },
];

const schema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Translation Services DRC Congo', provider: { '@type': 'LocalBusiness', name: 'WIKA TRANSLATE Ltd.', url: 'https://www.wikatranslate.net', telephone: '+250788933063', email: 'info@wikatranslate.net' }, areaServed: { '@type': 'Country', name: 'Democratic Republic of the Congo' }, description: 'Professional French, Lingala and Swahili translation services for DR Congo. WIKA TRANSLATE Ltd., Kigali, serves humanitarian, mining, and government sectors across the DRC including Goma and Kinshasa.' };

function DRC() {
  return (
    <ServicePageLayout
      title="Translation Services in DRC | WIKA TRANSLATE East Africa"
      description="French, Lingala &amp; Swahili translation for DR Congo — humanitarian, mining &amp; government sectors. WIKA TRANSLATE Ltd., Kigali. Close to Goma. Free quote in 10 min."
      keywords="translation services DRC Congo, translation company Kinshasa, French translation DRC, certified translation Congo, translation services Goma, humanitarian translation DRC, Lingala translation"
      canonicalSlug="translation-services-drc"
      badge="DR Congo"
      h1="Professional Translation Services for DR Congo — WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides professional French, Lingala, Swahili, and English translation and interpretation services for the Democratic Republic of Congo. Headquartered in Kigali, Rwanda — adjacent to eastern DRC — we serve humanitarian organisations, UN agencies, mining companies, legal firms, and government bodies across the DRC."
      faqs={faqs}
      serviceSchema={schema}
      faqSchema
    >
      <p className="sp-lead">
        The Democratic Republic of Congo is the largest French-speaking country in the world by population and one of Africa's most complex language environments. With French as the official language and four national languages — Lingala, Swahili, Tshiluba, and Kikongo — spoken by hundreds of millions of people, the DRC represents an enormous and ongoing demand for professional translation and interpretation services. WIKA TRANSLATE Ltd., based in neighbouring Kigali, Rwanda, is uniquely positioned to serve the DRC market — particularly eastern DRC, where Rwanda's border with Congo begins at Rubavu/Goma.
      </p>

      <h2>DRC's Language Landscape<hr /></h2>
      <p>The DRC's linguistic complexity reflects its vast geography and diverse ethnic composition. French serves as the language of national government, formal education, and official documentation. However, four national vehicular languages are essential for reaching the DRC's population: Lingala (widely spoken in Kinshasa, western, and northern DRC), Swahili (dominant in eastern DRC including Goma, Bukavu, and Lubumbashi), Tshiluba (south-central DRC), and Kikongo (southwestern DRC and the Bas-Congo region).</p>
      <p>Eastern DRC — including North Kivu (capital Goma), South Kivu (capital Bukavu), and Ituri — is home to one of the world's most complex humanitarian emergencies, with millions of internally displaced persons, armed group activity, and a massive international humanitarian response. Goma serves as the operational hub for this response, with offices for OCHA, MSF, WFP, UNHCR, IRC, ACF, and hundreds of NGOs requiring daily translation and interpretation.</p>
      <p>The DRC's mining sector — cobalt, coltan, gold, copper, and diamonds — also generates significant demand for legal, technical, and commercial translation as international mining companies operate under Congolese law and engage with local communities.</p>

      <h2>Language Pairs for DRC<hr /></h2>
      <div className="sp-lang-grid">
        {['French ↔ English', 'French ↔ Swahili', 'English ↔ Lingala', 'French ↔ Lingala', 'English ↔ Swahili', 'French ↔ Arabic', 'Swahili ↔ Kirundi', 'French ↔ Kinyarwanda', 'English ↔ Kinyarwanda'].map((p) => <span key={p} className="sp-lang-tag">{p}</span>)}
      </div>

      <h2>Services for DRC Clients<hr /></h2>
      <h3>French–English Document Translation</h3>
      <p>French–English is the primary translation pair for DRC's international sector. Government decrees, legal contracts, mining licenses, diplomatic correspondence, NGO donor reports, and institutional documents all require precise French–English translation. WIKA TRANSLATE's French translators work with Central African French conventions while meeting international standard quality requirements.</p>

      <h3>Humanitarian Sector Translation</h3>
      <p>WIKA TRANSLATE has specific expertise in humanitarian translation for eastern DRC. We translate protection case files, community feedback data, inter-agency situation reports, project proposals, beneficiary communication, and programme evaluations in French, Swahili, Lingala, and English for humanitarian actors including OCHA, MSF, WFP, UNHCR, IRC, NRC, and their implementing partners.</p>

      <h3>Border Proximity — Goma and Eastern DRC</h3>
      <p>WIKA TRANSLATE's Kigali headquarters is connected to eastern DRC via the Rwanda-Congo border at Rubavu/Goma — approximately 4–5 hours by road. Our city pages for <Link to="/translation-services-rubavu">Rubavu</Link> and <Link to="/translation-services-rusizi">Rusizi</Link> cover the Rwandan border districts closest to the DRC. For events in Goma, Bukavu, and eastern DRC provinces, WIKA TRANSLATE can deploy interpreters on-site from Rwanda with relatively short notice.</p>

      <h3>Mining and Extractive Sector Translation</h3>
      <p>International mining companies operating in the DRC require legal translation of mining codes, concession agreements, environmental impact assessments, social responsibility commitments, community engagement materials, and regulatory correspondence. WIKA TRANSLATE provides specialized technical and legal translation for the DRC's mining sector in French, English, and local languages.</p>

      <h3>Certified Translation for DRC</h3>
      <p>Our <Link to="/services/certified-translation-rwanda">certified translations</Link> include certification statements recognized by Congolese authorities, embassies in Kinshasa, and international organizations for documents including birth certificates, marriage certificates, academic records, company registration documents, and legal contracts.</p>

      <h3>Interpretation Services</h3>
      <p>We provide <Link to="/services/interpretation-services-rwanda">simultaneous and consecutive interpretation</Link> for humanitarian coordination meetings, government high-level events, mining industry forums, and international conferences in eastern DRC. For events in Kinshasa and western DRC, remote simultaneous interpretation is available immediately via digital platforms.</p>

      <h2>Key Sectors in DRC We Serve<hr /></h2>
      <ul>
        <li><strong>Humanitarian Sector:</strong> OCHA, MSF, WFP, UNHCR, IRC, NRC, ACF, and implementing partners in eastern DRC</li>
        <li><strong>Mining and Extractives:</strong> International mining companies operating under Congolese law requiring technical and legal translation</li>
        <li><strong>United Nations:</strong> MONUSCO, UNICEF, WHO, UNDP, and other UN bodies in Kinshasa and eastern DRC</li>
        <li><strong>Government of DRC:</strong> Ministries, provincial governments, and courts requiring official translation</li>
        <li><strong>Legal Sector:</strong> Law firms, notaries, and legal practitioners requiring contract and legal document translation</li>
        <li><strong>Private Sector:</strong> Congolese businesses and joint ventures requiring commercial translation and localization</li>
      </ul>
    </ServicePageLayout>
  );
}

export default DRC;
