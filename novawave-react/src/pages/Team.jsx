import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import CountUp from '../components/CountUp';

const teamMembers = [
  {
    id: 1,
    name: 'Aman Ali',
    role: 'Founder & CEO',
    img: '/assets/img/member-1.jpg',
    bio: 'Visionary leader and lead systems architect driving technical strategy, enterprise scaling, and engineering excellence across all global deployments at Invsol.',
    tags: ['Distributed Systems', 'Cloud Architecture', 'Enterprise SaaS'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    name: 'Ayesha Malik',
    role: 'Head of UI/UX Design',
    img: '/assets/img/member-2.jpg',
    bio: 'Product design lead specializing in human-centered design systems, seamless interaction paradigms, and conversion-focused digital interfaces.',
    tags: ['Design Systems', 'UI/UX Architecture', 'Figma Tokens'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    name: 'Usman Ali',
    role: 'Lead Full-Stack Architect',
    img: '/assets/img/member-3.jpg',
    bio: 'Senior systems engineer with deep expertise in scalable cloud infrastructure, reactive frontend frameworks, microservices, and high-throughput APIs.',
    tags: ['React & Next.js', 'Node.js & Go', 'Microservices'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 4,
    name: 'Sarah Khan',
    role: 'Senior Project Manager',
    img: '/assets/img/member-4.jpg',
    bio: 'Certified Agile Scrum Master focused on operational efficiency, sprint governance, transparent communication, and timely high-quality delivery.',
    tags: ['Agile / Scrum', 'Sprint Governance', 'Client Delivery'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 5,
    name: 'Bilal Tariq',
    role: 'Senior Cloud & DevOps Engineer',
    img: '/assets/img/member-5.jpg',
    bio: 'Infrastructure specialist passionate about infrastructure-as-code, high availability, zero-downtime CI/CD deployment pipelines, and cloud security.',
    tags: ['AWS & Kubernetes', 'CI/CD Pipelines', 'Cloud Security'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 6,
    name: 'Fatima Noor',
    role: 'Mobile Applications Lead',
    img: '/assets/img/member-6.jpg',
    bio: 'Specialist mobile software engineer dedicated to building smooth, native-feeling iOS and Android applications with reactive state architectures.',
    tags: ['React Native', 'iOS & Android', 'State Management'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
];

const teamValues = [
  {
    title: 'Deep Craftsmanship',
    desc: 'We obsess over every pixel, every line of clean code, and every milliseconds of latency to deliver work we are truly proud of.',
    icon: (
      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
  {
    title: 'Radical Transparency',
    desc: 'Clear communication, direct access to makers, and honest milestone reporting foster authentic and lasting client partnerships.',
    icon: (
      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Outcome-Driven Focus',
    desc: 'We do not build technology just for its own sake. Every product decision is anchored to measurable user growth and commercial ROI.',
    icon: (
      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Continuous Innovation',
    desc: 'We constantly refine our toolchains, adopting modern web frameworks, AI tools, and cloud best practices to keep clients ahead.',
    icon: (
      <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
];

export default function Team() {
  useEffect(() => {
    document.title = 'Our Team | Invsol Tech';
  }, []);

  return (
    <>
      <main className="wrap">
        {/* Premium Two-Column Hero Section */}
        <section className="sec hero team-hero-sec hero-two-col-sec">
          <Header activePage="team" />
          <div className="hero-container-card team-hero-card">
            <div className="hero-content-col">
              <span className="tag">Our Team &amp; Leadership</span>
              <h1 className="hero-title">
                The Minds Driving <span className="accent">Digital Excellence</span>
              </h1>
              <p className="hero-desc">
                Meet our multidisciplinary team of software architects, product designers, cloud engineers, and strategists dedicated to creating innovative, high-impact digital experiences.
              </p>
              <div className="hero-btns">
                <Link className="btn btn-dark" to="/contact">
                  Join Our Team{' '}
                  <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link className="btn light" to="/contact">
                  Start a Project{' '}
                  <span className="play">
                    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat-item">
                  <CountUp value="25+" />
                  <span>Dedicated Specialists</span>
                </div>
                <div className="hero-stat-item">
                  <CountUp value="8+" />
                  <span>Years Experience</span>
                </div>
                <div className="hero-stat-item">
                  <CountUp value="120+" />
                  <span>Delivered Projects</span>
                </div>
                <div className="hero-stat-item">
                  <CountUp value="100%" />
                  <span>In-House Team</span>
                </div>
              </div>
            </div>
            <div className="hero-visual-col team-visual-col">
              <img
                className="hero-3d-visual"
                src="/assets/img/hero-real/hero-team-real.jpg"
                alt="Multidisciplinary Engineering Team Collaborating on Code"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Team Profiles & Responsibilities */}
        <FadeInSection>
          <section className="sec" id="team-members">
            <div className="rowhead">
              <div>
                <span className="tag">Our Team</span>
                <h2>
                  Meet the <span className="accent">Talent Behind the Work</span>
                </h2>
              </div>
              <p style={{ maxWidth: '440px' }}>
                Every project at Invsol Tech is built by a dedicated team of specialists focused on clear outcomes, clean code, and intuitive user experiences.
              </p>
            </div>

            <div className="team-profile-grid">
              {teamMembers.map((member) => (
                <div className="team-profile-card" key={member.id}>
                  <div className="team-profile-img-wrap">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-profile-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="team-profile-body">
                    <h3 className="team-profile-name">{member.name}</h3>
                    <span className="team-profile-role">{member.role}</span>
                    <p className="team-profile-bio">{member.bio}</p>

                    <div className="team-profile-tags">
                      {member.tags.map((tag, tIdx) => (
                        <span className="team-profile-tag" key={tIdx}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="team-profile-socials">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-linkedin"
                          aria-label={`Connect with ${member.name} on LinkedIn`}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="2" width="20" height="20" rx="4" />
                            <path d="M7 10v7" />
                            <circle cx="7" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                            <path d="M11 17v-4a2.2 2.2 0 0 1 4.4 0V17" />
                            <path d="M11 10v7" />
                          </svg>
                          Connect on LinkedIn
                        </a>
                      )}

                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-github"
                          aria-label={`${member.name} GitHub Profile`}
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Culture & Collaboration */}
        <FadeInSection>
          <section className="sec split">
            <div>
              <span className="tag">Our Culture</span>
              <h2>
                How We Collaborate &amp;<br />
                <span className="accent">Drive Impact</span>
              </h2>
              <p className="lead">
                Great products are not built in silos. Our team operates with shared accountability, agile communication, and a collective commitment to engineering excellence.
              </p>
              <Link className="btn sm" to="/contact" style={{ marginTop: '20px' }}>
                Work With Us{' '}
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="vals">
              {teamValues.map((v, i) => (
                <div className="val" key={i}>
                  <div className="ico" style={{ margin: '0 auto 14px' }}>
                    {v.icon}
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Call to Action Section */}
        <FadeInSection>
          <section className="band ">
            <div>
              <span className="tag">Join Our Collective</span>
              <h2>Ready to Collaborate With Our Team?</h2>
              <p>
                Whether you are looking to build a new digital product from scratch or augment your engineering capabilities, our team is ready to deliver.
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
                Join Our Team
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>

      <Footer page="team" />
    </>
  );
}
