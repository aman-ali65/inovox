import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import CountUp from '../components/CountUp';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Invsol Tech';
  }, []);

  return (
    <>
      <main className="wrap">
        {/* Centered Hero without Hero Image */}
        <section className="sec hero ">
          <Header activePage="services" />
          <div className="hero-in">
            <span className="tag">Our Services</span>
            <h1>
              Digital Solutions for <span className="accent">Modern Brands</span>
            </h1>
            <p className="sm">
              We combine strategy, design, and technology to create digital solutions that help businesses grow, engage their audience, and make a lasting impact.
            </p>
            <div className="btns">
              <Link className="btn " to="/contact">
                Start a Project{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a className="btn light" href="#process">
                How We Work{' '}
                <span className="play">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
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
                <CountUp value="4.9/5" />
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Services Grid */}
        <FadeInSection>
          <section className="sec">
            <div className="rowhead">
              <div>
                <span className="tag">What We Offer</span>
                <h2>
                  Our <span className="accent">Services</span>
                </h2>
              </div>
              <p style={{ maxWidth: '430px' }}>
                From idea to execution, we provide end-to-end digital services to help you build, scale, and succeed in the modern world.
              </p>
              <Link className="btn sm blue" to="/contact">
                Start a Project{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="cards c3">
              <div className="svc lg">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                </span>
                <h3>Web Development</h3>
                <p>
                  Modern, high-performance websites built with the latest technologies to help your business grow.
                </p>
                <Link className="link" to="/contact">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc lg">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
                  </svg>
                </span>
                <h3>UI/UX Design</h3>
                <p>
                  User-focused designs that create meaningful experiences and stronger brand connections.
                </p>
                <Link className="link" to="/contact">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc lg">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2" />
                  </svg>
                </span>
                <h3>Mobile Applications</h3>
                <p>
                  Scalable and feature-rich mobile apps for iOS and Android tailored to your business needs.
                </p>
                <Link className="link" to="/contact">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc lg">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
                  </svg>
                </span>
                <h3>Backend &amp; APIs</h3>
                <p>
                  Robust backend systems and APIs that power your applications with speed and security.
                </p>
                <Link className="link" to="/contact">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc lg">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.5 12a3.5 3.5 0 0 0 1 7z" />
                  </svg>
                </span>
                <h3>Cloud &amp; DevOps</h3>
                <p>
                  Reliable cloud infrastructure and DevOps solutions for seamless deployment and scalability.
                </p>
                <Link className="link" to="/contact">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="svc lg">
                <span className="ico">
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8" />
                  </svg>
                </span>
                <h3>Custom Software</h3>
                <p>
                  Tailored software solutions built to solve unique business challenges and drive efficiency.
                </p>
                <Link className="link" to="/contact">
                  Learn More{' '}
                  <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Process Section */}
        <FadeInSection>
          <section className="sec" id="process">
            <div className="rowhead">
              <div>
                <span className="tag">Our Process</span>
                <h2>
                  From Idea to <span className="accent">Impact</span>
                </h2>
              </div>
              <p style={{ maxWidth: '380px' }}>
                We follow a clear and collaborative process to ensure every project is delivered with quality and purpose.
              </p>
            </div>
            <div className="proc cx">
              <div>
                <div className="hd">
                  <span className="num">01</span>
                </div>
                <h3>Discover</h3>
                <p>We understand your goals, challenges, and target audience to define the right strategy.</p>
              </div>
              <div>
                <div className="hd">
                  <span className="num">02</span>
                </div>
                <h3>Plan</h3>
                <p>We create a detailed roadmap with clear milestones and measurable outcomes.</p>
              </div>
              <div>
                <div className="hd">
                  <span className="num">03</span>
                </div>
                <h3>Design</h3>
                <p>We craft modern, user-focused designs that bring your vision to life.</p>
              </div>
              <div>
                <div className="hd">
                  <span className="num">04</span>
                </div>
                <h3>Develop</h3>
                <p>We build, test, and deploy high-performance solutions that make an impact.</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Technology Tools */}
        <FadeInSection>
          <section className="sec">
            <div className="rowhead">
              <div>
                <span className="tag">Technology We Use</span>
                <h2>
                  Powering Innovation<br />
                  with <span className="accent">Modern Technology</span>
                </h2>
              </div>
              <p style={{ maxWidth: '400px' }}>
                We use industry-leading tools and technologies to build secure, scalable, and future-ready digital products.
              </p>
            </div>
            <div className="trow">
              <div>
                <img src="/assets/img/ts-react.png" alt="React" />
                React
              </div>
              <div>
                <img src="/assets/img/ts-next.png" alt="Next.js" />
                Next.js
              </div>
              <div>
                <img src="/assets/img/ts-node.png" alt="Node.js" />
                Node.js
              </div>
              <div>
                <img src="/assets/img/ts-ts.png" alt="TypeScript" />
                TypeScript
              </div>
              <div>
                <img src="/assets/img/ts-python.png" alt="Python" />
                Python
              </div>
              <div>
                <img src="/assets/img/ts-pg.png" alt="PostgreSQL" />
                PostgreSQL
              </div>
              <div>
                <img src="/assets/img/ts-mongo.png" alt="MongoDB" />
                MongoDB
              </div>
              <div>
                <img src="/assets/img/ts-aws.png" alt="AWS" />
                AWS
              </div>
              <div>
                <img src="/assets/img/ts-docker.png" alt="Docker" />
                Docker
              </div>
              <div>
                <img src="/assets/img/ts-flutter.png" alt="Flutter" />
                Flutter
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* CTA Section */}
        <FadeInSection>
          <section className="band">
            <div>
              <span className="tag">Let's build together</span>
              <h2>
                Ready to Bring Your<br />
                Ideas to Life?
              </h2>
              <p>
                Let’s create digital experiences that grow your business and make a real impact. Get in touch with our team today.
              </p>
            </div>
            <div className="btns">
              <Link className="btn " to="/contact">
                Start a Project{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link className="btn ghost" to="/contact">
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5h18v16H3zM3 10h18M8 3v4M16 3v4" />
                </svg>{' '}
                Schedule a Call
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>

      <Footer page="services" />
    </>
  );
}
