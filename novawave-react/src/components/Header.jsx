import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ activePage = 'home' }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const companyRef = useRef(null);
  const location = useLocation();

  const isCompanyActive = ['about', 'team', 'portfolio', 'company'].includes(activePage);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setIsCompanyOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (companyRef.current && !companyRef.current.contains(event.target)) {
        setIsCompanyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsNavOpen(false);
    setIsCompanyOpen(false);
  }

  // Close mobile nav on escape key and control body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isNavOpen) {
        closeNav();
      }
    };
    if (isNavOpen) {
      document.body.classList.add('mobile-nav-locked');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('mobile-nav-locked');
    }
    return () => {
      document.body.classList.remove('mobile-nav-locked');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNavOpen]);

  return (
    <>
      <header className="hdr">
        <Link className="logo" to="/" onClick={closeNav}>
          <img
            src="/assets/img/invsol-logo.png"
            alt="Invsol Tech"
            className="logo-img"
          />
          <span>Invsol <span className="accent">Tech</span></span>
        </Link>

        <nav className={`nav ${isNavOpen ? 'open' : ''}`} id="nav" aria-label="Main Navigation">
          {/* 1. Home Link */}
          <Link
            to="/"
            className={activePage === 'home' ? 'on' : ''}
            onClick={closeNav}
          >
            Home
          </Link>

          {/* 2. Services Link (Direct navigation link only) */}
          <Link
            to="/services"
            className={activePage === 'services' ? 'on' : ''}
            onClick={closeNav}
          >
            Services
          </Link>

          {/* 3. Company Dropdown (About Us, Our Team, Portfolio) */}
          <div
            className={`nav-dropdown ${isCompanyActive ? 'on' : ''} ${isCompanyOpen ? 'open' : ''}`}
            ref={companyRef}
            onMouseEnter={() => {
              if (window.innerWidth > 900) setIsCompanyOpen(true);
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 900) setIsCompanyOpen(false);
            }}
          >
            <div
              className="nav-dropdown-trigger"
              onClick={(e) => {
                if (window.innerWidth <= 900) {
                  e.preventDefault();
                  setIsCompanyOpen((prev) => !prev);
                }
              }}
            >
              <Link
                to="/company"
                className={`nav-trigger-label ${isCompanyActive ? 'on' : ''}`}
                onClick={(e) => {
                  if (window.innerWidth <= 900) {
                    e.preventDefault();
                  } else {
                    closeNav();
                  }
                }}
              >
                Company
              </Link>
              <button
                type="button"
                className="dropdown-chevron-btn"
                aria-label="Toggle Company submenu"
                aria-expanded={isCompanyOpen}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsCompanyOpen((prev) => !prev);
                }}
              >
                <svg className="i chevron-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            <div className={`dropdown-menu ${isCompanyOpen ? 'show' : ''}`}>
              <Link
                to="/about"
                className={`dropdown-item ${activePage === 'about' ? 'on' : ''}`}
                onClick={closeNav}
              >
                About Us
              </Link>

              <Link
                to="/team"
                className={`dropdown-item ${activePage === 'team' ? 'on' : ''}`}
                onClick={closeNav}
              >
                Our Team
              </Link>

              <Link
                to="/portfolio"
                className={`dropdown-item ${activePage === 'portfolio' ? 'on' : ''}`}
                onClick={closeNav}
              >
                Portfolio
              </Link>
            </div>
          </div>

          {/* 4. Blog Link */}
          <Link
            to="/blog"
            className={activePage === 'blog' ? 'on' : ''}
            onClick={closeNav}
          >
            Blog
          </Link>

          {/* 5. Contact Link */}
          <Link
            to="/contact"
            className={activePage === 'contact' ? 'on' : ''}
            onClick={closeNav}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link className="btn sm hdr-desktop-btn" to="/contact" onClick={closeNav}>
          Let's Talk{' '}
          <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* 3-line Animated Hamburger Button */}
        <button
          className={`burger ${isNavOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
          type="button"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </header>

      {/* Spacer to prevent layout shift and overlapping under sticky navbar */}
      <div className="hdr-spacer" aria-hidden="true" />

      {/* Dimmed Backdrop when Mobile Nav is open */}
      <div
        className={`nav-backdrop ${isNavOpen ? 'open' : ''}`}
        onClick={closeNav}
        aria-hidden="true"
      />
    </>
  );
}
