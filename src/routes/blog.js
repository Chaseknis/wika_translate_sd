import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import blogContent from '../components/blogContent';
import SiteFooter from '../components/SiteFooter';
import './styles/blog.css';
import './styles/about.css';

function Blog() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const aboutTitles = [
    ['Insights on', ' Multilingual', ' Communication'],
    ['Exploring the', ' Art of', ' Translation'],
    ['Staying Ahead in', ' Language Services', ' Trends'],
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Wika Translate | Translation &amp; Interpretation Insights</title>
        <meta name="description" content="Read the latest articles and insights from Wika Translate on translation, interpretation, language services, and multilingual communication in Rwanda and beyond." />
        <meta name="keywords" content="translation blog Rwanda, interpretation articles Kigali, language services insights, multilingual communication blog, Wika Translate blog" />
        <link rel="canonical" href="https://www.wikatranslate.net/blog" />
        <meta property="og:title" content="Blog | Translation &amp; Interpretation Insights - Wika Translate" />
        <meta property="og:description" content="Expert articles on translation, interpretation, and language services from Wika Translate — Rwanda's leading professional language agency." />
        <meta property="og:url" content="https://www.wikatranslate.net/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Translation &amp; Interpretation Insights - Wika Translate" />
        <meta name="twitter:description" content="Expert articles on translation, interpretation, and language services from Wika Translate — Rwanda's leading professional language agency." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
      </Helmet>

      {/* ── Hero ── */}
      <div className="about_title_main_container">
        <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted playsInline preload="none" onError={(e) => { e.target.style.display = 'none'; }}>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="about_main_title_wrapper">
          <div className="about_best_ad">
            <h2>
              Blog
              <hr />
            </h2>
          </div>
          <div className="about_main_title">
            <h1 className="title">
              <span className="stroke_text">{aboutTitles[activeIndex][0]}</span>
              <span>{aboutTitles[activeIndex][1]}</span>
              <span>{aboutTitles[activeIndex][2]}</span>
            </h1>
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              Wika Translate&apos;s blog is your go-to resource for insightful articles, tips, and
              updates on the world of translation and interpretation. Whether you&apos;re looking
              to stay informed about the latest industry trends, explore expert advice on effective
              communication across languages, or dive deeper into the cultural nuances that shape
              our services, our blog provides valuable content for professionals and language
              enthusiasts alike.
            </p>
          </div>
        </div>
        <div className="overlay" />
      </div>

      {/* ── Blog list ── */}
      <section className="blog-section">
        <div className="blog-section-header">
          <h2>
            Latest Articles
            <hr />
          </h2>
          <p>
            Stay informed with our latest insights on translation, interpretation, and
            language services from the Wika Translate team.
          </p>
        </div>
        <div className="blog-list">
          {Object.keys(blogContent).map((id) => (
            <div key={id} className="blog-preview">
              <h3>{blogContent[id].title}</h3>
              <p>{blogContent[id].metaDescription}</p>
              <Link to={`/blog/${id}`}>{blogContent[id].anchorText}</Link>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default Blog;
