import { useState } from 'react';
import { Link } from 'react-router-dom';
import { treatments, treatmentCategories } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TreatmentGrid({ showAll = false, title, subtitle }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useScrollReveal();

  const displayTreatments = showAll
    ? treatments
    : treatments.filter((t) => t.featured);

  const filteredTreatments =
    activeCategory === 'All'
      ? displayTreatments
      : displayTreatments.filter((t) => t.category === activeCategory);

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">
        {title && (
          <div className="section-header animate-in">
            <span className="eyebrow">Our Treatments</span>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}

        <div className="treatment-filters animate-in">
          {treatmentCategories.map((cat) => (
            <button
              key={cat}
              className={`treatment-filter ${
                activeCategory === cat ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(cat)}
              id={`filter-treatment-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="treatments-grid">
          {filteredTreatments.map((treatment, i) => (
            <Link
              to={`/treatments/${treatment.slug}`}
              key={treatment.id}
              className={`treatment-card animate-in animate-in-delay-${Math.min(i + 1, 4)}`}
              id={`treatment-card-${treatment.id}`}
            >
              <div className="treatment-card-image">
                <img
                  src={treatment.image || '/images/injectables.jpg'}
                  alt={treatment.name}
                  loading="lazy"
                  className="treatment-img"
                />
                <span className="treatment-card-category">
                  {treatment.category}
                </span>
                <div className="treatment-card-overlay" />
              </div>
              <div className="treatment-card-body">
                <h3>{treatment.name}</h3>
                <div className="treatment-card-tagline">
                  {treatment.tagline}
                </div>
                <p>{treatment.shortDesc}</p>
                <div className="treatment-card-helps">
                  {treatment.whatItHelps.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                  {treatment.whatItHelps.length > 3 && (
                    <span>+{treatment.whatItHelps.length - 3} more</span>
                  )}
                </div>
                <div className="treatment-card-footer">
                  <span className="treatment-provider-note">Kelli Cossey, RN</span>
                  <span className="btn-text">Explore Treatment →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && filteredTreatments.length < treatments.length && (
          <div
            style={{
              textAlign: 'center',
              marginTop: 'var(--space-2xl)',
            }}
            className="animate-in"
          >
            <Link to="/treatments" className="btn btn-secondary">
              View All Treatments
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
