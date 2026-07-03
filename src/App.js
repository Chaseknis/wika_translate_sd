/* eslint-disable max-len */
import './app.css';
import './routes/styles/home.css';
import './routes/styles/about.css';
import './routes/styles/services.css';
import './routes/styles/translation.css';
import './routes/styles/faq.css';
import './routes/styles/contact.css';
import './routes/styles/footer.css';
import './routes/styles/service-pages.css';
import {
  useLocation, Routes, Route, useParams,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';
import Header from './components/Header';
import ScrollUp from './components/scrollUp';
import blogContent from './components/blogContent';
import './components/styles/BlogPost.css';
import './components/styles/socials.css';
import { LanguageProvider } from './contexts/LanguageContext';

/* Route-level code splitting — each page is its own JS chunk loaded on demand */
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Services = lazy(() => import('./routes/Services'));
const Translation = lazy(() => import('./routes/Translation'));
const FAQ = lazy(() => import('./routes/FAQ'));
const Contact = lazy(() => import('./routes/Contact'));
const Footer = lazy(() => import('./routes/footer'));
const Quotation = lazy(() => import('./components/Quotation'));
const Blog = lazy(() => import('./routes/blog'));
const Industries = lazy(() => import('./routes/Industries'));
const Languages = lazy(() => import('./routes/Languages'));
const Sectors = lazy(() => import('./routes/Sectors'));
const WhyWikaTranslate = lazy(() => import('./routes/WhyWikaTranslate'));
const OurOffices = lazy(() => import('./routes/OurOffices'));
const Quote = lazy(() => import('./routes/Quote'));
const DocumentTranslation = lazy(() => import('./routes/services/DocumentTranslation'));
const CertifiedTranslation = lazy(() => import('./routes/services/CertifiedTranslation'));
const InterpretationServices = lazy(() => import('./routes/services/InterpretationServices'));
const EquipmentRental = lazy(() => import('./routes/services/EquipmentRental'));
const Localization = lazy(() => import('./routes/services/Localization'));
const Transcription = lazy(() => import('./routes/services/Transcription'));
const CityKigali = lazy(() => import('./routes/cities/Kigali'));
const CityHuye = lazy(() => import('./routes/cities/Huye'));
const CityMusanze = lazy(() => import('./routes/cities/Musanze'));
const CityRubavu = lazy(() => import('./routes/cities/Rubavu'));
const CityNyagatare = lazy(() => import('./routes/cities/Nyagatare'));
const CityMuhanga = lazy(() => import('./routes/cities/Muhanga'));
const CityRusizi = lazy(() => import('./routes/cities/Rusizi'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const element = document.getElementById(pathname.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Helmet defer={false}>
        {/* Charset & Compatibility */}
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Title */}
        <title>Professional Translation &amp; Interpretation Services Rwanda | WIKA TRANSLATE</title>

        {/* Description */}
        <meta name="description" content="WIKA TRANSLATE Ltd. — Rwanda's best &amp; #1 translation &amp; interpretation company in Kigali. Top-rated certified, legal &amp; document translation, conference interpretation. 800+ translators, 150+ language pairs. MINIJUST notarization. Free quote in 10 min." />

        {/* Keywords */}
        <meta name="keywords" content="best translation company Rwanda, top translation company Rwanda, best translation company Kigali, top translation company Kigali, number one translation company Rwanda, translation services Rwanda, translation company Rwanda, translation company Kigali, certified translation Rwanda, interpretation services Rwanda, interpretation services Kigali, document translation Rwanda, legal translation Rwanda, Kinyarwanda translation services, French English translation Rwanda, Arabic translation Rwanda, Swahili translation Rwanda, conference interpretation Rwanda, simultaneous interpretation Kigali, consecutive interpretation Rwanda, sworn translation Rwanda, notarized translation Rwanda, MINIJUST notarization Rwanda, notarized translation for use outside Rwanda, embassy translation Kigali, NGO translation Rwanda, UN translation Rwanda, UNDP translation Rwanda, professional translators Rwanda, translation agency Rwanda, translation bureau Kigali, language services Rwanda, East Africa translation services, interpretation company Rwanda, certified translators Rwanda, court translation Rwanda, medical translation Rwanda, transcription services Rwanda, localization services Rwanda, interpretation equipment rental Rwanda, language company Kigali, WIKA TRANSLATE Rwanda" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.wikatranslate.net/" />

        {/* Language & Author */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="author" content="WIKA TRANSLATE Ltd." />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content="WIKA TRANSLATE Ltd." />
        <meta property="og:locale" content="en_RW" />
        <meta property="og:title" content="Professional Translation &amp; Interpretation Services Rwanda | WIKA TRANSLATE" />
        <meta property="og:description" content="WIKA TRANSLATE Ltd. — Rwanda's #1 translation &amp; interpretation company in Kigali. Certified, legal &amp; document translation, conference interpretation. 800+ translators, 150+ language pairs. Free quote in 10 min." />
        <meta property="og:url" content="https://www.wikatranslate.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Translation &amp; Interpretation Services Rwanda | WIKA TRANSLATE" />
        <meta name="twitter:description" content="WIKA TRANSLATE Ltd. — Rwanda's #1 translation &amp; interpretation company in Kigali. 800+ translators, 150+ languages. Free quote in 10 min." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />

        {/* Structured Data — Full LocalBusiness schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'WIKA TRANSLATE Ltd.',
            alternateName: 'Wika Translate Rwanda',
            description: 'WIKA TRANSLATE Ltd. is Rwanda\'s leading professional translation and interpretation company, headquartered in Kigali, Rwanda. Services include certified document translation, legal translation, simultaneous interpretation, localization, and transcription.',
            url: 'https://www.wikatranslate.net',
            logo: 'https://www.wikatranslate.net/images/logo_wika_translate.png',
            image: 'https://www.wikatranslate.net/images/office.jpg',
            telephone: '+250788933063',
            email: 'info@wikatranslate.net',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Makuza Peace Plaza, KN 84 St',
              addressLocality: 'Kigali',
              addressCountry: 'RW',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '-1.946463734749799',
              longitude: '30.05945716766021',
            },
            areaServed: [
              { '@type': 'Country', name: 'Rwanda' },
              { '@type': 'Country', name: 'Uganda' },
              { '@type': 'Country', name: 'Kenya' },
              { '@type': 'Country', name: 'Tanzania' },
              { '@type': 'Country', name: 'Burundi' },
              { '@type': 'Country', name: 'DRC' },
              { '@type': 'AdministrativeArea', name: 'East Africa' },
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+250788933063',
              email: 'info@wikatranslate.net',
              contactType: 'customer service',
              availableLanguage: ['English', 'French', 'Kinyarwanda', 'Arabic', 'Swahili'],
            },
            openingHours: ['Mo-Su 00:00-23:59'],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Translation & Interpretation Services Rwanda',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Translation Rwanda' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Certified Legal Translation Rwanda' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interpretation Services Rwanda' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Localization Services Rwanda' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transcription Services Rwanda' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interpretation Equipment Rental Rwanda' } },
              ],
            },
            subsidiary: {
              '@type': 'Organization',
              name: 'WIKA TRANSLATE SUDAN',
              url: 'https://www.wikatranslate.us',
              telephone: '+249967200938',
              email: 'info@wikatranslate.us',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Al Emtidad Street',
                addressLocality: 'Omdurman',
                addressCountry: 'SD',
              },
            },
            sameAs: [
              'https://www.facebook.com/wikatranslate',
              'https://www.instagram.com/wikatranslate',
              'https://www.linkedin.com/company/81655771',
              'https://wa.me/250788933063',
            ],
          })}
        </script>
      </Helmet>
      <ScrollToTop />
      <ScrollUp />
      <Header />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/industries" element={<Industries />} />
          {/* New info pages */}
          <Route path="/languages" element={<Languages />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/why-wika-translate" element={<WhyWikaTranslate />} />
          <Route path="/our-offices" element={<OurOffices />} />
          <Route path="/quote" element={<Quote />} />
          {/* Service sub-pages */}
          <Route path="/services/document-translation-rwanda" element={<DocumentTranslation />} />
          <Route path="/services/certified-translation-rwanda" element={<CertifiedTranslation />} />
          <Route path="/services/interpretation-services-rwanda" element={<InterpretationServices />} />
          <Route path="/services/interpretation-equipment-rental-rwanda" element={<EquipmentRental />} />
          <Route path="/services/localization-rwanda" element={<Localization />} />
          <Route path="/services/transcription-rwanda" element={<Transcription />} />
          {/* City pages */}
          <Route path="/translation-services-kigali" element={<CityKigali />} />
          <Route path="/translation-services-huye" element={<CityHuye />} />
          <Route path="/translation-services-musanze" element={<CityMusanze />} />
          <Route path="/translation-services-rubavu" element={<CityRubavu />} />
          <Route path="/translation-services-nyagatare" element={<CityNyagatare />} />
          <Route path="/translation-services-muhanga" element={<CityMuhanga />} />
          <Route path="/translation-services-rusizi" element={<CityRusizi />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="quotation" element={<Quotation />} />
          </Route>
          <Route path="/footer" element={<Footer />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/:id"
            element={<BlogPostContent blogContent={blogContent} />}
          />
        </Routes>
      </Suspense>
    </LanguageProvider>
  );
}

function BlogPostContent({ blogContent }) {
  const { id } = useParams();
  const content = blogContent[id];

  if (!content) return <p className="blog-not-found">Blog post not found!</p>;

  const canonicalUrl = `https://www.wikatranslate.net/blog/${id}`;

  return (
    <div className="blog-container">
      <Helmet defer={false}>
        <title>
          {content.title}
          {' '}
          | Wika Translate
        </title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${content.title} | Wika Translate`} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${content.title} | Wika Translate`} />
        <meta name="twitter:description" content={content.metaDescription} />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: content.title,
            description: content.metaDescription,
            author: {
              '@type': 'Organization',
              name: content.author,
              url: 'https://www.wikatranslate.net/',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Wika Translate',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.wikatranslate.net/images/logo_wika_translate.png',
              },
            },
            datePublished: content.datePublished,
            dateModified: content.datePublished,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
            image: 'https://www.wikatranslate.net/images/og-image.jpg',
            url: canonicalUrl,
          })}
        </script>
      </Helmet>
      <h1 className="blog-title">{content.title}</h1>
      {/* eslint-disable react/no-danger */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.content) }}
      />
      {/* eslint-enable react/no-danger */}
    </div>
  );
}

BlogPostContent.propTypes = {
  blogContent: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      metaDescription: PropTypes.string.isRequired,
      keywords: PropTypes.string.isRequired,
      datePublished: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
