/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/ServicePageLayout';

const faqs = [
  { q: 'What is a certified translation in Rwanda?', a: 'A certified translation in Rwanda is a translated document accompanied by a signed statement from the translator or WIKA TRANSLATE confirming that the translation is accurate and complete to the best of their knowledge and ability. This statement gives the translation legal validity and makes it acceptable to courts, embassies, and government bodies.' },
  { q: 'When do I need a certified translation in Rwanda?', a: 'You need a certified translation in Rwanda when submitting documents to Rwandan courts, applying for visas at embassies in Kigali, enrolling at universities, registering a business with RDB, filing with the Rwanda Revenue Authority, applying for immigration status, or submitting documents to any government ministry. Certified translations are required whenever official bodies need to verify the accuracy of a translated document.' },
  { q: 'What is the difference between a certified and a notarized translation?', a: 'A certified translation is signed and certified by the translator or translation agency (WIKA TRANSLATE) confirming accuracy. A notarized translation is a certified translation that has additionally been authenticated by a public notary who verifies the identity of the translator and certifies the document for legal use. In Rwanda, notarization is performed at the MINIJUST (Ministry of Justice) notary\'s office and is required when documents will be used outside Rwanda — for example, for apostille, visa applications to certain countries, foreign university enrollment, or international legal proceedings. WIKA TRANSLATE prepares the certified translation and assists clients in obtaining MINIJUST notarization.' },
  { q: 'Can WIKA TRANSLATE get my translation notarized at MINIJUST for use outside Rwanda?', a: 'Yes. WIKA TRANSLATE provides certified translation of your documents and assists with obtaining notarization at the MINIJUST (Ministry of Justice) notary\'s office in Rwanda. Notarized translations via MINIJUST are required when official documents will be used outside Rwanda — such as for apostille certification, international immigration applications, foreign court proceedings, or enrollment at universities abroad. We handle the full process: certified translation first, then facilitation of MINIJUST notary authentication. Contact us at info@wikatranslate.net or +250 788 933 063 to confirm requirements for your destination country.' },
  { q: 'Does WIKA TRANSLATE\'s certified translation accepted by embassies in Kigali?', a: 'Yes. WIKA TRANSLATE Ltd. has provided certified translations accepted by numerous embassies in Kigali, including European, North American, Middle Eastern, and African missions. We are experienced with the documentation requirements of major embassy visa offices. If you are applying to a specific embassy, contact us and we can confirm the format required.' },
  { q: 'Can WIKA TRANSLATE certify translations of birth certificates in Rwanda?', a: 'Yes. We provide certified translations of birth certificates, as well as marriage certificates, divorce decrees, death certificates, academic transcripts, diplomas, police clearances, passports, and all other personal documents. Our certified translations are accepted by Rwandan institutions and international organizations.' },
  { q: 'How long does a certified translation take at WIKA TRANSLATE?', a: 'Standard certified translations of one to five pages are typically completed within 24–48 hours. Urgent certified translations can be delivered within a few hours. Contact us at info@wikatranslate.net or +250 788 933 063 for your specific timeline.' },
  { q: 'What is sworn translation and is it different from certified?', a: 'A sworn translation is carried out by a translator who has taken a legal oath before a court or government authority. Requirements for sworn translation vary by country. In Rwanda, certified translation by a recognized professional translation agency such as WIKA TRANSLATE Ltd. is generally accepted by courts, embassies, and government bodies. Contact us to confirm the specific requirement for your institution.' },
  { q: 'How much does certified translation cost in Rwanda?', a: 'Certified translation costs depend on the document type, language pair, length, and required turnaround time. Email info@wikatranslate.net or WhatsApp +250 788 933 063 for a free quote. We provide upfront, transparent pricing with no hidden fees.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Certified Translation Services Rwanda',
  serviceType: 'Certified Legal Translation',
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
  description: 'Certified and legal translation services in Rwanda. WIKA TRANSLATE Ltd. provides court-accepted, embassy-accepted, and notarized translations for official documents in Kigali and across Rwanda.',
  url: 'https://www.wikatranslate.net/services/certified-translation-rwanda',
};

function CertifiedTranslation() {
  return (
    <ServicePageLayout
      title="Certified Translation Rwanda | Sworn, Legal &amp; Notarized | WIKA TRANSLATE"
      description="Certified &amp; legal translation in Rwanda — accepted by courts, embassies, RDB, RNEC &amp; universities. Sworn, notarized &amp; apostille translation. WIKA TRANSLATE Ltd., Kigali. Free quote."
      keywords="certified translation Rwanda, certified translation Kigali, legal translation Rwanda, notarized translation Rwanda, sworn translation Rwanda, sworn translator Rwanda, apostille translation Rwanda, embassy translation Kigali, embassy certified translation Rwanda, court translation Rwanda, certified translator Rwanda, official translation Rwanda, authorized translation Rwanda, certified translation for visa Rwanda, certified translation for university Rwanda, certified translation for immigration Rwanda, legal translation Kigali, birth certificate certified translation Rwanda, MINIJUST notarization Rwanda, notarized translation MINIJUST Rwanda, document notarization Rwanda, translation notarized for use outside Rwanda, official document translation Rwanda, notary translation Rwanda"
      canonicalSlug="services/certified-translation-rwanda"
      badge="Certified Translation"
      h1="Certified & Legal Translation Services in Rwanda"
      lead="WIKA TRANSLATE Ltd. provides certified, legal, and notarized translation services in Rwanda. Our certified translations are accepted by Rwandan courts, embassies in Kigali, government ministries, universities, and international organizations. We handle all official document types with precision, confidentiality, and professional certification."
      faqs={faqs}
      serviceSchema={serviceSchema}
      faqSchema
    >
      <p className="sp-lead">
        A certified translation is a translated document accompanied by a signed statement from a qualified translator or translation agency confirming that the translation is complete and accurate. In Rwanda, certified translations are required for official purposes — from visa applications at embassies in Kigali, to court submissions, university enrollment, and business registration. WIKA TRANSLATE Ltd., headquartered at Makuza Peace Plaza, KN 84 St, Kigali, is Rwanda's leading provider of certified translation services.
      </p>

      <h2>When Do You Need a Certified Translation in Rwanda?<hr /></h2>
      <p>Certified translations are required in a wide range of official contexts. WIKA TRANSLATE regularly provides certified translations for:</p>
      <ul>
        <li><strong>Visa and immigration applications</strong> at embassies and consulates in Kigali</li>
        <li><strong>Court proceedings and legal cases</strong> in Rwandan courts</li>
        <li><strong>University and academic enrollment</strong> at Rwandan and international universities</li>
        <li><strong>Business registration</strong> with the Rwanda Development Board (RDB)</li>
        <li><strong>Tax and regulatory filings</strong> with the Rwanda Revenue Authority (RRA)</li>
        <li><strong>Government ministry submissions</strong> and public institution requirements</li>
        <li><strong>Rwanda National Identification Agency (RNEC)</strong> requirements</li>
        <li><strong>International organization requirements</strong> (UN, NGOs, embassies)</li>
        <li><strong>Employment documentation</strong> for international organizations and government roles</li>
      </ul>

      <h2>Types of Certified Translation We Provide<hr /></h2>

      <h3>Court-Certified Translation Rwanda</h3>
      <p>Our court-certified translations meet the documentation standards required by Rwandan courts for legal proceedings. We translate contracts, affidavits, evidence documents, court orders, and all litigation-related materials. Our translations preserve precise legal terminology and are formatted according to court requirements.</p>

      <h3>Embassy-Accepted Translation Kigali</h3>
      <p>Embassies in Kigali require certified translations of supporting documents for visa and immigration applications. WIKA TRANSLATE has extensive experience with the specific requirements of European, North American, Middle Eastern, and African embassies. We translate birth certificates, marriage certificates, police clearances, academic records, employment documents, and financial statements to embassy-accepted standards.</p>

      <h3>Notarized Translation Rwanda (via MINIJUST)</h3>
      <p>A notarized translation includes both the certified translator's statement and authentication by a public notary. In Rwanda, notarization is performed at the <strong>MINIJUST (Ministry of Justice) notary's office</strong>. This is required when your translated documents will be <strong>used outside Rwanda</strong> — for apostille, international visa applications, enrollment at foreign universities, or use in foreign legal proceedings. WIKA TRANSLATE prepares the certified translation and facilitates MINIJUST notarization, giving you a legally authenticated document valid for international use.</p>

      <h3>Sworn Translation Rwanda</h3>
      <p>Sworn translations are carried out by translators who have taken a legal oath before a court or competent authority. For institutions requiring sworn translations, WIKA TRANSLATE can facilitate this process. Contact us to confirm whether a sworn or certified translation is required for your specific case.</p>

      <h3>Academic Certified Translation Rwanda</h3>
      <p>Universities in Rwanda and internationally require certified translations of academic credentials. We provide certified translations of degree certificates, diplomas, academic transcripts, school leaving certificates, and professional qualifications.</p>

      <h3>Immigration Document Translation Rwanda</h3>
      <p>Immigration applications frequently require certified translations of identity documents, family documents, and supporting evidence. WIKA TRANSLATE translates passports, birth certificates, marriage certificates, police clearances, bank statements, and employment letters for immigration purposes.</p>

      <h2>Legal Translation Specializations<hr /></h2>
      <p>Beyond certification, WIKA TRANSLATE's legal translators are specialists in the following areas of law:</p>

      <h3>Contract Translation Rwanda</h3>
      <p>We translate commercial contracts, employment agreements, lease agreements, service contracts, and partnership agreements. Legal contracts require precise translation of every clause, condition, and legal term to ensure the translated document has the same legal force as the original.</p>

      <h3>Litigation Document Translation</h3>
      <p>Court cases involving parties from different language backgrounds require certified translation of all documentary evidence, witness statements, expert reports, and correspondence. Our litigation translators are experienced with Rwandan and international legal proceedings.</p>

      <h3>Intellectual Property Translation</h3>
      <p>We translate patent applications, trademark registrations, copyright documents, and licensing agreements. Intellectual property translation requires technical precision combined with legal expertise to protect your IP rights across language boundaries.</p>

      <h3>Regulatory Compliance Translation</h3>
      <p>Organizations operating in Rwanda must comply with local and international regulations. We translate regulatory frameworks, compliance reports, environmental assessments, and health and safety documentation for organizations working with Rwandan government agencies and international regulatory bodies.</p>

      <h2>WIKA TRANSLATE Certification Process<hr /></h2>
      <div className="sp-process">
        <div className="sp-process-step"><div className="sp-process-num">01</div><h4>Document Review</h4><p>We assess your document, confirm the required certification type, and provide a free quote within 10 minutes.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">02</div><h4>Expert Translation</h4><p>A specialist translator with legal expertise in your language pair translates the document.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">03</div><h4>Quality Check</h4><p>A second linguist reviews for accuracy, completeness, and terminology consistency.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">04</div><h4>Certification</h4><p>WIKA TRANSLATE issues the official certification statement confirming accuracy and completeness.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">05</div><h4>Delivery</h4><p>Certified translation delivered digitally and/or as a printed document with certification stamp/signature.</p></div>
      </div>

      <h2>Institutions That Accept WIKA TRANSLATE Certified Translations<hr /></h2>
      <p>Our certified translations have been accepted by:</p>
      <ul>
        <li>Rwandan courts (primary courts, high courts, Court of Appeal)</li>
        <li>Embassies and consulates in Kigali (EU, US, UK, Canadian, UAE, Chinese, French, Belgian, Dutch, German missions and others)</li>
        <li>Rwanda Development Board (RDB)</li>
        <li>Rwanda Revenue Authority (RRA)</li>
        <li>Rwanda National Identification Agency (RNEC)</li>
        <li>University of Rwanda and private universities</li>
        <li>Rwanda Education Board</li>
        <li>Ministry of Foreign Affairs and International Cooperation</li>
        <li>UN agencies operating in Rwanda (UNDP, UNICEF, WFP, WHO, UNHCR, IOM, FAO)</li>
        <li>International NGOs and humanitarian organizations</li>
      </ul>

      <h2>Related Services<hr /></h2>
      <ul>
        <li><Link to="/services/document-translation-rwanda">Document Translation Services</Link></li>
        <li><Link to="/services/interpretation-services-rwanda">Interpretation Services Rwanda</Link></li>
        <li><Link to="/services/interpretation-equipment-rental-rwanda">Equipment Rental Rwanda</Link></li>
        <li><Link to="/services/localization-rwanda">Localization Services Rwanda</Link></li>
        <li><Link to="/services/transcription-rwanda">Transcription Services Rwanda</Link></li>
      </ul>
    </ServicePageLayout>
  );
}

export default CertifiedTranslation;
