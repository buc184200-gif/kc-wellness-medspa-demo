import { useEffect } from 'react';
import TreatmentGrid from '../components/TreatmentGrid';
import BookingCTA from '../components/BookingCTA';

export default function TreatmentsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Treatments | KC Wellness';
  }, []);

  return (
    <>
      <section className="treatment-detail-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Our Treatments
          </span>
          <h1>Aesthetic & Wellness Treatments</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', maxWidth: '600px' }}>
            Every treatment at KC Wellness is tailored to your unique goals.
            Explore our full range of services below, then schedule a
            complimentary consultation.
          </p>
        </div>
      </section>
      <TreatmentGrid
        showAll
        title="All Treatments"
        subtitle="Filter by category to find the treatment that matches your goals."
      />
      <BookingCTA />
    </>
  );
}
