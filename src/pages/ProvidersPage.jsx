import { useEffect } from 'react';
import ProviderSection from '../components/ProviderSection';
import BookingCTA from '../components/BookingCTA';
import { siteConfig } from '../data/siteConfig';

export default function ProvidersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Meet Ericka Blyther | KC Wellness';
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Clinical Leadership
          </span>
          <h1>Meet Ericka Blyther, MSN, APRN</h1>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              marginTop: '0.75rem',
              maxWidth: '640px',
              lineHeight: '1.75',
            }}
          >
            Founder, Nurse Practitioner & Medical Director of KC Wellness Medical Spa
            in Southwick, MA. Uncompromising standards of clinical excellence paired with a
            natural, &ldquo;less is more&rdquo; aesthetic philosophy.
          </p>
        </div>
      </section>
      <ProviderSection isPage />
      <BookingCTA />
    </>
  );
}
