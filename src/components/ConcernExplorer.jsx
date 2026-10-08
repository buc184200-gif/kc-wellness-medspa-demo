import { useState } from 'react';
import { Link } from 'react-router-dom';
import { concerns, treatments } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ConcernExplorer() {
  const [activeConcern, setActiveConcern] = useState(null);
  const sectionRef = useScrollReveal();

  const relatedTreatments = activeConcern
    ? treatments.filter((t) =>
        activeConcern.relatedTreatments.includes(t.id)
      )
    : [];

  return (
    <section className="section section-beige" id="concerns" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="eyebrow">Shop by Concern</span>
          <h2>What Would You Like to Improve?</h2>
          <p>
            Select your primary aesthetic or wellness priority below to explore
            targeted, clinically proven treatment protocols curated by Ericka Blyther, MSN, APRN.
          </p>
        </div>

        {/* Visual Tiles Grid */}
        <div className="concerns-visual-grid">
          {concerns.map((concern, i) => {
            const isSelected = activeConcern?.id === concern.id;
            return (
              <button
                key={concern.id}
                className={`concern-visual-tile animate-in animate-in-delay-${Math.min(
                  i + 1,
                  4
                )} ${isSelected ? 'active' : ''}`}
                onClick={() =>
                  setActiveConcern(isSelected ? null : concern)
                }
                aria-pressed={isSelected}
                id={`concern-${concern.id}`}
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
                      {isSelected ? 'Selected ✓' : 'Explore →'}
                    </span>
                  </div>
                  <h3 className="concern-tile-title">{concern.label}</h3>
                  <p className="concern-tile-desc">{concern.shortDesc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Concern Treatment Drawer */}
        {activeConcern && relatedTreatments.length > 0 && (
          <div className="concern-drawer animate-in">
            <div className="concern-drawer-header">
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                  Recommended Clinical Protocols
                </span>
                <h3 className="concern-drawer-title">
                  Treatments for{' '}
                  <span style={{ color: 'var(--color-gold)' }}>
                    {activeConcern.label}
                  </span>
                </h3>
              </div>
              <button
                className="concern-drawer-close"
                onClick={() => setActiveConcern(null)}
                aria-label="Close treatment recommendations"
              >
                Close ✕
              </button>
            </div>

            <hr className="gold-rule" />

            <div className="concern-drawer-list">
              {relatedTreatments.map((treatment) => (
                <Link
                  to={`/treatments/${treatment.slug}`}
                  key={treatment.id}
                  className="concern-drawer-item"
                  id={`concern-treatment-${treatment.id}`}
                >
                  <div className="concern-drawer-item-media">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="concern-drawer-item-img"
                      loading="lazy"
                    />
                    <span className="concern-drawer-item-badge">
                      {treatment.category}
                    </span>
                  </div>

                  <div className="concern-drawer-item-body">
                    <h4>{treatment.name}</h4>
                    <p className="concern-drawer-item-tagline">
                      {treatment.tagline}
                    </p>
                    <p className="concern-drawer-item-desc">
                      {treatment.shortDesc}
                    </p>
                    <div className="concern-drawer-helps">
                      {treatment.whatItHelps.slice(0, 3).map((h) => (
                        <span key={h} className="help-pill">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="concern-drawer-action">
                    <span className="btn-text">
                      <span>View Protocol</span>
                      <span className="arrow-shift">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div
          style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}
          className="animate-in"
        >
          <Link to="/concerns" className="btn btn-secondary">
            <span>Explore All Concerns &amp; Clinical Protocols</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
