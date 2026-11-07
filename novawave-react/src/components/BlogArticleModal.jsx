import { useState, useEffect } from 'react';

export default function BlogArticleModal({ article, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="blog-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div
        className="blog-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="blog-modal-topbar">
          <div className="blog-modal-tags">
            <span className="blog-cat-pill">{article.catLabel}</span>
            <span className="blog-read-badge">{article.readTime}</span>
            <span className="blog-date-text">{article.date}</span>
          </div>

          <button
            type="button"
            className="blog-modal-close"
            onClick={onClose}
            aria-label="Close article"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="blog-modal-body">
          <h1 id="article-modal-title" className="blog-modal-title">
            {article.title}
          </h1>

          {/* Date & Reading Time */}
          <div className="blog-modal-date-row">
            <span className="blog-card-date">{article.date}</span>
            <span className="blog-card-meta-dot">•</span>
            <span className="blog-card-readtime">{article.readTime}</span>
          </div>

          {/* Cover Media */}
          <div className="blog-modal-cover-wrap">
            <img
              src={article.img}
              alt={article.title}
              className="blog-modal-cover-img"
            />
          </div>

          {/* Article Text Content */}
          <div className="blog-modal-paragraphs">
            {article.content?.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          {article.takeaways?.length > 0 && (
            <div className="blog-modal-takeaways">
              <h3>Key Engineering Takeaways</h3>
              <ul>
                {article.takeaways.map((item, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {article.tags?.length > 0 && (
            <div className="blog-modal-footer-tags">
              {article.tags.map((t, idx) => (
                <span key={idx} className="blog-tech-tag">#{t}</span>
              ))}
            </div>
          )}

          {/* Share Actions */}
          <div className="blog-modal-share-bar">
            <span>Share this article:</span>
            <div className="blog-share-buttons">
              <button
                type="button"
                className="blog-share-btn"
                onClick={handleCopyLink}
              >
                {copied ? '✓ Link Copied' : '🔗 Copy Link'}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-share-btn"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-share-btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
