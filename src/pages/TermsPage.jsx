import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Use | KC Wellness';
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Legal & Compliance
          </span>
          <h1>Terms of Use</h1>
          <p className="legal-hero-sub">
            Last Updated: March 2025 • KC Wellness Medical Spa (Southwick, MA)
          </p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of KC Wellness Medical Spa (&ldquo;KC Wellness,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;)
              at <strong>kcwellnessmedicalspa.com</strong>, you agree to comply with and be bound by these Terms of Use.
              If you do not agree with any part of these terms, please do not use this site.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Informational Purpose & Medical Disclaimer</h2>
            <p>
              All materials, treatment descriptions, timelines, and general wellness information provided on this website
              are designed solely for educational, informational, and consultation-request purposes.
            </p>
            <div className="legal-notice-box">
              <strong>Medical Disclaimer:</strong> Information on this website does not constitute medical advice or a substitute for direct diagnosis by a licensed healthcare professional. In-person clinical assessment by Ericka Blyther, MSN, APRN, is mandatory prior to receiving any prescription medication, neuromodulator, dermal filler, hormone therapy, or injectable service.
            </div>
          </section>

          <section className="legal-section">
            <h2>3. Consultations & Appointment Requests</h2>
            <p>
              Submitting a consultation request through this site communicates your interest in scheduling an evaluation.
              Appointments are subject to clinical availability and medical candidacy:
            </p>
            <ul>
              <li>All services are provided by appointment only at our Southwick, MA clinical facility.</li>
              <li>Treatment candidacy is determined at the sole professional discretion of our licensed medical director.</li>
              <li>We reserve the right to decline or reschedule treatments if contraindications are identified.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Intellectual Property</h2>
            <p>
              The design, layout, written copy, brand logos, treatment guides, and visual elements on this website are the
              intellectual property of KC Wellness Medical Spa. You may not reproduce, republish,
              distribute, or commercially exploit any content from this site without prior written consent.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Clinical Photography & Representation</h2>
            <p>
              Individual results from aesthetic and medical wellness treatments vary based on facial anatomy, age,
              metabolic rate, and adherence to post-care protocols. In adherence with medical ethics, patient photography
              is only displayed with documented, verified written consent.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              KC Wellness Medical Spa and its officers, providers, and affiliates shall not be liable for any indirect,
              incidental, or consequential damages resulting from the use or inability to use this website.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Information</h2>
            <p>
              For inquiries regarding these Terms of Use, please contact:
            </p>
            <div className="legal-contact-card">
              <strong>KC Wellness Medical Spa</strong><br />
              208 College Highway, #G1, Southwick, MA 01077<br />
              Phone: (413) 310-0484<br />
              Email: Kcwellnessspa@gmail.com
            </div>
          </section>

          <div className="legal-back-nav">
            <Link to="/" className="btn btn-secondary">
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
