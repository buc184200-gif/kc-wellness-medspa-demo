import { useState } from 'react';
import { Link } from 'react-router-dom';
import { results, resultCategories, treatments, siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ResultsGallery({ isPage = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useScrollReveal();

  const filtered =
    activeCategory === 'All'
      ? results
      : results.filter((r) => r.category === activeCategory);

  const getTreatmentSlug = (treatmentId) => {
    const t = treatments.find((item) => item.id === treatmentId);
    return t ? t.slug : treatmentId;
  };

  const displayResults = isPage ? filtered : filtered.slice(0, 3);

  return (
    <section
      className={`section ${isPage ? '' : 'section-beige'}`}
      ref={sectionRef}
      id="results"
    >
      <div className="container">
        {!isPage && (
          <div className="section-header animate-in">
            <span className="eyebrow">Patient Results Standard</span>
            <h2>Clinical Results & What to Expect</h2>
            <p>
              Transparent clinical expectations, realistic healing windows, and provider
              guidance curated by Nurse Practitioner Ericka Blyther — with zero fabricated
              transformations or empty placeholders.
            </p>
          </div>
        )}

        {/* Clinical Transparency Banner */}
        <div
          className="proof-architecture-banner animate-in"
          style={{
            background: 'rgba(20, 33, 61, 0.03)',
            border: '1px solid rgba(198, 161, 91, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.75rem',
            marginBottom: 'var(--space-2xl)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontSize: '1.3rem',
              color: 'var(--color-gold)',
              lineHeight: 1,
              marginTop: '0.2rem',
            }}
          >
            ✦
          </span>
          <div>
            <h4
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-navy)',
                marginBottom: '0.25rem',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
              }}
            >
              KC Wellness Results Standard
            </h4>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: 'var(--color-secondary)',
                margin: 0,
              }}
            >
              Patient photography is displayed only where approved. When treatment photography
              is not yet available, we provide verified patient feedback, treatment expectations,
              and provider guidance instead of empty placeholders.
            </p>
          </div>
        </div>

        <div className="treatment-filters animate-in">
          {resultCategories.map((cat) => (
            <button
              key={cat}
              className={`treatment-filter ${
                activeCategory === cat ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(cat)}
              id={`filter-result-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="results-grid">
          {displayResults.map((result, i) => {
            const slug = getTreatmentSlug(result.treatmentId);

            if (result.hasApprovedPhotos) {
              // STATE A — Approved Clinical Photography Card
              return (
                <div
                  key={result.id}
                  className={`result-card result-card-state-a animate-in animate-in-delay-${Math.min(
                    i + 1,
                    4
                  )}`}
                  id={`result-card-${result.id}`}
                  style={{
                    border: '1px solid rgba(198, 161, 91, 0.4)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div className="result-card-header">
                    <div>
                      <span className="result-card-treatment">
                        {result.treatmentName}
                      </span>
                      {result.isSampleDemo && (
                        <div
                          style={{
                            fontSize: '0.68rem',
                            color: 'var(--color-gold)',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginTop: '0.2rem',
                          }}
                        >
                          State A Architecture • Verified Consent Format
                        </div>
                      )}
                    </div>
                    <span className="result-card-category">
                      {result.category}
                    </span>
                  </div>

                  {/* Side-by-side Clinical Comparison Box */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.75rem',
                      marginBottom: 'var(--space-md)',
                      background: 'var(--color-ivory)',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-beige)',
                    }}
                  >
                    <div
                      style={{
                        background: '#ffffff',
                        border: '1px solid rgba(20, 33, 61, 0.08)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.25rem 0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: 'var(--color-secondary)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        BEFORE (BASELINE)
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--color-charcoal)',
                          fontStyle: 'italic',
                        }}
                      >
                        Dynamic facial movement with resting expression creases
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#ffffff',
                        border: '1px solid var(--color-gold)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.25rem 0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: 'var(--color-gold)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        AFTER ({result.timeline})
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--color-charcoal)',
                          fontStyle: 'italic',
                        }}
                      >
                        Smooth resting forehead with natural animated expression
                      </div>
                    </div>
                  </div>

                  <div className="result-card-section">
                    <div className="result-card-section-title">
                      Verified Timeline & Details
                    </div>
                    <p className="result-card-expect" style={{ fontSize: '0.88rem' }}>
                      {result.whatToExpect}
                    </p>
                  </div>

                  {result.clinicalInsight && (
                    <div
                      className="result-card-section"
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'rgba(198, 161, 91, 0.08)',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '3px solid var(--color-gold)',
                      }}
                    >
                      <div
                        className="result-card-section-title"
                        style={{ marginBottom: '0.25rem' }}
                      >
                        Clinical Insight & Architecture
                      </div>
                      <p
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--color-charcoal)',
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {result.clinicalInsight}
                      </p>
                    </div>
                  )}

                  <div className="result-card-ctas">
                    <Link
                      to={`/treatments/${slug}`}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.72rem', padding: '0.7rem 1.2rem' }}
                    >
                      Explore Treatment
                    </Link>
                    <Link
                      to="/consultation"
                      className="btn btn-primary"
                      style={{ fontSize: '0.72rem', padding: '0.7rem 1.2rem' }}
                    >
                      {siteConfig.bookingCtaShort}
                    </Link>
                  </div>
                </div>
              );
            }

            // STATE B — Clinical Decision Support & Expectation Guide
            return (
              <div
                key={result.id}
                className={`result-card animate-in animate-in-delay-${Math.min(
                  i + 1,
                  4
                )}`}
                id={`result-card-${result.id}`}
              >
                <div className="result-card-header">
                  <div>
                    <span className="result-card-treatment">
                      {result.treatmentName}
                    </span>
                    <div
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--color-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginTop: '0.15rem',
                      }}
                    >
                      Expectation & Decision Guide
                    </div>
                  </div>
                  <span className="result-card-category">{result.category}</span>
                </div>

                <div className="result-card-section">
                  <div className="result-card-section-title">
                    What Clients Typically Want to Address
                  </div>
                  <div className="result-card-tags">
                    {result.whatClientsAddress.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="result-card-section">
                  <div className="result-card-section-title">
                    What to Expect & Timeline
                  </div>
                  <p className="result-card-expect">{result.whatToExpect}</p>
                </div>

                {result.clinicalInsight && (
                  <div
                    className="result-card-section"
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(20, 33, 61, 0.03)',
                      borderRadius: 'var(--radius-sm)',
                      borderLeft: '3px solid var(--color-gold)',
                    }}
                  >
                    <div
                      className="result-card-section-title"
                      style={{ marginBottom: '0.2rem' }}
                    >
                      Provider Approach
                    </div>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--color-charcoal)',
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      &ldquo;{result.clinicalInsight}&rdquo;
                    </p>
                  </div>
                )}

                <div className="result-card-ctas">
                  <Link
                    to={`/treatments/${slug}`}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.72rem', padding: '0.7rem 1.2rem' }}
                  >
                    View Treatment
                  </Link>
                  <Link
                    to="/consultation"
                    className="btn btn-primary"
                    style={{ fontSize: '0.72rem', padding: '0.7rem 1.2rem' }}
                  >
                    {siteConfig.bookingCtaShort}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {!isPage && (
          <div
            style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}
            className="animate-in"
          >
            <Link to="/results" className="btn btn-secondary">
              <span>Explore All Results &amp; What to Expect</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
