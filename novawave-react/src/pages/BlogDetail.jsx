import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import { featuredPost, blogPosts } from '../data/blogData';

export default function BlogDetail() {
  const { slug } = useParams();

  // Combine featured and regular posts to find the matching article
  const allArticles = [featuredPost, ...blogPosts];
  const article = allArticles.find((a) => a.slug === slug);


  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Blog | Invsol Tech`;
    } else {
      document.title = 'Article Not Found | Invsol Tech';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [article, slug]);

  if (!article) {
    return (
      <>
        <main className="wrap">
          <section className="sec hero">
            <Header activePage="blog" />
            <div className="hero-in" style={{ padding: '80px 0', textAlign: 'center' }}>
              <span className="tag">404</span>
              <h1>Article Not Found</h1>
              <p className="sm" style={{ maxWidth: '500px', margin: '12px auto 0' }}>
                The engineering article you are looking for does not exist or has been relocated.
              </p>
              <div className="btns" style={{ marginTop: '24px', justifyContent: 'center' }}>
                <Link className="btn blue" to="/blog">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="wrap blog-detail-page">
        {/* Navigation & Hero Section */}
        <section className="sec hero blog-detail-hero">
          <Header activePage="blog" />


          {/* Article Header */}
          <FadeInSection>
            <header className="blog-detail-header">
              <div className="blog-detail-meta-pill-row">
                <span className="tag">{article.catLabel}</span>
              </div>

              <h1 className="blog-detail-title">{article.title}</h1>
              <p className="blog-detail-lead">{article.desc}</p>
            </header>
          </FadeInSection>

          {/* Main Cover Image */}
          <FadeInSection>
            <div className="blog-detail-cover-container">
              <img
                src={article.img}
                alt={article.title}
                className="blog-detail-cover-img"
              />
            </div>
          </FadeInSection>
        </section>

        {/* Article Body Content */}
        <section className="sec blog-detail-content-section">
          <div className="blog-detail-prose-container">
            {/* Paragraphs */}
            <div className="blog-detail-paragraphs">
              {article.content && article.content.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>



            {/* Action Bar / Share & Back */}
            <div className="blog-detail-footer-bar">
              <Link to="/blog" className="btn sm light">
                ← Back to Blog
              </Link>
              <Link to="/contact" className="btn sm blue">
                Discuss a Project
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
