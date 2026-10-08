import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">{siteConfig.name}</div>
            <p>
              {siteConfig.tagline}. Personalized aesthetic treatments and
              whole-person wellness by Kelli Cossey, RN, BSN.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ fontSize: '0.85rem' }}
              >
                Instagram
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ fontSize: '0.85rem' }}
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Treatments</h4>
            <Link to="/treatments/botox-dysport">Botox & Dysport</Link>
            <Link to="/treatments/dermal-fillers">Dermal Fillers</Link>
            <Link to="/treatments/microneedling">Microneedling</Link>
            <Link to="/treatments/laser-treatments">BBL & Moxi Laser</Link>
            <Link to="/treatments/iv-therapy">IV Therapy</Link>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/treatments">All Treatments</Link>
            <Link to="/results">Results</Link>
            <Link to="/providers">Providers</Link>
            <Link to="/about">About</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.88rem' }}>
              {siteConfig.address}
              <br />
              {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
            </span>
            <span style={{ display: 'block', fontSize: '0.82rem', fontStyle: 'italic' }}>
              {siteConfig.locationNote}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="footer-bottom-crestiva">
            Website by{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Crestiva Web Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
