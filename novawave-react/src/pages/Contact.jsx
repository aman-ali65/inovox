import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    referral: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ text: '', isSuccess: false });

  useEffect(() => {
    document.title = 'Contact | Invsol Tech';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (
      !formData.email.trim() ||
      !/^\S+@\S+\.\S+$/.test(formData.email.trim())
    ) {
      newErrors.email = true;
    }
    if (!formData.service.trim()) newErrors.service = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({
        text: 'Please fill in the highlighted fields.',
        isSuccess: false,
      });
      return;
    }

    setErrors({});
    setStatus({
      text: 'Thanks! We will get back to you within 24 hours.',
      isSuccess: true,
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      referral: '',
      message: '',
    });

    // TODO: Future backend integration: Connect to PHP/MySQL backend API endpoint
  };

  return (
    <>
      <main className="wrap">
        {/* Premium Two-Column Hero Section */}
        <section className="sec hero contact-hero-sec hero-two-col-sec">
          <Header activePage="contact" />
          <div className="hero-container-card contact-hero-card">
            <div className="hero-content-col">
              <span className="tag">Get In Touch</span>
              <h1 className="hero-title">
                Let’s Create Something Great <span className="accent">Together</span>
              </h1>
              <p className="hero-desc">
                Have a project in mind? We’d love to hear from you. Share your ideas, and our team will get back to you with the best solutions to bring your vision to life.
              </p>
              <div className="hero-btns" style={{ marginBottom: '32px' }}>
                <a className="btn btn-dark" href="#contact-form">
                  Start a Project{' '}
                  <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="feat3" style={{ justifyContent: 'flex-start', marginTop: '0', width: '100%' }}>
                <div>
                  <span className="ico">
                    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
                    </svg>
                  </span>
                  <span>
                    <b>Quick Response</b>
                    Within 24 Hours
                  </span>
                </div>
                <div>
                  <span className="ico">
                    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
                    </svg>
                  </span>
                  <span>
                    <b>Expert Team</b>
                    Ready to Help
                  </span>
                </div>
                <div>
                  <span className="ico">
                    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span>
                    <b>Confidential</b>
                    Your ideas are safe
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-visual-col contact-visual-col">
              <img
                className="hero-3d-visual"
                src="/assets/img/hero-real/hero-contact-real.jpg"
                alt="Professional Client Consultation & Partnership Meeting"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Contact Form and Information Grid */}
        <FadeInSection>
          <div className="cgrid" id="contact-form">
            <section className="sec">
              <span className="tag">Send Us a Message</span>
              <h2>Start Your Project</h2>
              <p style={{ marginTop: '10px', maxWidth: '380px' }}>
                Fill out the form and tell us about your project. Our team will get back to you shortly.
              </p>
              <form className="fm" data-form="contact" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  aria-label="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'err' : ''}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  aria-label="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'err' : ''}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  aria-label="Company name"
                  value={formData.company}
                  onChange={handleChange}
                />
                <select
                  name="service"
                  required
                  aria-label="Select Service *"
                  value={formData.service}
                  onChange={handleChange}
                  className={errors.service ? 'err' : ''}
                >
                  <option value="">Select Service *</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Mobile Applications</option>
                  <option>Backend &amp; APIs</option>
                  <option>Cloud &amp; DevOps</option>
                  <option>Custom Software</option>
                  <option>Other</option>
                </select>
                <select
                  name="budget"
                  aria-label="Project Budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Project Budget</option>
                  <option>Under $5,000</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000 – $50,000</option>
                  <option>$50,000+</option>
                </select>
                <select
                  name="referral"
                  aria-label="How did you hear about us?"
                  value={formData.referral}
                  onChange={handleChange}
                >
                  <option value="">How did you hear about us?</option>
                  <option>Search</option>
                  <option>Social media</option>
                  <option>Referral</option>
                  <option>Other</option>
                </select>
                <textarea
                  className={`full ${errors.message ? 'err' : ''}`}
                  name="message"
                  placeholder="Your Message *"
                  required
                  aria-label="Your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="full">
                  <button className="btn" type="submit">
                    Send Message{' '}
                    <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div
                    id="fmsg"
                    role="status"
                    style={{
                      color: status.isSuccess ? '#16794c' : '#e5484d',
                    }}
                  >
                    {status.text}
                  </div>
                </div>
              </form>
            </section>

            <section className="sec">
              <span className="tag">Contact Information</span>
              <h2>Get In Touch</h2>
              <p style={{ marginTop: '8px', fontSize: '13px' }}>
                Prefer to reach out directly? Here are our contact details.
              </p>
              <div className="ci-list">
                <div>
                  <span className="ico">
                    <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6" />
                    </svg>
                  </span>
                  <span>
                    <b>Email Us</b>
                    <a href="mailto:hello@invsol.com">hello@invsol.com</a>
                    <small>We typically respond within 24 hours.</small>
                  </span>
                </div>
                <div>
                  <span className="ico">
                    <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  <span>
                    <b>Call Us</b>
                    <a href="tel:+12345678901">+1 (234) 567-8901</a>
                    <small>Mon - Fri, 9AM - 6PM (PST)</small>
                  </span>
                </div>
                <div>
                  <span className="ico">
                    <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  <span>
                    <b>Our Office</b>
                    <b style={{ fontWeight: 500 }}>
                      1234 Innovation Drive
                      <br />
                      Los Angeles, CA 90001, USA
                    </b>
                    <small>Come say hello at our office.</small>
                  </span>
                </div>
                <div>
                  <span className="ico">
                    <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" />
                    </svg>
                  </span>
                  <span>
                    <b>Response Time</b>
                    <a href="#">Within 24 Hours</a>
                    <small>We’ll get back to you as soon as possible.</small>
                  </span>
                </div>
                <div className="follow" style={{ display: 'block' }}>
                  <b>Follow Our Journey</b>
                  <p>Stay connected and see what we’re building.</p>
                  <div className="sb">
                    <a href="#" style={{ background: '#0a66c2' }} aria-label="in">
                      <svg className="i" viewBox="0 0 24 24">
                        <path
                          d="M4 9h3v11H4zM5.500 3.800a1.700 1.700 0 1 1 0 3.400 1.700 1.700 0 0 1 0-3.400zM10 9h3v1.600c.6-1 1.800-1.900 3.500-1.900 3 0 3.500 2 3.500 4.500V20h-3v-6c0-1.400 0-2.800-1.800-2.800S13 12.600 13 14v6h-3z"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    </a>
                    <a href="#" style={{ background: '#1d9bf0' }} aria-label="x">
                      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 4l16 16M20 4 4 20" />
                      </svg>
                    </a>
                    <a href="#" style={{ background: '#e1306c' }} aria-label="ig">
                      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17.5 6.5h.01" />
                      </svg>
                    </a>
                    <a href="#" style={{ background: '#ea4c89' }} aria-label="dr">
                      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8.6 2.8c3 3 5.400 6.500 6.800 10.800M2.200 10.500C7 10.700 12 9 15.500 5.500M9 21.500c1-4 3.800-7 8-8.500" />
                      </svg>
                    </a>
                    <a href="#" style={{ background: '#ff0000' }} aria-label="yt">
                      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M2.5 7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3zM10 9l5 3-5 3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </FadeInSection>

        {/* Services Badges */}
        <FadeInSection>
          <section className="sec">
            <span className="tag">Our Services</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.4vw, 30px)' }}>How Can We Help You?</h2>
            <p style={{ marginTop: '6px', fontSize: '13px' }}>
              We specialize in creating digital solutions that help businesses grow.
            </p>
            <div className="chips">
              <div>
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 3h20v14H2zM8 21h8M12 17v4" />
                </svg>
                Web Development
              </div>
              <div>
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 5c5 0 9 3 9 7s-4 7-9 7-9-3-9-7 4-7 9-7z" />
                </svg>
                React &amp; Next.js
              </div>
              <div>
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                </svg>
                UI/UX Design
              </div>
              <div>
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                </svg>
                Backend &amp; APIs
              </div>
              <div>
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2" />
                </svg>
                Mobile Applications
              </div>
              <div>
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.5 12a3.5 3.5 0 0 0 1 7z" />
                </svg>
                Cloud &amp; DevOps
              </div>
              <div>
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                </svg>
                Custom Solutions
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Process Steps */}
        <FadeInSection>
          <section className="sec">
            <span className="tag">Our Process</span>
            <div className="pl2">
              <h2 style={{ fontSize: 'clamp(24px, 2.4vw, 30px)' }}>From Idea to Impact</h2>
              <p>A simple and transparent process to bring your ideas to life.</p>
            </div>
            <div className="steps">
              <div className="st">
                <span className="num">01</span>
                <span>
                  <b>Discover</b>
                  <p>We understand your goals and requirements.</p>
                </span>
              </div>
              <div className="st">
                <span className="num">02</span>
                <span>
                  <b>Plan</b>
                  <p>We create a tailored strategy and project roadmap.</p>
                </span>
              </div>
              <div className="st">
                <span className="num">03</span>
                <span>
                  <b>Build</b>
                  <p>Our team designs and develops your solution.</p>
                </span>
              </div>
              <div className="st">
                <span className="num">04</span>
                <span>
                  <b>Launch</b>
                  <p>We deliver, support, and help you grow.</p>
                </span>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* CTA Section (No CTA artwork image) */}
        <FadeInSection>
          <section className="band ">
            <div>
              <span className="tag">Let's work together</span>
              <h2>Ready to Bring Your Ideas to Life?</h2>
              <p>
                Whether you have a clear plan or just a rough idea, we’re here to help you turn it into a meaningful digital experience.
              </p>
            </div>
            <div className="btns">
              <a
                className="btn "
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Let's Talk{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>
        </FadeInSection>
      </main>

      <Footer page="contact" />
    </>
  );
}
