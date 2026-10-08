import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { concerns, treatments, siteConfig } from '../data/siteConfig';
import BookingCTA from '../components/BookingCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ConcernsPage() {
  const [activeConcern, setActiveConcern] = useState(concerns[0]);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Shop by Concern | KC Wellness';
  }, []);

  const relatedTreatments = activeConcern
    ? treatments.filter((t) => activeConcern.relatedTreatments.includes(t.id))
    : [];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Clinical Guidance • Southwick, MA
          </span>
          <h1>Shop by Aesthetic &amp; Wellness Concern</h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              marginTop: '0.75rem',
              maxWidth: '660px',
              lineHeight: '1.75',
            }}
          >
            Explore evidence-based treatment pathways tailored to your individual anatomy, skin health,
            and metabolic vitality. Directed by Nurse Practitioner Ericka Blyther with an honest,
            conservative approach to natural rejuvenation.
          </p>
        </div>
      </section>

      <section className="section" ref={sectionRef}>
        <div className="container">
          {/* Quick Navigator Bar */}
          <div className="concerns-tab-nav animate-in">
            {concerns.map((c) => (
              <button
                key={c.id}
                className={`concerns-tab-btn ${activeConcern?.id === c.id ? 'active' : ''}`}
                onClick={() => setActiveConcern(c)}
              >
                <span className="concerns-tab-icon">{c.icon}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>

          {/* Active Concern Deep-Dive Card */}
          {activeConcern && (
            <div className="concern-detail-card animate-in">
              <div className="concern-detail-media">
                <img
                  src={activeConcern.image}
                  alt={activeConcern.label}
                  className="concern-detail-img"
                />
                <div className="concern-detail-badge">
                  <span>✦</span> Targeted Clinical Pathway
                </div>
              </div>

              <div className="concern-detail-body">
                <span className="eyebrow">{activeConcern.label}</span>
                <h2>{activeConcern.label}</h2>
                <hr className="gold-rule" />
                <p className="concern-detail-lead">{activeConcern.shortDesc}</p>

                <div className="concern-detail-insight">
                  <h4>Clinical Approach &amp; Philosophy</h4>
                  <p>
                    Rather than applying one-size-fits-all treatments, Ericka Blyther evaluates your
                    facial anatomy, tissue depth, and metabolic markers to recommend the gentlest,
                    most effective protocol. Our goal is always rested, undetectable enhancement.
                  </p>
                </div>

                <div className="concern-detail-treatments-section">
                  <h4>Recommended Treatments for {activeConcern.label}</h4>
                  <div className="concern-detail-treatment-grid">
                    {relatedTreatments.map((t) => (
                      <Link
                        to={`/treatments/${t.slug}`}
                        key={t.id}
                        className="concern-treatment-pill-card"
                      >
                        <div className="concern-pill-img-wrap">
                          <img src={t.image} alt={t.name} />
                        </div>
                        <div className="concern-pill-info">
                          <span className="concern-pill-category">{t.category}</span>
                          <span className="concern-pill-name">{t.name}</span>
                          <span className="concern-pill-tagline">{t.tagline}</span>
                        </div>
                        <span className="concern-pill-arrow">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="concern-detail-actions">
                  <Link to="/consultation" className="btn btn-primary">
                    <span>Book Complimentary Consultation</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                  <Link to="/treatment-matcher" className="btn btn-secondary">
                    <span>Try Treatment Matcher</span>
                    <span className="btn-arrow">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Full Grid of All Concerns for Easy Scanning */}
          <div className="section-header animate-in" style={{ marginTop: 'var(--space-4xl)' }}>
            <span className="eyebrow">Complete Concern Directory</span>
            <h2>All Aesthetic &amp; Vitality Priorities</h2>
            <p>Select any area below to switch focus or view corresponding treatment protocols.</p>
          </div>

          <div className="concerns-visual-grid">
            {concerns.map((concern, i) => {
              const isSelected = activeConcern?.id === concern.id;
              return (
                <button
                  key={concern.id}
                  className={`concern-visual-tile animate-in ${isSelected ? 'active' : ''}`}
                  onClick={() => {
                    setActiveConcern(concern);
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  aria-pressed={isSelected}
                  id={`all-concern-${concern.id}`}
                >
                  <div className="concern-tile-bg">
                    <img
                      src={concern.image}
                      alt={concern.label}
                      className="concern-tile-img"
                      loading="lazy"
                    />
                    <div className="concern-tile-overlay" />
                  </div>

                  <div className="concern-tile-content">
                    <div className="concern-tile-header">
                      <span className="concern-tile-icon">{concern.icon}</span>
                      <span className="concern-tile-select-indicator">
                        {isSelected ? 'Active ✓' : 'Select →'}
                      </span>
                    </div>
                    <h3 className="concern-tile-title">{concern.label}</h3>
                    <p className="concern-tile-desc">{concern.shortDesc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
