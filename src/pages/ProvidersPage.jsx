import { useEffect } from 'react';
import ProviderSection from '../components/ProviderSection';
import BookingCTA from '../components/BookingCTA';

export default function ProvidersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Providers | KC Wellness';
  }, []);

  return (
    <>
      <section className="treatment-detail-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Your Provider
          </span>
          <h1>Meet the Team Behind Your Results</h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginTop: '1rem',
              maxWidth: '600px',
            }}
          >
            Every treatment at KC Wellness is performed by a licensed, credentialed
            medical professional committed to natural-looking results.
          </p>
        </div>
      </section>
      <ProviderSection isPage />
      <BookingCTA />
    </>
  );
}
