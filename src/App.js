import './app.css';
import './routes/styles/home.css';
import './routes/styles/about.css';
import './routes/styles/services.css';
import './routes/styles/translation.css';
import './routes/styles/faq.css';
import './routes/styles/contact.css';
import './routes/styles/footer.css';
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
const SudanLanding = lazy(() => import('./routes/SudanLanding'));
const DocumentTranslation = lazy(() => import('./routes/services/DocumentTranslation'));
const CertifiedTranslation = lazy(() => import('./routes/services/CertifiedTranslation'));
const InterpretationServices = lazy(() => import('./routes/services/InterpretationServices'));
const EquipmentRental = lazy(() => import('./routes/services/EquipmentRental'));
const CityLanding = lazy(() => import('./routes/cities/CityLanding'));

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
        <title>Translation Services Sudan | Wika Translate</title>

        {/* Description */}
        <meta name="description" content="Professional translation & interpretation in Sudan for UN agencies, NGOs & embassies. Arabic, English, French & 100+ languages. Free quote in 10 min." />

        {/* Keywords */}
        <meta name="keywords" content="best translation company Sudan, top translation company Sudan, translation services Sudan, interpretation services Sudan, certified translation Sudan, Arabic English translation Sudan, legal translation Sudan, UN agencies translation Sudan, NGO translation Sudan, simultaneous interpretation Sudan, Arabic interpretation Sudan, Omdurman translation, Khartoum interpretation, Horn of Africa translation, East Africa translation, French Arabic translation Sudan, document translation Sudan, conference interpretation Sudan, WIKA TRANSLATE" />

        {/* Robots (for indexing & crawling) */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.wikatranslate.us/" />

        {/* Language Tag */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Wika Translate Sudan" />
        <meta property="og:title" content="Translation Services Sudan | Wika Translate" />
        <meta property="og:description" content="Professional translation & interpretation in Sudan for UN agencies, NGOs & embassies. Arabic, English, French & 100+ languages. Free quote in 10 min." />
        <meta property="og:url" content="https://www.wikatranslate.us/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.us/images/office.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Translation Services Sudan | Wika Translate" />
        <meta name="twitter:description" content="Professional translation & interpretation in Sudan for UN agencies, NGOs & embassies. Arabic, English, French & 100+ languages." />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/office.jpg" />

        {/* Author */}
        <meta name="author" content="Wika Translate Team" />
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
          <Route path="/translation-services-sudan" element={<SudanLanding />} />
          <Route path="/services/document-translation-sudan" element={<DocumentTranslation />} />
          <Route path="/services/certified-translation-sudan" element={<CertifiedTranslation />} />
          <Route path="/services/interpretation-services-sudan" element={<InterpretationServices />} />
          <Route path="/services/interpretation-equipment-rental-sudan" element={<EquipmentRental />} />
          <Route path="/translation-services-khartoum" element={<CityLanding city="khartoum" />} />
          <Route path="/translation-services-omdurman" element={<CityLanding city="omdurman" />} />
          <Route path="/translation-services-port-sudan" element={<CityLanding city="port-sudan" />} />
          <Route path="/translation-services-kassala" element={<CityLanding city="kassala" />} />
          <Route path="/translation-services-el-obeid" element={<CityLanding city="el-obeid" />} />
          <Route path="/translation-services-wad-madani" element={<CityLanding city="wad-madani" />} />
          <Route path="/translation-services-nyala" element={<CityLanding city="nyala" />} />
          <Route path="/translation-services-gedaref" element={<CityLanding city="gedaref" />} />
          <Route path="/translation-services-atbara" element={<CityLanding city="atbara" />} />
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

  const canonicalUrl = `https://www.wikatranslate.us/blog/${id}`;

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
        <meta property="og:image" content="https://www.wikatranslate.us/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${content.title} | Wika Translate`} />
        <meta name="twitter:description" content={content.metaDescription} />
        <meta name="twitter:image" content="https://www.wikatranslate.us/images/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: content.title,
            description: content.metaDescription,
            author: {
              '@type': 'Organization',
              name: content.author,
              url: 'https://www.wikatranslate.us/',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Wika Translate',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.wikatranslate.us/images/logo_wika_translate.png',
              },
            },
            datePublished: content.datePublished,
            dateModified: content.datePublished,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
            image: 'https://www.wikatranslate.us/images/og-image.jpg',
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
