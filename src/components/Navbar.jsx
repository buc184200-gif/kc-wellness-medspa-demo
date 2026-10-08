import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ onFindTreatment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label={`${siteConfig.name} Home`}>
            {siteConfig.name}
          </Link>

          <div className="nav-links">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={siteConfig.bookingUrl}
            className={`btn ${scrolled ? 'btn-primary' : 'btn-white'} nav-cta desktop-only`}
            style={{ fontSize: '0.75rem', padding: '0.7rem 1.4rem' }}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-book-cta"
          >
            {siteConfig.bookingCtaShort}
          </a>

          <button
            className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={(e) => {
              handleNavClick(e, link.href);
              setMobileOpen(false);
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={siteConfig.bookingUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.bookingCtaShort}
        </a>
      </div>
    </>
  );
}
