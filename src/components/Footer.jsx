import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const handleOpenCookiePreferences = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openCookiePreferences'));
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Brand info */}
          <div className="footer-brand">
            <div className="footer-logo">{siteConfig.shortName}</div>
            <p className="footer-tagline">
              {siteConfig.tagline}. Expert medical aesthetics, bioidentical hormone
              replacement therapy, and physician-guided weight loss led by Ericka Blyther, MSN, APRN.
            </p>
            <div className="footer-socials">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-link"
              >
                Instagram ↗
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-link"
              >
                Facebook ↗
              </a>
            </div>
          </div>

          {/* Treatments list */}
          <div className="footer-col">
            <h4>Clinical Treatments</h4>
            <Link to="/treatments/botox-dysport">Botox & Neurotoxins</Link>
            <Link to="/treatments/dermal-fillers">Dermal Fillers</Link>
            <Link to="/treatments/sculptra">Sculptra Biostimulator</Link>
            <Link to="/treatments/microneedling">SkinPen Microneedling</Link>
            <Link to="/treatments/weight-loss">Medical Weight Loss</Link>
            <Link to="/treatments/hormone-therapy">Hormone Therapy (BHRT)</Link>
            <Link to="/treatments/iv-therapy">IV Hydration Lounge</Link>
          </div>

          {/* Explore navigation */}
          <div className="footer-col">
            <h4>Explore &amp; Proof</h4>
            <Link to="/treatments">All Treatments</Link>
            <Link to="/concerns">Shop by Concern</Link>
            <Link to="/results">Results &amp; Proof</Link>
            <Link to="/reviews">Patient Reviews</Link>
            <Link to="/provider">Meet Your Provider</Link>
            <Link to="/about">About Our Clinic</Link>
            <Link to="/faq">Frequently Asked Questions</Link>
            <Link to="/treatment-matcher">Treatment Matcher</Link>
            <Link to="/consultation">Book Consultation</Link>
          </div>

          {/* Contact Details */}
          <div className="footer-col footer-contact-col">
            <h4>Clinic & Contact</h4>
            <a href={`tel:${siteConfig.phoneClean}`} className="footer-phone">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="footer-email">
              {siteConfig.email}
            </a>
            <address className="footer-address">
              {siteConfig.address}
              <br />
              {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
            </address>
            <div className="footer-hours">
              {siteConfig.hoursNote}
            </div>
            <div className="footer-area-tag">
              {siteConfig.locationNote}
            </div>
          </div>
        </div>

        {/* Footer bottom legal row */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer-sep">•</span>
            <Link to="/terms">Terms of Use</Link>
            <span className="footer-sep">•</span>
            <button
              onClick={handleOpenCookiePreferences}
              className="footer-cookie-btn"
            >
              Cookie Preferences
            </button>
          </div>
          <div className="footer-bottom-tagline">
            Southwick, Massachusetts • Medical Aesthetic & Wellness Practice
          </div>
        </div>
      </div>
    </footer>
  );
}
