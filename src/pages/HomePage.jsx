import { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ConcernExplorer from '../components/ConcernExplorer';
import TreatmentGrid from '../components/TreatmentGrid';
import ResultsGallery from '../components/ResultsGallery';
import ProviderSection from '../components/ProviderSection';
import BookingCTA from '../components/BookingCTA';

export default function HomePage({ onFindTreatment }) {
  useEffect(() => {
    document.title = 'KC Wellness | A Top Medical Spa in Oklahoma City';
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
        subtitle="Expert-administered aesthetic and wellness treatments designed around your unique goals."
      />
      <ResultsGallery />
      <ProviderSection />
      <BookingCTA />
    </>
  );
}
