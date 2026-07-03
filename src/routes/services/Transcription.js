/* eslint-disable max-len, react/no-unescaped-entities, react/jsx-one-expression-per-line, object-curly-newline, object-property-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/ServicePageLayout';

const faqs = [
  { q: 'What is transcription and what does WIKA TRANSLATE transcribe?', a: 'Transcription is the process of converting spoken audio or video content into written text. WIKA TRANSLATE transcribes interviews, focus groups, court hearings, conferences, medical consultations, research sessions, podcasts, corporate meetings, training workshops, and any other audio or video recording in any language.' },
  { q: 'What languages does WIKA TRANSLATE transcribe?', a: 'We provide transcription in English, French, Kinyarwanda, Arabic, Swahili, Kirundi, Luganda, Somali, Amharic, Spanish, German, Portuguese, and other languages. For multilingual recordings, we can transcribe each speaker in their respective language.' },
  { q: 'What is the difference between verbatim and clean read transcription?', a: 'Verbatim transcription captures every word spoken, including filler words (um, uh, you know), false starts, repetitions, and non-verbal sounds (laughter, pauses). Clean read (intelligent verbatim) transcription removes filler words, false starts, and repetitions while preserving the full meaning of the speech. Clean read is used for most business and academic purposes, while verbatim is used for legal and research purposes where every utterance must be captured.' },
  { q: 'How accurate is WIKA TRANSLATE\'s transcription?', a: 'WIKA TRANSLATE delivers transcription with a minimum accuracy rate of 98%. All transcripts are reviewed by a second linguist before delivery to catch errors, inaudible sections, and speaker identification issues. We flag inaudible portions using standard notation ([inaudible]) rather than guessing.' },
  { q: 'What audio and video file formats do you accept?', a: 'We accept all common audio formats (MP3, WAV, M4A, AAC, FLAC, OGG) and video formats (MP4, MOV, AVI, MKV, WMV). We can also work with video links from platforms such as YouTube, Vimeo, Zoom, and Microsoft Teams recordings.' },
  { q: 'How long does transcription take?', a: 'Turnaround time depends on the audio length and quality. As a general guide, one hour of clear audio takes approximately 4–6 hours to transcribe. Rush delivery is available. Contact us for your specific project timeline and we will confirm availability and turnaround.' },
  { q: 'Is my audio content kept confidential?', a: 'Yes. All audio, video, and resulting transcripts are handled with strict confidentiality. WIKA TRANSLATE transcriptionists are bound by professional confidentiality agreements. We do not share, store, or use client recordings beyond the scope of the transcription project.' },
  { q: 'Do you provide transcription plus translation?', a: 'Yes. WIKA TRANSLATE provides combined transcription and translation services. We first transcribe your audio or video into the source language, then translate the transcript into your required target language. This is useful for multilingual research, international conferences, court hearings, and cross-border business communications.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transcription Services Rwanda',
  serviceType: 'Audio and Video Transcription',
  provider: {
    '@type': 'LocalBusiness',
    name: 'WIKA TRANSLATE Ltd.',
    url: 'https://www.wikatranslate.net',
    telephone: '+250788933063',
    email: 'info@wikatranslate.net',
    address: { '@type': 'PostalAddress', streetAddress: 'Makuza Peace Plaza, KN 84 St', addressLocality: 'Kigali', addressCountry: 'RW' },
  },
  areaServed: { '@type': 'Country', name: 'Rwanda' },
  description: 'Professional audio and video transcription services in Rwanda. WIKA TRANSLATE transcribes interviews, conferences, court hearings, medical consultations, and research sessions in 150+ languages.',
  url: 'https://www.wikatranslate.net/services/transcription-rwanda',
};

function Transcription() {
  return (
    <ServicePageLayout
      title="Transcription Services Rwanda | Audio, Video &amp; Court | WIKA TRANSLATE"
      description="Professional audio &amp; video transcription in Rwanda — interviews, conferences, court hearings, medical consultations &amp; research. Verbatim &amp; clean-read. 150+ languages. WIKA TRANSLATE."
      keywords="transcription services Rwanda, audio transcription Rwanda, video transcription Rwanda, audio transcription Kigali, interview transcription Rwanda, conference transcription Rwanda, court transcription Rwanda, court hearing transcription Rwanda, medical transcription Rwanda, research transcription Rwanda, focus group transcription Rwanda, verbatim transcription Rwanda, clean read transcription Rwanda, transcription company Rwanda, audio typing Rwanda, video to text Rwanda, multilingual transcription Rwanda, transcription translation Rwanda"
      canonicalSlug="services/transcription-rwanda"
      badge="Transcription"
      h1="Professional Transcription Services in Rwanda"
      lead="WIKA TRANSLATE Ltd. provides accurate, confidential transcription services for audio and video recordings in any language. Whether you need verbatim or clean-read transcription for research, legal, medical, or business purposes, our experienced transcriptionists deliver precise, quality-reviewed transcripts with fast turnaround times."
      faqs={faqs}
      serviceSchema={serviceSchema}
      faqSchema
    >
      <p className="sp-lead">
        Transcription is the conversion of spoken content in audio or video recordings into written text. In Rwanda and East Africa, transcription is in high demand for qualitative research, legal proceedings, humanitarian field data collection, conference documentation, medical records, and media production. WIKA TRANSLATE Ltd. provides professional transcription services across 150+ languages, with expert human transcriptionists ensuring accuracy that automated transcription tools cannot match.
      </p>

      <h2>Types of Transcription We Provide<hr /></h2>

      <h3>Audio Transcription Rwanda</h3>
      <p>We transcribe audio recordings from any source — interviews, focus groups, telephone calls, oral history recordings, podcasts, radio broadcasts, and any other audio content. We work with MP3, WAV, M4A, AAC, FLAC, and other audio formats.</p>

      <h3>Video Transcription Rwanda</h3>
      <p>WIKA TRANSLATE transcribes video recordings including corporate presentations, training videos, documentary footage, event recordings, Zoom or Teams meeting recordings, and court or tribunal video evidence. We support MP4, MOV, AVI, and other video formats, as well as video links from online platforms.</p>

      <h3>Interview Transcription Rwanda</h3>
      <p>Research interviews — including semi-structured and unstructured interviews for academic research, organizational evaluations, and impact assessments — require accurate and confidential transcription. WIKA TRANSLATE has extensive experience transcribing research interviews for universities, international NGOs, and research institutions working in Rwanda and East Africa.</p>

      <h3>Focus Group Transcription</h3>
      <p>Focus group transcription presents the additional challenge of multiple simultaneous speakers. Our transcriptionists are experienced in differentiating and labeling speakers in group discussions, making it easier for researchers to analyze the data. We transcribe focus groups in all languages used in Rwanda and the East African region.</p>

      <h3>Court Hearing Transcription Rwanda</h3>
      <p>Court transcription is a legally sensitive service requiring verbatim accuracy, correct speaker identification, and precise recording of all proceedings. WIKA TRANSLATE provides court hearing transcription for Rwandan courts, arbitration panels, and tribunal proceedings. All court transcripts are reviewed for completeness and accuracy before delivery.</p>

      <h3>Medical Transcription Rwanda</h3>
      <p>Medical transcription involves converting physicians' notes, consultation recordings, medical histories, and clinical documentation into accurate written text. WIKA TRANSLATE's medical transcriptionists have expertise in medical terminology and follow healthcare privacy standards to protect patient confidentiality.</p>

      <h3>Conference Transcription Rwanda</h3>
      <p>Large conferences, seminars, and workshops generate valuable spoken content that organizations need in written form for reports, publications, and documentation. WIKA TRANSLATE transcribes conference proceedings in English, French, Kinyarwanda, Arabic, Swahili, and other languages — including multilingual conferences with multiple speakers.</p>

      <h3>Verbatim vs Clean Read Transcription</h3>
      <p><strong>Verbatim transcription</strong> captures every word spoken, including filler words ("um," "uh," "you know"), false starts, repetitions, laughter, and notable background sounds. This is used for legal proceedings, linguistics research, and qualitative research requiring complete accuracy of speech.</p>
      <p><strong>Clean read (intelligent verbatim) transcription</strong> removes filler words, false starts, and repetitions while preserving the full meaning and content of the speech. This produces a more readable transcript suitable for business reports, academic papers, publications, and most organizational documentation.</p>

      <h2>Languages Supported<hr /></h2>
      <div className="sp-lang-grid">
        {['English', 'French', 'Kinyarwanda', 'Arabic', 'Swahili', 'Kirundi', 'Luganda', 'Somali', 'Amharic', 'Spanish', 'German', 'Portuguese', 'Italian', 'Dutch', 'Chinese (Mandarin)'].map((lang) => (
          <span key={lang} className="sp-lang-tag">{lang}</span>
        ))}
      </div>
      <p>For multilingual recordings with multiple speakers in different languages, we provide transcription in all languages present in the recording.</p>

      <h2>Our Transcription Process<hr /></h2>
      <div className="sp-process">
        <div className="sp-process-step"><div className="sp-process-num">01</div><h4>File Submission</h4><p>Send your audio or video file via email or secure transfer. We assess it and confirm turnaround and pricing.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">02</div><h4>Transcription</h4><p>An expert human transcriptionist works through your recording, capturing all speech accurately.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">03</div><h4>Review &amp; QA</h4><p>A second reviewer checks the transcript against the recording for accuracy, speaker IDs, and completeness.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">04</div><h4>Formatting</h4><p>Transcript formatted per your requirements — with timestamps, speaker labels, and paragraph breaks.</p></div>
        <div className="sp-process-step"><div className="sp-process-num">05</div><h4>Delivery</h4><p>Final transcript delivered in your preferred format (Word, PDF, TXT, or other) within the agreed timeframe.</p></div>
      </div>

      <h2>File Formats Accepted and Delivered<hr /></h2>
      <h3>Accepted Input Formats</h3>
      <ul>
        <li><strong>Audio:</strong> MP3, WAV, M4A, AAC, FLAC, OGG, WMA</li>
        <li><strong>Video:</strong> MP4, MOV, AVI, MKV, WMV, FLV</li>
        <li><strong>Links:</strong> YouTube, Vimeo, Zoom recordings, Microsoft Teams, Google Meet</li>
      </ul>
      <h3>Delivered Output Formats</h3>
      <ul>
        <li>Microsoft Word (.docx)</li>
        <li>PDF (.pdf)</li>
        <li>Plain text (.txt)</li>
        <li>SRT/VTT subtitle files (for video captioning)</li>
        <li>Any other format on request</li>
      </ul>

      <h2>Confidentiality and Data Security<hr /></h2>
      <p>All audio and video files submitted to WIKA TRANSLATE are handled with the strictest confidentiality. Our transcriptionists sign professional confidentiality agreements covering each project. Files are transmitted via secure channels and are not stored beyond the completion of the project. For highly sensitive recordings (court proceedings, medical records, confidential research), we can arrange enhanced data security protocols on request.</p>

      <h2>Related Services<hr /></h2>
      <ul>
        <li><Link to="/services/document-translation-rwanda">Document Translation Services</Link></li>
        <li><Link to="/services/certified-translation-rwanda">Certified Translation Services</Link></li>
        <li><Link to="/services/interpretation-services-rwanda">Interpretation Services</Link></li>
        <li><Link to="/services/localization-rwanda">Localization Services</Link></li>
        <li><Link to="/services/interpretation-equipment-rental-rwanda">Equipment Rental Rwanda</Link></li>
      </ul>
    </ServicePageLayout>
  );
}

export default Transcription;
