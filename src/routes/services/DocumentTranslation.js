/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/ServicePageLayout';

const faqs = [
  { q: 'What types of documents does WIKA TRANSLATE translate in Rwanda?', a: 'WIKA TRANSLATE translates all document types including legal contracts and court orders, official documents (birth certificates, marriage certificates, passports, academic transcripts), business documents, medical records, financial statements, government policies, and technical manuals. If you have a document that needs translation in Rwanda, we can help.' },
  { q: 'How do I submit my documents for translation?', a: 'Email your documents to info@wikatranslate.net or send them via WhatsApp to +250 788 933 063. Our team reviews your documents and provides a free quote within 10 minutes. You can also visit our office at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda.' },
  { q: 'How long does document translation take in Rwanda?', a: 'Turnaround times depend on document length and complexity. Standard documents (1–5 pages) are typically completed within 24–48 hours. Urgent translations can be delivered within a few hours for an additional fee. Large projects are delivered according to an agreed schedule. Contact us to discuss your deadline.' },
  { q: 'Is my document kept confidential?', a: 'Yes. WIKA TRANSLATE treats all client documents with the strictest confidentiality. Our translators are bound by professional confidentiality agreements. We do not share, copy, or retain your documents beyond the scope of the project.' },
  { q: 'What languages does WIKA TRANSLATE translate documents into?', a: 'We translate documents between English, French, Kinyarwanda, Arabic, Swahili, Kirundi, Luganda, Somali, Amharic, Spanish, German, Chinese (Mandarin), Portuguese, Italian, Dutch, and many other languages. Contact us for any language pair not listed.' },
  { q: 'Does WIKA TRANSLATE provide certified document translation in Rwanda?', a: 'Yes. We provide certified translations for official documents that require a translator\'s certification statement. These are accepted by Rwandan courts, embassies in Kigali, government ministries, universities, and international organizations. See our certified translation page for more details.' },
  { q: 'What is the cost of document translation in Rwanda?', a: 'Translation costs depend on the document type, language pair, length, complexity, and required turnaround time. Email info@wikatranslate.net or WhatsApp +250 788 933 063 for a free quote. We provide transparent, competitive pricing with no hidden fees.' },
  { q: 'Do you serve clients outside Kigali?', a: 'Yes. WIKA TRANSLATE serves clients throughout Rwanda including Huye, Musanze, Rubavu, Nyagatare, Muhanga, Rwamagana, Rusizi, and Karongi. We also serve clients across East Africa and internationally via email and WhatsApp. Documents can be submitted and delivered digitally.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Document Translation Services Rwanda',
  serviceType: 'Document Translation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'WIKA TRANSLATE Ltd.',
    url: 'https://www.wikatranslate.net',
    telephone: '+250788933063',
    email: 'info@wikatranslate.net',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Makuza Peace Plaza, KN 84 St',
      addressLocality: 'Kigali',
      addressCountry: 'RW',
    },
  },
  areaServed: { '@type': 'Country', name: 'Rwanda' },
  description: 'Professional document translation services in Rwanda. WIKA TRANSLATE Ltd. translates legal, official, business, medical, financial, government, and technical documents across 150+ language pairs.',
  url: 'https://www.wikatranslate.net/services/document-translation-rwanda',
};

function DocumentTranslation() {
  return (
    <ServicePageLayout
      title="Document Translation Services Rwanda | Certified & Official | WIKA TRANSLATE"
      description="Professional document translation in Rwanda — legal, official, business, medical &amp; technical documents. Birth certificates, passports, contracts &amp; more. 150+ languages. Free quote."
      keywords="document translation Rwanda, document translation Kigali, legal document translation Rwanda, official document translation Rwanda, birth certificate translation Rwanda, marriage certificate translation Rwanda, passport translation Rwanda, academic transcript translation Rwanda, visa document translation Rwanda, business document translation Kigali, medical document translation Rwanda, contract translation Rwanda, government document translation Rwanda, technical document translation Rwanda, certified document translation Rwanda, professional document translation Kigali"
      canonicalSlug="services/document-translation-rwanda"
      badge="Document Translation"
      h1="Professional Document Translation Services in Rwanda"
      lead="WIKA TRANSLATE Ltd. is Rwanda's leading document translation company, providing accurate, confidential, and professionally certified translations for individuals, businesses, government bodies, and international organizations across Rwanda and East Africa."
      faqs={faqs}
      serviceSchema={serviceSchema}
      faqSchema
    >
      {/* AI-citation definition paragraph */}
      <p className="sp-lead">
        Document translation is the process of converting written documents from one language to another while preserving the original meaning, tone, formatting, and legal or technical accuracy. In Rwanda, where Kinyarwanda, French, and English are all official languages — and where international organizations, embassies, and global companies operate — the demand for precise document translation is constant. WIKA TRANSLATE Ltd., headquartered at Makuza Peace Plaza, KN 84 St, Kigali, Rwanda, provides professional document translation services across more than 150 language pairs.
      </p>

      <h2>Types of Documents We Translate<hr /></h2>
      <p>WIKA TRANSLATE translates virtually every category of document. Our expert linguists specialize in the terminology and formatting requirements of each document type:</p>

      <h3>Legal Documents</h3>
      <p>Legal translation requires not only linguistic precision but a deep understanding of legal terminology, judicial systems, and jurisdictional differences. Our legal document translators handle:</p>
      <ul>
        <li>Commercial contracts and business agreements</li>
        <li>Court orders, judgments, and legal proceedings</li>
        <li>Power of attorney and statutory declarations</li>
        <li>Memoranda of Understanding (MoUs) and MOAs</li>
        <li>Employment contracts and HR documentation</li>
        <li>Intellectual property filings and patents</li>
        <li>Regulatory compliance documentation</li>
      </ul>

      <h3>Official and Personal Documents</h3>
      <p>We translate personal and official documents required for immigration, education, employment, and administrative purposes:</p>
      <ul>
        <li>Birth certificates, marriage certificates, and death certificates</li>
        <li>Passports, national IDs, and travel documents</li>
        <li>Academic transcripts, diplomas, and degree certificates</li>
        <li>Police clearance certificates and criminal records</li>
        <li>Divorce decrees and celibacy certificates</li>
        <li>Medical vaccination records and health certificates</li>
      </ul>

      <h3>Business Documents</h3>
      <p>Effective business communication across languages requires more than word-for-word translation. Our business document translators ensure your communications resonate professionally in the target language:</p>
      <ul>
        <li>Annual reports and corporate presentations</li>
        <li>Business proposals and tender documents</li>
        <li>Marketing materials and product brochures</li>
        <li>Board meeting minutes and corporate resolutions</li>
        <li>Company policies and procedure manuals</li>
        <li>Correspondence and business emails</li>
      </ul>

      <h3>Medical Documents</h3>
      <p>Medical translation demands absolute accuracy, as errors can have serious consequences for patient care. Our medical translators hold expertise in healthcare terminology:</p>
      <ul>
        <li>Patient medical records and hospital discharge summaries</li>
        <li>Clinical trial documentation and informed consent forms</li>
        <li>Medical device instructions and pharmaceutical documentation</li>
        <li>Prescriptions and laboratory reports</li>
        <li>Public health policies and WHO documentation</li>
      </ul>

      <h3>Financial Documents</h3>
      <p>Financial accuracy is critical for compliance, auditing, and investment decisions. Our financial translators handle:</p>
      <ul>
        <li>Audited financial statements and balance sheets</li>
        <li>Bank statements and loan agreements</li>
        <li>Insurance policies and financial contracts</li>
        <li>Investment prospectuses and fund documentation</li>
        <li>Tax returns and regulatory filings</li>
      </ul>

      <h3>Government and Public Sector Documents</h3>
      <p>We work with government ministries, public institutions, and regulatory bodies across Rwanda and East Africa to translate:</p>
      <ul>
        <li>Government policies, laws, and regulations</li>
        <li>Official notices and public announcements</li>
        <li>Tender and procurement documentation</li>
        <li>Development reports and programme evaluations</li>
        <li>UN, NGO, and humanitarian organization documents</li>
      </ul>

      <h3>Technical Documents</h3>
      <p>Technical translation requires subject-matter expertise alongside linguistic skill. Our technical translators specialize in:</p>
      <ul>
        <li>Engineering manuals and technical specifications</li>
        <li>Software and IT documentation</li>
        <li>Agricultural and scientific research papers</li>
        <li>Architectural and construction documents</li>
        <li>Patent applications and intellectual property filings</li>
      </ul>

      <h2>Language Pairs Available<hr /></h2>
      <p>WIKA TRANSLATE provides document translation across all major language pairs relevant to Rwanda and East Africa, including:</p>
      <div className="sp-lang-grid">
        {['English ↔ French', 'English ↔ Kinyarwanda', 'French ↔ Kinyarwanda', 'English ↔ Arabic', 'French ↔ Arabic', 'English ↔ Swahili', 'English ↔ Kirundi', 'English ↔ Luganda', 'English ↔ Somali', 'English ↔ Amharic', 'English ↔ Spanish', 'English ↔ German', 'English ↔ Chinese', 'English ↔ Portuguese', 'English ↔ Italian', 'English ↔ Dutch'].map((pair) => (
          <span key={pair} className="sp-lang-tag">{pair}</span>
        ))}
      </div>
      <p>We also work with any other language combination on request. Contact us to confirm availability for your specific language pair.</p>

      <h2>Our Document Translation Process<hr /></h2>
      <p>Every document at WIKA TRANSLATE goes through a rigorous five-step quality assurance process:</p>
      <div className="sp-process">
        <div className="sp-process-step"><div className="sp-process-num">01</div><h4>Document Submission</h4><p>Email or WhatsApp your document. We assess it and provide a free quote within 10 minutes.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">02</div><h4>Assignment</h4><p>Your document is assigned to a specialist translator with expertise in your subject area and language pair.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">03</div><h4>Translation</h4><p>The translator produces an accurate, culturally relevant translation that preserves the original meaning and intent.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">04</div><h4>Proofreading & Editing</h4><p>A second linguist reviews the translation for accuracy, grammar, consistency, and terminology.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">05</div><h4>Quality Review</h4><p>A final review ensures the document meets WIKA TRANSLATE's quality standards before delivery.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">06</div><h4>Secure Delivery</h4><p>The completed translation is delivered securely via email or in person at our Kigali office.</p></div>
      </div>

      <h2>Why Choose WIKA TRANSLATE for Document Translation in Rwanda?<hr /></h2>
      <p>WIKA TRANSLATE Ltd. is Rwanda's most trusted professional translation company, chosen by UN agencies, NGOs, embassies, government bodies, law firms, and private sector clients. Here is why organizations choose us:</p>
      <ul>
        <li><strong>Expert linguists:</strong> Our network of over 800 professional translators includes native speakers and certified professionals across 150+ languages.</li>
        <li><strong>Subject-matter expertise:</strong> We assign each document to a translator specializing in the relevant field — legal, medical, financial, technical, or general.</li>
        <li><strong>Speed and reliability:</strong> Standard documents completed in 24–48 hours. Urgent translations available.</li>
        <li><strong>Strict confidentiality:</strong> All translators are bound by professional confidentiality agreements. Your documents are never shared or retained.</li>
        <li><strong>Certified translations available:</strong> We provide certified translations accepted by Rwandan courts, embassies, and government bodies.</li>
        <li><strong>Local presence:</strong> Our office at Makuza Peace Plaza, Kigali is open to drop-off and collection of physical documents.</li>
        <li><strong>East Africa coverage:</strong> We serve clients in Rwanda, Uganda, Kenya, Tanzania, Burundi, DRC, and beyond.</li>
      </ul>

      <h2>Cities Served in Rwanda<hr /></h2>
      <p>WIKA TRANSLATE provides document translation services to clients across all of Rwanda's major cities and districts. We offer both on-site and remote (digital) services:</p>
      <ul>
        <li><Link to="/translation-services-kigali"><strong>Kigali</strong></Link> — Our headquarters and primary service hub</li>
        <li><Link to="/translation-services-huye">Huye (Butare)</Link> — Including the University of Rwanda and academic institutions</li>
        <li><Link to="/translation-services-musanze">Musanze</Link> — Serving NGOs, tourism, and conservation organizations</li>
        <li><Link to="/translation-services-rubavu">Rubavu (Gisenyi)</Link> — Serving businesses engaged in cross-border trade with DRC</li>
        <li><Link to="/translation-services-nyagatare">Nyagatare</Link> — Eastern Province</li>
        <li><Link to="/translation-services-muhanga">Muhanga</Link> — Southern Province</li>
        <li><Link to="/translation-services-rusizi">Rusizi</Link> — Serving clients near the Burundi and DRC borders</li>
        <li>Rwamagana, Karongi, and all other districts nationwide</li>
      </ul>

      <h2>Related Services<hr /></h2>
      <p>Looking for other language services? WIKA TRANSLATE also provides:</p>
      <ul>
        <li><Link to="/services/certified-translation-rwanda">Certified &amp; Legal Translation</Link> — For official documents requiring certification</li>
        <li><Link to="/services/interpretation-services-rwanda">Interpretation Services</Link> — Simultaneous and consecutive interpretation</li>
        <li><Link to="/services/interpretation-equipment-rental-rwanda">Interpretation Equipment Rental</Link> — For conferences and events</li>
        <li><Link to="/services/localization-rwanda">Localization Services</Link> — Cultural adaptation for websites, apps, and marketing</li>
        <li><Link to="/services/transcription-rwanda">Transcription Services</Link> — Audio and video transcription</li>
      </ul>
    </ServicePageLayout>
  );
}

export default DocumentTranslation;
