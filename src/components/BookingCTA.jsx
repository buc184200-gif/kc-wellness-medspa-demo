import { siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BookingCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="booking-section" ref={sectionRef}>
      <div className="booking-section-bg">
        <img
          src="/images/consultation-lounge.jpg"
          alt="KC Wellness consultation suite"
          className="booking-bg-img"
        />
        <div className="booking-bg-overlay" />
      </div>
      <div className="container">
        <div className="booking-content animate-in">
          <span className="eyebrow">Take the First Step</span>
          <h2>Your Consultation Is Complimentary</h2>
          <p>
            Schedule a no-obligation consultation to discuss your goals, explore
            treatment options, and create a personalized plan with{' '}
            {siteConfig.name}.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.bookingUrl}
              className="btn btn-white"
              target="_blank"
              rel="noopener noreferrer"
              id="booking-section-cta"
            >
              {siteConfig.bookingCtaText}
            </a>
          </div>

          <div className="booking-details">
            <div className="booking-detail">
              <strong>Phone</strong>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} style={{ color: 'rgba(255,255,255,0.7)' }}>
                {siteConfig.phone}
              </a>
            </div>
            <div className="booking-detail">
              <strong>Location</strong>
              {siteConfig.address}, {siteConfig.city}, {siteConfig.state}
            </div>
            <div className="booking-detail">
              <strong>Note</strong>
              {siteConfig.locationNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
