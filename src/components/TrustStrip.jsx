import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TrustStrip() {
  const sectionRef = useScrollReveal();

  return (
    <section className="trust-strip" ref={sectionRef}>
      <div className="container">
        <div className="trust-strip-inner animate-in">
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✦</span>
            <span>Nurse Practitioner Led</span>
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✦</span>
            <span>Ericka Blyther, MSN, APRN</span>
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✦</span>
            <span>Natural "Less Is More" Philosophy</span>
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✦</span>
            <span>Complimentary Consultations</span>
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✦</span>
            <span>Southwick, Massachusetts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
