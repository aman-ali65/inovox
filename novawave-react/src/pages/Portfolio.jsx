import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';
import CountUp from '../components/CountUp';
import { projectsData } from '../data/projectsData';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.title = 'Project Portfolio | Invsol Tech';
  }, []);

  const handlePreviewClick = (project) => {
    setToastMessage(`Live preview for ${project.name} is coming soon. Production deployment integration is currently in progress.`);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <main className="wrap">
        {/* Centered Hero Section */}
        <section className="sec hero ">
          <Header activePage="portfolio" />

          {/* Toast Notification for Live Preview */}
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

          <div className="hero-in">
            <span className="tag">Selected Case Studies</span>
            <h1>
              Transforming Vision into <span className="accent">High-Impact Products</span>
            </h1>
            <p className="sm">
              Explore our verified client solutions. We engineer modern digital products that blend clean, human-centered UI with resilient, scalable technical foundations.
            </p>
            <div className="btns">
              <Link className="btn " to="/contact">
                Start a Project{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link className="btn light" to="/services">
                Explore Services{' '}
                <span className="play">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="stats">
              <div>
                <CountUp value="120+" />
                <span>Delivered Projects</span>
              </div>
              <div>
                <CountUp value="$45M+" />
                <span>Client Value Generated</span>
              </div>
              <div>
                <CountUp value="99.4%" />
                <span>On-Time Milestone Delivery</span>
              </div>
              <div>
                <CountUp value="4.9/5" />
                <span>Client Satisfaction Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Portfolio Section */}
        <FadeInSection>
          <section className="sec" id="projects">
            <div className="rowhead">
              <div>
                <span className="tag">Verified Work</span>
                <h2>
                  Featured <span className="accent">Project Portfolio</span>
                </h2>
              </div>
              <p style={{ maxWidth: '440px' }}>
                Each project represents our commitment to design precision, technical integrity, and real business outcomes. Click Details to explore the complete technical breakdown.
              </p>
            </div>

            {/* Filter categories */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                margin: '24px 0 12px',
                flexWrap: 'wrap',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '13px',
                    fontWeight: activeCategory === cat ? 700 : 600,
                    padding: '8px 18px',
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--blue, #2563eb)' : '#e2e8f0',
                    background: activeCategory === cat ? 'var(--blue, #2563eb)' : '#ffffff',
                    color: activeCategory === cat ? '#ffffff' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat === 'All' ? 'All Projects' : cat}
                </button>
              ))}
            </div>

            {/* Recreated Portfolio Grid matching Reference Image */}
            <div className="portfolio-showcase-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onPreviewClick={handlePreviewClick}
                />
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Client Impact & Delivery Standards */}
        <FadeInSection>
          <section className="sec split">
            <div>
              <span className="tag">Our Delivery Standards</span>
              <h2>
                How We Guarantee<br />
                <span className="accent">Project Success</span>
              </h2>
              <p className="lead">
                Every project at Invsol Tech follows a battle-tested software engineering lifecycle designed to minimize risk, accelerate velocity, and deliver measurable business value.
              </p>
              <Link className="btn sm" to="/contact" style={{ marginTop: '20px' }}>
                Discuss Your Requirements{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="vals">
              <div className="val">
                <div className="ico" style={{ margin: '0 auto 14px' }}>
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>Architectural Rigor</h3>
                <p>
                  Zero technical shortcuts. We engineer clean modular architectures, type-safe data pipelines, and scalable microservices built to withstand high enterprise traffic.
                </p>
              </div>

              <div className="val">
                <div className="ico" style={{ margin: '0 auto 14px' }}>
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>Agile Sprint Velocity</h3>
                <p>
                  Bi-weekly production deployments with continuous client visibility. You see working software early and often with transparent Kanban tracking.
                </p>
              </div>

              <div className="val">
                <div className="ico" style={{ margin: '0 auto 14px' }}>
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Security &amp; Compliance</h3>
                <p>
                  Built-in OWASP hardening, SOC2 compliance roadmaps, automated CI/CD security audits, and bank-grade data encryption protocols.
                </p>
              </div>

              <div className="val">
                <div className="ico" style={{ margin: '0 auto 14px' }}>
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                </div>
                <h3>Post-Launch Stewardship</h3>
                <p>
                  Our commitment does not end at deployment. We provide proactive monitoring, SLA-backed maintenance, and iterative feature scaling for all enterprise partners.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      <Footer page="portfolio" />
    </>
  );
}
