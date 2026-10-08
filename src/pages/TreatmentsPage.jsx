import { useEffect } from 'react';
import TreatmentGrid from '../components/TreatmentGrid';
import BookingCTA from '../components/BookingCTA';
import { siteConfig } from '../data/siteConfig';

export default function TreatmentsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Clinical Treatments | KC Wellness';
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Clinical Menu • Southwick, MA
          </span>
          <h1>Medical Aesthetic & Vitality Treatments</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '0.75rem', maxWidth: '640px', lineHeight: '1.75' }}>
            Board-certified Nurse Practitioner-administered aesthetic, metabolic, and hormone
            treatments. Every protocol begins with a complimentary consultation with
            Ericka Blyther, MSN, APRN.
          </p>
        </div>
      </section>
      <TreatmentGrid
        showAll
        title="Complete Clinical Menu"
        subtitle="Explore our comprehensive offering of neurotoxins, dermal fillers, biostimulators, SkinPen microneedling, BHRT, and metabolic wellness."
      />
      <BookingCTA />
    </>
  );
}
