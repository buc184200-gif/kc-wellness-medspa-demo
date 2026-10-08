import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

const faqCategories = [
  {
    category: 'General Questions',
    items: [
      {
        q: 'What is a medical spa, and how does KC Wellness differ from a traditional day spa?',
        a: 'A medical spa combines a relaxing, private atmosphere with clinical-grade, medical director-supervised treatments. At KC Wellness in Southwick, MA, all aesthetic and wellness procedures are directed and administered by board-certified Nurse Practitioner Ericka Blyther, MSN, APRN, ensuring rigorous clinical safety, prescription-grade protocols, and advanced anatomical expertise.',
      },
      {
        q: 'Where is KC Wellness located, and what areas do you serve?',
        a: 'Our clinic is located at 208 College Highway, #G1, Southwick, Massachusetts 01077. We proudly welcome patients from throughout Western Massachusetts (Southwick, Westfield, Agawam, Springfield, Longmeadow) and Northern Connecticut (Granby, Suffield, Simsbury, Enﬁeld).',
      },
      {
        q: 'Are aesthetic and wellness consultations complimentary?',
        a: 'Yes. We believe every patient deserves an unhurried, personalized evaluation before deciding on any treatment. During your complimentary consultation, Ericka reviews your facial anatomy, skin health, or metabolic goals and crafts a customized protocol with transparent pricing.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'You can request a complimentary consultation through our online consultation page, or reach out directly by calling or texting our Southwick clinic at (413) 310-0484. All appointments are scheduled in advance to ensure dedicated, private one-on-one time with Ericka.',
      },
    ],
  },
  {
    category: 'Injectables & Aesthetics',
    items: [
      {
        q: 'How long do Botox and Dysport results typically last?',
        a: 'Neuromodulator treatments typically last 3 to 4 months. Dynamic expression lines begin softening within 3 to 5 days, reaching peak refinement at day 14. With consistent maintenance appointments, the targeted muscles train to remain relaxed, often extending longevity over time.',
      },
      {
        q: 'What is the difference between Botox and Dermal Fillers?',
        a: 'Botox and Dysport temporarily relax the repetitive muscular contractions that create dynamic wrinkles (such as frown lines, forehead creases, and crow’s feet). In contrast, dermal fillers (hyaluronic acid gels) restore lost volume, hydrate tissue, and contour structural features like cheeks, lips, and jawlines.',
      },
      {
        q: 'Will my results look natural, or will my face look frozen?',
        a: 'Ericka Blyther practices a strict "less is more" philosophy. Using precise micro-dosing and respecting each patient’s natural facial balance, treatments enhance your authentic features while preserving full emotional expression. The goal is always to have you look rested and refreshed — never overfilled or frozen.',
      },
      {
        q: 'How long do hyaluronic acid dermal fillers last?',
        a: 'Longevity varies by treatment area and individual metabolic rate. Lip fillers typically last 6 to 9 months, while structural fillers in the cheeks, jawline, and chin often last 12 to 18 months.',
      },
      {
        q: 'What is Sculptra Aesthetic, and how is it different from traditional fillers?',
        a: 'Sculptra is a poly-L-lactic acid (PLLA) collagen biostimulator. Rather than providing immediate gel volume, it stimulates your body’s natural collagen synthesis deep within the dermis. Results develop gradually over 8 to 12 weeks and can last over two years.',
      },
    ],
  },
  {
    category: 'Microneedling & Skin Rejuvenation',
    items: [
      {
        q: 'What makes SkinPen microneedling the gold standard?',
        a: 'SkinPen is the first FDA-cleared microneedling device. It creates controlled microscopic perforations in the epidermis and dermis, activating the body’s natural wound-healing cascade to stimulate fresh collagen and elastin production without thermal heat or chemical peeling.',
      },
      {
        q: 'What skin conditions does SkinPen treat, and what is the downtime?',
        a: 'SkinPen effectively improves acne scarring, enlarged pores, rough texture, fine lines, and sun damage. Downtime is minimal: patients typically experience mild redness similar to a moderate sunburn for 24 to 48 hours, with post-treatment hydration protocols provided.',
      },
      {
        q: 'How many microneedling sessions are recommended?',
        a: 'While many patients notice improved radiance after a single session, a series of 3 to 6 treatments spaced 4 weeks apart is clinically recommended for optimal collagen remodeling and acne scar revision.',
      },
    ],
  },
  {
    category: 'Weight Loss & Hormone Therapy',
    items: [
      {
        q: 'How does the medically supervised weight loss program work?',
        a: 'Our medical weight loss program is led by Nurse Practitioner Ericka Blyther. We combine comprehensive clinical assessments, lifestyle guidance, and evidence-based peptide therapies (such as Semaglutide and Tirzepatide) along with lipotropic metabolism injections (Lipo-MICC). Patients receive close clinical monitoring and dose titration throughout.',
      },
      {
        q: 'What is Bioidentical Hormone Replacement Therapy (BHRT)?',
        a: 'BHRT uses plant-derived hormones that are biochemically identical to the hormones naturally produced by the human body. It is designed to restore physiological balance for women and men experiencing symptoms such as chronic fatigue, brain fog, hot flashes, mood fluctuations, sleep disruption, and decreased vitality.',
      },
      {
        q: 'Do I need lab work before beginning hormone replacement therapy?',
        a: 'Yes. Comprehensive bloodwork is mandatory prior to initiating BHRT. Ericka evaluates your complete hormone panel, metabolic health, and symptom history to formulate a safe, highly personalized dosage protocol.',
      },
    ],
  },
  {
    category: 'IV Hydration & Vitamin Injections',
    items: [
      {
        q: 'What are the benefits of IV Hydration drips over oral vitamins?',
        a: 'Intravenous therapy delivers 100% bioavailability by bypassing the digestive system, delivering fluids, electrolytes, antioxidants, and vitamins directly into the bloodstream for rapid cellular absorption, rehydration, immune support, and energy restoration.',
      },
      {
        q: 'How long does an IV hydration session take?',
        a: 'An IV infusion session takes approximately 45 to 60 minutes in our relaxing, private IV lounge. Patients can unwind, read, or work while receiving their infusion.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Frequently Asked Questions | KC Wellness';
  }, []);

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
            Clinical Guidance & Clarity
          </span>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find honest, medically grounded answers about our treatments, safety standards,
            recovery trajectories, and consultation process at KC Wellness Medical Spa in Southwick, MA.
          </p>
        </div>
      </section>

      <section className="section section-beige">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="faq-wrapper">
            {faqCategories.map((cat, catIdx) => (
              <div key={cat.category} className="faq-category-block">
                <div className="faq-category-header">
                  <h3>{cat.category}</h3>
                  <hr className="gold-rule" style={{ margin: '0.65rem 0 1.5rem', width: '38px' }} />
                </div>

                <div className="faq-accordion-list">
                  {cat.items.map((item, itemIdx) => {
                    const isOpen = !!openItems[`${catIdx}-${itemIdx}`];
                    return (
                      <div
                        key={item.q}
                        className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                      >
                        <button
                          type="button"
                          className="faq-accordion-button"
                          onClick={() => toggleItem(catIdx, itemIdx)}
                          aria-expanded={isOpen}
                        >
                          <span className="faq-question-text">{item.q}</span>
                          <span className="faq-expand-icon">{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="faq-accordion-content">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Still Have Questions CTA */}
          <div className="faq-footer-cta">
            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
              Still Have Questions?
            </span>
            <h2>We’re Here to Guide You</h2>
            <p>
              Schedule an unhurried, complimentary consultation with Nurse Practitioner
              Ericka Blyther to discuss your goals in depth.
            </p>
            <div className="faq-cta-actions">
              <Link to="/consultation" className="btn btn-primary" id="faq-consultation-cta">
                <span>Book a Complimentary Consultation</span>
                <span className="btn-arrow">→</span>
              </Link>
              <a
                href={`tel:+1${siteConfig.phoneClean}`}
                className="btn btn-secondary"
                id="faq-phone-cta"
              >
                <span>Call or Text: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
