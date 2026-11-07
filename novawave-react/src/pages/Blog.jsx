import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogFilters from '../components/BlogFilters';
import BlogArticleModal from '../components/BlogArticleModal';
import NewsletterForm from '../components/NewsletterForm';
import FadeInSection from '../components/FadeInSection';
import { featuredPost, blogPosts } from '../data/blogData';

export default function Blog() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    document.title = 'Blog & Engineering Insights | Invsol Tech';
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      return activeCat === 'all' || post.cat === activeCat;
    });
  }, [activeCat]);

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <main className="wrap blog-redesign-page">
        {/* 01. Premium Two-Column Hero Section */}
        <section className="sec hero blog-hero-sec hero-two-col-sec">
          <Header activePage="blog" />
          <div className="hero-container-card blog-hero-card">
            <div className="hero-content-col">
              <span className="tag">Engineering Insights</span>
              <h1 className="hero-title">
                Systems, Architecture &amp; <span className="accent">Tech Perspectives</span>
              </h1>
              <p className="hero-desc">
                Practical engineering breakdowns, scalable cloud architectures, UI/UX systems, and product delivery frameworks written directly by the engineering team at Invsol Tech.
              </p>
              <div className="hero-btns" style={{ marginBottom: 0 }}>
                <a className="btn btn-dark" href="#all-articles">
                  Explore Articles{' '}
                  <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link className="btn light" to="/contact">
                  Discuss a Topic
                </Link>
              </div>
            </div>
            <div className="hero-visual-col blog-visual-col">
              <img
                className="hero-3d-visual"
                src="/assets/img/hero-real/hero-blog-real.jpg"
                alt="Technical Writing & Engineering Insights Editorial Desk"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* 02. Featured Editorial Spotlight */}
        <FadeInSection>
          <section className="sec blog-featured-section">
            <div className="blog-section-label">
              <span className="tag">Featured Insight</span>
            </div>

            <div className="blog-featured-card">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="blog-featured-media"
                aria-label={`Read article: ${featuredPost.title}`}
              >
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="blog-featured-img"
                />
                <span className="blog-featured-badge">Cover Story</span>
              </Link>

              <div className="blog-featured-content">
                <div className="blog-meta-row">
                  <span className="blog-cat-pill">{featuredPost.catLabel}</span>
                  <span className="blog-read-badge">{featuredPost.readTime}</span>
                  <span className="blog-date-text">{featuredPost.date}</span>
                </div>

                <h2 className="blog-featured-title">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>

                <p className="blog-featured-desc">{featuredPost.desc}</p>

                <div className="blog-featured-footer">
                  <div className="blog-featured-date-meta">
                    <span className="blog-card-date">{featuredPost.date}</span>
                    <span className="blog-card-meta-dot">•</span>
                    <span className="blog-card-readtime">{featuredPost.readTime}</span>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="btn sm blue blog-read-btn"
                  >
                    Read Article
                    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 03. All Articles Directory */}
        <FadeInSection>
          <section className="sec blog-directory-section" id="all-articles">
            <div className="blog-directory-header">
              <div>
                <h2>Latest Articles</h2>
                <p className="blog-directory-subtitle">
                  Browse by technology domain or search specific engineering topics.
                </p>
              </div>
            </div>

            {/* Category Filter Bar */}
            <BlogFilters
              activeCat={activeCat}
              onSelectCat={setActiveCat}
            />

            {/* Articles Grid */}
            {filteredPosts.length > 0 ? (
              <>
                <div className="blog-posts-clean-grid">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="blog-clean-card"
                      onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                      <div className="blog-card-media-wrap">
                        <img
                          src={post.img}
                          alt={post.title}
                          loading="lazy"
                          className="blog-card-img"
                        />
                        <span className="blog-card-cat-badge">{post.catLabel}</span>
                      </div>

                      <div className="blog-card-body">
                        <h3 className="blog-card-title">
                          <Link to={`/blog/${post.slug}`} onClick={(e) => e.stopPropagation()}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="blog-card-excerpt">{post.desc}</p>

                        <div className="blog-card-footer">
                          <div className="blog-card-date-meta">
                            <span className="blog-card-date">{post.date}</span>
                            <span className="blog-card-meta-dot">•</span>
                            <span className="blog-card-readtime">{post.readTime}</span>
                          </div>

                          <Link
                            to={`/blog/${post.slug}`}
                            className="blog-card-arrow-btn"
                            aria-label={`Read article: ${post.title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="blog-empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <h3>No articles found</h3>
                <p>We couldn't find any articles matching your search or filter criteria.</p>
                <button
                  type="button"
                  className="btn sm light"
                  onClick={() => {
                    setActiveCat('all');
                    setSearchQuery('');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </section>
        </FadeInSection>

        {/* 04. Newsletter Subscription Banner */}
        <FadeInSection>
          <section className="sec blog-newsletter-section">
            <div className="blog-newsletter-box">
              <div className="blog-newsletter-text">
                <span className="tag">Subscribe to INVsol Tech</span>
                <h2>Get Practical Engineering Insights Delivered to Your Inbox</h2>
                <p>
                  Join 4,000+ engineers, product architects, and founders who receive our bi-weekly deep-dives into modern web architecture, cloud resilience, and UI/UX systems.
                </p>
              </div>
              <div className="blog-newsletter-form-wrap">
                <NewsletterForm variant="banner" />
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      {/* Reader Modal */}
      <BlogArticleModal
        article={selectedArticle}
        onClose={handleCloseArticle}
      />

      <Footer page="blog" />
    </>
  );
}
