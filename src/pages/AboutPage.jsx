import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, providers } from '../data/siteConfig';
import BookingCTA from '../components/BookingCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const sectionRef = useScrollReveal();
  const provider = providers[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Our Practice | KC Wellness';
  }, []);

  return (
    <>
      <section className="about-hero" ref={sectionRef}>
        <div className="container animate-in">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            About {siteConfig.shortName}
          </span>
          <h1>Where Clinical Precision Meets Whole-Person Vitality</h1>
          <p>
            {siteConfig.name} is a premier medical aesthetics practice located in
            Southwick, Massachusetts. Founded and directed by board-certified Nurse Practitioner
            Ericka Blyther, MSN, APRN, we combine advanced aesthetic treatments with an
            integrative perspective on cellular health and natural rejuvenation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-text">
              <span className="eyebrow">Our Clinical Philosophy</span>
              <h2 style={{ marginTop: '0.75rem' }}>
                Less Is More. Natural Is Everything.
              </h2>
              <hr className="gold-rule" />
              <p className="about-p">
                At {siteConfig.name}, we believe the most sophisticated aesthetic results
                are the ones that look like you — only refreshed, rested, and vibrant.
                We intentionally steer clear of trends, overfilled features, and unnatural stiffness.
              </p>
              <p className="about-p">
                Led by Ericka Blyther, MSN, APRN, our medical philosophy recognizes that true
                radiance is holistic. Drawing from her rigorous clinical nursing background in
                pediatric, adolescent, and NICU critical care, Ericka brings an uncompromising
                dedication to patient safety, anatomical accuracy, and personalized treatment design.
              </p>
              <p className="about-p">
                Whether you visit us for subtle neuromodulator softening, restorative dermal filler
                balancing, SkinPen collagen remodeling, bioidentical hormone replacement therapy (BHRT),
                or physician-formulated metabolic weight loss, your care is fully customized to your
                unique physiology.
              </p>
              <Link
                to="/consultation"
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                <span>{siteConfig.bookingCtaText}</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>

            <div className="about-story-image-wrap">
              <img
                src="/images/consultation-lounge.jpg"
                alt="KC Wellness modern aesthetics sanctuary in Southwick, MA"
                className="about-story-img"
              />
              <div className="about-story-badge">
                <span>✦</span> A Tranquil Medical Aesthetics Sanctuary in Southwick
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section section-beige">
        <div className="container">
          <div className="about-location-grid">
            <div>
              <span className="eyebrow">Visit Our Sanctuary</span>
              <h2 style={{ marginTop: '0.75rem' }}>Southwick Clinic Location</h2>
              <hr className="gold-rule" />
              <div style={{ marginBottom: '1.5rem' }}>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-navy)',
                    lineHeight: '1.8',
                    maxWidth: 'none',
                  }}
                >
                  <strong>{siteConfig.name}</strong>
                  <br />
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                  <br />
                  <em style={{ color: 'var(--color-secondary)', fontSize: '0.92rem' }}>
                    {siteConfig.locationNote}
                  </em>
                </p>
              </div>
              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', maxWidth: 'none', lineHeight: '1.8' }}>
                  <strong style={{ color: 'var(--color-navy)' }}>Direct Line:</strong>{' '}
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    style={{ color: 'var(--color-gold)', fontWeight: 600 }}
                  >
                    {siteConfig.phone}
                  </a>
                  <br />
                  <strong style={{ color: 'var(--color-navy)' }}>Email Inquiries:</strong>{' '}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ color: 'var(--color-navy)' }}
                  >
                    {siteConfig.email}
                  </a>
                  <br />
                  <strong style={{ color: 'var(--color-navy)' }}>Hours of Care:</strong>{' '}
                  {siteConfig.hoursNote}
                </p>
              </div>
              <Link
                to="/consultation"
                className="btn btn-primary"
              >
                <span>{siteConfig.bookingCtaShort}</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>

            <div className="about-location-card">
              <div className="location-card-header">
                <span className="gold-star">✦</span>
                <strong>Southwick Medical Campus</strong>
              </div>
              <div className="location-card-body">
                <p>
                  Conveniently situated on College Highway in Southwick, MA, our clinic
                  offers discrete private parking and an intimate, unhurried treatment setting.
                  We proudly welcome clients from across Western Massachusetts (Westfield, Agawam, Springfield)
                  and Northern Connecticut (Simsbury, Granby, Suffield).
                </p>
                <div className="location-feature-list">
                  <div className="location-feature-item">
                    <span>✓</span> Private, quiet clinical suites
                  </div>
                  <div className="location-feature-item">
                    <span>✓</span> Comprehensive initial medical consult
                  </div>
                  <div className="location-feature-item">
                    <span>✓</span> Direct provider continuity with Ericka Blyther
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
