import { Link } from 'react-router-dom';
import { providers, treatments, siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProviderSection({ isPage = false }) {
  const sectionRef = useScrollReveal();
  const provider = providers[0];

  return (
    <section id="provider" className={`section ${isPage ? '' : 'section-white'}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="eyebrow">Medical Director & Founder</span>
          <h2>Expert Clinical Care You Can Trust</h2>
          <p>
            Every treatment at {siteConfig.name} is directed and performed by
            board-certified Nurse Practitioner Ericka Blyther, MSN, APRN.
          </p>
        </div>

        <div
          className="provider-card animate-in"
          id={`provider-${provider.id}`}
        >
          {/* Clinical Accreditation Plaque / Monogram Seal */}
          <div className="provider-photo">
            {provider.photo ? (
              <img src={provider.photo} alt={provider.name} />
            ) : (
              <div className="provider-credential-plaque">
                <img
                  src="/images/hero-sanctuary.jpg"
                  alt="KC Wellness clinical environment in Southwick, MA"
                  className="provider-plaque-bg"
                />
                <div className="provider-plaque-overlay" />
                <div className="provider-plaque-content">
                  <div className="provider-monogram-seal">
                    <span className="seal-monogram">KC</span>
                    <span className="seal-sub">MEDICAL SPA & WELLNESS</span>
                  </div>
                  <div className="provider-plaque-title">
                    {provider.name}
                  </div>
                  <div className="provider-plaque-creds">
                    {provider.credentials}
                  </div>
                  <div className="provider-plaque-role">
                    {provider.role}
                  </div>
                  <div className="provider-plaque-divider" />
                  <div className="provider-plaque-badge">
                    <span>✦</span> Board-Certified Nurse Practitioner
                  </div>
                  <div className="provider-plaque-location">
                    Southwick, Massachusetts
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Provider Biography & Philosophy */}
          <div className="provider-info">
            <span className="eyebrow">{provider.role}</span>
            <h2 className="provider-name">{provider.name}</h2>
            <div className="provider-credentials">
              {provider.credentials} • Master&apos;s-Prepared Nurse Practitioner
            </div>
            {provider.education && (
              <div className="provider-education-tag">
                {provider.education}
              </div>
            )}

            <hr className="gold-rule" />

            <p className="provider-philosophy">
              &ldquo;{provider.philosophy}&rdquo;
            </p>

            <div className="provider-specialties">
              <div className="provider-specialties-title">
                Verified Clinical Specialties
              </div>
              <div className="provider-specialties-list">
                {provider.specialties.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="provider-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              <Link
                to="/consultation"
                className="btn btn-primary"
              >
                <span>{siteConfig.bookingCtaShort}</span>
                <span className="btn-arrow">→</span>
              </Link>
              {!isPage && (
                <Link to="/provider" className="btn btn-secondary">
                  <span>Meet Your Provider</span>
                  <span className="btn-arrow">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
