import { Link } from 'react-router-dom';

export default function Footer({ _page = 'home' }) {
  const servicesList = [
    { label: 'Web Development', href: '/services' },
    { label: 'React & Next.js', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Backend & APIs', href: '/services' },
    { label: 'Mobile Applications', href: '/services' },
    { label: 'Cloud & DevOps', href: '/services' },
    { label: 'Custom Software Solutions', href: '/services' },
  ];

  const companyList = [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '/contact' },
  ];

  const contactList = [
    {
      label: 'Email Us',
      href: 'mailto:hello@invsol.com',
      val: 'hello@invsol.com',
      icon: (
        <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/12345678900',
      val: '+1 (234) 567-8900',
      icon: (
        <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      label: 'Get in Touch',
      href: '/contact',
      val: 'Schedule a Call',
      icon: (
        <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="wrap" style={{ paddingTop: 0 }}>
      <footer className="ftr">
        <div className="fg">
          {/* Column 1: Brand Info */}
          <div>
            <Link className="logo" to="/">
              <img
                src="/assets/img/invsol-logo.png"
                alt="Invsol Tech"
                className="logo-img"
              />
              <span>Invsol <span className="accent">Tech</span></span>
            </Link>
            <p>
              Building meaningful digital experiences through technology, creativity, and engineering. We help businesses transform ideas into modern digital solutions.
            </p>
            <div className="fs">
              <a href="#" aria-label="LinkedIn">
                <svg className="i" viewBox="0 0 24 24">
                  <path
                    d="M4 9h3v11H4zM5.500 3.800a1.700 1.700 0 1 1 0 3.400 1.700 1.700 0 0 1 0-3.400zM10 9h3v1.600c.6-1 1.800-1.900 3.500-1.900 3 0 3.500 2 3.500 4.500V20h-3v-6c0-1.400 0-2.800-1.800-2.800S13 12.600 13 14v6h-3z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X">
                <svg className="i" viewBox="0 0 24 24">
                  <path d="M4 4l16 16M20 4 4 20" strokeWidth="2.4" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg className="i" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4>Services</h4>
            <ul>
              {servicesList.map((svc, i) => (
                <li key={i}>
                  <Link to={svc.href}>{svc.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4>Company</h4>
            <ul>
              {companyList.map((item, i) => (
                <li key={i}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="fc">
            <h4>Contact</h4>
            <ul>
              {contactList.map((c, i) => (
                <li key={i}>
                  {c.icon}
                  {c.href.startsWith('http') || c.href.startsWith('mailto:') ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      <b>{c.label}</b>
                      <small style={{ display: 'block', color: 'var(--muted)', fontSize: '11.5px' }}>{c.val}</small>
                    </a>
                  ) : (
                    <Link to={c.href}>
                      <b>{c.label}</b>
                      <small style={{ display: 'block', color: 'var(--muted)', fontSize: '11.5px' }}>{c.val}</small>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="copy">
          <span>© 2026 Invsol Tech. All rights reserved.</span>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
