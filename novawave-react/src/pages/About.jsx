import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import CountUp from '../components/CountUp';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Invsol Tech';
  }, []);

  return (
    <>
      <main className="wrap">
        {/* Premium Two-Column Hero Section */}
        <section className="sec hero about-hero-sec hero-two-col-sec">
          <Header activePage="about" />
          <div className="hero-container-card about-hero-card">
            <div className="hero-content-col">
              <span className="tag">Company Overview — Invsol Tech</span>
              <h1 className="hero-title">
                Good Ideas Deserve Great <span className="accent">Digital Experiences</span>
              </h1>
              <p className="hero-desc">
                We are a creative digital agency focused on building modern products, memorable brands, and innovative solutions that help businesses grow in a digital world.
              </p>
              <div className="hero-btns">
                <Link className="btn btn-dark" to="/contact">
                  Let's Talk About Your Project{' '}
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
            <div className="hero-visual-col about-visual-col">
              <img
                className="hero-3d-visual"
                src="/assets/img/hero-real/hero-about-real.jpg"
                alt="UX Architecture & Digital User Journey Mapping"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Our Story (Building image removed completely) */}
        <FadeInSection>
          <section className="sec story">
            <div>
              <span className="tag">Our Story</span>
              <h2>
                A Digital Agency <span className="accent">Built for What’s Next</span>
              </h2>
              <p style={{ margin: '16px 0 24px', lineHeight: 1.65 }}>
                Invsol Tech was founded with a simple belief — that great ideas, combined with the right technology and design, can create meaningful digital experiences. We partner with forward-thinking businesses to turn ideas into impactful products and scalable brands.
              </p>
              <a className="btn sm" href="#journey">
                Discover Our Journey{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="mv">
              <div>
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  </svg>
                </span>
                <span>
                  <h3>Our Mission</h3>
                  <p>To empower businesses with innovative digital solutions that create real value and long-term growth.</p>
                </span>
              </div>
              <div>
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <span>
                  <h3>Our Vision</h3>
                  <p>To be a global digital agency known for creativity, quality, and a people-first approach.</p>
                </span>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Our Values */}
        <FadeInSection>
          <section className="sec split">
            <div>
              <span className="tag">Our Values</span>
              <h2>Principles That Drive Everything We Do</h2>
              <p className="lead">
                Our values shape our culture, guide our decisions, and define how we work with our clients.
              </p>
            </div>
            <div className="vals">
              <div className="val">
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 3h12l4 6-10 13L2 9zM2 9h20M12 22 8 9l4-6 4 6z" />
                </svg>
                <h3>Creativity</h3>
                <p>Fresh ideas that make a difference.</p>
              </div>
              <div className="val">
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                </svg>
                <h3>Collaboration</h3>
                <p>Stronger results together.</p>
              </div>
              <div className="val">
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                </svg>
                <h3>Integrity</h3>
                <p>Transparent and honest partnerships.</p>
              </div>
              <div className="val">
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
                <h3>Growth</h3>
                <p>Building long-term value.</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Company Capabilities & Business Activities */}
        <FadeInSection>
          <section className="sec">
            <div className="rowhead">
              <div>
                <span className="tag">Core Capabilities</span>
                <h2>
                  Our Business Activities &amp; <span className="accent">Capabilities</span>
                </h2>
                <p>
                  Invsol Tech operates as a full-service technology partner, delivering resilient digital architecture, modern cloud applications, and strategic solutions for organizations worldwide.
                </p>
              </div>
              <Link className="btn sm" to="/services">
                Explore All Services{' '}
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
                <h3>Enterprise Web &amp; SaaS Platforms</h3>
                <p>Architecting secure, high-availability web platforms, custom dashboards, and scalable SaaS solutions built to handle enterprise workload and complex data operations.</p>
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
                <h3>UI/UX &amp; Digital Product Design</h3>
                <p>Creating human-centered user experiences, cohesive design systems, and responsive interfaces that drive engagement, user delight, and tangible conversion gains.</p>
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
                <h3>Mobile Application Engineering</h3>
                <p>Developing high-performance iOS, Android, and cross-platform applications featuring offline capabilities, biometric authentication, and real-time data sync.</p>
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
                <h3>Cloud Architecture &amp; DevOps</h3>
                <p>Engineering resilient cloud deployments on AWS and Google Cloud, automated CI/CD deployment pipelines, container orchestration, and continuous telemetry monitoring.</p>
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
                <h3>API &amp; Systems Integration</h3>
                <p>Designing high-throughput RESTful and GraphQL APIs, event-driven data streaming, and secure bi-directional integrations across legacy systems and modern cloud suites.</p>
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
                <h3>Digital Strategy &amp; Technical Advisory</h3>
                <p>Providing expert roadmap advisory, architecture risk reviews, legacy modernization strategies, and technical governance to maximize ROI on digital investments.</p>
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

        {/* Our Journey Milestones */}
        <FadeInSection>
          <section className="sec split" id="journey">
            <div>
              <span className="tag">Our Journey</span>
              <h2>
                Key Milestones in Our<br />
                <span className="accent">Growth</span>
              </h2>
              <p className="lead">
                From a small team with big dreams to a trusted digital partner for global clients — here are some of the key moments in our journey.
              </p>
            </div>
            <div className="about-milestones-grid">
              <div className="about-milestone-card">
                <span className="about-milestone-icon">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
                  </svg>
                </span>
                <h4>The Beginning</h4>
                <p>Invsol Tech was founded with a vision to create impactful digital solutions.</p>
              </div>
              <div className="about-milestone-card">
                <span className="about-milestone-icon">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                  </svg>
                </span>
                <h4>First 50 Clients</h4>
                <p>Reached 50+ happy clients across different industries.</p>
              </div>
              <div className="about-milestone-card">
                <span className="about-milestone-icon">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1.2 1.2C7.8 18.7 7 20.2 7 22M14 14.7V17c0 .6.5 1 1.2 1.2 1 .5 1.8 2 1.8 3.8M18 2H6v7a6 6 0 0 0 12 0z" />
                  </svg>
                </span>
                <h4>Award Recognition</h4>
                <p>Received our first industry award for digital excellence.</p>
              </div>
              <div className="about-milestone-card">
                <span className="about-milestone-icon">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 20V10M18 20V4M6 20v-4" />
                  </svg>
                </span>
                <h4>Global Expansion</h4>
                <p>Expanded our team and started working with international clients.</p>
              </div>
              <div className="about-milestone-card">
                <span className="about-milestone-icon">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z" />
                  </svg>
                </span>
                <h4>Bigger &amp; Bolder</h4>
                <p>120+ projects completed and still growing.</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Technology Tools */}
        <FadeInSection>
          <section className="sec split">
            <div>
              <span className="tag">Technology We Work With</span>
              <h2>
                Modern Tools for<br />
                <span className="accent">Modern Solutions</span>
              </h2>
              <p className="lead">
                We use industry-leading technologies to build scalable, secure, and high-performing digital products.
              </p>
            </div>
            <div className="techs">
              <div>
                <img src="/assets/img/ta-react.png" alt="React" />
                React
              </div>
              <div>
                <img src="/assets/img/ta-next.png" alt="Next.js" />
                Next.js
              </div>
              <div>
                <img src="/assets/img/ta-node.png" alt="Node.js" />
                Node.js
              </div>
              <div>
                <img src="/assets/img/ta-python.png" alt="Python" />
                Python
              </div>
              <div>
                <img src="/assets/img/ta-ts.png" alt="TypeScript" />
                TypeScript
              </div>
              <div>
                <img src="/assets/img/ta-pg.png" alt="PostgreSQL" />
                PostgreSQL
              </div>
              <div>
                <img src="/assets/img/ta-aws.png" alt="AWS" />
                AWS
              </div>
              <div>
                <img src="/assets/img/ta-flutter.png" alt="Flutter" />
                Flutter
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* CTA Section (No CTA image) */}
        <FadeInSection>
          <section className="band ">
            <div>
              <span className="tag">Let's build together</span>
              <h2>Ready to Create Something Amazing?</h2>
              <p>Partner with Invsol Tech and turn your ideas into powerful digital experiences.</p>
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

      <Footer page="about" />
    </>
  );
}
