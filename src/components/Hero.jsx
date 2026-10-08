import { siteConfig } from '../data/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onFindTreatment }) {
  const sectionRef = useScrollReveal();

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-bg">
        <img
          src="/images/hero-clinic.jpg"
          alt="KC Wellness modern sanctuary"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.24,
            filter: 'saturate(0.85) brightness(0.8)',
          }}
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-text animate-in">
          <div className="hero-eyebrow">{siteConfig.name}</div>
          <h1 className="hero-title">{siteConfig.heroHeadline}</h1>
          <p className="hero-subtitle">{siteConfig.heroSubheadline}</p>

          <div className="hero-ctas">
            <a
              href={siteConfig.bookingUrl}
              className="btn btn-white"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-book-cta"
            >
              {siteConfig.heroCta}
            </a>
            <button
              className="btn btn-secondary-hero"
              onClick={onFindTreatment}
              id="hero-find-treatment-cta"
            >
              {siteConfig.heroCtaSecondary}
            </button>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <span className="hero-trust-label">Provider</span>
              <span className="hero-trust-value">Kelli Cossey, RN, BSN</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-label">Approach</span>
              <span className="hero-trust-value">Natural Results</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-label">Location</span>
              <span className="hero-trust-value">Oklahoma City</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-in animate-in-delay-2">
          <div className="hero-editorial-card">
            <div className="hero-editorial-image-wrapper">
              <img
                src="/images/facial-contour.jpg"
                alt="Natural aesthetic facial contours"
                className="hero-editorial-img"
              />
              <div className="hero-editorial-badge">
                <span>✦</span> Authentic Beauty
              </div>
            </div>
            <div className="hero-editorial-body">
              <span className="hero-editorial-tag">The KC Philosophy</span>
              <h3 className="hero-editorial-title">"Less Is More. Natural Is Everything."</h3>
              <p className="hero-editorial-desc">
                Precision medical aesthetics paired with whole-person naturopathic principles for balanced, undetectable results.
              </p>
              <div className="hero-editorial-treatments">
                <span className="hero-pill">Botox & Fillers</span>
                <span className="hero-pill">SkinPen</span>
                <span className="hero-pill">BBL Laser</span>
                <span className="hero-pill">Lipotropic Wellness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
