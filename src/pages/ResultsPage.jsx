import { useEffect } from 'react';
import ResultsGallery from '../components/ResultsGallery';
import BookingCTA from '../components/BookingCTA';

export default function ResultsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Results & Proof | KC Wellness';
  }, []);

  return (
    <>
      <section className="treatment-detail-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Results & Proof
          </span>
          <h1>Understand What to Expect</h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginTop: '1rem',
              maxWidth: '600px',
            }}
          >
            Every treatment journey is unique. Explore what each treatment
            addresses, what the process looks like, and how to take the next
            step.
          </p>
        </div>
      </section>
      <ResultsGallery isPage />
      <BookingCTA />
    </>
  );
}
