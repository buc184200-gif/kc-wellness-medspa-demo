import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    concern: 'Fine Lines / Wrinkles',
    contactMethod: 'Text',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Book a Complimentary Consultation | KC Wellness';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Generate mailto link with encoded form data
  const emailSubject = encodeURIComponent(`Complimentary Consultation Request - ${formData.firstName} ${formData.lastName}`);
  const emailBody = encodeURIComponent(
    `Hello Ericka and the KC Wellness Team,\n\nI would like to request a complimentary consultation.\n\n` +
    `Name: ${formData.firstName} ${formData.lastName}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}\n` +
    `Primary Concern: ${formData.concern}\n` +
    `Preferred Contact: ${formData.contactMethod}\n` +
    (formData.message ? `Notes: ${formData.message}\n` : '') +
    `\nThank you!`
  );
  const mailtoUrl = `mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`;

  // Generate SMS link with summary
  const smsBody = encodeURIComponent(
    `Hi KC Wellness! My name is ${formData.firstName} ${formData.lastName}. I'd like to schedule a complimentary consultation regarding ${formData.concern}. Please text me when convenient!`
  );
  const smsUrl = `sms:+1${siteConfig.phoneClean}?body=${smsBody}`;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Complimentary Consultation • Southwick, MA
          </span>
          <h1>Book a Complimentary Consultation</h1>
          <p>
            Schedule a relaxed, no-obligation clinical evaluation with Nurse Practitioner
            Ericka Blyther in Southwick, MA. Discuss your aesthetic and wellness priorities,
            explore targeted options, and receive a customized treatment plan.
          </p>
        </div>
      </section>

      <section className="section section-beige">
        <div className="container" style={{ maxWidth: '820px' }}>
          {!submitted ? (
            <div className="consultation-form-card">
              <div className="consultation-form-header">
                <span className="eyebrow">Personalized Clinical Assessment</span>
                <h2>Tell Us About Your Goals</h2>
                <p>
                  Every consultation is one-on-one with Ericka Blyther, MSN, APRN. We respect
                  your time, listen carefully to your goals, and never pressure you into treatments.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="consultation-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(413) 000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="concern">Primary Aesthetic or Wellness Concern</label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                  >
                    <option value="Fine Lines / Wrinkles">Fine Lines / Wrinkles (Botox, Dysport)</option>
                    <option value="Volume Loss">Volume Loss & Facial Balancing (Dermal Fillers, Sculptra)</option>
                    <option value="Skin Texture / Acne Scars">Skin Texture & Acne Scars (SkinPen Microneedling)</option>
                    <option value="Pigmentation">Pigmentation & Sun Damage</option>
                    <option value="Weight Management">Medically Supervised Weight Loss (GLP-1)</option>
                    <option value="Energy / Wellness">Energy & Hydration (IV Drips, Vitamin Injections)</option>
                    <option value="Hormone Wellness">Hormone Wellness & Vitality (BHRT)</option>
                    <option value="General Consultation">General Aesthetics Consultation</option>
                    <option value="Other">Other Aesthetic / Wellness Goal</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <div className="contact-method-group">
                    {['Text', 'Phone Call', 'Email'].map((method) => (
                      <label key={method} className="contact-method-option">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleChange}
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Questions or Notes (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to discuss or any questions you have prior to meeting..."
                  />
                </div>

                <div className="form-medical-notice">
                  <span className="notice-icon">✦</span>
                  <p>
                    <strong>Privacy Notice:</strong> Please do not include sensitive medical
                    history or protected health diagnoses in this form. Medical candidacy will be
                    thoroughly reviewed in person during your private consultation.
                  </p>
                </div>

                <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }}>
                  <span>Request Complimentary Consultation</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="consultation-success-card animate-in visible">
              <div className="success-badge">✦ Request Prepared</div>
              <h2>Ready for the Next Step?</h2>
              <p className="success-lead">
                Thank you, <strong>{formData.firstName}</strong>. Your consultation request details have
                been prepared for Nurse Practitioner Ericka Blyther.
              </p>
              <p className="success-sub">
                To guarantee immediate, personal communication without scheduling wait times,
                connect directly with KC Wellness through your preferred method below:
              </p>

              <div className="success-action-grid">
                <a
                  href={smsUrl}
                  className="success-action-btn success-action-sms"
                  id="handoff-sms-btn"
                >
                  <span className="action-btn-icon">💬</span>
                  <div className="action-btn-text">
                    <strong>Continue by Text</strong>
                    <span>Send details directly via SMS to (413) 310-0484</span>
                  </div>
                  <span className="action-btn-arrow">→</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="success-action-btn success-action-email"
                  id="handoff-email-btn"
                >
                  <span className="action-btn-icon">✉</span>
                  <div className="action-btn-text">
                    <strong>Continue by Email</strong>
                    <span>Send pre-filled inquiry to Kcwellnessspa@gmail.com</span>
                  </div>
                  <span className="action-btn-arrow">→</span>
                </a>

                <a
                  href={`tel:+1${siteConfig.phoneClean}`}
                  className="success-action-btn success-action-call"
                  id="handoff-call-btn"
                >
                  <span className="action-btn-icon">📞</span>
                  <div className="action-btn-text">
                    <strong>Call KC Wellness</strong>
                    <span>Speak directly with our clinic at (413) 310-0484</span>
                  </div>
                  <span className="action-btn-arrow">→</span>
                </a>
              </div>

              <div className="success-clinic-info">
                <h4>KC Wellness Medical Spa</h4>
                <address>
                  208 College Highway, #G1<br />
                  Southwick, MA 01077
                </address>
                <div className="success-clinic-meta">
                  <span>Phone: (413) 310-0484</span>
                  <span>•</span>
                  <span>Email: Kcwellnessspa@gmail.com</span>
                </div>
                <div className="success-clinic-hours">
                  {siteConfig.hoursNote}
                </div>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.75rem' }}
                >
                  ← Edit Request Details
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
