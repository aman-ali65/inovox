import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [toastMessage, setToastMessage] = useState('');

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Portfolio | Invsol Tech`;
    } else {
      document.title = 'Project Not Found | Invsol Tech';
    }
  }, [project]);

  const handleLivePreview = () => {
    if (project?.previewUrl) {
      window.open(project.previewUrl, '_blank', 'noopener,noreferrer');
    } else {
      setToastMessage('Live preview coming soon – deployment integration is in progress.');
      setTimeout(() => setToastMessage(''), 4000);
    }
  };

  if (!project) {
    return (
      <>
        <main className="wrap">
          <section className="sec hero">
            <Header activePage="portfolio" />
            <div className="hero-in" style={{ padding: '80px 0' }}>
              <span className="tag">404</span>
              <h1>Project Not Found</h1>
              <p className="sm">The project you requested does not exist or has been relocated.</p>
              <div className="btns" style={{ marginTop: '24px' }}>
                <Link className="btn blue" to="/portfolio">
                  ← Back to Portfolio
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
      <main className="wrap project-detail-minimal-page">
        {/* Navigation & Header */}
        <section className="sec hero project-detail-hero">
          <Header activePage="portfolio" />

          {/* Toast Notification */}
          {toastMessage && (
            <div className="project-toast-banner" role="status" aria-live="polite">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{toastMessage}</span>
              <button
                type="button"
                onClick={() => setToastMessage('')}
                className="toast-close"
                aria-label="Close message"
              >
                ×
              </button>
            </div>
          )}

          {/* 01. Project Header */}
          <div className="project-header-container">
            <div className="project-header-info">
              <span className="project-category-badge">{project.category}</span>
              <h1 className="project-detail-title">{project.name}</h1>
              <p className="project-detail-intro">{project.shortDesc}</p>
            </div>

            {/* Main Project Image */}
            <div className="project-main-image-wrap">
              <img
                src={project.image}
                alt={`${project.name} Banner`}
                className="project-main-image"
              />
            </div>
          </div>
        </section>

        {/* 02. Project Overview */}
        <FadeInSection>
          <section className="sec project-compact-section">
            <div className="project-overview-grid">
              <div className="overview-card">
                <h3>What It Does</h3>
                <p>{project.overview.whatItDoes}</p>
              </div>

              <div className="overview-card">
                <h3>Problem It Solves</h3>
                <p>{project.overview.problemSolved}</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 03. Key Features */}
        <FadeInSection>
          <section className="sec project-compact-section">
            <div className="section-head-simple">
              <h2>Key Features</h2>
              <p>Core functionalities engineered specifically for {project.name}.</p>
            </div>

            <div className="features-clean-grid">
              {project.keyFeatures.map((feat, idx) => (
                <div className="feature-clean-card" key={idx}>
                  <div className="feature-check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* 04. Technology Stack */}
        <FadeInSection>
          <section className="sec project-compact-section">
            <div className="section-head-simple">
              <h2>Technology Stack</h2>
              <p>Technologies deployed in this project.</p>
            </div>

            <div className="tech-stack-clean-row">
              {project.techStack.frontend?.length > 0 && (
                <div className="tech-column">
                  <h4>Frontend</h4>
                  <div className="tech-badge-list">
                    {project.techStack.frontend.map((t, i) => (
                      <span className="tech-clean-pill" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.backend?.length > 0 && (
                <div className="tech-column">
                  <h4>Backend</h4>
                  <div className="tech-badge-list">
                    {project.techStack.backend.map((t, i) => (
                      <span className="tech-clean-pill" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.database?.length > 0 && (
                <div className="tech-column">
                  <h4>Database</h4>
                  <div className="tech-badge-list">
                    {project.techStack.database.map((t, i) => (
                      <span className="tech-clean-pill" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </FadeInSection>

        {/* 05. Project Actions */}
        <FadeInSection>
          <section className="sec project-actions-section">
            <div className="actions-clean-bar">
              <Link to="/portfolio" className="btn light">
                ← Back to Portfolio
              </Link>

              <button
                type="button"
                onClick={handleLivePreview}
                className="btn blue"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 16, height: 16, marginRight: 6 }}
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Live Preview
              </button>
            </div>
          </section>
        </FadeInSection>
      </main>

      <Footer />
    </>
  );
}
