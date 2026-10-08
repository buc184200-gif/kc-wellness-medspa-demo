import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ onFindTreatment }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuItemsRef = useRef([]);
  const closeTimerRef = useRef(null);
  const ignoreNextClickRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close dropdown on outside click or ESC key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && servicesOpen) {
        setServicesOpen(false);
        if (triggerRef.current) {
          triggerRef.current.focus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  const handleTriggerClick = (e) => {
    e.preventDefault();
    if (ignoreNextClickRef.current) {
      ignoreNextClickRef.current = false;
      return;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen((prev) => !prev);
  };

  const handleTriggerKeyDown = (e, childrenCount) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      ignoreNextClickRef.current = true;
      setTimeout(() => {
        ignoreNextClickRef.current = false;
      }, 250);
      setServicesOpen(true);
      setTimeout(() => {
        menuItemsRef.current[0]?.focus();
      }, 50);
    } else if (e.key === 'Escape' && servicesOpen) {
      e.preventDefault();
      setServicesOpen(false);
    }
  };

  const handleMenuItemKeyDown = (e, index, total) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % total;
      menuItemsRef.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (index === 0) {
        triggerRef.current?.focus();
      } else {
        menuItemsRef.current[index - 1]?.focus();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setServicesOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'Tab') {
      if (e.shiftKey && index === 0) {
        setServicesOpen(false);
      } else if (!e.shiftKey && index === total - 1) {
        setServicesOpen(false);
      }
    }
  };

  const isChildActive = (child) => {
    if (child.href === '/treatments') {
      return location.pathname === '/treatments' && child.label === 'All Treatments';
    }
    return location.pathname === child.href;
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          const offset = 90;
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
      <nav
        className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label={`${siteConfig.name} Home`}>
            <span className="nav-logo-primary">KC WELLNESS</span>
            <span className="nav-logo-sub">MEDICAL SPA • MA</span>
          </Link>

          <div className="nav-links">
            {siteConfig.navLinks.map((link) => {
              if (link.children) {
                const isSectionActive = location.pathname.startsWith('/treatments');
                return (
                  <div
                    key={link.label}
                    className="nav-item-dropdown"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      ref={triggerRef}
                      type="button"
                      id="nav-treatments-trigger"
                      className={`nav-link nav-dropdown-trigger ${servicesOpen ? 'open' : ''} ${isSectionActive ? 'active-section' : ''}`}
                      onClick={handleTriggerClick}
                      onKeyDown={(e) => handleTriggerKeyDown(e, link.children.length)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="nav-treatments-menu"
                    >
                      <span>{link.label}</span>
                      <span className={`dropdown-caret ${servicesOpen ? 'open' : ''}`} aria-hidden="true">▾</span>
                    </button>

                    <div
                      id="nav-treatments-menu"
                      role="menu"
                      aria-labelledby="nav-treatments-trigger"
                      className={`nav-dropdown-menu ${servicesOpen ? 'open' : ''}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="nav-dropdown-header" role="presentation">
                        <span>Clinical Treatments & Programs</span>
                      </div>
                      <div className="nav-dropdown-items" role="presentation">
                        {link.children.map((child, idx) => {
                          const active = isChildActive(child);
                          return (
                            <Link
                              key={child.label}
                              ref={(el) => (menuItemsRef.current[idx] = el)}
                              to={child.href}
                              role="menuitem"
                              tabIndex={servicesOpen ? 0 : -1}
                              aria-current={active ? 'page' : undefined}
                              className={`nav-dropdown-link ${active ? 'active' : ''}`}
                              onKeyDown={(e) => handleMenuItemKeyDown(e, idx, link.children.length)}
                              onClick={() => {
                                setServicesOpen(false);
                                window.scrollTo({ top: 0, behavior: 'instant' });
                              }}
                            >
                              <span className="dropdown-link-bullet" aria-hidden="true">✦</span>
                              <span className="dropdown-link-text">{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions desktop-only">
            <Link
              to="/treatment-matcher"
              className="nav-find-btn"
              id="nav-matcher-btn"
              title="Interactive Clinical Treatment Matcher"
            >
              <span>Treatment Matcher</span>
            </Link>
            <Link
              to="/consultation"
              className={`btn ${scrolled ? 'btn-primary' : 'btn-white'} nav-cta`}
              id="nav-book-cta"
            >
              <span>{siteConfig.bookingCtaShort}</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>

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

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header">
          <span className="nav-logo-primary">KC WELLNESS</span>
          <span className="nav-logo-sub">MEDICAL SPA • SOUTHWICK, MA</span>
        </div>

        <div className="mobile-menu-links">
          {siteConfig.navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.label} className="mobile-nav-accordion">
                  <button
                    type="button"
                    className={`mobile-accordion-trigger ${mobileServicesOpen ? 'open' : ''}`}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-treatments-drawer"
                  >
                    <span>{link.label}</span>
                    <span className="mobile-accordion-icon" aria-hidden="true">
                      {mobileServicesOpen ? '−' : '+'}
                    </span>
                  </button>
                  {mobileServicesOpen && (
                    <div id="mobile-treatments-drawer" className="mobile-accordion-drawer">
                      {link.children.map((child) => {
                        const active = isChildActive(child);
                        return (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={`mobile-accordion-sublink ${active ? 'active' : ''}`}
                            aria-current={active ? 'page' : undefined}
                            onClick={() => {
                              setMobileOpen(false);
                              window.scrollTo({ top: 0, behavior: 'instant' });
                            }}
                          >
                            <span className="mobile-sublink-bullet" aria-hidden="true">✦</span>
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.href}
                className={location.pathname === link.href ? 'active-mobile-link' : ''}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setMobileOpen(false);
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/treatment-matcher"
            onClick={() => setMobileOpen(false)}
            className="mobile-find-treatment-link"
          >
            ✦ Treatment Matcher
          </Link>
        </div>

        <div className="mobile-menu-footer">
          <Link
            to="/consultation"
            className="btn btn-primary btn-block"
            onClick={() => setMobileOpen(false)}
          >
            <span>{siteConfig.bookingCtaShort}</span>
            <span className="btn-arrow">→</span>
          </Link>
          <div className="mobile-menu-contact">
            <div>(413) 310-0484</div>
            <div>Southwick, Massachusetts</div>
          </div>
        </div>
      </div>
    </>
  );
}
