import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TrustStrip() {
  const sectionRef = useScrollReveal();

  return (
    <section className="trust-strip" ref={sectionRef}>
      <div className="container">
        <div className="trust-strip-inner animate-in">
          <div className="trust-strip-item">
            <span className="trust-strip-icon">◆</span>
            Licensed Medical Provider
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">◆</span>
            RN, BSN Certified
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">◆</span>
            Natural Results Philosophy
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">◆</span>
            Complimentary Consultations
          </div>
          <div className="trust-strip-item">
            <span className="trust-strip-icon">◆</span>
            Oklahoma City, OK
          </div>
        </div>
      </div>
    </section>
  );
}
