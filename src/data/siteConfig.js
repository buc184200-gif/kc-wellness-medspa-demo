// ============================================================
// SITE CONFIG — KC WELLNESS MEDICAL SPA (SOUTHWICK, MA)
// Official Provider: Ericka Blyther, MSN, APRN
// Official Website: https://www.kcwellnessmedicalspa.com/
// ============================================================

export const siteConfig = {
  // ---- Brand ----
  name: 'KC Wellness Medical Spa',
  shortName: 'KC Wellness',
  tagline: 'Premier Medical Aesthetics & Whole-Person Vitality in Southwick, MA',
  heroHeadline: 'Personalized Aesthetics.\nWhole-Person Vitality.',
  heroSubheadline:
    'Board-certified Nurse Practitioner care in Southwick, MA. Expert-led neurotoxins, dermal fillers, SkinPen microneedling, bioidentical hormone replacement therapy (BHRT), and medically supervised weight loss — with a "less is more" philosophy that keeps results looking like you, only refreshed.',
  heroCta: 'Book Complimentary Consultation',
  heroCtaSecondary: 'Find My Treatment',

  // ---- Contact / Location (Verified Southwick, MA) ----
  phone: '(413) 310-0484',
  phoneClean: '4133100484',
  email: 'Kcwellnessspa@gmail.com',
  address: '208 College Highway, #G1',
  city: 'Southwick',
  state: 'MA',
  zip: '01077',
  locationNote: 'Serving Western MA & Northern CT (Westfield, Agawam, Springfield, Simsbury, Granby)',
  hoursNote: 'Mon–Fri: 9:00 AM – 6:00 PM | Sat: 9:00 AM – 4:00 PM (By Appointment Only)',
  website: 'https://www.kcwellnessmedicalspa.com',
  instagram: 'https://www.instagram.com/kcwellnessmedspa',
  facebook: 'https://www.facebook.com/kcwellnessmedicalspa',

  // ---- Consultation terminology ----
  consultationLabel: 'Complimentary Consultation',
  bookingCtaText: 'Book Complimentary Consultation',
  bookingCtaShort: 'Book Consultation',

  // ---- Booking Route (Internal Demo Experience) ----
  bookingUrl: '/consultation',

  // ---- Navigation ----
  navLinks: [
    {
      label: 'Treatments',
      href: '/treatments',
      children: [
        { label: 'All Treatments', href: '/treatments' },
        { label: 'Botox / Neurotoxins', href: '/treatments/botox-dysport' },
        { label: 'Dermal Fillers', href: '/treatments/dermal-fillers' },
        { label: 'Microneedling', href: '/treatments/microneedling' },
        { label: 'Weight Loss', href: '/treatments/weight-loss' },
        { label: 'Hormone Replacement Therapy', href: '/treatments/hormone-therapy' },
        { label: 'IV Therapy', href: '/treatments/iv-therapy' },
        { label: 'B12 / Vitamin Injections', href: '/treatments/wellness-shots' },
        { label: 'Medical Aesthetics', href: '/treatments' },
      ],
    },
    { label: 'Concerns', href: '/concerns' },
    { label: 'Results', href: '/results' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Provider', href: '/provider' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
};

// ============================================================
// PROVIDERS — Verified KC Wellness Information
// ============================================================

export const providers = [
  {
    id: 'ericka-blyther',
    name: 'Ericka Blyther',
    credentials: 'MSN, APRN',
    role: 'Founder, Nurse Practitioner & Medical Director',
    philosophy:
      'Ericka believes in a "less is more" approach — delivering natural, undetectable enhancements that honor your unique facial harmony. Combining clinical precision with whole-person wellness, she tailors every protocol to each patient\'s unique biology, goals, and lifestyle.',
    specialties: [
      'Botox & Neurotoxins (Daxxify, Dysport)',
      'Dermal Fillers & Lip Balancing',
      'SkinPen Microneedling',
      'Bioidentical Hormone Replacement Therapy (BHRT)',
      'Medically Supervised Weight Loss (Semaglutide / Tirzepatide / Lipo-MICC)',
      'IV Hydration Therapy & Vitamin Injections',
    ],
    education:
      'Master of Science in Nursing (MSN) • Advanced Practice Registered Nurse (APRN) • Clinical background in pediatric, adolescent, and NICU medicine',
    photo: null,
    verified: true,
  },
];

// ============================================================
// CONCERNS — Reusable Med Spa concern categories
// ============================================================

export const concerns = [
  {
    id: 'fine-lines',
    label: 'Fine Lines & Wrinkles',
    shortDesc: 'Smooth dynamic expression lines and restore a relaxed, youthful look.',
    icon: '✦',
    image: '/images/botox-treatment.jpg',
    relatedTreatments: ['botox-dysport', 'fillers', 'sculptra'],
  },
  {
    id: 'skin-texture',
    label: 'Skin Texture & Acne Scars',
    shortDesc: 'Stimulate deep collagen remodeling to smooth texture, pore size, and scarring.',
    icon: '◈',
    image: '/images/skin-texture.jpg',
    relatedTreatments: ['microneedling', 'laser-treatments'],
  },
  {
    id: 'volume-loss',
    label: 'Volume Loss & Contours',
    shortDesc: 'Restore youthful structural contours to cheeks, lips, temples, and jawline.',
    icon: '◉',
    image: '/images/facial-contour.jpg',
    relatedTreatments: ['fillers', 'sculptra'],
  },
  {
    id: 'pigmentation',
    label: 'Pigmentation & Sun Damage',
    shortDesc: 'Clear stubborn sun damage, dark spots, and redness for an even complexion.',
    icon: '❋',
    image: '/images/laser-skin-treatment.jpg',
    relatedTreatments: ['laser-treatments', 'microneedling'],
  },
  {
    id: 'weight-management',
    label: 'Medical Weight Loss',
    shortDesc: 'Physician-formulated metabolic optimization, GLP-1 therapy, and Lipo-MICC protocols.',
    icon: '✤',
    image: '/images/weight-loss-treatment.jpg',
    relatedTreatments: ['weight-loss', 'iv-therapy'],
  },
  {
    id: 'wellness',
    label: 'Hormones & Cellular Energy',
    shortDesc: 'Restore vitality, mental clarity, and restful sleep with bioidentical HRT and IV drips.',
    icon: '❂',
    image: '/images/wellness.jpg',
    relatedTreatments: ['hormone-therapy', 'iv-therapy', 'wellness-shots'],
  },
];

// ============================================================
// TREATMENTS — Verified KC Wellness Services
// ============================================================

export const treatments = [
  {
    id: 'botox-dysport',
    slug: 'botox-dysport',
    name: 'Botox & Dysport',
    category: 'Injectables',
    tagline: 'Soften expression lines. Preserve your natural movement.',
    shortDesc:
      'FDA-approved neuromodulators precisely placed by Nurse Practitioner Ericka Blyther to relax targeted expression muscles — delivering a naturally rested, refreshed look without frozen expressions.',
    whatItHelps: [
      'Forehead horizontal lines',
      "Crow's feet around eyes",
      'Frown lines (11s between brows)',
      'Subtle brow elevation',
      'Masseter jawline slimming',
    ],
    whoItsFor:
      'Patients seeking to smooth dynamic facial lines while maintaining full natural expression and facial emotion.',
    overview:
      'Botox and Dysport temporarily soften muscle contractions that cause repetitive skin creasing. Ericka Blyther employs advanced micro-dosing techniques ensuring your natural expressions remain untouched while lines soften smoothly over 10–14 days.',
    provider: 'ericka-blyther',
    concernIds: ['fine-lines'],
    featured: true,
    image: '/images/botox-treatment.jpg',
  },
  {
    id: 'fillers',
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    category: 'Injectables',
    tagline: 'Restore volume. Enhance contours. Undetectably.',
    shortDesc:
      'Premium hyaluronic acid fillers tailored to restore lost facial volume, enhance lip definition, and sculpt balanced structural contours with artistic restraint.',
    whatItHelps: [
      'Cheek contour and midface lift',
      'Natural lip hydration and definition',
      'Jawline and chin refinement',
      'Under-eye tear trough smoothing',
      'Nasolabial and marionette lines',
    ],
    whoItsFor:
      'Individuals experiencing age-related volume depletion or looking for subtle, harmonious facial balance.',
    overview:
      'Hyaluronic acid dermal fillers gently re-establish structural support and smooth deep shadows. Administered with a medical artist\'s eye, results appear immediately and settle into an undetectable, natural enhancement lasting 6 to 18 months.',
    provider: 'ericka-blyther',
    concernIds: ['volume-loss', 'fine-lines'],
    featured: true,
    image: '/images/fillers-treatment.jpg',
  },
  {
    id: 'sculptra',
    slug: 'sculptra',
    name: 'Sculptra Aesthetic',
    category: 'Injectables',
    tagline: 'Stimulate your own collagen. Gradual, lasting renewal.',
    shortDesc:
      'A biocompatible poly-L-lactic acid (PLLA) biostimulator that triggers your body\'s natural collagen synthesis to restore deep facial volume and improve skin elasticity over time.',
    whatItHelps: [
      'Deep facial folds and hollows',
      'Mid-face volume depletion',
      'Temple hollowing',
      'Crepey skin laxity',
    ],
    whoItsFor:
      'Clients desiring a discreet, progressive rejuvenation that rebuilds youthful collagen foundation over several months with results lasting up to two years.',
    overview:
      'Unlike conventional fillers that provide instant gel volume, Sculptra works biochemically within the deep dermis to regenerate your own collagen matrix. Improvements unfold naturally over 8–12 weeks.',
    provider: 'ericka-blyther',
    concernIds: ['volume-loss', 'fine-lines'],
    featured: true,
    image: '/images/sculptra-treatment.jpg',
  },
  {
    id: 'microneedling',
    slug: 'microneedling',
    name: 'SkinPen Microneedling',
    category: 'Skin Rejuvenation',
    tagline: 'Stimulate cellular renewal. Reveal refined, luminous skin.',
    shortDesc:
      'The only FDA-cleared microneedling device, creating precise micro-channels that trigger the body\'s natural wound-healing cascade to improve texture, pores, and acne scarring.',
    whatItHelps: [
      'Acne scars and surgical scars',
      'Enlarged pores and rough texture',
      'Fine lines and premature crepiness',
      'Uneven skin tone and dullness',
    ],
    whoItsFor:
      'Safe and clinically proven for all skin types seeking noticeable improvements in skin smoothness, tone, and elasticity with minimal recovery downtime.',
    overview:
      'SkinPen creates microscopic perforations in the epidermis, stimulating the release of natural growth factors and new collagen synthesis without thermal damage or risk of hyperpigmentation.',
    provider: 'ericka-blyther',
    concernIds: ['skin-texture', 'pigmentation'],
    featured: true,
    image: '/images/microneedling-treatment.jpg',
  },
  {
    id: 'laser-treatments',
    slug: 'laser-treatments',
    name: 'Laser & Light Skin Renewal',
    category: 'Skin Rejuvenation',
    tagline: 'Targeted light energy for clarity, tone, and luminous radiance.',
    shortDesc:
      'Advanced medical-grade light and laser treatments designed to clear stubborn sun damage, pigmentation, diffuse redness, and early signs of environmental aging.',
    whatItHelps: [
      'Sunspots, freckles, and age spots',
      'Facial redness and broken capillaries',
      'Uneven skin tone and pigmentation',
      'Overall complexion luminosity',
    ],
    whoItsFor:
      'Patients ready to eliminate accumulated sun exposure and achieve a clearer, brighter canvas.',
    overview:
      'Precision wavelengths target melanin deposits and hemoglobin, breaking down excess pigment while stimulating deeper collagen fibers for radiant skin renewal.',
    provider: 'ericka-blyther',
    concernIds: ['pigmentation', 'skin-texture'],
    featured: false,
    image: '/images/laser-skin-treatment.jpg',
  },
  {
    id: 'weight-loss',
    slug: 'weight-loss',
    name: 'Medically Supervised Weight Loss',
    category: 'Wellness',
    tagline: 'Evidence-based metabolic optimization and body transformation.',
    shortDesc:
      'Comprehensive, nurse practitioner-guided weight loss programs combining GLP-1 peptide therapy (Semaglutide / Tirzepatide), Lipo-MICC metabolism injections, and individualized clinical support.',
    whatItHelps: [
      'Stubborn abdominal and visceral fat',
      'Metabolic resistance and slow metabolism',
      'Appetite regulation and cravings',
      'Sustained physical energy and stamina',
      'Long-term body composition optimization',
    ],
    whoItsFor:
      'Individuals who have hit weight loss plateaus and desire safe, physician-calibrated metabolic intervention with continuous clinical monitoring.',
    overview:
      'Under the guidance of Ericka Blyther, MSN, APRN, our medical weight management protocols address the root biological drivers of weight resistance. We combine FDA-studied peptide therapies with lipotropic injections to optimize liver fat metabolism and preserve lean muscle mass.',
    provider: 'ericka-blyther',
    concernIds: ['weight-management', 'wellness'],
    featured: true,
    image: '/images/weight-loss-treatment.jpg',
  },
  {
    id: 'hormone-therapy',
    slug: 'hormone-therapy',
    name: 'Bioidentical Hormone Replacement (BHRT)',
    category: 'Wellness',
    tagline: 'Restore vitality, mental clarity, and deep biological balance.',
    shortDesc:
      'Personalized bioidentical hormone optimization for women and men suffering from fatigue, brain fog, mood fluctuations, poor sleep, and age-related hormonal decline.',
    whatItHelps: [
      'Chronic fatigue and midday crashes',
      'Brain fog and difficulty concentrating',
      'Sleep disturbances and night sweats',
      'Unexplained weight gain and muscle loss',
      'Low libido and mood changes',
    ],
    whoItsFor:
      'Patients seeking to reclaim their energy, sleep quality, and mental clarity through biologically identical hormone balancing backed by comprehensive lab diagnostics.',
    overview:
      'Hormone levels shift significantly with age and stress. Ericka Blyther evaluates comprehensive blood biomarker panels to formulate precise, customized bioidentical hormone prescriptions that match your body\'s natural molecular structure.',
    provider: 'ericka-blyther',
    concernIds: ['wellness'],
    featured: true,
    image: '/images/hrt-treatment.jpg',
  },
  {
    id: 'iv-therapy',
    slug: 'iv-therapy',
    name: 'IV Hydration & Vitamin Drips',
    category: 'Wellness',
    tagline: 'Direct cellular replenishment. Instant absorption.',
    shortDesc:
      'Medical-grade intravenous infusions delivering essential electrolytes, antioxidants, and vitamins directly to your bloodstream for immediate energy and systemic recovery.',
    whatItHelps: [
      'Dehydration and physical fatigue',
      'Immune defense and sickness recovery',
      'Post-travel or athletic depletion',
      'Cellular detoxification and skin glow',
    ],
    whoItsFor:
      'Anyone seeking fast, 100% bioavailable nutrient replenishment in our serene Southwick clinical hydration lounge.',
    overview:
      'Because intravenous infusions bypass digestion, nutrients reach your cells instantly at therapeutic concentrations. Formulations include the classic Myers\' Cocktail, Be Energized, Immunity, and Glutathione drips.',
    provider: 'ericka-blyther',
    concernIds: ['wellness'],
    featured: true,
    image: '/images/iv-therapy-treatment.jpg',
  },
  {
    id: 'wellness-shots',
    slug: 'wellness-shots',
    name: 'Lipo-MICC & Vitamin Booster Injections',
    category: 'Wellness',
    tagline: 'Rapid intramuscular vitality boosters in minutes.',
    shortDesc:
      'Targeted booster injections of Lipo-MICC (Methionine, Inositol, Choline), Methyl-B12, Vitamin D3, and NAD+ to ignite metabolism and elevate energy.',
    whatItHelps: [
      'Metabolic activation',
      'Liver fat processing support',
      'Instant B12 vitality boost',
      'Immune resilience',
    ],
    whoItsFor:
      'Busy patients looking for a quick, efficient weekly nutrient boost to support active lifestyles and metabolic goals.',
    overview:
      'Administered in just 5 minutes, intramuscular nutrient injections bypass digestive breakdown for rapid, reliable uptake.',
    provider: 'ericka-blyther',
    concernIds: ['wellness', 'weight-management'],
    featured: false,
    image: '/images/wellness.jpg',
  },
];

// ============================================================
// TREATMENT CATEGORIES — for filtering
// ============================================================

export const treatmentCategories = [
  'All',
  'Injectables',
  'Skin Rejuvenation',
  'Wellness',
];

// ============================================================
// VERIFIED REAL TESTIMONIALS (FROM OFFICIAL KC WELLNESS MED SPA)
// Source: https://www.kcwellnessmedicalspa.com/reviews/
// ============================================================

export const verifiedReviews = [
  {
    id: 'sarah-m',
    patient: 'Sarah M.',
    treatment: 'IV Hydration Therapy',
    serviceCategory: 'Wellness',
    date: 'March 2025',
    rating: 5,
    quote:
      'Absolutely love KC Wellness! Ericka is so knowledgeable and makes you feel completely at ease. My Be Energized drip had me feeling amazing within hours. I\'ve already booked my next appointment!',
    highlight: 'Feeling amazing within hours',
    verified: true,
    location: 'Southwick, MA',
  },
  {
    id: 'jennifer-l',
    patient: 'Jennifer L.',
    treatment: 'Botox & Neurotoxins',
    serviceCategory: 'Injectables',
    date: 'February 2025',
    rating: 5,
    quote:
      'I was nervous about getting Botox for the first time, but Ericka walked me through everything and made me feel so comfortable. The results are so natural — exactly what I wanted. I couldn\'t be happier!',
    highlight: 'The results are so natural — exactly what I wanted',
    verified: true,
    location: 'Westfield, MA',
  },
  {
    id: 'tanya-b',
    patient: 'Tanya B.',
    treatment: 'Dermal Fillers',
    serviceCategory: 'Injectables',
    date: 'December 2024',
    rating: 5,
    quote:
      'I came in for lip filler and was blown away by the results. Ericka has such an artistic eye — my lips look full and natural, not overdone at all. The whole experience was premium from start to finish.',
    highlight: 'Full and natural, not overdone at all',
    verified: true,
    location: 'Agawam, MA',
  },
  {
    id: 'michelle-r',
    patient: 'Michelle R.',
    treatment: 'Medical Weight Loss',
    serviceCategory: 'Wellness',
    date: 'February 2025',
    rating: 5,
    quote:
      'I had struggled for so long to lose stubborn weight, but the personalized plan and Lipo MICC protocol at KC Wellness was truly life-changing. 18 lbs down in 10 weeks and feeling healthier than ever.',
    highlight: '18 lbs down in 10 weeks and feeling healthier than ever',
    verified: true,
    location: 'Southwick, MA',
  },
  {
    id: 'amanda-k',
    patient: 'Amanda K.',
    treatment: 'Hormone Replacement Therapy',
    serviceCategory: 'Wellness',
    date: 'January 2025',
    rating: 5,
    quote:
      'I struggled for years with fatigue, severe brain fog, and unexpected weight gain. After starting customized HRT with Ericka, I feel like a completely different person. My energy is back and I finally sleep soundly.',
    highlight: 'I feel like a completely different person',
    verified: true,
    location: 'Simsbury, CT',
  },
  {
    id: 'danielle-t',
    patient: 'Danielle T.',
    treatment: 'SkinPen Microneedling',
    serviceCategory: 'Skin Rejuvenation',
    date: 'January 2025',
    rating: 5,
    quote:
      'After three microneedling sessions, my stubborn acne scars are fading, pores look dramatically smaller, and my skin genuinely glows without makeup.',
    highlight: 'My skin genuinely glows without makeup',
    verified: true,
    location: 'Springfield, MA',
  },
];

// ============================================================
// RESULTS / PROOF — Smart Proof System
// ============================================================

export const results = [
  {
    id: 'botox-result',
    treatmentId: 'botox-dysport',
    treatmentName: 'Botox & Dysport',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Expression lines', 'Forehead creases', "Crow's feet", 'Frown lines (11s)'],
    whatToExpect:
      'Most clients notice initial softening of dynamic expression lines within 3–7 days, with full artistic results settling at 14 days. Results typically maintain smooth relaxation for 3–4 months.',
    clinicalInsight:
      'Conservative micro-dosing by Ericka Blyther preserves full natural expression while preventing crease deepening.',
    category: 'Injectables',
  },
  {
    id: 'filler-result',
    treatmentId: 'fillers',
    treatmentName: 'Dermal Fillers',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Lip volume & border', 'Cheek contour', 'Under-eye hollows', 'Nasolabial folds'],
    whatToExpect:
      'Results are visible immediately, with final tissue integration completed at 2 weeks once micro-swelling subsides. High-quality hyaluronic acid fillers maintain balanced volume for 9–18 months.',
    clinicalInsight:
      'Layered micro-droplet placement restores structural harmony without overfilling or unnatural projection.',
    category: 'Injectables',
  },
  {
    id: 'microneedling-result',
    treatmentId: 'microneedling',
    treatmentName: 'SkinPen Microneedling',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Acne scarring', 'Uneven texture', 'Fine lines', 'Pore size'],
    whatToExpect:
      'Skin exhibits mild erythema (sunburn-like pinkness) for 24–48 hours post-treatment. Visible textural refinement typically emerges within 2–4 weeks, with progressive collagen remodeling continuing for up to 6 months.',
    clinicalInsight:
      'Mechanical micro-injury stimulates natural physiological healing cascades without heat-induced pigmentation risk.',
    category: 'Skin Rejuvenation',
  },
  {
    id: 'laser-result',
    treatmentId: 'laser-treatments',
    treatmentName: 'Laser & Light Skin Renewal',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Sun damage', 'Age spots', 'Uneven tone', 'Facial redness'],
    whatToExpect:
      'Treated areas may appear slightly flushed for 1–2 days. Superficial pigment particles darken temporarily before naturally sloughing away in 5–7 days, revealing visibly brighter skin.',
    clinicalInsight:
      'Dual-depth light energy targets superficial melanin clusters and stimulates deep dermal elasticity simultaneously.',
    category: 'Skin Rejuvenation',
  },
  {
    id: 'weight-result',
    treatmentId: 'weight-loss',
    treatmentName: 'Medically Supervised Weight Loss',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Metabolic resistance', 'Visceral fat', 'Appetite regulation', 'Sustained energy'],
    whatToExpect:
      'Patients begin with an in-depth clinical consultation and weekly GLP-1 or Lipo-MICC protocols. Patients commonly observe reduced cravings within days and steady body composition improvements over 8–16 weeks.',
    clinicalInsight:
      'Lipotropic compounds (Methionine, Inositol, Choline) and Methyl-B12 act as biological catalysts to support liver lipid transport.',
    category: 'Wellness',
  },
  {
    id: 'hrt-result',
    treatmentId: 'hormone-therapy',
    treatmentName: 'Bioidentical Hormone Replacement (BHRT)',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Chronic fatigue', 'Brain fog', 'Night sweats', 'Hormonal weight changes'],
    whatToExpect:
      'Following comprehensive lab testing and personalized BHRT prescription, patients report improved sleep quality and mood within 2–3 weeks, with sustained energy and mental clarity compounding over 2–3 months.',
    clinicalInsight:
      'Precise bioidentical calibration restores cellular receptor sensitivity to youthful physiological levels.',
    category: 'Wellness',
  },
  {
    id: 'iv-result',
    treatmentId: 'iv-therapy',
    treatmentName: 'IV Hydration & Vitamin Therapy',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Cellular dehydration', 'Chronic fatigue', 'Immune depletion', 'Post-stress recovery'],
    whatToExpect:
      'Clients feel immediate hydration and sustained energy within 2–4 hours of treatment. 45-minute lounge appointments provide a peaceful retreat with lasting whole-body vitality.',
    clinicalInsight:
      'Direct intravenous delivery bypasses GI tract degradation for 100% cellular bioavailability of micronutrients.',
    category: 'Wellness',
  },
];

export const resultCategories = [
  'All',
  'Injectables',
  'Skin Rejuvenation',
  'Wellness',
];
