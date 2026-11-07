import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';
import FadeInSection from '../components/FadeInSection';
import TrustedBrands from '../components/TrustedBrands';
import CountUp from '../components/CountUp';

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Invsol Tech';
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'Svaa Banking App',
      category: 'UI/UX Design • Mobile Development',
      image: '/assets/img/p1.jpg',
    },
    {
      id: 2,
      title: 'Nexora Cloud SaaS Platform',
      category: 'Enterprise SaaS • Cloud Dashboard',
      image: '/assets/img/p2.jpg',
    },
    {
      id: 3,
      title: 'Apex Financial Portal',
      category: 'Corporate Web • Wealth Management',
      image: '/assets/img/p3.jpg',
    },
  ];

  return (
    <>
      <main className="wrap">
        {/* Premium Two-Column Hero Section */}
        <section className="sec hero home hero-two-col-sec">
          <Header activePage="home" />
          <div className="hero-container-card">
            <div className="hero-content-col">
              <span className="tag">Creative Digital Agency</span>
              <h1 className="hero-title">
                We Design Experiences That <span className="accent">Inspire &amp; Convert</span>
              </h1>
              <p className="hero-desc">
                We blend creativity, strategy, and technology to build digital experiences that elevate brands and drive measurable business results.
              </p>
              <div className="hero-btns">
                <Link className="btn btn-dark" to="/portfolio">
                  Explore Our Work{' '}
                  <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link className="btn light" to="/services">
                  Our Services{' '}
                  <span className="play">
                    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat-item">
                  <CountUp value="120+" />
                  <span>Projects Completed</span>
                </div>
                <div className="hero-stat-item">
                  <CountUp value="80+" />
                  <span>Happy Clients</span>
                </div>
                <div className="hero-stat-item">
                  <CountUp value="12+" />
                  <span>Awards Won</span>
                </div>
                <div className="hero-stat-item">
                  <CountUp value="8" />
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
            <div className="hero-visual-col">
              <img
                className="hero-3d-visual"
                src="/assets/img/hero-real/hero-home-real.jpg"
                alt="Collaborative Software Engineering & Product Strategy Session"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <FadeInSection>
          <TrustedBrands />
        </FadeInSection>

        {/* Featured Work - Exactly 3 Featured Projects */}
        <FadeInSection>
          <section className="sec" id="work">
            <div className="rowhead">
              <div>
                <span className="tag">Featured Work</span>
                <h2>
                  Our <span className="accent">Latest Projects</span>
                </h2>
                <p>
                  Here are some of our recent projects that showcase our creativity, technology, and problem-solving approach.
                </p>
              </div>
              <Link className="btn sm" to="/portfolio">
                View All Projects{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="work">
              {featuredProjects.map((project) => (
                <Link key={project.id} className="pc" to="/portfolio">
                  <img src={project.image} alt={project.title} />
                  <div>
                    <span>
                      <b>{project.title}</b>
                      <small>{project.category}</small>
                    </span>
                    <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Services Grid */}
        <FadeInSection>
          <section className="sec">
            <div className="rowhead">
              <div>
                <span className="tag">Our Services</span>
                <h2>
                  Comprehensive Digital<br />Solutions for <span className="accent">Modern Brands</span>
                </h2>
                <p>
                  From strategy to execution, we provide end-to-end digital solutions that help your business grow in the modern world.
                </p>
              </div>
              <Link className="btn sm" to="/services">
                View All Services{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="cards c3">
              <div className="svc">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 3h20v14H2zM8 21h8M12 17v4" />
                  </svg>
                </span>
                <h3>Web Development</h3>
                <p>Modern, scalable and high-performance websites tailored to your business needs.</p>
                <Link className="link" to="/services">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                  </svg>
                </span>
                <h3>UI/UX Design</h3>
                <p>Beautiful and intuitive designs that engage users and strengthen brands.</p>
                <Link className="link" to="/services">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2" />
                  </svg>
                </span>
                <h3>Mobile Applications</h3>
                <p>Powerful mobile apps for iOS and Android with seamless user experiences.</p>
                <Link className="link" to="/services">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
                  </svg>
                </span>
                <h3>Backend &amp; APIs</h3>
                <p>Robust and secure backend systems and APIs for scalable growth.</p>
                <Link className="link" to="/services">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.5 12a3.5 3.5 0 0 0 1 7z" />
                  </svg>
                </span>
                <h3>Cloud &amp; DevOps</h3>
                <p>Reliable cloud infrastructure and DevOps solutions for better performance.</p>
                <Link className="link" to="/services">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8" />
                  </svg>
                </span>
                <h3>Custom Software</h3>
                <p>Tailored software solutions to solve real business challenges.</p>
                <Link className="link" to="/services">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Process */}
        <FadeInSection>
          <section className="sec">
            <div className="rowhead">
              <div>
                <span className="tag">Our Process</span>
                <h2>
                  A Simple Process<br />for <span className="accent">Big Results</span>
                </h2>
              </div>
              <p style={{ maxWidth: '300px' }}>
                We follow a proven process to turn ideas into impactful digital products.
              </p>
              <Link className="btn sm" to="/contact">
                Start Your Project{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="cards c4">
              <div className="step">
                <span className="num">01</span>
                <h3>Discover</h3>
                <p>We understand your goals, audience, and business challenges.</p>
              </div>
              <div className="step">
                <span className="num">02</span>
                <h3>Plan</h3>
                <p>We create a clear strategy, roadmap, and project milestones.</p>
              </div>
              <div className="step">
                <span className="num">03</span>
                <h3>Design</h3>
                <p>We design beautiful and user-centric experiences.</p>
              </div>
              <div className="step">
                <span className="num">04</span>
                <h3>Develop</h3>
                <p>We build, test, and launch high-performance solutions.</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* FAQ */}
        <FadeInSection>
          <section className="sec faq">
            <div>
              <span className="tag">Frequently Asked Questions</span>
              <h2>
                Got Questions?<br />We’ve Got <span className="accent">Answers.</span>
              </h2>
              <img
                className="art faq-art-img"
                src="/assets/img/faq-illustration.jpg"
                alt="Frequently Asked Questions"
              />
            </div>
            <FAQAccordion />
          </section>
        </FadeInSection>

        {/* CTA Section (No CTA image) */}
        <FadeInSection>
          <section className="band ">
            <div>
              <span className="tag">Let's build something great</span>
              <h2>Have a project in mind? We’d love to hear from you.</h2>
              <p>Whether you have a question or a full project, our team is here to help.</p>
            </div>
            <div className="btns">
              <Link className="btn " to="/contact">
                Let's Talk{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>

      <Footer page="home" />
    </>
  );
}
