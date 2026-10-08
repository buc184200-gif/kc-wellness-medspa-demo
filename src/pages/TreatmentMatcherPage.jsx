import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { concerns, treatments, siteConfig } from '../data/siteConfig';
import BookingCTA from '../components/BookingCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TreatmentMatcherPage() {
  const [selectedConcern, setSelectedConcern] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Treatment Matcher | KC Wellness';
  }, []);

  const goals = [
    {
      id: 'subtle-natural',
      title: 'Subtle, Undetectable Enhancement',
      desc: 'Soft, natural results that honor your original facial architecture without looking overdone.',
    },
    {
      id: 'collagen-rebuilding',
      title: 'Progressive Collagen & Skin Remodeling',
      desc: 'Deeper structural rejuvenation that improves elasticity, pore size, and tissue quality over months.',
    },
    {
      id: 'metabolic-vitality',
      title: 'Whole-Body Vitality & Metabolic Health',
      desc: 'Targeted biological support for sustainable weight loss, energy replenishment, and hormonal balance.',
    },
    {
      id: 'cellular-glow',
      title: 'Rapid Hydration & Cellular Glow',
      desc: 'Fast-acting micronutrient replenishment to revitalize skin radiance and combat physical fatigue.',
    },
  ];

  // Matched treatments resolution
  const matchedTreatments = selectedConcern
    ? treatments.filter((t) => selectedConcern.relatedTreatments.includes(t.id))
    : [];

  const handleReset = () => {
    setSelectedConcern(null);
    setSelectedGoal(null);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Interactive Decision Support • Southwick, MA
          </span>
          <h1>Clinical Treatment Matcher</h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              marginTop: '0.75rem',
              maxWidth: '660px',
              lineHeight: '1.75',
            }}
          >
            Answer two quick questions to discover evidence-based treatment pathways aligned with your
            aesthetic or wellness goals. Educational guidance curated by Nurse Practitioner Ericka Blyther.
          </p>
        </div>
      </section>

      <section className="section" ref={sectionRef}>
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Clinical Transparency Notice */}
          <div className="matcher-notice animate-in">
            <span className="matcher-notice-icon">✦</span>
            <div>
              <strong>Educational Tool &amp; Consultation Starting Point:</strong> This matcher is designed
              to guide your research and is not a medical diagnosis. Your clinical plan is customized during
              your private in-person evaluation in Southwick, MA.
            </div>
          </div>

          {/* STEP 1: Primary Concern */}
          <div className="matcher-step-card animate-in">
            <div className="matcher-step-header">
              <span className="matcher-step-number">Step 1</span>
              <h2>What is your primary area of focus?</h2>
              <p>Select the concern you would most like to address first.</p>
            </div>

            <div className="matcher-concerns-grid">
              {concerns.map((concern) => {
                const isSelected = selectedConcern?.id === concern.id;
                return (
                  <button
                    key={concern.id}
                    className={`matcher-concern-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedConcern(concern)}
                    id={`matcher-concern-${concern.id}`}
                  >
                    <div className="matcher-concern-icon">{concern.icon}</div>
                    <div className="matcher-concern-info">
                      <h4>{concern.label}</h4>
                      <p>{concern.shortDesc}</p>
                    </div>
                    <span className="matcher-check">{isSelected ? '✓' : '→'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Goal / Preference (Shown after Step 1) */}
          {selectedConcern && (
            <div className="matcher-step-card animate-in" style={{ marginTop: 'var(--space-2xl)' }}>
              <div className="matcher-step-header">
                <span className="matcher-step-number">Step 2</span>
                <h2>What is your preferred aesthetic or wellness approach?</h2>
                <p>Select what matters most to your journey.</p>
              </div>

              <div className="matcher-goals-grid">
                {goals.map((g) => {
                  const isSelected = selectedGoal?.id === g.id;
                  return (
                    <button
                      key={g.id}
                      className={`matcher-goal-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedGoal(g)}
                      id={`matcher-goal-${g.id}`}
                    >
                      <div className="matcher-goal-radio">
                        <span className={`matcher-radio-circle ${isSelected ? 'checked' : ''}`} />
                      </div>
                      <div className="matcher-goal-info">
                        <h4>{g.title}</h4>
                        <p>{g.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Results & Recommendation */}
          {selectedConcern && selectedGoal && (
            <div
              className="matcher-results-panel animate-in"
              id="matcher-results"
              style={{ marginTop: 'var(--space-3xl)' }}
            >
              <div className="matcher-results-header">
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                  Personalized Match
                </span>
                <h2>Recommended Protocols for {selectedConcern.label}</h2>
                <p>
                  Based on your interest in <strong>{selectedConcern.label}</strong> and your preference for{' '}
                  <strong>{selectedGoal.title}</strong>, Nurse Practitioner Ericka Blyther commonly recommends
                  the following evidence-based treatment pathways:
                </p>
              </div>

              <hr className="gold-rule" />

              <div className="matcher-treatments-list">
                {matchedTreatments.map((treatment) => (
                  <div key={treatment.id} className="matcher-treatment-card">
                    <div className="matcher-treatment-media">
                      <img src={treatment.image} alt={treatment.name} />
                      <span className="matcher-treatment-category">{treatment.category}</span>
                    </div>

                    <div className="matcher-treatment-details">
                      <h3>{treatment.name}</h3>
                      <p className="matcher-treatment-tagline">{treatment.tagline}</p>
                      <p className="matcher-treatment-desc">{treatment.shortDesc}</p>

                      <div className="matcher-treatment-helps">
                        <strong>Addresses:</strong>
                        <div className="matcher-pill-cluster">
                          {treatment.whatItHelps.slice(0, 3).map((item) => (
                            <span key={item} className="help-pill">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="matcher-treatment-actions">
                        <Link
                          to={`/treatments/${treatment.slug}`}
                          className="btn btn-secondary"
                        >
                          <span>Explore Treatment Details</span>
                          <span className="btn-arrow">→</span>
                        </Link>
                        <Link to="/consultation" className="btn btn-primary">
                          <span>Book Consultation</span>
                          <span className="btn-arrow">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="matcher-reset-bar">
                <button onClick={handleReset} className="matcher-reset-btn">
                  ↺ Start Over with Different Choices
                </button>
                <div className="matcher-contact-note">
                  Questions? Call or text Ericka at{' '}
                  <a href={`tel:${siteConfig.phoneClean}`}>{siteConfig.phone}</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
