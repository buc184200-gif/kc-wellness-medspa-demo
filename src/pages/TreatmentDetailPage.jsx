import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { treatments, providers, results, siteConfig } from '../data/siteConfig';
import BookingCTA from '../components/BookingCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const sectionRef = useScrollReveal();

  const treatment = treatments.find((t) => t.slug === slug);
  const provider = treatment
    ? providers.find((p) => p.id === treatment.provider)
    : null;
  const treatmentResult = treatment
    ? results.find((r) => r.treatmentId === treatment.id)
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (treatment) {
      document.title = `${treatment.name} | KC Wellness`;
    }
  }, [slug, treatment]);

  if (!treatment) {
    return (
      <section className="section" style={{ paddingTop: '200px', textAlign: 'center' }}>
        <div className="container">
          <h1>Treatment Not Found</h1>
          <p style={{ margin: '1rem auto' }}>
            We couldn't find the treatment you're looking for.
          </p>
          <Link to="/treatments" className="btn btn-primary">
            View All Treatments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="treatment-detail-hero" ref={sectionRef}>
        <div className="treatment-detail-hero-bg">
          <img
            src={treatment.image || '/images/injectables.jpg'}
            alt={treatment.name}
            className="treatment-detail-hero-img"
          />
          <div className="treatment-detail-hero-overlay" />
        </div>
        <div className="container animate-in" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <Link
              to="/treatments"
              style={{
                color: 'var(--color-gold)',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}
            >
              ← Back to All Treatments
            </Link>
          </div>
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            {treatment.category}
          </span>
          <h1>{treatment.name}</h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              marginTop: '0.75rem',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              maxWidth: '650px',
            }}
          >
            {treatment.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="treatment-detail-content">
            <div className="treatment-detail-main">
              <h2>Treatment Overview</h2>
              <p style={{ maxWidth: 'none', lineHeight: '1.8' }}>
                {treatment.overview}
              </p>

              <h2>Who May Benefit</h2>
              <p style={{ maxWidth: 'none', lineHeight: '1.8' }}>
                {treatment.whoItsFor}
              </p>

              {treatmentResult && (
                <>
                  <h2>What to Expect</h2>
                  <p style={{ maxWidth: 'none', lineHeight: '1.8' }}>
                    {treatmentResult.whatToExpect}
                  </p>
                </>
              )}

              {provider && (
                <>
                  <h2>Your Provider</h2>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: 'var(--color-ivory)',
                      borderRadius: 'var(--radius-md)',
                      borderLeft: '3px solid var(--color-gold)',
                    }}
                  >
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>
                        {provider.name}, {provider.credentials}
                      </h4>
                      <p style={{ fontSize: '0.88rem', margin: 0 }}>
                        {provider.role}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* FAQ Section */}
              <h2>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <details
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--color-ivory)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      color: 'var(--color-navy)',
                    }}
                  >
                    Is a consultation required before treatment?
                  </summary>
                  <p
                    style={{
                      marginTop: '0.75rem',
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      maxWidth: 'none',
                    }}
                  >
                    Yes, we offer a complimentary consultation before any
                    treatment. This allows your provider to understand your goals,
                    assess your needs, and create a personalized treatment plan.
                  </p>
                </details>

                <details
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--color-ivory)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      color: 'var(--color-navy)',
                    }}
                  >
                    How do I know which treatment is right for me?
                  </summary>
                  <p
                    style={{
                      marginTop: '0.75rem',
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      maxWidth: 'none',
                    }}
                  >
                    During your consultation, your provider will discuss your
                    concerns, goals, and medical history to recommend the most
                    appropriate treatment approach for you.
                  </p>
                </details>

                <details
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--color-ivory)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      color: 'var(--color-navy)',
                    }}
                  >
                    What is the cost?
                  </summary>
                  <p
                    style={{
                      marginTop: '0.75rem',
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      maxWidth: 'none',
                    }}
                  >
                    Treatment costs vary based on individual needs and treatment
                    areas. Specific pricing will be discussed during your
                    complimentary consultation.
                  </p>
                </details>
              </div>
            </div>

            {/* Sidebar */}
            <div className="treatment-detail-sidebar">
              <div className="treatment-sidebar-image-wrap">
                <img
                  src={treatment.image || '/images/injectables.jpg'}
                  alt={treatment.name}
                  className="treatment-sidebar-img"
                />
                <span className="treatment-sidebar-badge">{treatment.category}</span>
              </div>
              <div className="treatment-sidebar-card">
                <h4>What It Helps</h4>
                <hr className="gold-rule" />
                <ul className="treatment-helps-list">
                  {treatment.whatItHelps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={siteConfig.bookingUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`treatment-detail-book-${treatment.id}`}
                >
                  {siteConfig.bookingCtaText}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="btn btn-secondary"
                  style={{ marginTop: '0.5rem' }}
                >
                  Call {siteConfig.phone}
                </a>
                <Link
                  to="/results"
                  className="btn btn-secondary"
                  style={{
                    marginTop: '0.5rem',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    borderColor: 'rgba(20, 33, 61, 0.15)',
                  }}
                >
                  View Clinical Proof & Expectations →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
