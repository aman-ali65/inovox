import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import CountUp from '../components/CountUp';

export default function Company() {
  useEffect(() => {
    document.title = 'Company | Invsol Tech';
  }, []);

  const expertiseList = [
    {
      title: 'Custom Web Development',
      desc: 'Tailored, performant web applications engineered for scalability and real-world business demands.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Modern Frontend & Backend Solutions',
      desc: 'Robust full-stack architectures built on reliable, maintainable frameworks and clean code practices.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      desc: 'Intuitive, user-focused digital experiences crafted with precision, accessibility, and visual harmony.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: 'Mobile Application Development',
      desc: 'Native and cross-platform mobile solutions engineered for smooth performance and high user engagement.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: 'API Development & Integration',
      desc: 'Secure, high-throughput REST and GraphQL APIs connecting complex digital services and data pipelines.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      title: 'AI-Powered Digital Solutions',
      desc: 'Integrating practical artificial intelligence, automated workflows, and smart features into enterprise platforms.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  const approachSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Learn about your goals, challenges, and requirements.',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Create intuitive and user-focused digital experiences.',
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'Build reliable solutions using modern technologies.',
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'Test, refine, and prepare products for real-world use.',
    },
  ];

  return (
    <>
      <main className="wrap company-page">
        {/* 1. HERO SECTION */}
        <section className="sec hero company-hero-section">
          <Header activePage="company" />
          <div className="hero-in">
            <span className="tag">COMPANY</span>
            <h1>
              We Are <span className="accent">Invsol</span>
            </h1>
            <p className="sm">
              A technology-driven software company focused on building meaningful digital experiences, scalable software solutions, and innovative products that help businesses move forward.
            </p>
            <p className="company-hero-subtag">
              <em>The Invsol Tech Team – Building Technology with Purpose.</em>
            </p>
            <div className="btns">
              <Link className="btn sm blue" to="/contact">
                Start a Project{' '}
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link className="btn sm light" to="/services">
                Explore Our Services{' '}
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="stats">
              <div>
                <CountUp value="120+" />
                <span>Projects Completed</span>
              </div>
              <div>
                <CountUp value="80+" />
                <span>Happy Clients</span>
              </div>
              <div>
                <CountUp value="12+" />
                <span>Awards Won</span>
              </div>
              <div>
                <CountUp value="8" />
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OUR STORY */}
        <FadeInSection>
          <section className="sec company-story-container">
            <div className="company-story-grid">
              <div className="company-story-content">
                <span className="tag">OUR STORY</span>
                <h2>
                  Driven by Innovation, <span className="accent">Built on Engineering</span>
                </h2>

                <div className="company-story-paragraphs">
                  <p>
                    Invsol Tech was founded with a clear vision: to help businesses turn their ideas into reliable, impactful digital products.
                  </p>
                  <p>
                    We believe great software is more than just code. It requires thoughtful engineering, intuitive design, clear communication, and a deep understanding of business needs.
                  </p>
                  <p>
                    Our approach combines modern technologies, creative problem-solving, and a commitment to quality to develop digital solutions that are practical, scalable, and built for the future.
                  </p>
                  <p>
                    As a growing technology startup, we focus on creating meaningful partnerships, embracing innovation, and delivering solutions that make a real difference.
                  </p>
                </div>
              </div>

              <div className="company-story-media">
                <div className="company-workspace-frame">
                  <img
                    src="/assets/img/company-team.jpg"
                    alt="Strategy and engineering sessions at Invsol Tech"
                  />
                </div>
                <p className="company-workspace-caption">
                  Strategy sessions before every single project sprint
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 3. OUR VALUES */}
        <FadeInSection>
          <section className="sec company-values-container">
            <div className="company-section-header">
              <span className="tag">OUR VALUES</span>
              <h2>What We Stand For</h2>
            </div>

            <div className="company-values-grid">
              <div className="company-val-card">
                <div className="company-val-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <h3>Precision</h3>
                <p>
                  We pay attention to every detail, from the first design concept to the final line of code. Our goal is to deliver solutions that work as beautifully as they perform.
                </p>
              </div>

              <div className="company-val-card">
                <div className="company-val-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>Transparency</h3>
                <p>
                  We believe strong partnerships begin with honest communication, clear expectations, and complete transparency throughout every stage of development.
                </p>
              </div>

              <div className="company-val-card">
                <div className="company-val-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
                    <path d="M15 12v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>
                  We embrace modern technologies and creative thinking to solve real-world problems and build better digital experiences.
                </p>
              </div>

              <div className="company-val-card">
                <div className="company-val-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.262-8-12.356-8-5.096 0-5.096 8 0 8 5.094 0 7.261-8 12.356-8z" />
                  </svg>
                </div>
                <h3>Reliability</h3>
                <p>
                  We focus on building dependable, maintainable, and scalable solutions that businesses can confidently grow with.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 4. OUR EXPERTISE */}
        <FadeInSection>
          <section className="sec company-expertise-container">
            <div className="company-section-header">
              <span className="tag">OUR EXPERTISE</span>
              <h2>Technology That Moves Businesses Forward</h2>
            </div>

            <div className="company-expertise-grid">
              {expertiseList.map((item, index) => (
                <div className="company-expertise-card" key={index}>
                  <div className="company-expertise-icon-wrap">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* 5. OUR APPROACH */}
        <FadeInSection>
          <section className="sec company-approach-container">
            <div className="company-section-header">
              <span className="tag">OUR APPROACH</span>
              <h2>From Ideas to Impact</h2>
              <p className="company-section-lead">
                We bring together strategy, design, and engineering to transform business requirements into functional digital products.
              </p>
            </div>

            <div className="company-approach-grid">
              {approachSteps.map((step, index) => (
                <div className="company-approach-card" key={index}>
                  <div className="company-approach-badge">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* 6. WORK WITH US (CTA) */}
        <FadeInSection>
          <section className="band company-cta-band">
            <div>
              <span className="tag">WORK WITH US</span>
              <h2>Let's Build Something Meaningful Together</h2>
              <p>
                Have an idea, a business challenge, or a digital product in mind? Let's work together to turn your vision into a practical technology solution.
              </p>
            </div>
            <div className="company-cta-btns">
              <Link className="btn sm" to="/contact">
                Start a Project{' '}
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link className="btn sm ghost" to="/services">
                Explore Our Services{' '}
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>

      {/* 7. FOOTER */}
      <Footer page="company" />
    </>
  );
}
