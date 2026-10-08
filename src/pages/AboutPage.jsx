import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import BookingCTA from '../components/BookingCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const sectionRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About | KC Wellness';
  }, []);

  return (
    <>
      <section className="about-hero" ref={sectionRef}>
        <div className="container animate-in">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            About {siteConfig.name}
          </span>
          <h1>Where Aesthetics Meet Whole-Person Wellness</h1>
          <p>
            {siteConfig.name} is a medical spa in Oklahoma City led by Kelli
            Cossey, RN, BSN — combining advanced aesthetic treatments with a
            holistic, whole-person approach to beauty and wellness.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div>
              <span className="eyebrow">Our Philosophy</span>
              <h2 style={{ marginTop: '0.75rem' }}>
                Less Is More. Natural Is Everything.
              </h2>
              <hr className="gold-rule" />
              <p
                style={{
                  maxWidth: 'none',
                  lineHeight: '1.9',
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                At {siteConfig.name}, we believe the best aesthetic results are
                the ones that look like you — only refreshed. Our "less is more"
                philosophy ensures that every treatment enhances your natural
                beauty without overdoing it.
              </p>
              <p
                style={{
                  maxWidth: 'none',
                  lineHeight: '1.9',
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                Led by Kelli Cossey, RN, BSN, our approach combines advanced
                medical aesthetics with a holistic perspective. Kelli is
                continuing her education in naturopathic medicine, reflecting our
                commitment to treating the whole person — inside and out.
              </p>
              <a
                href={siteConfig.bookingUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.bookingCtaText}
              </a>
            </div>

            <div className="about-story-image-wrap">
              <img
                src="/images/hero-clinic.jpg"
                alt="KC Wellness modern aesthetics studio interior"
                className="about-story-img"
              />
              <div className="about-story-badge">
                <span>✦</span> A Tranquil Medical Aesthetics Sanctuary
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section section-beige">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-3xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="eyebrow">Visit Us</span>
              <h2 style={{ marginTop: '0.75rem' }}>Our Location</h2>
              <hr className="gold-rule" />
              <div style={{ marginBottom: '1.5rem' }}>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-charcoal)',
                    lineHeight: '1.8',
                    maxWidth: 'none',
                  }}
                >
                  <strong>{siteConfig.name}</strong>
                  <br />
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                  <br />
                  <em>{siteConfig.locationNote}</em>
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p
                  style={{
                    fontSize: '0.9rem',
                    maxWidth: 'none',
                  }}
                >
                  <strong style={{ color: 'var(--color-navy)' }}>Phone:</strong>{' '}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                    style={{ color: 'var(--color-navy)' }}
                  >
                    {siteConfig.phone}
                  </a>
                  <br />
                  <strong style={{ color: 'var(--color-navy)' }}>Email:</strong>{' '}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ color: 'var(--color-navy)' }}
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
              <a
                href={siteConfig.bookingUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.bookingCtaShort}
              </a>
            </div>

            <div
              style={{
                width: '100%',
                height: '350px',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.8!2d-97.58!3d35.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM2JzQxLjQiTiA5N8KwMzQnNDguNCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KC Wellness Location"
              />
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
