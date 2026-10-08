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
            Select a concern below to explore treatments commonly used to address
            it. Every treatment plan begins with a complimentary consultation.
          </p>
        </div>

        <div className="concerns-grid">
          {concerns.map((concern, i) => (
            <button
              key={concern.id}
              className={`concern-card animate-in animate-in-delay-${Math.min(i + 1, 4)} ${
                activeConcern?.id === concern.id ? 'active' : ''
              }`}
              onClick={() =>
                setActiveConcern(
                  activeConcern?.id === concern.id ? null : concern
                )
              }
              aria-pressed={activeConcern?.id === concern.id}
              id={`concern-${concern.id}`}
            >
              <div className="concern-icon">{concern.icon}</div>
              <div>
                <h4>{concern.label}</h4>
                <p>{concern.shortDesc}</p>
              </div>
            </button>
          ))}
        </div>

        {activeConcern && relatedTreatments.length > 0 && (
          <div className="concern-treatments animate-in">
            <h3>
              Treatments commonly used for{' '}
              <span style={{ color: 'var(--color-gold)' }}>
                {activeConcern.label}
              </span>
            </h3>
            <hr className="gold-rule" />
            <div className="concern-treatment-list">
              {relatedTreatments.map((treatment) => (
                <Link
                  to={`/treatments/${treatment.slug}`}
                  key={treatment.id}
                  className="concern-treatment-item"
                  id={`concern-treatment-${treatment.id}`}
                >
                  <div className="concern-treatment-item-left">
                    <img
                      src={treatment.image || '/images/injectables.jpg'}
                      alt={treatment.name}
                      className="concern-treatment-thumb"
                    />
                    <div className="concern-treatment-info">
                      <span className="concern-treatment-badge">{treatment.category}</span>
                      <h4>{treatment.name}</h4>
                      <p>{treatment.tagline}</p>
                    </div>
                  </div>
                  <span className="btn-text concern-explore-btn">
                    Explore Treatment →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
