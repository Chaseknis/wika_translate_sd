/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/ServicePageLayout';

const faqs = [
  { q: 'Does WIKA TRANSLATE provide French–Kirundi translation for Burundi?', a: 'Yes. French and Kirundi are Burundi\'s official languages, and WIKA TRANSLATE provides professional translation between both. Our Kirundi translators are native speakers with expertise in legal, government, NGO, and community communication contexts. We also provide French–English, French–Swahili, and Kirundi–English translation for Burundian clients. Kirundi is closely related to Kinyarwanda — both belong to the Rwanda-Rundi dialect continuum — giving WIKA TRANSLATE a strong linguistic foundation for Burundian language services.' },
  { q: 'How close is WIKA TRANSLATE to Burundi?', a: 'WIKA TRANSLATE Ltd. is headquartered in Kigali, Rwanda — which shares a border with Burundi at Rusizi (Cyangugu) in southwestern Rwanda and at other border crossing points. Kigali to Bujumbura is approximately 3.5–4 hours by road, and there are regular flights between the two capitals. This geographic proximity means WIKA TRANSLATE can provide fast turnaround for document translation and can deploy interpreters on-site to Bujumbura or Gitega with short notice.' },
  { q: 'Can WIKA TRANSLATE assist with translation for Burundi\'s humanitarian sector?', a: 'Yes. Burundi has significant humanitarian sector presence, including UNHCR (managing both Burundian refugees in neighbouring countries and the repatriation process), WFP, UNICEF, and numerous international NGOs. WIKA TRANSLATE provides translation and interpretation for humanitarian organisations operating in Burundi in French, Kirundi, Swahili, and English.' },
  { q: 'Does WIKA TRANSLATE provide certified translations accepted in Burundi?', a: 'Yes. WIKA TRANSLATE provides certified translations accepted by Burundian courts, government ministries, universities, and embassies in Bujumbura. We certify birth certificates, marriage certificates, academic records, legal contracts, and all official document types for use in Burundian institutions.' },
];

const schema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Translation Services Burundi', provider: { '@type': 'LocalBusiness', name: 'WIKA TRANSLATE Ltd.', url: 'https://www.wikatranslate.net', telephone: '+250788933063', email: 'info@wikatranslate.net' }, areaServed: { '@type': 'Country', name: 'Burundi' }, description: 'Professional French, Kirundi and English translation services for Burundi. WIKA TRANSLATE Ltd. serves NGOs, government, legal sector, and humanitarian organisations in Bujumbura and across Burundi.' };

function Burundi() {
  return (
    <ServicePageLayout
      title="Translation Services in Burundi | WIKA TRANSLATE East Africa"
      description="French, Kirundi &amp; English translation for Burundi — NGOs, government &amp; legal sector in Bujumbura. WIKA TRANSLATE Ltd., Kigali. Fast turnaround. Free quote in 10 min."
      keywords="translation services Burundi, translation company Bujumbura, French Kirundi translation Burundi, certified translation Burundi, Kirundi translation services, NGO translation Burundi"
      canonicalSlug="translation-services-burundi"
      badge="Burundi"
      h1="Professional Translation Services for Burundi — WIKA TRANSLATE"
      lead="WIKA TRANSLATE Ltd. provides expert French, Kirundi, and English translation and interpretation services for Burundi. Located in neighbouring Kigali, Rwanda — just 3.5 hours from Bujumbura — we offer some of the fastest turnaround times for Burundian language services in East Africa."
      faqs={faqs}
      serviceSchema={schema}
      faqSchema
    >
      <p className="sp-lead">
        Burundi and Rwanda share not only a border but a deep linguistic relationship — Kirundi and Kinyarwanda are dialects of the same Rwanda-Rundi language continuum. This gives WIKA TRANSLATE Ltd., headquartered in Kigali, Rwanda, a uniquely strong foundation for Kirundi translation and interpretation. WIKA TRANSLATE serves Burundian clients — from government ministries in Gitega to NGOs in Bujumbura and humanitarian organisations throughout the country — with fast, professional, and culturally precise language services.
      </p>

      <h2>Burundi's Language Context<hr /></h2>
      <p>Burundi has three official languages: Kirundi, French, and since 2014, English. Kirundi is the mother tongue of nearly the entire Burundian population and the primary language of public life, community communication, and local government. French is the language of formal education, national government, and professional contexts. English is increasingly used in EAC-related documentation and by international organisations.</p>
      <p>Bujumbura, the economic capital, and Gitega, the political capital since 2019, are the two main centres for translation and interpretation demand. International organisations — including UNHCR managing Burundian refugee returns, WFP nutrition programmes, UNICEF child protection, and dozens of international NGOs — require professional language services across French, Kirundi, English, and Swahili.</p>
      <p>Burundi's membership in the East African Community (EAC) since 2007 has increased demand for English and Swahili language capabilities, particularly for trade and legal documentation. The Rusizi border crossing between Rwanda and Burundi is one of the busiest in the region, reflecting the deep economic ties between the two neighbours.</p>

      <h2>Language Pairs for Burundi<hr /></h2>
      <div className="sp-lang-grid">
        {['French ↔ Kirundi', 'French ↔ English', 'Kirundi ↔ English', 'French ↔ Swahili', 'English ↔ Swahili', 'French ↔ Arabic', 'Kirundi ↔ Kinyarwanda', 'English ↔ Arabic'].map((p) => <span key={p} className="sp-lang-tag">{p}</span>)}
      </div>

      <h2>Services for Burundian Clients<hr /></h2>
      <h3>French–Kirundi Translation</h3>
      <p>The primary translation pair for Burundi is French–Kirundi. WIKA TRANSLATE's Kirundi translators are native speakers with professional expertise in legal, government, NGO programme, healthcare, and community communication contexts. We translate government policies, legal instruments, community outreach materials, beneficiary communications, project reports, and all other document types requiring Kirundi translation. Given Kirundi's close relationship with Kinyarwanda, our translators bring deep familiarity with the linguistic nuances of the Rwanda-Rundi dialect group.</p>

      <h3>Certified Translation for Burundian Documents</h3>
      <p>Our <Link to="/services/certified-translation-rwanda">certified translations</Link> are prepared for official submission to Burundian courts, embassies in Bujumbura (including European, US, and African diplomatic missions), the Ministère de la Justice, universities, and government ministries. We certify birth certificates, marriage certificates, academic records, police clearances, contracts, and all official document types.</p>

      <h3>Humanitarian Sector Translation</h3>
      <p>WIKA TRANSLATE understands the specific translation requirements of humanitarian operations. We translate UNHCR registration documentation, WFP programme materials, community feedback mechanisms, protection case files, health communication materials, and donor reports in French, Kirundi, Swahili, and English. Our translators are familiar with humanitarian terminology and the IASC common standards for humanitarian communication.</p>

      <h3>Interpretation Services</h3>
      <p>We provide <Link to="/services/interpretation-services-rwanda">simultaneous and consecutive interpretation</Link> for Burundian government events, NGO coordination meetings, high-level diplomatic gatherings, and international conferences in Bujumbura. Given WIKA TRANSLATE's proximity to Burundi (Kigali to Bujumbura: 3.5–4 hours by road), on-site interpreter deployment is straightforward with 48–72 hours' notice for smaller events.</p>

      <h3>EAC Documentation</h3>
      <p>Burundi's EAC membership requires translation between English, French, Swahili, and Kirundi for trade documents, customs declarations, business registrations, and cross-border commerce materials. WIKA TRANSLATE provides specialized EAC trade documentation translation with fast turnaround for business clients at the Rwanda-Burundi border.</p>

      <h2>Key Sectors in Burundi We Serve<hr /></h2>
      <ul>
        <li><strong>Government of Burundi:</strong> Ministries, courts, national assembly, and public institutions</li>
        <li><strong>Humanitarian and NGO Sector:</strong> UNHCR, WFP, UNICEF, IMC, Mercy Corps, and other organisations in Burundi</li>
        <li><strong>Legal Sector:</strong> Law firms, the Burundian Bar Association, and courts requiring legal translation</li>
        <li><strong>Embassies and Diplomatic Missions:</strong> Embassies in Bujumbura requiring certified document translation</li>
        <li><strong>Business Sector:</strong> Burundian companies and joint ventures requiring commercial translation</li>
        <li><strong>Academic Institutions:</strong> University of Burundi and other institutions requiring academic translation</li>
      </ul>

      <h2>Geographic Advantage — Kigali to Bujumbura<hr /></h2>
      <p>WIKA TRANSLATE's Kigali headquarters is only 3.5–4 hours from Bujumbura by road via the Rusizi border crossing — one of the most direct connections between Rwanda and Burundi. This means on-site interpretation can be arranged with relatively short lead times, and physical certified document delivery by courier is practical. We also serve clients in <Link to="/translation-services-rusizi">Rusizi, Rwanda</Link> — the Rwandan border district adjacent to Burundi.</p>
    </ServicePageLayout>
  );
}

export default Burundi;
