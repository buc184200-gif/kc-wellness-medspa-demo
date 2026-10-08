import { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ConcernExplorer from '../components/ConcernExplorer';
import TreatmentGrid from '../components/TreatmentGrid';
import ResultsGallery from '../components/ResultsGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import ProviderSection from '../components/ProviderSection';
import BookingCTA from '../components/BookingCTA';
import { siteConfig } from '../data/siteConfig';

export default function HomePage({ onFindTreatment }) {
  useEffect(() => {
    document.title = 'KC Wellness | Medical Spa in Southwick, MA';
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero onFindTreatment={onFindTreatment} />
      <TrustStrip />
      <ConcernExplorer />
      <TreatmentGrid
        title="Featured Treatments"
        subtitle="Expert-administered medical aesthetics, hormone balancing, and metabolic therapies designed around your biological goals."
      />
      <ResultsGallery />
      <TestimonialsSection />
      <ProviderSection />
      <BookingCTA />
    </>
  );
}
