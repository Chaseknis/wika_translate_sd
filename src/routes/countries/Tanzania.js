/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/ServicePageLayout';

const faqs = [
  { q: 'Does WIKA TRANSLATE provide Swahili translation services for Tanzania?', a: 'Yes. Swahili is one of WIKA TRANSLATE\'s strongest language capabilities. Our Swahili translators are native speakers with professional expertise in legal, business, government, and technical Swahili terminology. We provide English-Swahili, French-Swahili, Swahili-Arabic translation for Tanzanian clients including the Tanzanian government, EAC institutions based in Dar es Salaam and Arusha, NGOs, and private sector companies.' },
  { q: 'Can WIKA TRANSLATE serve the EAC secretariat in Arusha?', a: 'Yes. The East African Community secretariat is headquartered in Arusha, Tanzania, and WIKA TRANSLATE is well-positioned to serve EAC translation needs. We provide translation between English, French, and Swahili — the EAC\'s working languages — for policy documents, legal instruments, summit proceedings, trade agreements, and official correspondence. Contact us at info@wikatranslate.net for EAC-related translation requirements.' },
  { q: 'What sectors in Tanzania does WIKA TRANSLATE serve?', a: 'WIKA TRANSLATE serves tourism and hospitality operators needing multilingual content, mining and extractive industry companies requiring technical translation, Tanzanian government ministries and agencies, NGOs and humanitarian organisations, the EAC secretariat, academic and research institutions, and private sector companies in Dar es Salaam and Arusha.' },
  { q: 'How quickly can WIKA TRANSLATE deliver translations for Tanzanian clients?', a: 'Standard document translations of 1–5 pages are typically completed within 24–48 hours. Urgent translations can be delivered within a few hours. Working remotely from Kigali, WIKA TRANSLATE serves Tanzanian clients at the same speed as Rwanda-based clients. Documents are submitted digitally and translations are delivered via email or other digital means.' },
];

const schema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Translation Services Tanzania', provider: { '@type': 'LocalBusiness', name: 'WIKA TRANSLATE Ltd.', url: 'https://www.wikatranslate.net', telephone: '+250788933063', email: 'info@wikatranslate.net' }, areaServed: { '@type': 'Country', name: 'Tanzania' }, description: 'Professional translation and interpretation services for Tanzania. WIKA TRANSLATE Ltd., Kigali, provides Swahili translation, certified translation, EAC translation, and interpretation for Tanzania.' };

function Tanzania() {
  return (
    <ServicePageLayout
      title="Translation Services in Tanzania | WIKA TRANSLATE East Africa"
      description="Professional Swahili translation &amp; interpretation for Tanzania — EAC, NGOs &amp; business in Dar es Salaam. WIKA TRANSLATE Ltd., Kigali. Free quote in 10 min."
      keywords="translation services Tanzania, translation company Dar es Salaam, Swahili translation services Tanzania, certified translation Tanzania, EAC translation Arusha"
      canonicalSlug="translation-services-tanzania"
      badge="Tanzania"
      h1="Professional Translation Services for Tanzania — WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides expert Swahili translation, certified document translation, and interpretation services for organisations and individuals in Tanzania. From the EAC secretariat in Arusha to businesses in Dar es Salaam — delivered remotely from Kigali, Rwanda with full on-site availability."
      faqs={faqs}
      serviceSchema={schema}
      faqSchema
    >
      <p className="sp-lead">
        Tanzania occupies a central position in East Africa's linguistic and economic landscape. As the home country of Kiswahili — the continent's most widely spoken Bantu language and an official language of the African Union — Tanzania represents one of the most important markets for professional Swahili translation services. WIKA TRANSLATE Ltd., headquartered in Kigali, Rwanda, serves Tanzanian clients with native-quality Swahili translation, certified document translation, and simultaneous interpretation across all sectors.
      </p>

      <h2>Tanzania's Translation Landscape<hr /></h2>
      <p>Tanzania is unique in East Africa for its linguistic unity — Swahili serves as the genuine national language, bridging over 120 ethnic groups and serving as the medium of education, government, and daily life. This means high-quality Swahili translation is not merely a convenience but an operational necessity for any organisation working with Tanzanian government, communities, or the broad population.</p>
      <p>Arusha hosts the East African Community (EAC) secretariat — the political and economic bloc's administrative headquarters — generating regular demand for translation between English, French, and Swahili. The International Criminal Tribunal for Rwanda (ICTR), now succeeded by the Mechanism for International Criminal Tribunals (MICT), is also based in Arusha and historically generated significant demand for multilingual legal translation.</p>
      <p>Dar es Salaam, Tanzania's commercial capital and largest city, is a major centre for international trade, finance, tourism, mining, and NGO operations. Dodoma, the political capital, hosts the National Assembly and government ministries. Both cities generate consistent demand for document translation, business localization, and interpretation services.</p>

      <h2>Language Pairs for Tanzania<hr /></h2>
      <div className="sp-lang-grid">
        {['English ↔ Swahili', 'French ↔ Swahili', 'Swahili ↔ Arabic', 'English ↔ French', 'English ↔ Arabic', 'French ↔ Arabic', 'English ↔ Portuguese', 'English ↔ Chinese', 'English ↔ German'].map((p) => <span key={p} className="sp-lang-tag">{p}</span>)}
      </div>
      <p>English–Swahili is the primary translation pair for Tanzania. French–Swahili is essential for EAC documentation and relations with francophone East African partners. Arabic–Swahili serves Tanzania's Muslim communities concentrated in Zanzibar and coastal regions. European language pairs (German, Italian, French, Portuguese) are increasingly important for Tanzania's tourism, mining, and trade sectors.</p>

      <h2>Services for Tanzanian Clients<hr /></h2>
      <h3>Swahili Translation — Tanzania's Core Need</h3>
      <p>WIKA TRANSLATE's Swahili translators are native speakers with professional training in legal, business, government, NGO, and technical Swahili. We translate between Standard Swahili (as used in Tanzania's government and education system), East African Swahili variants, and all major target languages. Our Swahili translations maintain the register, tone, and cultural appropriateness required for each context.</p>

      <h3>EAC and Regional Institutions</h3>
      <p>The EAC secretariat in Arusha requires regular translation between English, French, and Swahili. WIKA TRANSLATE provides translation of EAC policy documents, summit communiqués, legal instruments, trade facilitation documents, and protocol texts. Our translators understand EAC institutional terminology and the political sensitivity required for official documents.</p>

      <h3>Certified Translation for Tanzania</h3>
      <p>Our <Link to="/services/certified-translation-rwanda">certified translations</Link> are accepted by Tanzanian courts, the Tanzania Revenue Authority, the Business Registrations and Licensing Agency (BRELA), and embassies in Dar es Salaam. We certify birth certificates, marriage certificates, academic credentials, legal contracts, and all official document types.</p>

      <h3>Tourism and Hospitality Localization</h3>
      <p>Tanzania's world-class tourism sector — centred on Serengeti, Kilimanjaro, Zanzibar, and Ngorongoro — attracts visitors from Europe, Asia, North America, and the Middle East. WIKA TRANSLATE provides <Link to="/services/localization-rwanda">website localization</Link>, marketing material translation, and multilingual content creation for tourism operators, lodges, and travel agencies in German, Italian, French, Chinese, Arabic, and other languages.</p>

      <h3>Mining and Extractive Industries</h3>
      <p>Tanzania's mining sector — gold, tanzanite, diamonds, natural gas — involves major international operators requiring technical translation for contracts, environmental impact assessments, regulatory compliance documents, and community engagement materials. WIKA TRANSLATE provides specialized technical translation for the extractive industries sector.</p>

      <h2>Key Sectors We Serve in Tanzania<hr /></h2>
      <ul>
        <li><strong>EAC Secretariat (Arusha):</strong> EAC policy, legal, and summit documentation</li>
        <li><strong>Tanzanian Government:</strong> Ministries, the National Assembly, Tanzania Revenue Authority, and public institutions</li>
        <li><strong>Tourism and Hospitality:</strong> Tour operators, lodges, and the Zanzibar tourism authority</li>
        <li><strong>Mining and Extractives:</strong> International mining companies and their Tanzanian operations</li>
        <li><strong>NGOs and Humanitarian:</strong> International NGOs with Tanzania country offices</li>
        <li><strong>Academic Institutions:</strong> University of Dar es Salaam, Muhimbili University, and research institutions</li>
        <li><strong>Private Sector:</strong> Tanzanian businesses and multinationals requiring business translation</li>
      </ul>

      <p>Ready to get started? Contact WIKA TRANSLATE Ltd. today: 📍 Makuza Peace Plaza, KN 84 St, Kigali, Rwanda | 📞 <a href="tel:+250788933063">+250 788 933 063</a> | ✉️ <a href="mailto:info@wikatranslate.net">info@wikatranslate.net</a></p>
    </ServicePageLayout>
  );
}

export default Tanzania;
