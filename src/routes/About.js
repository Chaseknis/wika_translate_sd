import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/about.css';
import LazyLoad from 'react-lazyload';
import image3 from '../assets/image3.webp';
import videoBg5 from '../assets/videoBg5.mp4';
import SiteFooter from '../components/SiteFooter';
import { useTranslation } from '../contexts/LanguageContext';

function About() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [t]);

  useEffect(() => {
    if (navigator.userAgent === 'ReactSnap') return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>About WIKA TRANSLATE SUDAN | Sudan&apos;s Leading Translation Agency</title>
        <meta
          name="description"
          content="WIKA TRANSLATE SUDAN — Sudan's leading professional translation & interpretation company. Al Emtidad Street, Omdurman. 800+ linguists, 10M+ words translated. Trusted by UN, NGOs & embassies."
        />
        <meta
          name="keywords"
          content="about WIKA TRANSLATE SUDAN, translation agency Sudan, translation company Omdurman, interpretation agency Sudan, professional translators Sudan, UN translation agency Sudan, NGO translation agency Sudan, embassy translation Sudan"
        />
        <link rel="canonical" href="https://www.wikatranslate.us/about" />
        <meta property="og:title" content="About WIKA TRANSLATE SUDAN | Sudan&apos;s Leading Translation Agency" />
        <meta
          property="og:description"
          content="WIKA TRANSLATE SUDAN — Sudan's leading professional translation & interpretation company. 800+ linguists. Trusted by UN agencies, NGOs & embassies."
        />
        <meta property="og:url" content="https://www.wikatranslate.us/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About WIKA TRANSLATE SUDAN | Sudan&apos;s Leading Translation Agency" />
        <meta
          name="twitter:description"
          content="WIKA TRANSLATE SUDAN — Sudan's leading professional translation & interpretation company. 800+ linguists. Trusted by UN, NGOs & embassies."
        />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/office.jpg" />
      </Helmet>
      <section className="about" id="about">
        <div className="about_title_main_container">
          <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                {t.about.badge}
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{t.about.heroTitles[activeIndex][0]}</span>
                <span>{t.about.heroTitles[activeIndex][1]}</span>
                <span>{t.about.heroTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">{t.about.heroParagraph}</p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="about_main_title_content_container">
          <div className="about_wrapper">
            <div className="about_title_container">
              <div className="about_page_title">
                <h2>
                  {t.about.title}
                  <hr />
                </h2>
                <p>{t.about.p1}</p>
              </div>
              <p className="second_paragraph">{t.about.p2}</p>
              <div className="about_banner_wrapper">
                <div className="about_banner_card_wrapper">
                  <span>10,000,000+</span>
                  <p>{t.about.wordsTranslated}</p>
                </div>
                <div className="about_banner_card_wrapper">
                  <span>10,000+</span>
                  <p>{t.about.clientsServed}</p>
                </div>
                <div>
                  <a target="_blank" href="https://www.goodfirms.co/company/wika-translate" rel="noreferrer">
                    <img
                      className="goodFirms"
                      src="https://assets.goodfirms.co/badges/color-badge/translation-services-companies.svg"
                      title="Top Translation Services Company"
                      alt="Top Translation Services Company on GoodFirms"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="about_image_container">
              <div className="about_image_wrapper">
                <LazyLoad height={200} offset={100} placeholder={<div>Loading...</div>}>
                  <img src={image3} alt="Wika Translate Sudan - Professional Interpretation and Translation Services in Omdurman" style={{ width: '100%', height: 'auto' }} />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
        {/* ── Authority: Wikipedia-style company profile ── */}
        <div className="about_authority_section">
          <div className="about_authority_inner">
            <h2 className="about_authority_title">
              {t.about.authorityTitle}
              <hr />
            </h2>

            <div className="about_authority_prose">
              <p>
                <strong>WIKA TRANSLATE SUDAN</strong>
                {' '}
                (Arabic:
                {' '}
                <strong>ويكا ترانسليت السودان</strong>
                ) is Sudan&apos;s leading professional translation and interpretation
                company, headquartered at Al Emtidad Street, Omdurman, Sudan.
                The company provides certified translation, simultaneous interpretation,
                consecutive interpretation, legal translation, document translation,
                and interpretation equipment rental in Arabic, English, French, and 100+
                languages to international organizations operating in Sudan and the
                Horn of Africa region.
              </p>
              <p>
                WIKA TRANSLATE SUDAN is a subsidiary of
                {' '}
                <strong>WIKA TRANSLATE Ltd.</strong>
                . The Sudan office serves as the
                primary language services provider for UN agencies, international NGOs,
                embassies, consulates, government ministries, development banks,
                international law firms, and bilateral cooperation agencies operating
                across Sudan.
              </p>

              <h3>{t.about.servicesTitle}</h3>
              <p>WIKA TRANSLATE SUDAN provides the following professional language services:</p>
              <ul>
                <li>
                  <strong>
                    <Link to="/services/document-translation-sudan">Document Translation</Link>
                  </strong>
                  {' '}
                  — Professional translation of all document types in Arabic, English, French
                  and 100+ languages.
                </li>
                <li>
                  <strong>
                    <Link to="/services/certified-translation-sudan">Certified Translation</Link>
                  </strong>
                  {' '}
                  — Signed certified translations accepted by Sudanese courts, government
                  ministries, embassies, and international organizations.
                </li>
                <li>
                  <strong>
                    <Link to="/services/interpretation-services-sudan">
                      Simultaneous Interpretation
                    </Link>
                  </strong>
                  {' '}
                  — Real-time interpretation for conferences, UN meetings, diplomatic events,
                  and multilingual summits. Interpretation equipment rental included.
                </li>
                <li>
                  <strong>
                    <Link to="/services/interpretation-services-sudan">
                      Consecutive Interpretation
                    </Link>
                  </strong>
                  {' '}
                  — Sequential interpretation for negotiations, field visits, interviews,
                  and small-group meetings.
                </li>
                <li>
                  <strong>
                    <Link to="/services/interpretation-services-sudan">
                      Remote Interpretation
                    </Link>
                  </strong>
                  {' '}
                  — Virtual interpretation for Zoom, Teams, WebEx, and any online platform.
                </li>
                <li>
                  <strong>
                    <Link to="/services/interpretation-equipment-rental-sudan">
                      Interpretation Equipment Rental
                    </Link>
                  </strong>
                  {' '}
                  — Soundproof booths, wireless receivers, microphones, and on-site
                  technical support.
                </li>
                <li>
                  <strong>Legal Translation</strong>
                  {' '}
                  — Contracts, MoUs, court documents, bilateral agreements, and official
                  government correspondence.
                </li>
              </ul>

              <h3>Languages</h3>
              <p>
                The primary language pairs are Arabic-English, Arabic-French, and
                English-French, reflecting the three working languages of international
                organizations in Sudan. Additional languages include Swahili, Amharic,
                Somali, Tigrinya, Portuguese, Spanish, and all major European languages.
                WIKA TRANSLATE SUDAN covers 100+ languages in total.
              </p>
              <p>
                All Arabic translators and interpreters are native Sudanese Arabic speakers
                — not Modern Standard Arabic (MSA)-only professionals — ensuring accurate
                rendering of the specific terminology, register, and legal language used by
                Sudanese authorities and communities.
              </p>

              <h3>Areas Served</h3>
              <p>
                WIKA TRANSLATE SUDAN serves clients across all of Sudan, including:
                Omdurman, Khartoum, Port Sudan, Kassala, El Obeid, Wad Madani, Nyala,
                Gedaref, Atbara, Sennar, Rabak, Dongola, and Al-Qadarif. Remote
                translation and interpretation services are available to any location.
                The company also serves South Sudan, Ethiopia, Kenya, Uganda, Chad,
                and Eritrea for regional language service needs.
              </p>

              <h3>Clients</h3>
              <p>
                WIKA TRANSLATE SUDAN serves: UN agencies (UNDP, UNHCR, UNICEF, WFP,
                OCHA, IOM, WHO, UNFPA, FAO), international NGOs, embassies and consulates
                in Sudan, government ministries, development banks, international law firms,
                bilateral cooperation agencies, and humanitarian organizations.
              </p>

              <h3>Contact</h3>
              <p>
                <strong>WIKA TRANSLATE SUDAN</strong>
                <br />
                Al Emtidad Street, Omdurman, Sudan
                <br />
                Phone / WhatsApp:
                {' '}
                <a href="tel:+249967200938">+249 967 200 938</a>
                <br />
                Email:
                {' '}
                <a href="mailto:info@wikatranslate.us">info@wikatranslate.us</a>
                <br />
                Website:
                {' '}
                <a href="https://www.wikatranslate.us">www.wikatranslate.us</a>
                <br />
                Opening hours: Monday–Thursday 8:00–17:00 | Sunday 9:00–14:00
              </p>
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </>
  );
}

export default About;
