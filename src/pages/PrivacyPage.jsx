import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | KC Wellness';
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Legal & Compliance
          </span>
          <h1>Privacy Policy</h1>
          <p className="legal-hero-sub">
            Last Updated: March 2025 • KC Wellness Medical Spa (Southwick, MA)
          </p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction & Scope</h2>
            <p>
              KC Wellness Medical Spa (&ldquo;KC Wellness,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your personal privacy and is committed to protecting the information you share with us.
              This Privacy Policy explains how we collect, use, and safeguard personal information obtained through
              our website (<strong>kcwellnessmedicalspa.com</strong>) and our online consultation inquiry channels.
            </p>
            <p>
              This website serves as an informational platform and consultation request portal for our clinic located
              at 208 College Highway, #G1, Southwick, MA 01077.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>
              We only collect information that you knowingly and voluntarily provide to us when submitting inquiries or
              scheduling consultations:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Your name, email address, and phone number when requesting a complimentary consultation.</li>
              <li><strong>Inquiry Details:</strong> General areas of interest (such as Botox, Dermal Fillers, Microneedling, Weight Loss, or Hormone Replacement Therapy) provided in contact forms.</li>
              <li><strong>Device & Browsing Data:</strong> Anonymized technical data (browser type, device category, pages visited) to ensure responsive formatting and site performance.</li>
            </ul>
            <div className="legal-notice-box">
              <strong>Important Clarification:</strong> We do NOT collect payment card numbers, social security numbers, or protected electronic health records (EHR) through this public marketing website. Formal medical intake and clinical health histories are conducted securely during your in-person clinical consultation.
            </div>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>Information gathered through this website is strictly utilized to:</p>
            <ul>
              <li>Respond directly to your aesthetic inquiries and consultation requests.</li>
              <li>Coordinate appointment availability with Nurse Practitioner Ericka Blyther.</li>
              <li>Send confirmation details and directions to our Southwick clinic.</li>
              <li>Maintain and improve website speed, navigation, and user experience.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. No Sale or Commercial Sharing of Data</h2>
            <p>
              We adhere to a strict standard: <strong>We do not sell, rent, trade, or commercialize your personal information to third-party data brokers or advertisers under any circumstances.</strong>
            </p>
            <p>
              Information is only shared with trusted service providers essential to operational delivery (such as our secure email communication providers and scheduling systems) bound by strict confidentiality requirements.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Medical Disclaimer</h2>
            <p>
              The content presented on this website is for general educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Submitting an inquiry or browsing this site does not establish a formal provider-patient relationship.
            </p>
            <p>
              Every patient requires an individual clinical evaluation by our licensed provider, Ericka Blyther, MSN, APRN, before undergoing any medical aesthetic or wellness procedure.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Cookie Usage & Preferences</h2>
            <p>
              We employ essential cookies necessary for website operation, navigation, and security. We do not engage in invasive tracking. You may adjust or withdraw your preferences at any time by selecting the &ldquo;Cookie Preferences&rdquo; link located in our footer.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or how your consultation inquiries are handled, please reach out to us:
            </p>
            <div className="legal-contact-card">
              <strong>KC Wellness Medical Spa</strong><br />
              Attn: Clinical Director, Ericka Blyther, MSN, APRN<br />
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
