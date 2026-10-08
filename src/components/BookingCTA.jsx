import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BookingCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="booking-section" ref={sectionRef}>
      <div className="booking-section-bg">
        <img
          src="/images/consultation-lounge.jpg"
          alt="KC Wellness consultation sanctuary in Southwick, MA"
          className="booking-bg-img"
        />
        <div className="booking-bg-overlay" />
      </div>
      <div className="container">
        <div className="booking-content animate-in">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Take The First Step
          </span>
          <h2>Your Personal Consultation Is Complimentary</h2>
          <p>
            Schedule a relaxed, no-obligation clinical evaluation with Nurse Practitioner
            Ericka Blyther in Southwick, MA. Discuss your aesthetic and wellness priorities,
            ask questions freely, and receive a customized treatment roadmap designed around your natural features.
          </p>

          <div className="booking-actions">
            <Link
              to="/consultation"
              className="btn btn-white"
              id="booking-section-cta"
            >
              <span>{siteConfig.bookingCtaText}</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>

          <div className="booking-details">
            <div className="booking-detail">
              <strong>Direct Phone</strong>
              <a
                href={`tel:${siteConfig.phoneClean}`}
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="booking-detail">
              <strong>Southwick Clinic</strong>
              <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.state} {siteConfig.zip}</span>
            </div>
            <div className="booking-detail">
              <strong>Region Served</strong>
              <span>Western MA & Northern CT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
