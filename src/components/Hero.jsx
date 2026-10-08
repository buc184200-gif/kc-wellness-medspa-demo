import { Link } from 'react-router-dom';
import { siteConfig, providers } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onFindTreatment }) {
  const sectionRef = useScrollReveal();
  const provider = providers[0];

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-bg">
        <img
          src="/images/hero-sanctuary.jpg"
          alt="KC Wellness Medical Spa sanctuary in Southwick, MA"
          className="hero-bg-img"
        />
      </div>
      <div className="hero-overlay" />

      <div className="container hero-container">
        <div className="hero-content-grid">
          {/* Left Column: Editorial Headline & Actions — Always Visible Immediately */}
          <div className="hero-text-block">
            <div className="hero-location-badge">
              <span className="hero-badge-dot">✦</span>
              <span>Southwick, Massachusetts • NP-Led Medical Aesthetics</span>
            </div>

            <h1 className="hero-title">
              Personalized Aesthetics.
              <span className="hero-title-italic"> Whole-Person Vitality.</span>
            </h1>

            <p className="hero-subtitle">
              Board-certified Nurse Practitioner care led by{' '}
              <strong>{provider.name}, {provider.credentials}</strong>. Delivering
              advanced injectables, SkinPen microneedling, bioidentical hormone replacement
              therapy, and medical weight loss with a &ldquo;less is more&rdquo; philosophy
              that keeps you looking like you — only refreshed.
            </p>

            <div className="hero-ctas">
              <Link
                to="/consultation"
                className="btn btn-primary-gold"
                id="hero-book-cta"
              >
                <span>{siteConfig.heroCta}</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link
                to="/treatment-matcher"
                className="btn btn-secondary-hero"
                id="hero-find-treatment-cta"
              >
                <span>{siteConfig.heroCtaSecondary}</span>
                <span className="btn-arrow">↗</span>
              </Link>
            </div>

            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <span className="hero-trust-label">Clinical Director</span>
                <span className="hero-trust-value">Ericka Blyther, MSN, APRN</span>
              </div>
              <div className="hero-trust-divider" />
              <div className="hero-trust-item">
                <span className="hero-trust-label">Philosophy</span>
                <span className="hero-trust-value">Natural & Undetectable</span>
              </div>
              <div className="hero-trust-divider" />
              <div className="hero-trust-item">
                <span className="hero-trust-label">Facility</span>
                <span className="hero-trust-value">208 College Hwy, Southwick</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="hero-visual-block animate-in animate-in-delay-2">
            <div className="hero-editorial-card">
              <div className="hero-editorial-image-frame">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Subtle, authentic medical aesthetics results by KC Wellness"
                  className="hero-editorial-img"
                />
                <div className="hero-editorial-tag-floating">
                  <span className="gold-star">✦</span>
                  <span>The KC Natural Standard</span>
                </div>
              </div>

              <div className="hero-editorial-caption">
                <div className="hero-caption-quote">
                  &ldquo;Less is more. Your results should honor your authentic facial anatomy.&rdquo;
                </div>
                <div className="hero-caption-author">
                  — Ericka Blyther, MSN, APRN • Founder
                </div>
                <div className="hero-pill-cluster">
                  <span className="hero-pill">Botox & Neurotoxins</span>
                  <span className="hero-pill">Dermal Fillers</span>
                  <span className="hero-pill">SkinPen</span>
                  <span className="hero-pill">BHRT</span>
                  <span className="hero-pill">Weight Loss</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
