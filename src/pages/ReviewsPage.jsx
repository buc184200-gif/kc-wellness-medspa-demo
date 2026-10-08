import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { verifiedReviews, siteConfig } from '../data/siteConfig';
import BookingCTA from '../components/BookingCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Patient Reviews | KC Wellness';
  }, []);

  const categories = ['All', 'Injectables', 'Wellness', 'Skin Rejuvenation'];

  const filtered =
    activeCategory === 'All'
      ? verifiedReviews
      : verifiedReviews.filter((r) => r.serviceCategory === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Patient Feedback • Southwick, MA
          </span>
          <h1>Verified Patient Reviews &amp; Experiences</h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              marginTop: '0.75rem',
              maxWidth: '660px',
              lineHeight: '1.75',
            }}
          >
            Read authentic feedback from patients who trust board-certified Nurse Practitioner
            Ericka Blyther for natural, understated medical aesthetics, hormone optimization, and
            metabolic vitality in Southwick, Massachusetts.
          </p>
        </div>
      </section>

      <section className="section" ref={sectionRef}>
        <div className="container">
          {/* Trust Banner / Metrics */}
          <div className="reviews-metrics-banner animate-in">
            <div className="reviews-metric-item">
              <span className="reviews-metric-num">5.0 ★</span>
              <span className="reviews-metric-label">Patient Rating Average</span>
            </div>
            <div className="reviews-metric-divider" />
            <div className="reviews-metric-item">
              <span className="reviews-metric-num">100%</span>
              <span className="reviews-metric-label">Nurse Practitioner Administered</span>
            </div>
            <div className="reviews-metric-divider" />
            <div className="reviews-metric-item">
              <span className="reviews-metric-num">Western MA</span>
              <span className="reviews-metric-label">Southwick, Westfield, Agawam &amp; CT</span>
            </div>
            <div className="reviews-metric-divider" />
            <div className="reviews-metric-item">
              <span className="reviews-metric-num">Natural</span>
              <span className="reviews-metric-label">&ldquo;Less is more&rdquo; Aesthetic Philosophy</span>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="treatment-filters animate-in" style={{ marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`treatment-filter ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                id={`reviews-filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="reviews-cards-grid">
            {filtered.map((rev, i) => (
              <div
                key={rev.id}
                className={`review-card-dedicated animate-in animate-in-delay-${Math.min(
                  (i % 3) + 1,
                  3
                )}`}
                id={`review-card-${rev.id}`}
              >
                <div className="review-card-top">
                  <div className="review-card-badge-wrap">
                    <span className="review-treatment-badge">{rev.treatment}</span>
                    <span className="review-verified-tag">✦ Verified Patient</span>
                  </div>
                  <div className="review-card-stars" aria-label="5 stars">
                    ★★★★★
                  </div>
                </div>

                <div className="review-card-highlight">
                  &ldquo;{rev.highlight || rev.quote}&rdquo;
                </div>

                <blockquote className="review-card-quote">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>

                <div className="review-card-footer">
                  <div className="review-author-avatar">{rev.patient.slice(0, 1)}</div>
                  <div className="review-author-meta">
                    <span className="review-author-name">{rev.patient}</span>
                    <span className="review-author-sub">
                      {rev.location} • {rev.treatment} ({rev.date})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Action Box */}
          <div className="reviews-bottom-action animate-in">
            <div className="reviews-bottom-text">
              <h3>Experience the KC Wellness Standard First-Hand</h3>
              <p>
                Every new treatment journey begins with an unhurried, private consultation with
                Ericka Blyther, MSN, APRN at our Southwick clinic.
              </p>
            </div>
            <Link to="/consultation" className="btn btn-primary">
              <span>Book Complimentary Consultation</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
