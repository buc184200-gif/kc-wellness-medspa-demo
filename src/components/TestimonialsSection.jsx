import { useState } from 'react';
import { Link } from 'react-router-dom';
import { verifiedReviews, siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedReviewId, setSelectedReviewId] = useState('jennifer-l');
  const sectionRef = useScrollReveal();

  const categories = ['All', 'Injectables', 'Wellness', 'Skin Rejuvenation'];

  const filteredReviews =
    activeCategory === 'All'
      ? verifiedReviews
      : verifiedReviews.filter((r) => r.serviceCategory === activeCategory);

  const featured =
    filteredReviews.find((r) => r.id === selectedReviewId) || filteredReviews[0];
  const supporting = filteredReviews.filter((r) => r.id !== featured.id);

  return (
    <section className="section section-beige" id="reviews" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-in">
          <span className="eyebrow">Verified Patient Experiences</span>
          <h2>Subtle Results. Genuine Transformation.</h2>
          <p>
            Real feedback from patients treated by Nurse Practitioner Ericka Blyther
            at KC Wellness Medical Spa in Southwick, MA.
          </p>
        </div>

        {/* Filter categories */}
        <div className="treatment-filters animate-in" style={{ marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`treatment-filter ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                const nextInCat =
                  cat === 'All'
                    ? verifiedReviews[0]
                    : verifiedReviews.find((r) => r.serviceCategory === cat);
                if (nextInCat) setSelectedReviewId(nextInCat.id);
              }}
              id={`filter-reviews-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Testimonial Layout */}
        <div className="testimonials-editorial-grid">
          {/* Main Featured Testimonial Card */}
          <div className="testimonial-featured-card animate-in">
            <div className="testimonial-quote-mark">“</div>
            <div className="testimonial-featured-header">
              <div className="testimonial-badge-group">
                <span className="testimonial-category-pill">{featured.treatment}</span>
                <span className="testimonial-verified-badge">
                  ✦ Verified Patient Review
                </span>
              </div>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
            </div>

            <blockquote className="testimonial-featured-quote">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            <div className="testimonial-featured-footer">
              <div className="testimonial-author-avatar">
                {featured.patient.slice(0, 1)}
              </div>
              <div>
                <div className="testimonial-author-name">{featured.patient}</div>
                <div className="testimonial-author-meta">
                  {featured.location} • {featured.treatment} ({featured.date})
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Reviews List / Selector */}
          <div className="testimonial-supporting-col">
            <div className="testimonial-supporting-label animate-in">
              <span>More Experiences</span>
              <span className="testimonial-count">
                {filteredReviews.length} Verified Reviews
              </span>
            </div>

            <div className="testimonial-supporting-list">
              {supporting.slice(0, 3).map((rev, index) => (
                <div
                  key={rev.id}
                  className={`testimonial-supporting-card animate-in animate-in-delay-${index + 1}`}
                  onClick={() => setSelectedReviewId(rev.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedReviewId(rev.id);
                  }}
                  id={`review-select-${rev.id}`}
                >
                  <div className="testimonial-supporting-top">
                    <span className="testimonial-supporting-treatment">
                      {rev.treatment}
                    </span>
                    <span className="testimonial-supporting-stars">★★★★★</span>
                  </div>
                  <p className="testimonial-supporting-snippet">
                    &ldquo;{rev.highlight || rev.quote}&rdquo;
                  </p>
                  <div className="testimonial-supporting-author">
                    <span>{rev.patient}</span>
                    <span className="testimonial-supporting-date">
                      {rev.location} • {rev.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-cta-box animate-in">
              <div className="testimonial-cta-text">
                Ready to begin your personal aesthetic journey?
              </div>
              <Link
                to="/consultation"
                className="btn btn-primary btn-sm"
              >
                {siteConfig.consultationLabel}
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}
          className="animate-in"
        >
          <Link to="/reviews" className="btn btn-secondary">
            <span>Read All Verified Patient Reviews</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
