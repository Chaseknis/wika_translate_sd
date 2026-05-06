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
      <Helmet>
        {/* Charset & Compatibility */}
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Title (Expanded with relevant keywords) */}
        <title>
          Wika Translate
          - Professional Translation & Interpretation Services in Rwanda | Legal, Technical & More.
        </title>

        {/* Enhanced Description */}
        <meta name="description" content="Wika Translate is a leading and well-established translation Company in Rwanda, offering expert language solutions to businesses, individuals, and organizations in Kigali, and globally. Specializing in legal, technical, business, and certified translations, we deliver fast, accurate, and culturally relevant services across multiple languages. Trusted by global brands, Wika Translate ensures quality, confidentiality, and affordability, making us the preferred choice for professional translation and interpretation services." />

        {/* Expanded Keywords */}
        <meta name="keywords" content="professional translation services in rwanda, translation services in kigali, translation services in rwanda, legal translation services, technical translation services, business translation services, certified translation in rwanda, kinyarwanda translation, english translation, french translation, swahili translation services, arabic translation services, arabic translation services in rwanda, arabic translation services in kigali, arabic interpretation services, arabic interpretation services in rwanda, arabic interpretation services in kigali, german translation services, translation services in over 150 languages, rwanda interpreters for conferences, document translation in rwanda, simultaneous interpretation in kigali, simultaneous interpretation in rwanda, legal interpreters in rwanda, medical translation services, financial translation services, marketing translation services, website translation in rwanda, translation agency in east africa, language solutions in rwanda, language service provider in kigali, Arabic, translation for NGOs in rwanda, translation for businesses in rwanda, notarized translation services, conference interpretation services, professional translators for global languages, corporate translation solutions, multilingual translation services, international translation agency, french to kinyarwanda interpreters, portuguese translators, spanish translation services, italian translation services, portuguese to english translations, swahili interpreters, translation services for individuals and organizations, simultaneous interpretation equipment rental," />

        {/* Robots (for indexing & crawling) */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.wikatranslate.net/" />

        {/* Language Tag */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Wika Translate" />
        <meta property="og:title" content="Professional Translation Services in Rwanda | Wika Translate" />
        <meta property="og:description" content="Wika Translate provides specialized legal, technical, and business translation and interpretation services in Kigali, Rwanda. Trusted by global companies and individuals alike." />
        <meta property="og:url" content="https://www.wikatranslate.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        {' '}
        {/* Image for social media sharing */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="
             Wika Translate - Professional Translation & Interpretation Services in Rwanda | Legal, Technical & More."
        />
        <meta name="twitter:description" content="Offering professional translation services in Rwanda, including legal, technical, and business translations for businesses and individuals worldwide." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wika Translate",
              "url": "https://www.wikatranslate.net/",
              "logo": "https://www.wikatranslate.net/images/logo_wika_translate.png",
              "image": "https://www.wikatranslate.net/images/office.jpg",
              "description": "Wika Translate is a trusted translation and interpretation service provider in Rwanda, offering high-quality language solutions for individuals and businesses.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Makuza Peace Plaza, KN 84 St, Kigali, Rwanda",
                "addressLocality": "Kigali",
                "addressCountry": "RW",
                "postalCode": "250"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.946463734749799",
                "longitude": "30.05945716766021"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100076180103188",
                "https://www.twitter.com/wikatranslate",
                "https://www.linkedin.com/company/81655771",
                "https://www.instagram.com/wikatranslate"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+250788933063",
                "contactType": "Customer Service",
                "areaServed": "RW",
                "availableLanguage": ["English", "French", "Kinyarwanda"]
              },
              "openingHours": ["Mo-Su 00:00-23:59"],
              "priceRange": "$",
              "serviceArea": {
                "@type": "AdministrativeArea",
                "name": "Rwanda"
              }
            }
          `}
        </script>

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
          <Route path="/Services" element={<Services />} />
          <Route path="/Translation" element={<Translation />} />
          <Route path="/FAQ" element={<FAQ />} />
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
      <Helmet>
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
