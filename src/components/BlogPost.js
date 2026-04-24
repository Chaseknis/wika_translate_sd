import PropTypes from 'prop-types';
import './styles/BlogPost.css';

function BlogPost({
  title, content, metaDescription, keywords,
}) {
  return (
    <div className="blog-post-page">
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />

      <div className="blog-post-header">
        <h1 className="blog-post-title">{title}</h1>
        <hr className="blog-post-divider" />
      </div>

      <div className="blog-post-content">
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div className="blog-post-cta">
        <p>
          Interested in professional translation services?
          {' '}
          <a href="/contact" className="blog-post-cta-link">Contact us</a>
          {' '}
          today!
        </p>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default BlogPost;
