import { Link } from 'react-router-dom';
import { providers, treatments, siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProviderSection({ isPage = false }) {
  const sectionRef = useScrollReveal();

  return (
    <section className={`section ${isPage ? '' : 'section-white'}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="eyebrow">Your Provider</span>
          <h2>Expert Care You Can Trust</h2>
          <p>
            Every treatment at {siteConfig.name} is performed by a licensed
            medical professional committed to natural-looking results.
          </p>
        </div>

        {providers.map((provider) => {
          const providerTreatments = treatments.filter(
            (t) => t.provider === provider.id
          );

          return (
            <div
              key={provider.id}
              className="provider-card animate-in"
              id={`provider-${provider.id}`}
            >
              <div className="provider-photo">
                {provider.photo ? (
                  <img src={provider.photo} alt={provider.name} />
                ) : (
                  <div className="provider-credential-plaque">
                    <img
                      src="/images/hero-clinic.jpg"
                      alt="KC Wellness clinical environment"
                      className="provider-plaque-bg"
                    />
                    <div className="provider-plaque-overlay" />
                    <div className="provider-plaque-content">
                      <div className="provider-monogram-seal">
                        <span className="seal-monogram">KC</span>
                        <span className="seal-sub">CLINICAL EXCELLENCE</span>
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
                        <span>✦</span> Verified Medical Injector
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="provider-info">
                <span className="eyebrow">{provider.role}</span>
                <h2 className="provider-name">{provider.name}</h2>
                <div className="provider-credentials">
                  {provider.credentials}
                </div>
                {provider.education && (
                  <div className="provider-role">{provider.education}</div>
                )}

                <hr className="gold-rule" />

                <p className="provider-philosophy">
                  "{provider.philosophy}"
                </p>

                <div className="provider-specialties">
                  <div className="provider-specialties-title">
                    Treatment Specialties
                  </div>
                  <div className="provider-specialties-list">
                    {provider.specialties.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={siteConfig.bookingUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.bookingCtaShort}
                  </a>
                  {!isPage && (
                    <Link to="/providers" className="btn btn-secondary">
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
