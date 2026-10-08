import { useEffect } from 'react';
import ResultsGallery from '../components/ResultsGallery';
import BookingCTA from '../components/BookingCTA';
import { siteConfig } from '../data/siteConfig';

export default function ResultsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Results & What to Expect | KC Wellness';
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Patient Results Standard
          </span>
          <h1>Clinical Results & What to Expect</h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              marginTop: '0.75rem',
              maxWidth: '640px',
              lineHeight: '1.75',
            }}
          >
            Transparent clinical timelines, honest recovery expectations, and treatment
            guidance directed by Nurse Practitioner Ericka Blyther in Southwick, MA.
          </p>
        </div>
      </section>
      <ResultsGallery isPage />
      <BookingCTA />
    </>
  );
}
